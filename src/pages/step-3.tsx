import React from 'react'

import { stepThree } from '../assets/images'
import { StepIndicator } from '../components'
import Button from '../components/form-inputs/button'
import CheckBox from '../components/form-inputs/checkbox'
import PhotoUploader from '../components/photo-upload'
import SelectField from '../components/form-inputs/select-field'


const StepThree = ({ formik, moveNext, movePrevious }: any) => {

  const idols = [
    { label: 'Shiva Idol', value: 'shiva' },
    { label: 'Durga Idol', value: 'durga' },
    { label: 'Ram Idol', value: 'ram' },
    { label: 'Krishna Idol', value: 'krishna' },
    { label: 'Radha Idol', value: 'radha' },
    { label: 'Human Idol', value: 'human' },
    { label: 'Ganesh Idol', value: 'ganesh' },
    { label: 'Vishnu Idol', value: 'vishnu' },
    { label: 'Kali Idol', value: 'kali' },
    { label: 'Sarwati Idol', value: 'sarwati' }
  ];

  const handleCheckbox = (event: any) => {
    const { value } = event.target;
    const facilities = formik.values.facilities;
    if (facilities.includes(value)) {
      formik.setFieldValue(
        'facilities',
        facilities?.filter((facility: any) => facility !== value)
      );
    } else {
      formik.setFieldValue('facilities', [...facilities, value]);
    }
  }


  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center ">Temple Registration</h2>

      <div className="card shadow p-3 mb-5 bg-body">
        <div className="row">
          <div className="col-md-5">
            <img src={stepThree} alt="Temple Image" className="img-fluid" />
          </div>

          <div className="col-md-7">
            <StepIndicator currentStep={3} label="Structure" />

            <form onSubmit={formik.handleSubmit}>
              <SelectField
                name="temple_structure"
                label="Temple Structure"
                className="col"
                options={[
                  { label: 'Simple', value: 'simple' },
                  { label: 'Complex', value: 'complex' },
                  { label: 'Grand', value: 'grand' },
                ]}
                placeholder="Select the structure"
                value={{ value: formik.values.temple_structure }}
                onChange={(e: any) => {
                  formik.setFieldValue('temple_structure', e?.value ?? '')
                }}
              />

              <SelectField
                name="floors"
                label="No of floors"
                className="col"
                placeholder="Select the no of floors"
                value={{ label: formik.values.floors ?? '' }}
                options={[
                  { label: '1', value: '1' },
                  { label: '2', value: '2' },
                  { label: '3', value: '3' },
                  { label: '4', value: '4' },
                  { label: '5', value: '5' },
                ]}
                onChange={(e: any) => {
                  formik.setFieldValue('floors', e?.value ?? '')
                }}
              />

              <SelectField
                name="rooms"
                label="No of rooms"
                className="col"
                options={[
                  { label: '1', value: '1' },
                  { label: '2', value: '2' },
                  { label: '3', value: '3' },
                  { label: '4', value: '4' },
                  { label: '5', value: '5' },
                  { label: '6', value: '6' },
                  { label: '7', value: '7' },
                  { label: '8', value: '8' },
                ]}
                placeholder="Select the no of rooms"
                value={{ value: formik.values.rooms }}
                onChange={(e: any) => {
                  formik.setFieldValue('rooms', e?.value ?? '')
                }}
              />

              <SelectField
                name="halls"
                label="No of halls"
                className="col"
                placeholder="Select the no of halls"
                value={{ label: formik.values.halls }}
                options={[
                  { label: '1', value: '1' },
                  { label: '2', value: '2' },
                  { label: '3', value: '3' },
                  { label: '4', value: '4' },
                  { label: '5', value: '5' },
                ]}
                onChange={(e: any) => {
                  formik.setFieldValue('halls', e?.value || '')
                }}
              />

              <CheckBox
                name="idol_god"
                label='Select the Idol of God'
                values={formik.values.idol_god}
                options={idols}
                onChange={handleCheckbox}
              />

              <PhotoUploader
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