import React, { useState } from 'react'

function AddTeam ({addTeam}) {
  const [newTeam, setNewTeam] = useState({
    name:'',
    floor:'',
    room:'',
    is_active:''
  })

  function handleNewTeam (e) {
    setNewTeam({...newTeam,[e.target.name]: e.target.value})
  }

  return (
    <div className='bg-green-100 rounded-xl mx-5 mt-5'>
        <div className='text-center pt-2 text-xl'>Add New Team</div>
      <form className='p-5' onSubmit={e=>addTeam(e, newTeam, setNewTeam)}>
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
              name='name'
              type='text'
              placeholder='Team Name'
              onChange={e=>handleNewTeam(e)}
              required
              value={newTeam.name}
            />
          </div>
          <div  className='sm:flex-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'
            >
              Team Floor
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='floor'
              type='text'
              placeholder='Team Floor'
              onChange={e=>handleNewTeam(e)}
              required
              value={newTeam.floor}
            />
          </div>
        </div>
        <div className='block sm:flex sm:space-x-2 sm:mt-5 sm:w-8/12 sm:m-auto'>
          <div  className='sm:flex-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'
            >
              Team Room
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='room'
              type='text'
              placeholder='Team Room'
              onChange={e=>handleNewTeam(e)}
              required
              value={newTeam.room}
            />
          </div>
          <div  className='sm:flex-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'
            >
              Is Active
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='is_active'
              type='text'
              placeholder='Is Active'
              onChange={e=>handleNewTeam(e)}
              required
              value={newTeam.is_active}
            />
          </div>
        </div>
        <button className='btn mt-10 m-auto flex' type='submit'>
            Add Team
        </button>
      </form>
    </div>
  )
}

export default AddTeam
