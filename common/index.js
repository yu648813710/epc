const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { userLogin } = require('./server');

const cachePath = path.resolve(__dirname, 'cache.json');

const getCache = () => {

    const data = fs.readFileSync(cachePath, 'utf-8');

    return data;
}

const setCache = (val) => {
    
    const success = fs.writeFileSync(cachePath, JSON.stringify(val));

    console.log(success);
}

const loginFn = (data) => {
  userLogin(data).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  });
}

const loginEnter = () => {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: '请输入登录名',
      default: ''
    },{
      type: 'password',
      name: 'password',
      message: '请输入密码',
      default: ''
    }
  ])
  .then((answers) => {
    console.log(answers, '结束')
    setCache(answers)
    loginFn(answers);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    console.log(error, '错误')
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

module.exports = {
    getCache,
    setCache,
    loginEnter,
    loginFn,
}