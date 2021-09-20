import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'

function UpdateTeam() {
  const [newTeam, setNewTeam] = useState({
    name: '',
    floor: '',
    room: '',
    is_active: ''
  })

  const { id } = useParams()
  const history = useHistory()

  const handleChange = (e) => {
    setNewTeam({ ...newTeam, [e.target.name]: e.target.value })
  }

  const authAxios = axios.create({
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    }
  })

  useEffect(() => {
    let endpoint = `/api/v1/teams/update_delete/${id}`
    authAxios
      .get(endpoint)
      .then((res) => {
        setNewTeam(res.data)
      })
      .catch(err => console.log('bad in team details'))
  }, [])

  const handleUpdateTeam = (e) => {
    e.preventDefault()
    let endpoint = `/api/v1/teams/update_delete/${id}/`
    let body = JSON.stringify(newTeam)
    authAxios
      .put(endpoint, body)
      .then(() => {
        alert('Teams updated')
      })
      .then(() => {
        history.push('/teams/')
      })
      .catch(err => console.log('bad in team details', err))
  }

  return (
    <div>
      <Navbar />
      <div className='sm:w-9/12 sm:m-auto shadow-2xl bg-green-100'>
        <div
          className='bg-indigo-300 text-2xl text-white block py-2 my-2
        mx-auto rounded-md'
        >
          &nbsp; Teams
        </div>
        <div className='bg-green-100 rounded-xl m-5'>
          <div className='text-center pt-2 text-xl'>Update Team</div>
          <form className='p-5' onSubmit={(e) => handleUpdateTeam(e)}>
            <div className='block sm:flex sm:space-x-2 sm:w-8/12 sm:m-auto'>
              <div className='sm:flex-1'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='username'
                >
                  Team Name
                </label>
                <input
                  className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  value={newTeam.name}
                  onChange={e => handleChange(e)}
                  name='name'
                />
              </div>
              <div className='sm:flex-1'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='username'
                >
                  Team Floor
                </label>
                <input
                  className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  value={newTeam.floor}
                  onChange={e => handleChange(e)}
                  name='floor'
                />
              </div>
            </div>
            <div className='block sm:flex sm:space-x-2 sm:mt-5 sm:w-8/12 sm:m-auto'>
              <div className='sm:flex-1'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='username'
                >
                  Team Room
                </label>
                <input
                  className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  value={newTeam.room}
                  onChange={e => handleChange(e)}
                  name='room'
                />
              </div>
              <div className='sm:flex-1'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='username'
                >
                  Is Active
                </label>
                <input
                  className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  type='text'
                  value={newTeam.is_active}
                  onChange={e => handleChange(e)}
                  name='is_active'
                />
              </div>
            </div>
            <button className='btn mt-10 m-auto flex'>Update Team</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateTeam
