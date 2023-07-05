import Background from '../assets/images/background.jpg';
import { Link } from 'react-router-dom'
import AuthChecker from '../auth/AuthChecker';

function Home() {
  return (
    <AuthChecker>
      <div 
        style={{ backgroundImage: `url(${ Background })`}} 
        className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
        >
          <div className='flex place-items-center h-screen'>
            <Link to="/dashboard" className='text-white bg-black bg-opacity-70 text-4xl'>
                Browse the Inventory
            </Link>
          </div>
      </div>
    </AuthChecker>
  )
}

export default Home