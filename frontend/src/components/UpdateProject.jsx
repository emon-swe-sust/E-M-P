import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
import Project from './Project'

function UpdateProject() {
  const [dropNew, setDropNew] = useState(false)
  const history = useHistory()
  const { id } = useParams()

  const [updateProject, setupdateProject] = useState({
    name: '',
    client: '',
    status: '',
    team: null
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

    // authAxios
    // .get(endpoint)
    // .then((res)=>setTeams(res.data))
    // .then(()=>setupdateProject({...updateProject,'team':teams[0].id}))
    // .catch(()=>console.log('error in team list'))

    authAxios
      .get(`/api/v1/projects/update_delete/${id}/`)
      .then((res) => setupdateProject(res.data))
      .catch(() => console.log('error'))

  }, [])

  const handleChange = (e) => {
    setupdateProject({ ...updateProject, [e.target.name]: e.target.value })
  }


  const handleUpdateProject = (e) => {
    e.preventDefault();
    let body = JSON.stringify(updateProject)
    authAxios
      .put(`/api/v1/projects/update_delete/${id}/`, body)
      .then(() => alert('Project Updated'))
      .then(() => history.push('/projects/'))
      .catch(() => console.log('project update error'))
  }

  return (
    <div>
      <Navbar />
      <div className='sm:w-9/12 sm:m-auto shadow-2xl bg-green-100'>

        <div className='bg-green-100 rounded-xl m-5'>
          <div className='text-center pt-2 text-xl'>Update Project</div>
          <form className='p-5' onSubmit={e => handleUpdateProject(e)}>
            <div className='block sm:flex sm:space-x-2 sm:w-8/12 sm:m-auto'>
              <div className='sm:flex-1'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='username'
                >
                  Project Name
                </label>
                <input
                  className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='name'
                  type='text'
                  placeholder='Project Name'
                  value={updateProject.name}
                  onChange={e => handleChange(e)}
                />
              </div>
              <div className='sm:flex-1'>
                  <label
                    className='text-gray-700 font-bold block text-sm mb-2'
                    htmlFor='username'
                  >
                    Project Team:
                  </label>
                    {
                      updateProject.team && 
                      <input
                      className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-white focus:shadow-outline'
                      name='name'
                      type='text'
                      placeholder={updateProject.team}
                      disabled
                      />
                    }

              </div>
            </div>
            <div className='block sm:flex sm:space-x-2 sm:mt-5 sm:w-8/12 sm:m-auto'>
              <div className='sm:flex-1'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='username'
                >
                  Project Client
                </label>
                <input
                  className='shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  name='client'
                  type='text'
                  placeholder='Project Client'
                  value={updateProject.client}
                  onChange={e => handleChange(e)}
                />
              </div>
              <div className='sm:flex-1'>
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
                  value={updateProject.status}
                  onChange={e => handleChange(e)}
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

export default UpdateProject
