import React, { useState, useEffect } from 'react'
import axios from 'axios'

function AddProject ({addProject}) {
  const [newProject, setNewProject] = useState({
    name:'',
    client:'',
    status:'',
    team:null
  })
  const [teams, setTeams] = useState([
    {
      id: null,
      team: "-----",
      name: "-----",
      client: "",
      status: ""
  }
  ])

  const authAxios = axios.create({
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    }
  })

  useEffect(()=>{
    let endpoint = '/api/v1/teams/list_create/'
    
    authAxios
    .get(endpoint)
    .then((res)=>setTeams(teams.concat(res.data)))
    .then(()=>setNewProject({...newProject,'team':teams[0].id}))
    .catch(()=>console.log('error in team list'))
  },[])

  const handleChange = (e) => {
    setNewProject({...newProject, [e.target.name]: e.target.value})
  }
  return (
    <div className='bg-green-100 rounded-xl mx-5 mt-5'>
        <div className='text-center pt-2 text-xl'>Add New Project</div>
      <form className='p-5' onSubmit={(e) => addProject(e, newProject, setNewProject)}>
        <div className='block sm:flex sm:space-x-2 sm:w-8/12 sm:m-auto'>
          <div className='sm:flex-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              
            >
              Project Name
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='name'
              type='text'
              placeholder='Project Name'
              onChange={(e)=>handleChange(e)}
              value={newProject.name}
              required
            />
          </div>
          <div  className='sm:flex-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              
            >
              Project Team
            </label>
            <div class="relative">
              <select class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-2
              px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="team"
              onChange={e=>handleChange(e)}
              value={newProject.team}
              >
                 {
                   teams && teams.map(({name, id})=>{
                     return(
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
        <div className='block sm:flex sm:space-x-2 sm:mt-5 sm:w-8/12 sm:m-auto'>
          <div  className='sm:flex-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              
            >
              Project Client
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='client'
              type='text'
              placeholder='Project Client'
              onChange={(e)=>handleChange(e)}
              value={newProject.client}
              required
            />
          </div>
          <div  className='sm:flex-1'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'
            >
              Project Status 
            </label>
            <input
              className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='status'
              type='text'
              placeholder='Project Status'
              onChange={(e)=>handleChange(e)}
              value={newProject.status}
              required
            />
          </div>
        </div>
        <button className='btn mt-10 m-auto flex' type='submit'>
            Add Project
        </button>
      </form>
    </div>
  )
}

export default AddProject
