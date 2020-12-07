import { 
  ADD_PRODUCT, 
  ADD_PRODUCT_SUCCESS, 
  ADD_PRODUCT_ERROR,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from '../types'

const initialState = {
  data: [],
  error: null,
  loading: false  
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
  
    default:
      return state
  }
}