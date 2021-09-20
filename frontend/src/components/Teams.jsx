import React, { useState, useEffect } from 'react'
import AddTeam from './AddTeam'
import Navbar from './Navbar'
import Update_Delete from './Update_Delete'
import axios from 'axios'

function Teams() {
    const [teams, setTeams] = useState()
    const authAxios = axios.create({
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
        }
    })

    const fetchData = () => {
        authAxios
            .get('/api/v1/teams/list_create/')
            .then(res => {
                setTeams(res.data)
                console.log(res.data)
            })
            .catch(err => console.log('something went wrong in team list', err))
    }

    const addTeam = (e, newTeam, setNewTeam) => {
        e.preventDefault()
        let endpoint = "/api/v1/teams/list_create/"
        let body = JSON.stringify(newTeam)
        const authAxios = axios.create({
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
          }
        })
        authAxios
        .post(endpoint, body)
        .then(()=>alert('Team Created'))
        .then(()=>{
            setNewTeam({
            name:'',
            floor:'',
            room:'',
            is_active:''
          })
        })
        .then(()=>fetchData())
        .catch(err=>{
          console.log('something went wrong in add teams',err)
        })
    }

    const deleteTeam = (id) => {
        authAxios
        .delete(`/api/v1/teams/update_delete/${id}`)
        .then(()=>{
            fetchData();
            alert('Team deleted')
        })
        .catch((err)=>'problem in deleting items')
    }

    useEffect(() => {
        fetchData();
    },[])

    return (
        <div>
            <Navbar />
            <div className='sm:w-9/12 sm:m-auto shadow-2xl bg-white'>
                <div
                    className='bg-indigo-300 text-2xl text-white block py-2 my-2
        mx-auto rounded-md'
                >
                    &nbsp; Teams
                </div>

                {/* Add Teams */}
                <AddTeam addTeam={addTeam}/>

                {/* Teams Table */}
                <table className=" border-separate table-fixed w-full p-5 text-xs sm:text-base">
                    <thead>
                        <tr className='bg-blue-100 ml-auto '>
                            <th className='p-5'>Team Name</th>
                            <th>Team Floor</th>
                            <th className='w-2/12'>Team Room</th>
                            <th>Member Count</th>
                            <th>Is Active</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            teams && teams.map(({id, name, floor, room, is_active, member_count}) => {
                                return (
                                    <tr key={id} className='border-blue-700 border-2 bg-blue-100 hover:bg-indigo-400
                                    hover:text-white'>
                                        <td className='break-words px-2 py-3'>
                                            {name}
                                        </td>
                                        <td className='break-word px-2'>
                                            {floor}
                                        </td>
                                        <td className='px-2'>
                                            {room}
                                        </td>
                                        <td className='px-2'>
                                            {member_count}
                                        </td>
                                        <td className='px-2'>
                                            {is_active}
                                        </td>
                                        <td className='bg-blue-100'>
                                            <Update_Delete type={'team'} id={id} rows={teams} setRows={setTeams} deleteRow={deleteTeam} />
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

export default Teams
