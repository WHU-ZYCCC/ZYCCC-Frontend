import axios from 'axios'
const url = 'http://localhost:8080/signin'
export function signInAPI() {
  return {
    getToday: function() {
      return axios.get(url + '/getToday')
    },
    getAll: function() {
      return axios.get(url + '/getAll')
    },
    getRadius: function() {
      return axios.get(url + '/radius')
    }
  }
}
