import React, { useState } from 'react';
import { useFormik } from 'formik';
import './App.css';

import StepOne from './pages/step-1';
import StepTwo from './pages/step-2';
import StepThree from './pages/step-3';
import StepFour from './pages/step-4';

const steps = [StepOne, StepTwo, StepThree, StepFour];

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNavigation = (direction) => {
    setCurrentStep((prev) => {
      const newStep = prev + direction;
      return newStep >= 0 && newStep < steps.length ? newStep : prev;
    });
  };

  const formik = useFormik({
    initialValues: {
      temple_name: '',
      contact: '',
      established_date: '',
      pincode: '',
      locality: '',
      state: '',
      city: '',
      address: '',
      landmark: '',
      alternate_number: '',
      facilities: [],
      photos: [],
      temple_structure: '',
      floors: '',
      rooms: '',
      halls: '',
      idol_god: [],
      structure_photos: [],
      summer_opening: '',
      summer_closing: '',
      winter_opening: '',
      winter_closing: '',
      morning_puja: '',
      morning_arti: '',
      afternoon_puja: '',
      evening_arti: '',
      no_pandit: '',
      pandit_name: '',
      pandit_contact: '',
      pandit_photo: '',
    },
    onSubmit: (values) => {
      console.log('Form Values:', values)
      alert('Form submitted successfully!');
      formik.resetForm()
      formik.setFieldValue('');
    }
  });

  const CurrentStepComponent = steps[currentStep];

  return (
    <CurrentStepComponent
      formik={formik}
      moveNext={() => handleNavigation(1)}
      movePrevious={() => handleNavigation(-1)}
    />
  );
}

export default App;
