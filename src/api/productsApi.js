import axiosClient from './axiosClient'

const insertProduct = product => {
  const result = axiosClient.post('/products', product)
  return result
}

const removeProduct = product => {
  //todo
}

const getProducts = () => {
  const result = axiosClient.get('/products')
  return result
}

export {
  insertProduct,
  removeProduct,
  getProducts
}