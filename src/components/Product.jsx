import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/actions/productsActions'

import Swal from 'sweetalert2'

const Product = ({ product }) => {

  const dispatch = useDispatch()

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

  return (
    <tr>
      <td>{ name }</td>
      <td><span className='font-weight-bold'>$ { price }</span></td>
      <td className='acciones'>
        <Link 
          to={`/products/edit/${ id }`} 
          className='btn btn-primary mr-2'>
          Edit
        </Link>
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