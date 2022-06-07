import Img from 'next/image';
import { BellIcon, SearchIcon } from '@heroicons/react/solid';
import { Link } from '../../1-atoms/Link';

export const Header = () => {
    const myLoader = () => {
        return `https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg`;
    };
    const myLoader1 = () => {
        return `https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41`;
    };
    return (
        <header>
            <div className="flex items-center space-x-2 md:space-x-10">
                <Img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                    alt="logo"
                    loader={myLoader}
                />

                <ul className="hidden md:flex flex-row space-x-4">
                    <li className="headerLink"> Home </li>
                    <li className="headerLink"> Tv Shows </li>
                    <li className="headerLink"> Movies </li>
                    <li className="headerLink"> New & Popular</li>
                    <li className="headerLink"> My List </li>
                </ul>
            </div>


            <div className='flex items-center space-x-4 text-sm font-light'>
                <SearchIcon className='hidden h-6 w-6 sm:inline' />
                <p className='hidden lg:inline'>Kids</p>
                <BellIcon className='h-6 w-6' />

                <Link to='/account'>
                    <Img
                        src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                        alt=""
                        className="cursor-pointer rounded"
                        width={20}
                        height={20}
                        loader={myLoader1}
                    />
                </Link>
            </div>
        </header>
    );
};
