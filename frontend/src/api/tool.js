import axios from 'axios'
const toolUrl = 'http://localhost:8080/tool'
export function toolAPI() {
  return {
    getAll: function() {
      return axios.get(toolUrl + '/getAll')
    },
    deleteById: function(id) {
      return axios.get(toolUrl + '/delete/' + id)
    },
    update: function(tool) {
      return axios({
        method: 'post',
        url: toolUrl + '/update',
        data: tool,
        transformRequest: [
          function(data) {
            let ret = ''
            for (const it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            ret = ret.substring(0, ret.lastIndexOf('&'))
            return ret
          }
        ],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    }
  }
}
