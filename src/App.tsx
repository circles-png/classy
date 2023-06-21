const App = () => {
  const schools = [
    'Baulkham Hills High School',
    'James Ruse Agricultural High School',
    'Girraween High School',
    'Hornsby Girls High School'
  ]
  return <>
    <div className='grid place-content-center h-full bg-yellow-400 text-center select-none'>
      <div className='flex flex-col gap-4'>
        <header className='flex flex-col gap-4'>
          <img className='w-24 h-24 bg-white rounded-2xl mx-auto shadow-xl' />
          <h1 className='text-4xl'>Classy</h1>
        </header>
        <div className='flex flex-col gap-2'>
          Choose your school below to get started!
          <ul className='bg-white rounded-2xl shadow-xl p-2 divide-y [&>li:first-child>div]:rounded-t-2xl [&>li:last-child>div]:rounded-b-2xl'>
            {
              schools.map(
                school => <li className='font-medium'>
                  <div className='hover:bg-gray-100 transition p-4'>{school}</div>
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
