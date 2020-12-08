import { 
  ADD_PRODUCT, 
  ADD_PRODUCT_SUCCESS, 
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR
} from '../types'
import { insertProduct, getProducts, updateProduct, removeProduct } from '../../api'
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

const editProduct = ( product, history ) => {
  return async dispatch => {
    dispatch( editingProduct() )
    try {
      const res = await updateProduct(product)
      if (res.status !== 200 && res.status !== 201) return dispatch( editProductError(res.statusText) )
      // timeout to test loaging
      setTimeout(() => {
        dispatch( editProductSuccess(product) )
      }, 2000)
      history.push('/')
    } catch (e) {
      dispatch( editProductError(e.message) )
    }
  }
}

const editingProduct = () => ({
  type: EDIT_PRODUCT
})

const editProductSuccess = product => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: product
})

const editProductError = error => ({
  type: EDIT_PRODUCT_ERROR,
  payload: error
})

const deleteProduct = id => {
  return async dispatch => {
    dispatch( removingProduct() )
    try {
      const res = await removeProduct(id)
      if (res.status !== 200 && res.status !== 201) return dispatch( removeProductError(res.statusText) )
      // timeout to test loaging
      setTimeout(() => {
        dispatch( removeProductSuccess(id) )
      }, 2000)
    } catch (e) {
      dispatch( removeProductError(e.message) )
    }
  }
}

const removingProduct = () => ({
  type: DELETE_PRODUCT
})

const removeProductSuccess = id => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: id
})

const removeProductError = error => ({
  type: DELETE_PRODUCT_ERROR,
  payload: error
})

export {
  createNewProduct,
  getProductList,
  deleteProduct,
  editProduct
}