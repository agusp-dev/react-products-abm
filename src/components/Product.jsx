import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/actions/productsActions'

import Swal from 'sweetalert2'

const Product = ({ product }) => {

  const dispatch = useDispatch()
  const history = useHistory()

  const { id, name, price } = product

  const deleteConfirmation = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( deleteProduct(id) )
      }
    })
  }

  const goToSelectedProduct = product => {
    history.push(`/products/edit/${ product.id }`, { product })
  }

  return (
    <tr>
      <td>{ name }</td>
      <td><span className='font-weight-bold'>$ { price }</span></td>
      <td className='acciones'>
        <button 
          type='button'
          className='btn btn-primary mr-2'
          onClick={ () => goToSelectedProduct(product) }>
          Edit
        </button>
        <button
          type='button'
          className='btn btn-danger'
          onClick={ () => deleteConfirmation(id) }>
            Remove
        </button>
      </td>
    </tr>
  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export { Product }