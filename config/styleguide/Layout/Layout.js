import React, { Component, PropTypes } from 'react';
import TableOfContents from '../TableOfContents';
import ReactComponent from 'react-styleguidist/src/rsg-components/ReactComponent';
import CRenderer from '../ReactComponent/Renderer';
import Markdown from 'react-styleguidist/src/rsg-components/Markdown';
import Playground from 'react-styleguidist/src/rsg-components/Playground';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import s from 'react-styleguidist/src/rsg-components/Layout/Layout.css';

import isEmpty from 'react-styleguidist/node_modules/lodash/isEmpty';

const Layout = (Renderer) => class extends Component {
	static propTypes = {
		config: PropTypes.object.isRequired,
		components: PropTypes.array.isRequired,
		sections: PropTypes.array.isRequired,
		sidebar: PropTypes.bool
	};

	static defaultProps = {
		sidebar: true
	};

	static childContextTypes = {
		config: PropTypes.object.isRequired,
	};

	getChildContext() {
		return {
			config: this.props.config
		};
	}

	constructor(props) {
		super(props);

		this.state = {
			currentComponent: null,
			currentSection: null
		};

		console.log(this.props);
	}

	componentDidMount() {
		if( typeof window !== 'undefined'){
			this.getComponentOrSectionFromHash(window.location.hash.substr(1));
			console.log('babla', window.location.hash);

			window.addEventListener('hashchange', () => this.getComponentOrSectionFromHash(window.location.hash.substr(1)));
		}
	}

	getComponentOrSectionFromHash(hash) {
		if( hash === '/' ) return null;
		else {
			const componentName = hash;

			let section = null;
			let component = null;

			this.props.sections.forEach((s) => {
				if( s.name === componentName) {
					section = s;
					component = null;
				}

				const index = s.components.map((x) => x.name).indexOf(componentName);
				if(index >= 0) {
					section = s;
					component = s.components[index];
				}
			});

			console.log(component, section);

			this.setState({
				currentSection: section,
				currentComponent: component
			})
		}
	}

	defaultComponentOrSection() {
		let firstComponent = null;

		const { components, sections } = this.props;

		if(! isEmpty(sections)) {
			firstComponent = sections[0];

			if(isEmpty(firstComponent.content)){
				firstComponent = firstComponent.components[0];
			}

		}else{
			firstComponent = components[0];
		}

		return firstComponent;
	}

	renderComponent(component) {
		const { config } = this.props;
		const ComponentRenderer = ReactComponent(CRenderer);

		return (
			<ComponentRenderer
				key={component.name}
				highlightTheme={config.highlightTheme}
				component={component} />
		)

	}

	renderContent(section) {
		const { config: { highlightTheme }} = this.props;

		const examples = section.content;

		if (!examples) {
			return null;
		}

		return examples.map((example, index) => {
			switch (example.type) {
				case 'code':
					return (
						<Playground
							code={example.content}
							evalInContext={example.evalInContext}
							highlightTheme={highlightTheme}
							key={index}
							/>
					);
				case 'markdown':
					return (
						<Markdown
							text={example.content}
							key={index}
							/>
					);
				default:
					return null;
			}
		});
	}

	renderComponentOrSection() {
		const {components, sections } = this.props;
		const { currentComponent, currentSection } = this.state;

		if (!isEmpty(components) || !isEmpty(sections)) {
			if(! currentComponent && !currentSection) {
				const first = this.defaultComponentOrSection();

				if(first.props) return this.renderComponent(first);
				return this.renderContent(first);
			}
			if(! currentComponent) return this.renderContent(currentSection);
			return this.renderComponent(currentComponent);
		}

		return (
			<div className={s.empty}>
				No components found.
			</div>
		);
	}

	renderTableOfContents(components, sections) {
		return <TableOfContents
					components={components} sections={sections}
					currentSection={this.state.currentSection}
					currentComponent={this.state.currentComponent} />;
	}

	render() {
		const { config, components, sections, sidebar } = this.props;
		const fallbackComponent = this.defaultComponentOrSection().name;

		return (
			<Renderer
				title={config.title}
				fallback={fallbackComponent}
				component={this.renderComponentOrSection()}
				toc={this.renderTableOfContents(components, sections)}
				sidebar={sidebar}
			/>
		);
	}
};

export default Layout;
