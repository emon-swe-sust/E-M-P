import React, { useState, useEffect } from 'react'
import AddProject from './AddProject'
import Navbar from './Navbar'
import Update_Delete from './Update_Delete'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function Project() {
    const [projects, setProjects] = useState()
    const history = useHistory
    const authAxios = axios.create({
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
        }
    })

    const fetchList = () => {
        authAxios
            .get('/api/v1/projects/list/')
            .then((res) => setProjects(res.data))
            .catch(() => console.log('project list error'))
    }

    useEffect(() => {
        fetchList()
    }, [])

    const addProject = (e, newProject, setNewProject) =>{
        e.preventDefault();
        let body = JSON.stringify(newProject)
        console.log(body)
        authAxios
        .post('/api/v1/projects/create/',body)
        .then(()=>alert('Project Created Successfully'))
        .then(()=>{
            fetchList()
            setNewProject({...newProject,
                name:'',
                client:'',
                status:'',
            })
        })
        .catch(()=>alert('Error: select team name'))
    }

    const deleteProject = (id) => {
        authAxios
        .delete(`/api/v1/projects/update_delete/${id}/`)
        .then(()=>alert('Project Deleted'))
        .then(()=>fetchList())
        .catch(()=>console.log('delete error on project'))
    }

    return (
        <div>
            <Navbar />
            <div className='sm:w-9/12 sm:m-auto shadow-2xl bg-white'>
                <div
                    className='bg-indigo-300 text-2xl text-white block py-2 my-2
        mx-auto rounded-md'
                >
                    &nbsp; Projects
                </div>
                <AddProject addProject={addProject}/>
                <table className=" border-separate table-fixed w-full p-5 text-xs sm:text-base">
                    <thead>
                        <tr className='bg-blue-100 ml-auto '>
                            <th className='p-5'>Project Name</th>
                            <th>Project Team</th>
                            <th className='w-2/12'>Project Client</th>
                            <th>Project Status</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects && projects.map(({ id, name, client, status, team }) => {
                                return (
                                    <tr key={id} className='bg-blue-100 hover:bg-indigo-400 hover:text-white'>
                                        <td className='break-words py-3 px-2'>{name}</td>
                                        <td className='break-words px-2'>{team}</td>
                                        <td className='px-2'>{client}</td>
                                        <td className='px-2'>{status}</td>
                                        <td className='bg-blue-100'>
                                            <Update_Delete type={'project'} id={id} rows={projects} setRows={setProjects} deleteRow={deleteProject} />
                                        </td>
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

export default Project
