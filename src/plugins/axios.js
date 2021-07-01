// import axios from 'axios'

// export default ({ Vue }) => {
//   Vue.prototype.$axios = axios
// }

import axios from 'axios'

export default ({ Vue }) => {
  Vue.prototype.$axios = window.axios = axios.create({
    baseURL: `${process.env.API}`
  })
}
