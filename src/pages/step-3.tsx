import React from 'react'

import { stepTwo } from '../assets/images'
import { StepIndicator } from '../components'
import Button from '../components/form-inputs/button'
import InputField from '../components/form-inputs/input-field'
const StepThree = ({ formik, moveNext, movePrevious }: any) => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center ">Temple Registration</h2>

      <div className="card shadow p-3 mb-5 bg-body">
        <div className="row">
          <div className="col-md-5">
            <img src={stepTwo} alt="Temple Image" className="img-fluid" />
          </div>

          <div className="col-md-7">
            <StepIndicator currentStep={3} label="Structure" />

            <form>
              <InputField
                type="text"
                name="name"
                label='Temple name'
                placeholder='Enter name'
              // value={formik.values.email}
              // onChange={formik.handleChange}
              />


              <div className="form-group my-3">
                <label htmlFor="establishedYear">Established year</label>
                <input type="date" className="form-control" id="establishedYear" />
              </div>

              <div className='d-flex gap-3'>
                <Button
                  label='Back'
                  type='button'
                  outline={true}
                  onClick={movePrevious}
                  styleOverrides={{ width: '100%' }}
                />
                <Button
                  label='Next'
                  type='button'
                  onClick={moveNext}
                  styleOverrides={{ width: '100%' }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepThree