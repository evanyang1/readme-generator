const axios = require('axios')

const api = {
  getUser(username) {
    axios.get(`https://api.github.com/users/${username}`)
      .then( ({data}) => {
        console.log(data.login, data.name)
      })
      .catch(e => console.error(e))
  }
};

module.exports = api;
