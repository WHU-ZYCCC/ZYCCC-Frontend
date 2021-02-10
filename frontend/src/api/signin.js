import axios from 'axios'
const url = 'http://localhost:8080'
export function signInAPI() {
  return {
    getToday: function() {
      return axios.get(url + '/signin/getToday')
    }
  }
}
