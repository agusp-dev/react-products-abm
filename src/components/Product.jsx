import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Product = ({ product }) => {
  const { id, name, price } = product
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
          className='btn btn-danger'>
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