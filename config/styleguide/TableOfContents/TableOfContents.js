import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import classnames from 'classnames';

import s from './TableOfContents.css';

class TableOfContents extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: ''
		};
	}

	isSelected(name) {
	    const { currentSection, currentComponent } = this.props;
	    const current = (currentComponent || currentSection).name;

        return current === name;
    }

	renderLevel(components, sections, searchTerm) {
		if (searchTerm !== '') {
			let regExp = new RegExp(searchTerm.split('').join('.*'), 'gi');
			components = components.filter(component => component.name.match(regExp));
		}

		/*return (
			<ul className={s.list}>
				{(components || []).map(({ name }) => (
					<li className={s.item} key={name}>
						<a className={s.link} href={'#' + name}>{name}</a>
					</li>
				))}
				{(sections || []).map(({ name, components: subComponents, sections: subSections }) => (
					<li key={name}>
						<a className={s.section} href={'#' + name}>{name}</a>
						{this.renderLevel(subComponents, subSections, searchTerm)}
					</li>
				))}
			</ul>
		);*/

		if(components && components.length) return (components || []).map(({ name }) => (
            <ListItem key={name} href={'#' + name} className={classnames({[s.selected]: this.isSelected(name)})}>{name}</ListItem>
        ));
        if(sections) return (sections || []).map(({ name, components: subComponents, sections: subSections }) => (
            <ListItem key={name}
                      href={'#' + name}
                      initiallyOpen={true}
                      className={classnames({[s.selected]: this.isSelected(name)})}
                      onNestedListToggle={() => false}
                      nestedItems={this.renderLevel(subComponents, subSections, searchTerm)}>{name}</ListItem>
        ));

        return null;
	}

	render() {
		let { searchTerm } = this.state;
		let { components, sections } = this.props;

		searchTerm = searchTerm.trim();

		/*return (
			<div className={s.root}>
				<input
					className={s.search}
					placeholder="Filter by name"
					onChange={event => this.setState({ searchTerm: event.target.value })}
					value={searchTerm}
				/>
				{this.renderLevel(components, sections, searchTerm)}
			</div>
		);*/
		return (
		    <Drawer className={s.root} open={true}>
                <TextField
                    type="search"
                    floatingLabelText="Filter by name"
                    className={s.search}
                    onChange={event => this.setState({ searchTerm: event.target.value })}
                    value={searchTerm} />
                <List>{this.renderLevel(components, sections, searchTerm)}</List>
            </Drawer>
        )
	}
}

TableOfContents.propTypes = {
	components: PropTypes.array.isRequired,
	sections: PropTypes.array.isRequired,
};

export default TableOfContents;
