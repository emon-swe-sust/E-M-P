import React, { useState } from 'react'

function AddHoliday ({addHoliday}) {
  const [newHoliday, setNewHoliday] = useState({
    name:'',
    details:'',
    start_date:'',
    end_date:'',
    holiday_type:'',
    year:''
  })

  const handleChange = (e) => {
    setNewHoliday({...newHoliday,[e.target.name]:e.target.value})
  }

  return (
    <div className='bg-green-100 rounded-xl mx-5 mt-5'>
      <div className='text-center pt-2 text-xl'>Add New Holiday</div>
      <form className='p-5' onSubmit={(e) => addHoliday(e, newHoliday, setNewHoliday)}>
        <div className='block sm:flex sm:space-x-2 sm:w-8/12 sm:m-auto'>
          <div className='sm:flex-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
             
            >
              Name
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='name'
              type='text'
              placeholder='Name'
              value={newHoliday.name}
              onChange={(e)=>handleChange(e)}
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
              placeholder='Details'
              value={newHoliday.details}
              onChange={(e)=>handleChange(e)}
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
              value={newHoliday.start_date}
              onChange={(e)=>handleChange(e)}
              required
            />
          </div>
        </div>
        <div className='block sm:flex sm:space-x-2 sm:mt-5 sm:w-8/12 sm:m-auto'>
          <div className='sm:flex-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              
            >
              End Date
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='end_date'
              type='text'
              placeholder='End Date'
              value={newHoliday.end_date}
              onChange={(e)=>handleChange(e)}
              required
            />
          </div>
          <div className='sm:flex-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              
            >
              Type
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='holiday_type'
              type='text'
              placeholder='Holiday Type'
              value={newHoliday.holiday_type}
              onChange={(e)=>handleChange(e)}
              required
            />
          </div>
          <div className='sm:flex-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              
            >
              Year
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='year'
              type='text'
              placeholder='Year'
              value={newHoliday.year}
              onChange={(e)=>handleChange(e)}
              required
            />
          </div>
        </div>
        <button className='btn mt-10 m-auto flex' type='submit'>Add Holiday</button>
      </form>
    </div>
  )
}

export default AddHoliday
