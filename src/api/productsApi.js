import axiosClient from './axiosClient'

const insertProduct = product => {
  const result = axiosClient.post('/products', product)
  return result
}

const removeProduct = id => {
  const result = axiosClient.delete(`/products/${id}`)
  return result
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