var path = require('path');
var glob = require('glob');

module.exports = {
    title: 'Whataboon UI Components Library',
    sections: [
        {name: 'Introduction', content: 'docs/introduction.md'},
        {name: 'UI Components', content: 'docs/ui.md', components: function() {
            return glob.sync(path.resolve(__dirname, 'src/components/**/*.jsx')).filter(function(module) {
                return /\/[A-Z]\w*\.jsx$/.test(module);
            });
        }}
    ],
    showCode: true,
    template: 'config/styleguide/template.html',
    updateWebpackConfig: function(webpackConfig, env) {
        // Your source files folder or array of folders, should not include node_modules
        var dir = path.join(__dirname, 'src');
        var config = path.join(__dirname, 'config/styleguide');

        webpackConfig.resolve.alias['rsg-components/Layout'] = path.join(config, 'Layout');
        webpackConfig.resolve.alias['rsg-components/Wrapper'] = path.join(config, 'Wrapper');

        webpackConfig.module.loaders.push(
            // Babel loader will use your project’s .babelrc
            {
                test: /\.jsx?$/,
                include: [dir, config],
                loader: 'babel'
            },
            // Other loaders that is needed for your components
            {
                test: /\.css$/,
                include: [dir, config],
                loader: 'style!css?modules&importLoaders=1'
            },
            // Image URL config. Generate data URI's for images smaller than 10,000 bytes
            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                include: [dir, config],
                loader: 'url?limit=10000'
            }
        );
        return webpackConfig;
    }
};