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
        <div className='flex flex-col gap-4'>
          <img className='w-24 h-24 bg-white rounded-2xl mx-auto shadow-xl' />
          <h1 className='text-4xl'>Classy</h1>
        </div>
        <div className='flex flex-col gap-4'>
          Choose your school below to get started!
          <ul className='bg-white divide-y rounded-2xl'>
            {
              schools.map(school => <li className='p-4 font-medium transition'>{school}</li>)
            }
          </ul>
        </div>
      </div>
    </div>
  </>
}

export default App
