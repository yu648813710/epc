const { post } = require('./interceptor');

const userLogin = (data) => post('/auth/login', data)

module.exports = {
  userLogin,
}