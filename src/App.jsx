import React, { useState } from 'react'
import './App.css'

import { useFormik } from 'formik'

import StepOne from './pages/step-1'
import StepTwo from './pages/step-2'
import StepThree from './pages/step-3'
import StepFour from './pages/step-4'
function App() {

  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      city: '',
      state: '',
      contact: '',
      address: '',
      pincode: '',
      locality: '',
      landmark: '',
      alternate_number: '',
      established_date: '',
      facilities: [],
      photos: [],
      
    },

    onSubmit: (values) => {
      console.log('form values', values)
    }
  })

  return (
    <>
      {currentStep === 1 &&
        <StepOne
          formik={formik}
          moveNext={handleNext}
        />
      }

      {currentStep === 2 &&
        <StepTwo
          formik={formik}
          moveNext={handleNext}
          movePrevious={handlePrevious}
        />
      }

      {currentStep === 3 &&
        <StepThree
          formik={formik}
          moveNext={handleNext}
          movePrevious={handlePrevious}
        />
      }

      {currentStep === 4 &&
        <StepFour
          formik={formik}
          movePrevious={handlePrevious}
        />
      }

    </>
  )
}

export default App
