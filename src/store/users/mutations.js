export const setList = (state, data) => {
  if (data.length > 0 && localStorage['listUsers'] === undefined) {
    localStorage['listUsers'] = JSON.stringify(data)
  }
  state.listUsers = JSON.parse(localStorage.getItem('listUsers'))
}
  
export const setAdduser = (state, data) => {
  let oldList = JSON.parse(localStorage.getItem('listUsers')) || []
  oldList.push(data)
  localStorage.setItem('listUsers', JSON.stringify(oldList))
}
  
export const setUserModalAdd = (state, data) => {
  state.userModalAdd = !data
}
  
export const setEdit = (state, data) => {
  state.user = data
}
  
export const setPut = (state, data) => {
  let oldList = JSON.parse(localStorage.getItem('listUsers')) || []
  oldList[data.__index].email = data.email
  oldList[data.__index].first_name = data.first_name
  oldList[data.__index].last_name = data.last_name
  localStorage.setItem('listUsers', JSON.stringify(oldList))
}
  