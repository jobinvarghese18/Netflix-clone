
import Img from 'next/image';
export const Header = () => {
  return (
    <div className='flex flex-row items-center space-x-2 md:space-x-10'>
        <div className=''>
            <Img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                width={100}
                height={100}
                className="cursor-pointer object-contain"
                alt='logo'
            />
        </div>

        <ul className='hidden md:flex flex-row space-x-4'>
            <li className='headerLink'> Home </li>
            <li className='headerLink'> Tv Shows </li>
            <li className='headerLink'> Movies </li>
            <li className='headerLink'> New & Popular</li>
            <li className='headerLink'> My List </li>
        </ul>
    </div>
    )
  }