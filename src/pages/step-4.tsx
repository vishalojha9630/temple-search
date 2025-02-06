import React from 'react'
import Button from '../components/form-inputs/button'
import { stepFour } from '../assets/images'
import { StepIndicator, TimerField } from '../components'
import PhotoUploader from '../components/photo-upload'
import SelectField from '../components/form-inputs/select-field'
import InputField from '../components/form-inputs/input-field'

import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

const StepFour = ({ formik, movePrevious }: any) => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center ">Temple Registration</h2>
      <div className="card shadow p-3 mb-5 bg-body">
        <div className="row">
          <div className="col-md-5">
            <img src={stepFour} alt="Temple Image" className="img-fluid" />
          </div>

          <div className="col-md-7">
            <StepIndicator currentStep={4} label="Temples and Associated pandits" />

            <form onSubmit={formik.handleSubmit}>
              <div className='mb-3'>
                <h6>Summer Timings</h6>
                <div className="d-flex gap-4">
                  <TimerField
                    className='col'
                    label="Opening time"
                    onChange={(summer_opening) => {
                      formik.setFieldValue('summer_opening', summer_opening ?? '')
                    }}
                    selected={formik.values.summer_opening}
                  />

                  <TimerField
                    className='col'
                    label="Closing time"
                    onChange={(summer_closing) => {
                      formik.setFieldValue('summer_closing', summer_closing ?? '')
                    }}
                    selected={formik.values.summer_closing}
                  />
                </div>
              </div>

              <div className='mb-3'>
                <h6>Winter Timings</h6>
                <div className="d-flex gap-4">
                  <TimerField
                    className='col'
                    label="Opening time"
                    onChange={(winter_opening) => {
                      formik.setFieldValue('winter_opening', winter_opening ?? '')
                    }}
                    selected={formik.values.winter_opening}
                  />

                  <TimerField
                    className='col'
                    label="Closing time"
                    onChange={(winter_closing) => {
                      formik.setFieldValue('winter_closing', winter_closing ?? '')
                    }}
                    selected={formik.values.winter_closing}
                  />
                </div>
              </div>

              <div className='mb-3'>
                <h6>Event Timings</h6>
                <div className="d-flex gap-4">
                  <TimerField
                    className='col'
                    label="Morning Puja"
                    onChange={(morning_puja) => {
                      formik.setFieldValue('morning_puja', morning_puja ?? '')
                    }}
                    selected={formik.values.morning_puja}
                  />

                  <TimerField
                    className='col'
                    label="Morning Arti"
                    onChange={(morning_arti) => {
                      formik.setFieldValue('morning_arti', morning_arti ?? '')
                    }}
                    selected={formik.values.morning_arti}
                  />
                </div>

                <div className="d-flex gap-4">
                  <TimerField
                    className='col'
                    label="Afternoon Puja"
                    onChange={(afternoon_puja) => {
                      formik.setFieldValue('afternoon_puja', afternoon_puja ?? '')
                    }}
                    selected={formik.values.afternoon_puja}
                  />

                  <TimerField
                    className='col'
                    label="Evening Arti"
                    onChange={(evening_arti) => {
                      formik.setFieldValue('evening_arti', evening_arti ?? '')
                    }}
                    selected={formik.values.evening_arti}
                  />
                </div>
              </div>

              <h6>Associated Pandit details</h6>
              <SelectField
                className="col"
                name="no_pandit"
                label="No of pandits"
                placeholder="Select the no of pandits"
                value={{ label: formik.values.no_pandit ?? '' }}
                options={[
                  { label: '1', value: '1' },
                  { label: '2', value: '2' },
                  { label: '3', value: '3' },
                ]}
                onChange={(e: any) => {
                  formik.setFieldValue('no_pandit', e?.value ?? '')
                }}
              />

              <InputField
                type='text'
                className='col'
                name="pandit_name"
                label='Name of Pandit'
                onChange={formik.handleChange}
                value={formik.values.pandit_name}
              />

              <div className="form-group mb-3">
                <label htmlFor="username">Contact</label>
                <div style={{ display: "flex", alignItems: "stretch", gap: "9px" }}>
                  <PhoneInput
                    country='in'
                    value={formik.values.pandit_contact}
                    onChange={(phone) => {
                      formik.setFieldValue('pandit_contact', phone ?? '')
                    }}
                    inputProps={{
                      name: 'pandit_contact',
                    }}
                    countryCodeEditable={false}
                    inputStyle={{ width: "100%" }}
                  />
                </div>
              </div>

              <PhotoUploader
                maxFields={1}
                photos={formik.values.pandit_photo || []}
                setPhotos={(photos: string[]) =>
                  formik.setFieldValue('pandit_photo', photos)
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