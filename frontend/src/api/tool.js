import axios from 'axios'
const url = 'http://localhost:8080/tool'
export function toolAPI() {
  return {
    getAll: function() {
      return axios.get(url + '/getAll')
    },
    deleteById: function(id) {
      return axios.get(url + '/delete/' + id)
    }
  }
}
