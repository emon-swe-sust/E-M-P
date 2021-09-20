import React, { useState, useEffect } from 'react'
import AddHoliday from './AddHoliday'
import Navbar from './Navbar'
import Update_Delete from './Update_Delete'
import axios from 'axios'

function Holidays() {
    const [holidays, setHolidays] = useState([])

    const authAxios = axios.create({
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
        }
    })

    const fetchHolidayList = () => {
        authAxios
            .get('/api/v1/holidays/list_create/')
            .then((res) => setHolidays(res.data))
            .catch(() => console.log('holiday list fetching error'))
    }

    useEffect(() => {
        fetchHolidayList();
    }, [])

    const addHoliday = (e, newHoliday, setNewHoliday) => {
        e.preventDefault()
        let body = JSON.stringify(newHoliday)
        console.log(body)
        authAxios
            .post('/api/v1/holidays/list_create/', body)
            .then(() => alert('holiday Created'))
            .then(() => fetchHolidayList())
            .then(() => setNewHoliday({
                name: '',
                details: '',
                start_date: '',
                end_date: '',
                holiday_type: '',
                year: ''
            }))
            .catch(() => alert('Holiday with same credentials already exists'))
    }

    const deleteHoliday = (id) => {
        authAxios
            .delete(`/api/v1/holidays/update_delete/${id}/`)
            .then(() => fetchHolidayList())
            .then(() => alert('Holiday deleted'))
            .catch(() => console.log('holiday delete error'))
    }

    return (
        <div>
            <Navbar />
            <div className='sm:w-9/12 sm:m-auto shadow-2xl bg-white'>
                <div
                    className='bg-indigo-300 text-2xl text-white block py-2 my-2
        mx-auto rounded-md'
                >
                    &nbsp; Holidays
                </div>
                <AddHoliday addHoliday={addHoliday} />
                <table className=" border-separate table-fixed w-full p-5 text-xs sm:text-base">
                    <thead>
                        <tr className='bg-blue-100 ml-auto '>
                            <th className='p-5'>Name</th>
                            <th>Details</th>
                            <th className='w-2/12'>Start Date</th>
                            <th>End Date</th>
                            <th>Type</th>
                            <th>Year</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            holidays &&
                            holidays.map(({ id, name, details, start_date, end_date, holiday_type, year }) => {
                                return (
                                    <tr key={id} className='bg-blue-100 hover:bg-indigo-400 hover:text-white'>
                                        <td className='break-words py-3 px-2'>{name}</td>
                                        <td className='break-words px-2'>{details}</td>
                                        <td className='px-2'>{start_date}</td>
                                        <td className='px-2'>{end_date}</td>
                                        <td className='px-2'>{holiday_type}</td>
                                        <td className='px-2 '>{year}</td>
                                        <td className='bg-blue-100'>
                                            <Update_Delete type={'holiday'} id={id} rows={holidays} setRows={setHolidays} deleteRow={deleteHoliday} />
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

export default Holidays
