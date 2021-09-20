import React, { useEffect, useState } from 'react'
import AddLeave from './AddLeave'
import Navbar from './Navbar'
import axios from 'axios'

function Leave() {
  const [leaves, setLeaves] = useState()
  const authAxios = axios.create({
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  })

  const createLeave = (e, newLeave, setNewLeave) => {
    e.preventDefault()
    const body = JSON.stringify(newLeave)
    console.log(body)
    authAxios
      .post('/api/v1/leaves/list_create/', body)
      .then(() => fetchLeaves())
      .then(() => alert('Leave granted'))
      .then(() => {
        setNewLeave({...newLeave,
          casual: 0,
          sick: 0,
          others: 0,
        })
      })
      .catch(()=>alert('Select Employee'))
  }

  const fetchLeaves = () => {
    authAxios
      .get('/api/v1/employees/leave_list/')
      .then((res) => setLeaves(res.data))
      .catch(() => 'error in leave fetch')
  }

  useEffect(() => {
    fetchLeaves()
  }, [])

  return (
    <div>
      <Navbar />
      <div className='sm:w-9/12 sm:m-auto shadow-2xl bg-white'>
        <div
          className='bg-indigo-300 text-2xl text-white block py-2 my-2
        mx-auto rounded-md'
        >
          &nbsp; Leave
        </div>
        <AddLeave createLeave={createLeave} />
        <table className=' border-separate table-fixed w-full p-5 text-xs sm:text-base'>
          <thead>
            <tr className='bg-blue-100 ml-auto '>
              <th className='p-5'>Employee No</th>
              <th>Name</th>
              <th className='w-2/12'>Casual Leave</th>
              <th>Sick Leave</th>
              <th>Others</th>
            </tr>
          </thead>
          <tbody>
            {
              leaves && leaves.map(({ id, name, casual_count, sick_count, others_count }) => {
                return (
                  <tr key={id} className='bg-blue-100 hover:bg-indigo-400 hover:text-white'>
                    <td className='break-words py-3 px-3'>{id}</td>
                    <td className='break-words px-3'> {name} </td>
                    <td className='px-3'>{casual_count}</td>
                    <td className='px-3'>{sick_count}</td>
                    <td className='px-3'>{others_count}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Leave
