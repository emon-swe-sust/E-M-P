import React, { useState, useEffect } from 'react'
import axios from 'axios'

function AddEmployee({ createNewEmployee }) {

  const [newEmployee, setNewEmployee] = useState({
    "name": "",
    "gender": "",
    "date_of_birth": "",
    "email": "",
    "role": "",
    "status": "",
    "joining_date": "",
    "designation": "",
    "phone_no": "",
    "team": null
  })
  const [teams, setTeams] = useState()

  const authAxios = axios.create({
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    }
  })

  useEffect(() => {
    let endpoint = '/api/v1/teams/list_create/'

    authAxios
      .get(endpoint)
      .then((res) => setTeams(res.data))
      .then(() => setNewEmployee({ ...newEmployee, 'team': teams[0].id }))
      .catch(() => console.log('error in team list'))
  }, [])

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
  }

  return (
    <div className='bg-green-100 rounded-xl mx-5 mt-5'>
      <div className='text-center pt-2 text-xl'>Add New Employee</div>
      <form className='p-5' onSubmit={(e) => createNewEmployee(e, newEmployee, setNewEmployee)}>
        <div className='block sm:flex sm:space-x-2 sm:w-8/12 sm:m-auto'>
          <div className='sm:flex-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'
            >
              Employee Name
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='name'
              type='text'
              placeholder='Name'
              value={newEmployee.name}
              onChange={e => handleChange(e)}
              required
            />
            <label
              className='block text-gray-700 text-sm font-bold my-2'
              htmlFor='username'
            >
              Gender
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='gender'
              type='text'
              placeholder='Gender'
              value={newEmployee.gender}
              onChange={e => handleChange(e)}
              required
            />
            <label
              className='block text-gray-700 text-sm font-bold my-2'
              htmlFor='username'
            >
              Date Of Birth
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='date_of_birth'
              type='text'
              placeholder='Date of Birth'
              value={newEmployee.date_of_birth}
              onChange={e => handleChange(e)}
              required
            />
            <label
              className='block text-gray-700 text-sm font-bold my-2'
              htmlFor='username'
            >
              Email
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='email'
              type='text'
              placeholder='email'
              value={newEmployee.email}
              onChange={e => handleChange(e)}
              required
            />
            <label
              className='block text-gray-700 text-sm font-bold my-2'
              htmlFor='username'
            >
              Phone No
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='phone_no'
              type='text'
              placeholder='Phone'
              value={newEmployee.phone_no}
              onChange={e => handleChange(e)}
              required
            />
          </div>
          <div className='sm:flex-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'
            >
              Employee Role
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='role'
              type='text'
              placeholder='Employee Role'
              value={newEmployee.role}
              onChange={e => handleChange(e)}
              required
            />
            <label
              className='block text-gray-700 text-sm font-bold my-2'
              htmlFor='username'
            >
              Status
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='status'
              type='text'
              placeholder='Status'
              value={newEmployee.status}
              onChange={e => handleChange(e)}
              required
            />
            <label
              className='block text-gray-700 text-sm font-bold my-2'
              htmlFor='username'
            >
              Joining Date
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='joining_date'
              type='text'
              placeholder='Joining Date'
              value={newEmployee.joining_date}
              onChange={e => handleChange(e)}
              required
            />
            <label
              className='block text-gray-700 text-sm font-bold my-2'
              htmlFor='username'
            >
              Designation
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='designation'
              type='text'
              placeholder='Designation'
              value={newEmployee.designation}
              onChange={e => handleChange(e)}
              required
            />
            <label
              className='block text-gray-700 text-sm font-bold my-2'
              htmlFor='username'
            >
              Team
            </label>
            <div class="relative">
              <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2
              px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="team"
                onChange={e => handleChange(e)}
                value={newEmployee.team}
              >
                {
                  teams && teams.map(({ name, id }) => {
                    return (
                      <option key={id} value={id}>{name} </option>
                    )
                  })
                }
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="divide-y-2 divide-indigo-500">

        </div>
        {/* <div className="divide-y-2 divide-indigo-500 w-full">
          <div></div>
          <div className="flex m-auto mt-5">
            <label
              className='flex m-auto text-gray-700 text-medium font-bold mb-2 mt-5'
            >
              Employee Experiences
            </label>
          </div>
        </div>
              */}

        <button className='btn mt-10 m-auto flex'>
          Add Employee
        </button>
      </form>
    </div>
  )
}

export default AddEmployee
