
import Navbar from './components/Navbar'
import Mainroutes from './routes/Mainroutes'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-[#0A0E15] p-1'>
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App