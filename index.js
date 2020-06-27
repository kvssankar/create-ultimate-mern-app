#!/usr/bin/env node
let shell = require('shelljs')
let colors = require('colors')
const cliProgress = require('cli-progress');
const bar1 = new cliProgress.SingleBar({clearOnComplete:true}, cliProgress.Presets.shades_classic);
let fs = require('fs')
let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`
const run = async () => {
    let success = await createReactApp()
    if(!success){
      console.log('Something went wrong while trying to create a new React app using create-react-app'.red)
      return false;
    }
    await nping()
    await giting()
    await installPackages()
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
    console.log(`Thanks for your patience, now your mern app is created :)\n cd ${appName}\n code .\n Happy UltraHacking`.green);
    shell.exit(200);
  }
  let value = 0;

  bar1.start(300,0);
  const timer =()=>{ setInterval(function(){
      value++;
      bar1.update(value)
  },1500)
}

  const createReactApp = () => {
    return new Promise(resolve=>{
      if(appName==="."){
        console.log("\nCreateing Mern app for you..Hold your horses just for 7 minutes\n".cyan);
        console.log("\nI bet you the wait will definitely be worthwhile...\n".green);
        timer();
        shell.exec(`create-react-app client`, () => {
          bar1.stop();
          value=0;
          console.log("\nCreated react app for you\n".cyan)
          resolve(true)
        })
      }
      else if(appName){
        console.log("\nCreateing Mern app for you..Hold your horses just for 5 minutes\n");
        timer();
        shell.exec(`mkdir ${appName} && cd ${appName} && create-react-app client`, () => {
          bar1.stop();
          value=0;
          console.log("\nCreated react app for you\n".cyan)
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

  

  const installPackages = () => {
    return new Promise(resolve=>{
      console.log("\nInstalling server pages express mongoose\n".cyan)
      if(appName===".")
      shell.exec(`npm install --save concurrently config express mongoose`, () => {
        console.log("\nFinished installing packages\n".green)
        resolve()
      })
      else
      shell.exec(`cd ${appName} && npm install --save concurrently config express mongoose`, () => {
        console.log("\nFinished installing packages\n".green)
        resolve()
      })
    })
  }

  const clientPackages = () => {
    return new Promise(resolve=>{
      console.log("\nInstalling client packages\n".cyan)
      if(appName===".")
      shell.exec(`cd client && npm install --save redux react-redux redux-thunk react-router-dom reactstrap bootstrap axios`, () => {
        console.log("\nFinished installing packages\n".green)
        resolve()
      })
      else
      shell.exec(`cd ${appName} && cd client && npm install --save redux react-redux redux-thunk react-router-dom reactstrap bootstrap axios`, () => {
        console.log("\nFinished installing packages\n".green)
        resolve()
      })
    })
  }

  const mkdirs=()=>{
    return new Promise(resolve=>{
      console.log("\ncreating server side...\n".cyan)
      if(appName===".")
      shell.exec(`mkdir config routes models && cd client && cd src && mkdir components reducers css assets pages layouts`, () => {
        console.log("\nFinished installing packages\n".green)
        resolve()
      })
      else
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
const { resolve } = require('path');

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

  // let pack=require('./pack/template.js');
  // const createPackFile = () => {
  //   return new Promise(resolve=>{
  //     let promises = []
  //     Object.keys(css).forEach((fileName, i)=>{
  //       promises[i] = new Promise(res=>{
  //         fs.writeFile(`${appDirectory}/client/${fileName}`, pack[fileName], function(err) {
  //             if(err) { return console.log(err) }
  //             res()
  //         })
  //       })
  //     })
  //     Promise.all(promises).then(()=>{resolve()})
  //   })
  // }
const giting=()=>{
  return new Promise(resolve=>{
    if(appName===".")
    shell.exec(`git init`, () => {
      console.log("\ngit initialised\n".green)
      resolve()
    })
    else
    shell.exec(`cd ${appName} && git init`, () => {
      console.log("\ngit initialised\n".green)
      resolve()
    })
  })
}
// let gitpack=require('./git/template.js');
// const createGitFile = () => {
//   return new Promise(resolve=>{
//     let promises = []
//     Object.keys(css).forEach((fileName, i)=>{
//       promises[i] = new Promise(res=>{
//         fs.writeFile(`${appDirectory}/${fileName}`, gitpack[fileName], function(err) {
//             if(err) { return console.log(err) }
//             res()
//         })
//       })
//     })
//     Promise.all(promises).then(()=>{resolve()})
//   })
// }

  const nping = () => {
    return new Promise(resolve=>{
      if(appName===".")
      shell.exec(`npm init -y`, () => {
        console.log("\npackage.json created..\n".green)
        resolve()
      })
      else
      shell.exec(`cd ${appName} && npm init -y`, () => {
        console.log("\npackage.json created..\n".green)
        resolve()
      })
    })
  }

  run() 
