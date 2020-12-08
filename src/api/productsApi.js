import axiosClient from './axiosClient'

const insertProduct = product => {
  const result = axiosClient.post('/products', product)
  return result
}

const updateProduct = product => {
  const result = axiosClient.put(`/products/${product.id}`, product)
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
  updateProduct,
  removeProduct,
  getProducts
}