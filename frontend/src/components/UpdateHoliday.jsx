import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

function UpdateHoliday() {
  const [updateHoliday, setUpdateHoliday] = useState({
    name: '',
    details: '',
    start_date: '',
    end_date: '',
    holiday_type: '',
    year: ''
  })
  const { id } = useParams()
  const history = useHistory()

  const authAxios = axios.create({
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    }
  })

  const handleChange = (e) => {
    setUpdateHoliday({ ...updateHoliday, [e.target.name]: e.target.value })
  }

  const updateHolidayfunc = (e) => {
    e.preventDefault();
    const body = JSON.stringify(updateHoliday)
    authAxios
      .put(`/api/v1/holidays/update_delete/${id}/`, body)
      .then(() => alert('Holiday Updated'))
      .then(() => history.push('/holidays/'))
      .catch(() => console.log('holiday update error'))
  }

  useEffect(()=>{
    authAxios
    .get(`/api/v1/holidays/update_delete/${id}/`)
    .then((res)=>setUpdateHoliday(res.data))
    .catch(()=>console.log('error'))
  },[])

  console.log(updateHoliday)

  return (
    <div>
      <Navbar />
      <div className='sm:w-9/12 sm:m-auto shadow-2xl bg-green-100'>
        <div
          className='bg-indigo-300 text-2xl text-white block py-2 my-2
        mx-auto rounded-md'
        >
          &nbsp; Holidays
        </div>
        <div className='bg-green-100 rounded-xl m-5'>
          <div className='text-center pt-2 text-xl'>Update Holiday</div>
          <form className='p-5' onSubmit={(e) => updateHolidayfunc(e)}>
            <div className='block sm:flex sm:space-x-2 sm:w-8/12 sm:m-auto'>
              <div className='sm:flex-1'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='username'
                >
                  Name
                </label>
                <input
                  className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='name'
                  type='text'
                  placeholder='Holiday Name'
                  onChange={e => handleChange(e)}
                  value={updateHoliday.name}
                  required
                />
              </div>
              <div className='sm:flex-1'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'

                >
                  Details
                </label>
                <input
                  className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='details'
                  type='text'
                  placeholder='Holiday details'
                  onChange={e => handleChange(e)}
                  value={updateHoliday.details}
                  required
                />
              </div>
              <div className='sm:flex-1'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='username'
                >
                  Start Date
                </label>
                <input
                  className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='start_date'
                  type='text'
                  placeholder='Start Date'
                  onChange={e => handleChange(e)}
                  value={updateHoliday.start_date}
                  required
                />
              </div>
            </div>
            <div className='block sm:flex sm:space-x-2 sm:mt-5 sm:w-8/12 sm:m-auto'>
              <div className='sm:flex-1'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='username'
                >
                  End Date
                </label>
                <input
                  className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='end_date'
                  type='text'
                  placeholder='End Date'
                  onChange={e => handleChange(e)}
                  value={updateHoliday.end_date}
                  required
                />
              </div>
              <div className='sm:flex-1'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='username'
                >
                  Type
                </label>
                <input
                  className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='holiday_type'
                  type='text'
                  placeholder='Holiday Type'
                  onChange={e => handleChange(e)}
                  value={updateHoliday.holiday_type}
                  required
                />
              </div>
              <div className='sm:flex-1'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='username'
                >
                  Year
                </label>
                <input
                  className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='year'
                  type='text'
                  placeholder='Holiday Year'
                  onChange={e => handleChange(e)}
                  value={updateHoliday.year}
                  required
                />
              </div>
            </div>
            <button className='btn mt-10 m-auto flex' type='submit'>Update Holiday</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateHoliday
