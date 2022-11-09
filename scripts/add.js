const path = require('path');
const fs = require('fs-extra')
const glob = require('glob')
const chalk = require('chalk')
const { spawn } = require('child_process')
const handlebars = require('handlebars')


const varCase = str => str.replace(/-[a-z]/g, m => m[1].toUpperCase())
const lowCase = str => str.replace(/-[A-Z]/g, m => m[1].toLowerCase())

const component = process.argv[2];


const dirName = lowCase(component)
const componentName = varCase(component)

const cwdPath = path.join(process.cwd(), `src/${dirName}`)
spawn('mkdir', ['-p', cwdPath])

const tplFiles = glob.sync(path.join(__dirname, 'template/*.hbs'))

tplFiles.forEach((async filePath => {
    const content = await fs.readFile(filePath, 'utf-8');
    const template = handlebars.compile(content);
    const result = template({
        dirName,
        componentName
    })
    const newPath = filePath.replace('scripts/template',`src/${dirName}`)
        .replace('component',dirName)
        .replace('.hbs','')
    
    await fs.writeFile(newPath,result)

    console.log(chalk.green(`write ${newPath} success`))
}))