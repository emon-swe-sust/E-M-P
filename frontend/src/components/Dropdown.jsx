import React, {useState} from 'react'

function Dropdown ({dropNew, setDropNew}) {

  // ei method use korar jonno, ekta function pathate hobe je 
  // function selected id er jonno use kora hobe, eta ekhono
  // implement kora hoy nai

  return (
    <div className='relative inline-block text-left w-full'>
      <div>
        <button
          type='button'
          className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
          aria-expanded='true'
          aria-haspopup='true'
          onClick={()=>setDropNew(!dropNew)}
        >
          Options
          <svg
            className='-mr-1 ml-2 h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fill-rule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clip-rule='evenodd'
            />
          </svg>
        </button>
      </div>

      {
          dropNew && <div
          className='origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabindex='-1'
        >
          <div className='py-1 w-' role='none'>
            <button className="text-gray-700 block px-4 py-2 text-sm">
                DPE
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default Dropdown
