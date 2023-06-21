const App = () => {
  const schools = [
    'Baulkham Hills High School',
    'James Ruse Agricultural High School',
    'Girraween High School',
    'Hornsby Girls High School'
  ]
  return <>
    <div className='grid place-content-center py-4 h-full bg-yellow-400 text-center select-none'>
      <div className='flex flex-col gap-4 sm:gap-8 sm:rounded-2xl sm:shadow-2xl sm:p-8'>
        <header className='flex flex-col gap-4 sm:gap-8'>
          <img className='w-24 h-24 sm:w-36 sm:h-36 bg-white rounded-2xl mx-auto shadow-2xl' />
          <h1 className='text-5xl sm:text-6xl'>Classy</h1>
        </header>
        <div className='flex flex-col gap-4 sm:gap-8 sm:text-xl'>
          <span className='text-lg sm:text-2xl'>Choose your school below to get started!</span>
          <ul className='bg-white rounded-2xl shadow-2xl p-4 divide-y [&>li:first-child>div]:rounded-t-2xl [&>li:last-child>div]:rounded-b-2xl'>
            {
              schools.map(
                school => <li className='font-medium'>
                  <div className='hover:bg-gray-200 transition p-4'>{school}</div>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  </>
}

export default App
