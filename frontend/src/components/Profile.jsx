import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Personal_info from './Personal_info'

const Profile = () => {
  const {empid} = useParams();
  return (
    <div>
      <Navbar />
      <Personal_info empid = {empid}/>
    </div>
  )
}

export default Profile
