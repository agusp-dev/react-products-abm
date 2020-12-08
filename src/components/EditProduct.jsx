import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { editProduct as edProduct } from '../redux/actions/productsActions'

const EditProduct = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const { product } = history.location.state
  
  const [ error, setError ] = useState('')

  const [editProduct, setEditProduct] = useState(product)
  const { id, name, price } = editProduct

  const onHandleSubmit = e => {
    e.preventDefault()
    if (name.trim() === '') return setError('Please, enter a product name!')
    if (price.trim() === '') return setError('Please, enter a product price!')
    const nPrice = Number.parseInt(price)
    if (!nPrice || nPrice <= 0) return setError('Please, enter a valid price!')
    setError('')
    updateProduct(editProduct)
  }

  const updateProduct = p => dispatch( edProduct(p, history) )

  const onHandleChange = e => {
    setEditProduct({
      ...editProduct,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Edit Product
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
              >Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export { EditProduct }