import React from 'react'

const EditProduct = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Edit Product
            </h2>
            <form>
              <div className='form-group'>
                <label>Product Name</label>
                <input 
                  type='text'
                  name='name'
                  className='form-control'
                  placeholder='Enter the product name'/>
              </div>
              <div className='form-group'>
                <label>Product Price</label>
                <input 
                  type='number'
                  name='price'
                  className='form-control'
                  placeholder='Enter the product price'/>
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