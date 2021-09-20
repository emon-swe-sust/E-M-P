import React, { useState, useEffect } from 'react'
import axios from 'axios'

function AddLeave ({createLeave}) {
  const [newLeave, setNewLeave] = useState({
    casual: 0,
    sick: 0,
    others: 0,
    employee: null
  })
  const [employeeList, setEmployeeList] = useState([])

  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  })

  useEffect(() => {
    const temp = [
      {
        id:-1,
        name:'select employee'
      }
    ]
    authAxios
      .get('/api/v1/employees/list/')
      .then(res => setEmployeeList(temp.concat(res.data)))
      .catch(() => console.log('employee fetch error'))
  },[ ])

  const handleChange = e => {
    setNewLeave({...newLeave,[e.target.name] : e.target.value})
  }

  return (
    <div className='bg-green-100 rounded-xl mx-5 mt-5'>
      <div className='text-center pt-2 text-xl'>Granting Leave</div>
      <form className='p-5' onSubmit={(e)=>createLeave(e, newLeave, setNewLeave)}>
        <div className='block sm:flex sm:space-x-2 sm:w-8/12 sm:m-auto'>
          <div className='sm:flex-1'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Employee
            </label>
            <div class='relative'>
              <select
                class='block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2
              px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                name='employee'
                onChange={e => handleChange(e)}
                value={newLeave.employee}
              >
                {employeeList &&
                  employeeList.map(({ name, id }) => {
                    return (
                      <option key={id} value={id}>
                        {name}
                      </option>
                    )
                  })}
              </select>
              <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  class='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>
          <div className='sm:flex-1'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Casual Leave
            </label>
            <label
              className='
            bg-white w-full flex h-10 rounded-md shadow-md
            '
            >
              <input
                className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                name='casual'
                type='number'
                value={newLeave.casual}
                onChange={e => handleChange(e)}
              />
            </label>
          </div>
        </div>
        <div className='block sm:flex sm:space-x-2 sm:mt-5 sm:w-8/12 sm:m-auto'>
          <div className='sm:flex-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'
            >
              Sick Leave
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='sick'
              type='number'
              value={newLeave.sick}
              onChange={e => handleChange(e)}
            />
          </div>
          <div className='sm:flex-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'
            >
              Others Leave
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='others'
              type='number'
              value={newLeave.others}
              onChange={e => handleChange(e)}
            />
          </div>
        </div>
        <button className='btn mt-10 m-auto flex' type='submit'>Grant Leave</button>
      </form>
    </div>
  )
}

export default AddLeave
