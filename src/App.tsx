import { CheckCircleIcon, MapPinIcon } from '@heroicons/react/24/solid'
import classNames from 'utils/classNames'
import { useState } from 'react'

const App = () => {
  const schools = [
    {
      hoverStyle: 'hover:border-[#f67e03] hover:border-4',
      location  : 'Baulkham Hills',
      name      : 'Baulkham Hills High School'
    },
    {
      hoverStyle: 'hover:border-[#fbd017] hover:border-4',
      location  : 'Girraween',
      name      : 'Girraween High School'
    },
    {
      hoverStyle: 'hover:border-[#020380] hover:border-4',
      location  : 'Hornsby',
      name      : 'Hornsby Girls High School'
    },
    {
      hoverStyle: 'hover:border-[#094632] hover:border-4',
      location  : 'Carlingford',
      name      : 'James Ruse Agricultural High School'
    }
  ],
        [ currentSchool, setCurrentSchool ] = useState('')

  return <>
    <div className='h-full text-center select-none overflow-clip'>
      <div className={classNames(
        'grid place-content-center py-4 h-full bg-classy-300 text-white transition-transform ease-in-out duration-[3s] relative z-10',
        currentSchool === ''
          ? 'translate-x-0'
          : 'translate-x-[100%]'
      )}>
        <div className='flex flex-col gap-4 sm:gap-8 sm:rounded-2xl sm:shadow-2xl sm:p-8'>
          <header className='flex flex-col gap-4 sm:gap-8'>
            <img className='w-24 h-24 sm:w-36 sm:h-36 bg-white rounded-2xl mx-auto shadow-2xl' />
            <h1 className='text-5xl sm:text-6xl'>Classy</h1>
          </header>
          <div className='flex flex-col gap-4 sm:gap8 sm:text-xl'>
            <span className='text-lg sm:text-2xl'>Choose your school below to get started!</span>
            <ul className='bg-classy-200 text-classy-800 rounded-2xl'>
              {
                Object.entries(schools).map(
                  ([ , { hoverStyle, location, name } ]) => <li key={name}>
                    <div
                      className={classNames(
                        'transition-all p-4 rounded-2xl m-4 flex justify-between items-center',
                        hoverStyle,
                        currentSchool === name
                          ? 'border-green-400 border-4 bg-classy-50'
                          : 'bg-classy-100'
                      )}
                      onClick={() => {
                        if (currentSchool !== '')
                          return
                        setCurrentSchool(name)
                      }}
                    >
                      <div className='flex flex-col'>
                        <span>
                          {name}
                        </span>
                        <span className='items-center flex gap-2 text-classy-400'>
                          <MapPinIcon className='inline-block w-6 h-6' />
                          {location}
                        </span>
                      </div>
                      {
                        currentSchool === name
                          ? <CheckCircleIcon className='inline-block w-8 h-8 text-green-400' />
                          : null
                      }
                    </div>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
      <main className='grid place-content-center h-full absolute top-0 w-full'>
        content (school: {currentSchool})
      </main>
    </div>
  </>
}

export default App
