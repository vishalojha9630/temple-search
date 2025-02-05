import React from 'react'
import Button from '../components/form-inputs/button'
import { stepFour } from '../assets/images'
import { StepIndicator, TimerField } from '../components'
import PhotoUploader from '../components/photo-upload'
import SelectField from '../components/form-inputs/select-field'
import InputField from '../components/form-inputs/input-field'

import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const StepFour = ({ formik, moveNext, movePrevious }: any) => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center ">Temple Registration</h2>
      <div className="card shadow p-3 mb-5 bg-body">
        <div className="row">
          <div className="col-md-5">
            <img src={stepFour} alt="Temple Image" className="img-fluid" />
          </div>

          <div className="col-md-7">
            <StepIndicator currentStep={4} label="Temples and Assocaiated pandits" />

            <form onSubmit={formik.handleSubmit}>
              <div className='mb-3'>
                <h6>Summer Timings</h6>
                <div className="d-flex gap-4">
                  <TimerField
                    name="name"
                    className='col'
                    label='Opening time'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />

                  <TimerField
                    name="name"
                    className='col'
                    label='Closing time'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>

              <div className='mb-3'>
                <h6>Winter Timings</h6>
                <div className="d-flex gap-4">
                  <TimerField
                    name="name"
                    className='col'
                    label='Opening time'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />

                  <TimerField
                    name="name"
                    className='col'
                    label='Closing time'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>

              <div className='mb-3'>
                <h6>Event Timings</h6>
                <div className="d-flex gap-4">
                  <TimerField
                    name="name"
                    className='col'
                    label='Morning Puja'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />

                  <TimerField
                    name="name"
                    className='col'
                    label='Morning Arti'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="d-flex gap-4">
                  <TimerField
                    name="name"
                    className='col'
                    label='Afternoon Puja'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />

                  <TimerField
                    name="name"
                    className='col'
                    label='Evening Arti'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>

              <h6>Associated Pandit details</h6>
              <SelectField
                name="pandits"
                label="No of pandits"
                className="col"
                placeholder="Select the no of pandits"
                value={{ label: formik.values.pandits ?? '' }}
                options={[
                  { label: '1', value: '1' },
                  { label: '2', value: '2' },
                  { label: '3', value: '3' },
                  { label: '4', value: '4' },
                  { label: '5', value: '5' },
                ]}
                onChange={(e: any) => {
                  formik.setFieldValue('pandits', e?.value ?? '')
                }}
              />

              <InputField
                type='text'
                name="name"
                className='col'
                label='Name of Pandit(1/1)'
                value={formik.values.name}
                onChange={formik.handleChange}
              />

              <div className="form-group mb-3">
                <label htmlFor="username">Contact</label>
                <div style={{ display: "flex", alignItems: "stretch", gap: "9px" }}>
                  <PhoneInput
                    country='in'
                    value={formik.values.contact}
                    onChange={(phone) => {
                      formik.setFieldValue('contact', phone ?? '')
                    }}
                    inputProps={{
                      name: 'contact',
                    }}
                    countryCodeEditable={false}
                    inputStyle={{ width: "100%" }}
                  />
                </div>
              </div>

              <PhotoUploader
                maxFields={1}
                photos={formik.values.structure_photos || []}
                setPhotos={(photos: string[]) =>
                  formik.setFieldValue('structure_photos', photos)
                }
              />

              <div className='d-flex gap-3'>
                <Button
                  label='Back'
                  type='button'
                  outline={true}
                  onClick={movePrevious}
                  styleOverrides={{ width: '100%' }}
                />
                <Button
                  label='Submit Data'
                  type='submit'
                  onClick={formik}
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

export default StepFour