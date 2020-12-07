import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewProduct } from '../redux/actions/productsActions'

const AddProduct = ({ history }) => {
  console.log(history)

  const dispatch = useDispatch()

  const loading = useSelector(state => state.products.loading)
  const apiError = useSelector(state => state.products.error)

  const [ error, setError ] = useState('')

  const [product, setProduct] = useState({
    name: '',
    price: ''
  })
  const { name, price } = product

  const addProduct = p => dispatch( createNewProduct(p, history) )

  const onHandleSubmit = e => {
    e.preventDefault()    
    if (name.trim() === '') return setError('Please, enter a product name!')
    if (price.trim() === '') return setError('Please, enter a product price!')
    const nPrice = Number.parseInt(price)
    if (!nPrice || nPrice <= 0) return setError('Please, enter a valid price!')
    setError('')
    addProduct(product)
  }

  const onHandleChange = e => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Add New Product
            </h2>
            <form onSubmit={ onHandleSubmit }>
              <div className='form-group'>
                <label>Product Name</label>
                <input 
                  type='text'
                  name='name'
                  className='form-control'
                  placeholder='Enter the product name'
                  value={ name }
                  onChange={ onHandleChange }/>
              </div>
              <div className='form-group'>
                <label>Product Price</label>
                <input 
                  type='number'
                  name='price'
                  className='form-control'
                  placeholder='Enter the product price'
                  value={ price }
                  onChange={ onHandleChange }/>
              </div>
              <button 
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                disabled={ loading }
              >{ loading ? 'Adding your product' : 'Add Product' } 
              </button>
            </form>
            {apiError && (
              <p className='alert alert-danger p2 mt-3 text-center'>{ error }</p>
            )}
            {error && (
              <p className='alert alert-danger p2 mt-3 text-center'>{ error }</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export { AddProduct }