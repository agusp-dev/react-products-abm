import { 
  ADD_PRODUCT, 
  ADD_PRODUCT_SUCCESS, 
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from '../types'
import { insertProduct, getProducts } from '../../api'
import Swal from 'sweetalert2'

const createNewProduct = ( product, history ) => {
  return async dispatch => {
    dispatch( addingProduct() )
    try {
      const res = await insertProduct(product)
      if (res.status !== 200 && res.status !== 201) return dispatch( addProductError(res.statusText) )
      //timeout to test loaging
      setTimeout(() => {
        dispatch( addProduct(product) )
        Swal.fire(
          'Good Job!',
          'Product Added Succesful',
          'success'
        )
        history.push('/')
      }, 2000)
    } catch(e) {
      dispatch( addProductError(e.message) )
    }
  }
}

const addingProduct = () => ({
  type: ADD_PRODUCT
})

const addProduct = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
})

const addProductError = error => ({
  type: ADD_PRODUCT_ERROR,
  payload: error
})

const getProductList = () => {
  return async dispatch => {
    dispatch( gettingProducts() )
    try {

      const res = await getProducts()
      if (res.status !== 200 && res.status !== 201) return dispatch( getProductsError(res.statusText) )
      
      // timeout to test loaging
      setTimeout(() => {
        dispatch( getProductsSuccess(res.data) )
      }, 2000)
    } catch (e) {
      dispatch( getProductsError(e.message) )
    }
  }
}

const gettingProducts = () => ({
  type: GET_PRODUCTS
})

const getProductsSuccess = products => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products
})

const getProductsError = error => ({
  type: GET_PRODUCTS_ERROR,
  payload: error
})











export {
  createNewProduct,
  getProductList
}