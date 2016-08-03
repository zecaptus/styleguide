const fs = require('fs');
const path = require('path');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const templatePath = path.join(__dirname, 'template');
const componentsPath = path.join('src', 'components');


rl.question('Component name : ', function(componentName){
    componentName = componentName.charAt(0).toUpperCase() + componentName.toLowerCase().slice(1);
    rl.close();

    createFolder(componentName).then(() => {

        createFiles(componentName).then(() => {
            console.log('\033[32m', componentName, ' created !');
        });

    }).catch(err => {
        console.log('\033[31m', err, '\x1b[0m');
    });
});



function createFiles(componentName){
    return new Promise((resolve, reject) => {
        fs.readdir(templatePath, (err, files) => {
            if(err) reject(err);
            else{
                Promise
                    .all(files.map(readThenCreateFile.bind(this, componentName)))
                    .then((contents) => resolve({files: files, contents: contents}))
                    .catch(err => reject(err));
            }
        });
    });
}

function readThenCreateFile(componentName, file) {
    const filePath = path.join(templatePath, file);

    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'UTF-8', (err, content) => {
            if(err) reject(err);
            else {
                createFile(file, content, componentName)
                    .then(() => resolve())
                    .catch(err => reject(err));
            }
        });
    });
}

function createFile(file, content, componentName) {
    const filename = file.replace('Component', componentName);
    const newContent = content.replace(/__COMPONENT__/g, componentName);

    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(componentsPath, componentName, filename), newContent, err => (err) ? reject(err) : resolve());
    });
}


function createFolder(name) {
    return new Promise((resolve, reject) => {
        fs.mkdir(path.join(componentsPath, name) , (err, files) => (err) ? reject(err) : resolve());
    });
}