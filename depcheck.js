const depcheck = require('depcheck');
const chalk = require('chalk');

const options = {
    //: false, // [DEPRECATED] check against devDependencies
    //ignoreBinPackage: false, // ignore the packages with bin entry
    ignoreDirs: [ // folder with these names will be ignored

    ],
    ignoreMatches: [ // ignore dependencies that matches these globs
        'babel*',
        'karma*',
        '*loader',
        'sinon*',
        'mocha*',
        'chai',
        // Peer dependencies
        'fbjs',
        'react-addons-test-utils',
        'webpack',
        'phantomjs-prebuilt'
    ],
};

if(process.argv.indexOf('--missing') > -1){

    depcheck(__dirname + '/', options, (unused) => {
        console.log(chalk.bold.underline('\r\nChecking missing dependencies :'));
        delete unused.missing['babel-eslint']; // bug
        if (Object.keys(unused.missing).length === 0) {
            console.log(chalk.green('\r\n\tSuccess !'));
        } else {
            console.log(chalk.red('\r\n\tERROR: Missing dependencies'));
            Object.keys(unused.missing).forEach(dep => {
                const usage = unused.missing[dep].toString().replace(__dirname, '.');
                console.log(chalk.red('\t\t -', dep), chalk.magenta(usage));
            });

            console.log('\r\n\t************************');
            console.log('\t',chalk.bgRed('Try to run'),chalk.dim.cyan('npm install'));
            console.log('\t************************');
            process.exit(1);
        }

    });

}else {

    depcheck(__dirname + '/', options, (unused) => {
        var error = false;
        console.log(chalk.bold.underline('Checking dependencies :'));
        if (unused.dependencies.length === 0) {
            console.log(chalk.green('\r\n\tSuccess !'));
        } else {
            console.log(chalk.red('\r\n\tERROR: Unused dependencies'));
            unused.dependencies.forEach(dep => {
                console.log(chalk.red('\t\t -', dep));
            });
            error = true;
        }

        console.log(chalk.bold.underline('\r\nChecking devDependencies :'));
        if (unused.devDependencies.length === 0) {
            console.log(chalk.green('\r\n\tSuccess !'));
        } else {
            console.log(chalk.red('\r\n\tERROR: Unused devDependencies'));
            unused.devDependencies.forEach(dep => {
                console.log(chalk.red('\t\t -', dep));
            });
            error = true;
        }

        console.log(chalk.bold.underline('\r\nChecking missing dependencies :'));
        delete unused.missing['babel-eslint']; // bug
        if (Object.keys(unused.missing).length === 0) {
            console.log(chalk.green('\r\n\tSuccess !'));
        } else {
            console.log(chalk.red('\r\n\tERROR: Missing dependencies'));
            Object.keys(unused.missing).forEach(dep => {
                const usage = unused.missing[dep].toString().replace(__dirname, '.');
                console.log(chalk.red('\t\t -', dep), chalk.magenta(usage));
            });
            error = true;
        }
        //console.log(unused.missing); // an array containing the dependencies missing in `package.json`
        /*console.log(unused.using); // a lookup indicating each dependency is used by which files
         console.log(unused.invalidFiles); // files that cannot access or parse
         console.log(unused.invalidDirs); // directories that cannot access*/

        if (error) process.exit(1);
    });

}
