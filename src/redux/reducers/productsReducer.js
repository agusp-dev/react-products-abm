import { Product } from '../../components/Product'
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

const initialState = {
  data: [],
  error: null,
  loading: false  
}

const removeProduct = ( products, idToRemove ) => {
  return products.filter(p => p.id !== idToRemove)
}

const updateProduct = ( products, product ) => {
  const { id, name, price } = product
  const index = products.findIndex(p => p.id === id)
  products[index].name = name
  products[index].price = price
  return products
}

export default function( state = initialState, action ) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        loading: true
      }

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload]
      }
    
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case GET_PRODUCTS:
      return {
        ...state,
        loading: true
      }

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...action.payload]
      }

    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }





    case EDIT_PRODUCT:
      return {
        ...state,
        loading: true
      }

    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...updateProduct(state.data, action.payload)]
      }

    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }






    case DELETE_PRODUCT:
      return {
        ...state,
        loading: true
      }

    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...removeProduct(state.data, action.payload)]
      }

    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
  
    default:
      return state
  }
}