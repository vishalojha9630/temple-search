import React from 'react'

import { stepTwo } from '../assets/images'
import { StepIndicator } from '../components'
import Button from '../components/form-inputs/button'
import PhotoUploader from '../components/photo-upload'
import CheckBox from '../components/form-inputs/checkbox'


const StepTwo = ({ formik, moveNext, movePrevious }: any) => {

  const facilitiesOptions = [
    { label: 'Drinking water', value: 'drink_water' },
    { label: 'Toilets', value: 'toilets' },
    { label: 'Parking', value: 'parking' },
    { label: 'Nearby shops', value: 'nearby_shops' },
    { label: 'Puja store', value: 'puja_store' },
    { label: 'In-temple Puja', value: 'in_temple_puja' },
    { label: 'Rooms', value: 'rooms' },
    { label: 'Halls', value: 'halls' },
    { label: 'In-temple Pandit', value: 'in_temple_pandit' },
    { label: 'Prasad Store', value: 'prasad_store' },
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
    <div className="container mt-3">
      <h2 className="mb-4 text-center ">Temple Registration</h2>

      <div className="card shadow p-3 mb-5 bg-body">
        <div className="row">
          <div className="col-md-5">
            <img src={stepTwo} alt="Temple Image" className="img-fluid" />
          </div>

          <div className="col-md-7">
            <StepIndicator currentStep={2} label="Facilities" />
            <form onSubmit={formik.handleSubmit}>
              <CheckBox
                name="facilities"
                label='Select the facilities'
                values={formik.values.facilities}
                options={facilitiesOptions}
                onChange={handleCheckbox}
              />

              <PhotoUploader
                photos={formik.values.photos || []}
                setPhotos={(photos: string[]) =>
                  formik.setFieldValue('photos', photos)
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

export default StepTwo