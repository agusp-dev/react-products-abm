import React, { Fragment, useEffect } from 'react'
import { getProductList } from '../redux/actions/productsActions'
import { useDispatch, useSelector } from 'react-redux'
import { Product } from '.'

const Products = () => {

  const dispatch = useDispatch()

  const loading = useSelector(state => state.products.loading)
  const apiError = useSelector(state => state.products.error)
  const productList = useSelector(state => state.products.data)

  useEffect(() => {
    dispatch( getProductList() )
  }, [])

  const getProductRows = () => {
    return productList.map(p => <Product key={ p.id } product={ p } />)
  }

  return (
    <Fragment>
      <h2 
        className='text-center my-5'
      >Products List
      </h2>
      {apiError  && (
        <p className='font-weight-bold alert alert-danger text-center mt-4'>
          { apiError }
        </p>
      )}
      {loading && (
        <p className='text-center mt-2 mb-4'>Loading Products...</p>
      )}
      <table className='table table-striped'>
        <thead className='bg-primary table-dark'>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productList && productList.length > 0 
            ? getProductRows()
            : <p>No products</p>}
        </tbody>
      </table>
    </Fragment>
  )
}

export { Products }