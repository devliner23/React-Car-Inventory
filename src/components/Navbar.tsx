import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const dropDown = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className='flex items-center justify-between flex-wrap bg-stone-900 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <Link to='/' className='font-semibold text-xl tracking-tight'>
          Car Inventory
        </Link>
      </div>
      <div className='flex items-center'>
        {isVisible && (
          <div className='ml-2'>
            <div className='text-sm lg:flex-grow'>
              <Button className='p-3 m-5 bg-stone-900 justify-center'>
                <div>
                  <Link
                    to='/'
                    className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-stone-300 hover:text-white mr-4'
                  >
                    Home
                  </Link>
                </div>
              </Button>
              <Button className='p-3 m-5 bg-stone-900 justify-center'>
                <div>
                  <Link
                    to='/Dashboard'
                    className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-stone-300 hover:text-white mr-4'
                  >
                    Dashboard
                  </Link>
                </div>
              </Button>
              <Button className='p-3 m-5 bg-stone-900 justify-center'>
                <div>
                  <Link
                    to='/About'
                    className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-stone-300 hover:text-white mr-4'
                  >
                    Sign-In
                  </Link>
                </div>
              </Button>
            </div>
          </div>
        )}
        <button
          onClick={dropDown}
          className='flex items-center px-3 py-2 text-teal-200 border rounded border-stone-800 hover:text-white hover:border-white'
        >
          <i class="fas fas-list-tree"></i>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
