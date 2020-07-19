import React, { useEffect, useState } from 'react'

import './styles.css'

import NavigationMenu from '../../../components/NavigationMenu';
import Footer from '../../../components/Footer';

import NewBooking from '../../../components/NewBooking';

export default function Layout(props) {

  return (
    <div className="layout">
      <NavigationMenu/>

      <NewBooking/>

      <Footer/>
    </div>
  )
}
