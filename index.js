#!/usr/bin/env node
let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')
let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`
const run = async () => {
    let success = await createReactApp()
    if(!success){
      console.log('Something went wrong while trying to create a new React app using create-react-app'.red)
      return false;
    }
    await cdIntoNewApp()
    await installPackages()
    await cdIntoNewApp()
    await clientPackages()
    await updateTemplates()
    await mkdirs()
    await createServerFile()
    await createConfigFile()
    await createRouteFile()
    await createModelFile()
    await createComponentsFile()
    await createCssFile()
    await createPagesFile()
    await createReducerFile()
    await nping()
    console.log(`Thanks for your patience, now your mern app is created :)\n cd ${appName}\n code .\n Happy UltraHacking`.green)
  }

  const createReactApp = () => {
    return new Promise(resolve=>{
      if(appName){
        console.log("Creating mern app for you, this may take some while so please wait for 5 minutes to finish the whole process :) ");
        console.log("\nDont worry even if the loading doesnt display please wait for 5 minutes\n".green);
        shell.exec(`mkdir ${appName} && cd ${appName} && create-react-app client`, () => {
          console.log("Created react app for you".cyan)
          resolve(true)
        })
      }else{
        console.log("\nNo app name was provided.".red)
        console.log("\nProvide an app name in the following format: ")
        console.log("\ncreate-react-redux-router-app ", "app-name\n".cyan)
          resolve(false)
      }
    })
  }

  const cdIntoNewApp = () => {
    return new Promise(resolve=>{
      shell.exec(`cd ${appName}`, ()=>{resolve()})
    })
  }

  const installPackages = () => {
    return new Promise(resolve=>{
      console.log("\nInstalling server pages express mongoose\n".cyan)
      shell.exec(`npm install --save concurrently config express mongoose && cd client && npm install --save redux react-router react-redux redux-thunk react-router-dom reactstrap bootstrap axios`, () => {
        console.log("\nFinished installing packages\n".green)
        resolve()
      })
    })
  }

  const clientPackages = () => {
    return new Promise(resolve=>{
      console.log("\nInstalling client packages\n".cyan)
      shell.exec(`cd ${appName} && cd client && npm install --save redux react-router react-redux redux-thunk react-router-dom reactstrap bootstrap axios`, () => {
        console.log("\nFinished installing packages\n".green)
        resolve()
      })
    })
  }

  const mkdirs=()=>{
    return new Promise(resolve=>{
      console.log("\ncreating server side...\n".cyan)
      shell.exec(`cd ${appName} && mkdir config routes models && cd client && cd src && mkdir components reducers css assets pages layouts`, () => {
        console.log("\nFinished installing packages\n".green)
        resolve()
      })
    })
  }

  let templates=require('./templates/template.js');

  const updateTemplates = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(templates).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          fs.writeFile(`${appDirectory}/client/src/${fileName}`, templates[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }
  let server=require('./server/template.js');

  const createServerFile = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(server).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          fs.writeFile(`${appDirectory}/${fileName}`, server[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }
  let routes=require('./routes/template.js');

  const createRouteFile = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(routes).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          fs.writeFile(`${appDirectory}/routes/${fileName}`, routes[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }

  let models=require('./models/template.js');

  const createModelFile = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(models).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          fs.writeFile(`${appDirectory}/models/${fileName}`, models[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }

  let config=require('./config/template.js');

  const createConfigFile = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(config).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          fs.writeFile(`${appDirectory}/config/${fileName}`, config[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }

  let components=require('./components/template.js');

  const createComponentsFile = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(components).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          fs.writeFile(`${appDirectory}/client/src/components/${fileName}`, components[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }

  let pages=require('./pages/template.js');

  const createPagesFile = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(pages).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          fs.writeFile(`${appDirectory}/client/src/pages/${fileName}`, pages[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }

  let reducers=require('./reducers/template.js');

  const createReducerFile = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(reducers).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          fs.writeFile(`${appDirectory}/client/src/reducers/${fileName}`, reducers[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }

  let css=require('./css/template.js');

  const createCssFile = () => {
    return new Promise(resolve=>{
      let promises = []
      Object.keys(css).forEach((fileName, i)=>{
        promises[i] = new Promise(res=>{
          fs.writeFile(`${appDirectory}/client/src/css/${fileName}`, css[fileName], function(err) {
              if(err) { return console.log(err) }
              res()
          })
        })
      })
      Promise.all(promises).then(()=>{resolve()})
    })
  }

  let pack=require('./pack/template.js');
const { red } = require('./pack/pack.js')


  const nping = () => {
    return new Promise(resolve=>{
      shell.exec(`npm init -y`, () => {
        console.log("\npackage.json created..\n".green)
        resolve()
      })
    })
  }

  run() 
