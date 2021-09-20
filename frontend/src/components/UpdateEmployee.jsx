import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import Navbar from './Navbar'

function UpdateEmployee() {
  const { id } = useParams()
  const history = useHistory()
  const [empDetails, setEmpDetails] = useState({
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

  const authAxios = axios.create({
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    }
  })

  useEffect(() => {
    authAxios
      .get(`/api/v1/employees/update_delete_details/${id}/`)
      .then((res) => setEmpDetails(res.data))
      .catch(() => console.log('error in fetching personal details'))
  }, [])

  const handleChange = (e) => {
    setEmpDetails({ ...empDetails, [e.target.name]: e.target.value })
  }

  const handleUpdateEmployee = (e) => {
    e.preventDefault()
    let body = JSON.stringify(empDetails)
    authAxios
      .put(`/api/v1/employees/update_delete_details/${id}/`, body)
      .then(() => alert('Employee updated successfully'))
      .then(() => history.push(`/employee/details/${id}`))
      .catch(() => console.log('problem in updating information'))

  }

  return (
    <div>
      <Navbar />
      <div className='sm:w-9/12 sm:m-auto shadow-2xl bg-green-100'>
        <div
          className='bg-indigo-300 text-2xl text-white flex py-2 my-2
                    mx-auto rounded-md'
        >
          &nbsp; Employee
        </div>
        <div className='bg-green-100 rounded-xl m-5'>
          <div className='text-center pt-2 text-xl'>Update Employee</div>
          <form className='p-5' onSubmit={handleUpdateEmployee}>
            <div className='block sm:flex sm:space-x-2 sm:w-8/12 sm:m-auto'>
              <div className='sm:flex-1'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='username'
                >
                  Employee No
                </label>
                <input
                  className='bg-white shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  placeholder='Employee No'
                  disabled
                  value={id}
                />
                <label
                  className='block text-gray-700 text-sm font-bold my-2'
                  htmlFor='username'
                >
                  Name
                </label>
                <input
                  className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='name'
                  type='text'
                  placeholder='Name'
                  value={empDetails.name}
                  onChange={handleChange}
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
                  value={empDetails.gender}
                  onChange={handleChange}
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
                  value={empDetails.date_of_birth}
                  onChange={handleChange}
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
                  value={empDetails.email}
                  onChange={handleChange}
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
                  value={empDetails.role}
                  onChange={handleChange}
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
                  value={empDetails.status}
                  onChange={handleChange}
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
                  value={empDetails.joining_date}
                  onChange={handleChange}
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
                  value={empDetails.designation}
                  onChange={handleChange}
                />
                <label
                  className='block text-gray-700 text-sm font-bold my-2'
                  htmlFor='username'
                >
                  Phone
                </label>
                <input
                  className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='phone_no'
                  type='text'
                  placeholder='Phone'
                  value={empDetails.phone_no}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button className='btn mt-10 m-auto flex'>Update Employee</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateEmployee
