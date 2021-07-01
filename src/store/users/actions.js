const qs = require('qs')

export const list = (state) => {
  return new Promise((resolve, reject) => {
    window.axios.get('api/users?page=1').then((response) => {
      state.commit('setList', response.data.data || [])
      resolve()
    })
  })
}

export const add = (state, data) => {
  return new Promise((resolve, reject) => {
    window.axios.post('api/users',  qs.stringify(data)).then((response) => {
      console.log('Registro Adicionado', response)
      resolve()
    })
  })
}

export const edit = (state, id) => {
  return new Promise((resolve, reject) => {
    window.axios.get('api/users/' + id ).then((response) => {
      state.commit('setEdit', response.data.data || [])
      resolve()
    })
  })
}

export const put = (state, [ data, id ]) => {
  return new Promise((resolve, reject) => {
    window.axios.post('api/v1/customers/' + id + '.json', qs.stringify(data)).then((response) => {
      console.log('response', response)
      resolve()
    })
  })
}
