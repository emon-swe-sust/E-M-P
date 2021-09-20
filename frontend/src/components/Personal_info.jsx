import React, { useEffect, useState } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

function Personal_info() {
  const [empDetails, setEmpDetails] = useState({})
  const { id } = useParams()
  const history = useHistory()

  const authAxios = axios.create({
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json",
    }
  })

  const deleteEmployee = (e) => {
    e.preventDefault()
    authAxios
    .delete(`/api/v1/employees/update_delete_details/${id}/`)
    .then(()=>alert('Employee Deleted'))
    .then(()=>history.push('/employees/'))
    .catch(()=>console.log('something went wrong in employee delete'))
  }

  useEffect(() => {
    authAxios
      .get(`/api/v1/employees/update_delete_details/${id}/`)
      .then((res) => {
        setEmpDetails(res.data)
        console.log(res.data)
      })
      .catch(() => console.log('error in fetching personal details'))
  }, [])

  return (
    <div>
      <div className='sm:w-9/12 sm:m-auto shadow-2xl bg-white'>
        <div
          className='bg-indigo-300 text-2xl text-white block py-2 my-2
        mx-auto rounded-md'
        >
          &nbsp; Personal Information
        </div>
        <div className='sm:flex p-5'>
          {/* left Side */}
          <div className='flex-1'>
            <div className='font-semibold sm:w-10/12 lg:w-8/12 m-auto'>
              Employee No
              <div className=' profile-info'>
                {
                  id && <>{id}</>
                }
              </div>
            </div>

            <div className='mt-3 font-semibold sm:w-10/12 lg:w-8/12 m-auto'>
              Name
              <div className='profile-info'>
                {
                  empDetails && <>{empDetails.name}</>
                }
              </div>
            </div>
            <div className='mt-3 font-semibold sm:w-10/12 lg:w-8/12 m-auto'>
              Gender
              <div className='profile-info'>
                {
                  empDetails && <>{empDetails.gender}</>
                }
              </div>
            </div>
            <div className='mt-3 font-semibold sm:w-10/12 lg:w-8/12 m-auto'>
              Date of Birth
              <div className='profile-info'>
                {
                  empDetails && <>{empDetails.date_of_birth}</>
                }
              </div>
            </div>
            <div className='mt-3 font-semibold sm:w-10/12 lg:w-8/12 m-auto'>
              Team
              <div className='profile-info'>
                {
                  empDetails && <>{empDetails.team}</>
                }
              </div>
            </div>

            <div className='mt-3 font-semibold  sm:w-10/12 lg:w-8/12 m-auto'>
              <input
                type='checkbox'
                className='shadow-md form-checkbox text-pink-600'
                checked
              />
              <span class='ml-2'>Is Active</span>
            </div>
          </div>
          {/* Right Side */}
          <div className='sm:flex-1'>
            <div className='font-semibold sm:w-10/12 lg:w-8/12 m-auto'>
              Role
              <div className='profile-info'>
                {
                  empDetails && <>{empDetails.role}</>
                }
              </div>
            </div>

            <div className='mt-3 font-semibold sm:w-10/12 lg:w-8/12 m-auto '>
              Status
              <div className='profile-info'>
                {
                  empDetails && <>{empDetails.status}</>
                }
              </div>
            </div>
            <div className='mt-3 font-semibold sm:w-10/12 lg:w-8/12 m-auto '>
              Joining Date
              <div className='profile-info'>
                {
                  empDetails && <>{empDetails.joining_date}</>
                }
              </div>
            </div>
            <div className='mt-3 font-semibold sm:w-10/12 lg:w-8/12 m-auto'>
              Designation
              <div className='profile-info'>
                {
                  empDetails && <>{empDetails.designation}</>
                }
              </div>
            </div>
            <div className='font-semibold sm:w-10/12 lg:w-8/12 m-auto mt-5 flex'>
              <Link to={`/update/employee/${id}/`}>
                <button
                  className='ml-auto bg-green-400 py-2
                          rounded-xl px-5 text-white hover:-translate-y-1
                          transition transform shadow-xl hover:opacity-75
                        } m-auto'
                >
                  Update
                </button>
              </Link>
              <button
                className='mr-auto bg-red-400 py-2
                            rounded-xl px-5 text-white hover:-translate-y-1
                            transition transform shadow-xl hover:opacity-75
                          } m-auto'
                onClick={e=>deleteEmployee(e)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className='sm:w-9/12 sm:m-auto shadow-2xl bg-white pb-2'>
        <div
          className='bg-indigo-300 text-2xl text-white block py-2 my-2
        mx-auto rounded-md'
        >
          &nbsp; Contact
        </div>
        <div className='sm:flex p-5'>
          <div className='flex-1'>
            <div className='font-semibold sm:w-10/12 lg:w-8/12 m-auto'>
              Email
              <div className=' profile-info'>
                {
                  empDetails && <>{empDetails.email}</>
                }
              </div>
            </div>
          </div>
          {/* right-side  */}
          <div className='flex-1'>
            <div className='mt-3 sm:mt-0 font-semibold sm:w-10/12 lg:w-8/12 m-auto'>
              Phone
              <div className=' profile-info'>
                {
                  empDetails && <>{empDetails.phone_no}</>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leave Summary */}
      <div className='sm:w-9/12 sm:m-auto shadow-2xl bg-white pb-2'>
        <div
          className='bg-indigo-300 text-2xl text-white block py-2 my-2
        mx-auto rounded-md'
        >
          &nbsp; Leave Summary
        </div>
        <div className='sm:flex p-5'>
          <div className='flex-1'>
            <div className='font-semibold sm:w-10/12 lg:w-8/12 m-auto'>
              Total
              <div className=' profile-info'>
              {
                  empDetails && <>{empDetails.sick_count+
                  empDetails.casual_count+
                  empDetails.others_count}</>
                }
              </div>
            </div>
            <div className='mt-3 font-semibold sm:w-10/12 lg:w-8/12 m-auto'>
            Casual
              <div className=' profile-info'>
              {
                  empDetails && <>{empDetails.casual_count}</>
                }
              </div>
            </div>
          </div>
          {/* right-side  */}
          <div className='flex-1'>
            <div className='mt-3 font-semibold sm:w-10/12 lg:w-8/12 m-auto'>
              Sick
              <div className=' profile-info'>
              {
                  empDetails && <>{empDetails.sick_count}</>
                }
              </div>
            </div>
            <div className='font-semibold mt-3 sm:w-10/12 lg:w-8/12 m-auto'>
              Other
              <div className='profile-info'>
              {
                  empDetails && <>{empDetails.others_count}</>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Personal_info
