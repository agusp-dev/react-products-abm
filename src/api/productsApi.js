import axiosClient from './axiosClient'

const insertProduct = product => {
  const result = axiosClient.post('/products', product)
  return result
}

const removeProduct = async product => {
  //todo
}

export {
  insertProduct,
  removeProduct
}