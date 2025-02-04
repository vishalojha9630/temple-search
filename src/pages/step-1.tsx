import React from 'react'

import moment from 'moment'
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

import { stepOne } from '../assets/images'
import Button from '../components/form-inputs/button'
import TextArea from '../components/form-inputs/textarea'
import { statesAndCities } from '../utils/statesandcities'
import InputField from '../components/form-inputs/input-field'
import SelectField from '../components/form-inputs/select-field'
import { StepIndicator } from '../components';


const StepOne = ({ formik, moveNext }: any) => {
  return (
    <div className="container">
      <h2 className="mb-4 text-center">Temple Registration</h2>

      <div className="card shadow p-3 mb-5 bg-body">
        <div className="row">
          <div className="col-md-4">
            <img src={stepOne} alt="Temple Image" className="img-fluid" />
          </div>

          <div className="col-md-7">
            <StepIndicator currentStep={1} label="Basic details" />

            <form onSubmit={formik.handleSubmit}>
              <InputField
                type="text"
                name="name"
                label='Temple name'
                placeholder='Enter name'
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
                      placeholder: 'Enter Mobile Number',
                    }}
                    countryCodeEditable={false}
                    inputStyle={{ width: "100%" }}
                  />
                  <Button label='Request OTP' type='button' />
                </div>
              </div>

              <InputField
                type="date"
                name="established_date"
                label='Established year'
                onChange={(value: any) => {
                  const selectedDate = moment(value).format('DD-MM-YYYY');
                  formik.setFieldValue('established_date', selectedDate);
                }}
                value={formik.values.established_date}
              />

              <div className='gap-3' style={{ display: "flex", alignItems: "center", height: "fit-content", }}>
                <InputField
                  type="text"
                  name="pincode"
                  label='Pincode'
                  className='col'
                  placeholder='Enter pincode'
                  value={formik.values.pincode}
                  onChange={formik.handleChange}
                />

                <InputField
                  type="text"
                  name="locality"
                  label='Locality'
                  className='col'
                  placeholder='Enter locality'
                  value={formik.values.locality}
                  onChange={formik.handleChange}
                />

                <Button
                  label='Use location'
                />
              </div>

              <div className='row'>
                <SelectField
                  name="state"
                  label="State"
                  className="col"
                  options={Object.entries(statesAndCities[0])?.map(([key]) => { return { label: key, value: key } })}
                  placeholder="Select State*"
                  value={{ value: formik.values.state }}
                  onChange={(e: any) => {
                    formik.setFieldValue('state', e?.value || '')
                  }}
                />

                <SelectField
                  name="city"
                  label="Cities"
                  className="col"
                  placeholder="Select City*"
                  options={formik?.values?.state?.length > 0 && statesAndCities[0][formik?.values?.state] || []}
                  onChange={(e: any) => {
                    formik.setFieldValue('city', e?.value || '')
                  }}
                  disabled={!formik.values.state}
                  value={{ label: formik.values.state }}
                  getOptionLabel={(option: { [key: string]: string }) => option?.label}
                  getOptionValue={(option: { [key: string]: string }) => option?.value}
                  error={formik?.touched.city && formik.errors.city}
                />
              </div>

              <TextArea
                name="address"
                label='Address'
                placeholder='Enter address'
                value={formik.values.address}
                onChange={formik.handleChange}
              />

              <div className="d-flex gap-3">
                <InputField
                  type="text"
                  className='col'
                  name="landmark"
                  label='Landmark'
                  placeholder='Enter landmark (optional)'
                  value={formik.values.landmark}
                  onChange={formik.handleChange}
                />

                <InputField
                  type="number"
                  className="col"
                  name="alternate_number"
                  label="Alternative mobile no"
                  onChange={(e: any) => {
                    const inputValue = e.target.value;
                    const numericValue = inputValue.replace(/\D/g, '');  // Remove non-numeric characters
                    const trimmedValue = numericValue.slice(0, 10);  // Keep only the first 10 digits
                    formik.setFieldValue('alternate_number', trimmedValue);
                  }}
                  value={formik.values.alternate_number}
                />
              </div>

              <div className='d-flex gap-3'>
                <Button
                  label='Back'
                  type='button'
                  outline={true}
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

export default StepOne