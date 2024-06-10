import React from 'react'
import RestaurantCreationModal from '../Components/RestaurantCreationModal'
import { RegistrationForm1, RegistrationForm2, RegistrationForm3 } from '../Auth/Registration';

const RegistrationPage = () => {
  return (
    <div>
        <RestaurantCreationModal/>
        <RegistrationForm1/>
        <RegistrationForm2/>
        <RegistrationForm3/>
    </div>
  )
}

export default RegistrationPage;