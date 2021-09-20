import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Link, useHistory } from 'react-router-dom'
import AddEmployee from './AddEmployee';
import axios from 'axios'

function Employee() {
    const history = useHistory();
    const [employeeList, setEmployeeList] = useState([]);

    const authAxios = axios.create({
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
        }
    })

    const fetchEmployee = () => {
        let endpoint = '/api/v1/employees/list/'
        authAxios
            .get(endpoint)
            .then((res) => {
                setEmployeeList(res.data)
                console.log('list   ', res)
            })
            .catch(() => console.log('error in fetching employee list'))
    }

    const createNewEmployee = (e, newEmployee, setNewEmployee) => {
        e.preventDefault()
        let endpoint = '/api/v1/employees/create/'
        let body = JSON.stringify(newEmployee)
        console.log('new employee', newEmployee)
        authAxios
            .post(endpoint, body)
            .then(() => alert('New Employee Created'))
            .then(() => setNewEmployee({...newEmployee,
                "name": "",
                "gender": "",
                "date_of_birth": "",
                "email": "",
                "role": "",
                "status": "",
                "joining_date": "",
                "designation": "",
                "phone_no": "",
            }))
            .then(() => fetchEmployee())
            .catch(() => console.log('creating new employee error'))
    }


    useEffect(() => {
        fetchEmployee()
    }, [])


    return (
        <div>
            {
                localStorage.getItem('token') ? (
                    <div>
                        <Navbar />
                        <div className='sm:w-9/12 sm:m-auto shadow-2xl bg-white'>
                            <div
                                className='bg-indigo-300 text-2xl text-white flex py-2 my-2
                    mx-auto rounded-md'
                            >
                                &nbsp; Employee List
                            </div>
                            <AddEmployee createNewEmployee={createNewEmployee} />
                            <div className=" p-10">
                                {
                                    employeeList && employeeList.map(({ id, name }) => {
                                        return (
                                            <div key={id} className='bg-indigo-100 px-5 py-3 rounded-md font-medium 
                                                text-xl w-full flex my-2 shadow-md border-2 border-blue-300 hover:border-blue-700'>
                                                <div className='py-2'>
                                                    {name}
                                                </div>
                                                <button
                                                    className="btn"
                                                >
                                                    <Link to={`/employee/details/${id}`}>
                                                        Details
                                                    </Link>
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                ) : (
                    history.push('/')
                )
            }

        </div>
    )
}

export default Employee;
