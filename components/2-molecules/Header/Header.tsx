
import Img from 'next/image';
export const Header = () => {
  return (
    <div className='flex flex-row items-center'>
        <div className='pr-3 md:px-10'>
            <Img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                width={100}
                height={100}
                className="cursor-pointer object-contain"
                alt='logo'
            />
        </div>

        <div>
            Menu
        </div>
    </div>
    )
  }