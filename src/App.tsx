import { useRef, useState } from 'react'
import classNames from 'utils/classNames'

const App = () => {
  const loginScreen = useRef<HTMLDivElement>(null),
        schools: { [school: string]: string } = {
          'Baulkham Hills High School'         : 'hover:bg-orange-400',
          'Girraween High School'              : 'hover:bg-amber-400',
          'Hornsby Girls High School'          : 'hover:bg-blue-400',
          'James Ruse Agricultural High School': 'hover:bg-green-400'
        },
        [ currentSchool, setCurrentSchool ] = useState('')


  return <>
    <div className='h-full text-center select-none overflow-hidden'>
      <div className='grid place-content-center py-4 h-full bg-yellow-400 text-white transition-transform ease-in-out duration-[2s] relative z-10' ref={loginScreen}>
        <div className='flex flex-col gap-4 sm:gap-8 sm:rounded-2xl sm:shadow-2xl sm:p-8'>
          <header className='flex flex-col gap-4 sm:gap-8'>
            <img className='w-24 h-24 sm:w-36 sm:h-36 bg-white rounded-2xl mx-auto shadow-2xl' />
            <h1 className='text-5xl sm:text-6xl'>Classy</h1>
          </header>
          <div className='flex flex-col gap-4 sm:gap8 sm:text-xl'>
            <span className='text-lg sm:text-2xl'>Choose your school below to get started!</span>
            <ul className='bg-yellow-500 rounded-2xl shadow-2xl p-4 divide-y [&>li:first-child>div]:rounded-t-2xl [&>li:last-child>div]:rounded-b-2xl'>
              {
                Object.entries(schools).map(
                  ([ school, hoverStyle ]) => <li key={school}>
                    <div
                      className={classNames(
                        'transition-all p-4 hover:font-medium',
                        hoverStyle
                      )}
                      onClick={event => {
                        loginScreen.current!.className += ' translate-x-[100%]'
                        setCurrentSchool(event.currentTarget.textContent!)
                      }}
                    >
                      {school}
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
