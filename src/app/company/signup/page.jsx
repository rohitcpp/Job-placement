import Btn from '../../../components/auth/btn';

import {
  FaUser,
  FaEye,
  FaEnvelope,
  FaArrowRight,
  FaGlobe,
} from 'react-icons/fa';
import Inputbox from '../../../components/auth/inputbox';
import Image from 'next/image';

const Signup = () => {
  return (
    <>
      <div className='flex w-screen h-screen bg-white flex-row'>
        <div className='flex w-[50%] h-screen bg-[#FDBE3B] justify-end items-center'>
          <div className='flex w-[90%] h-[70%] bg-[#F3F3F3]  rounded-l-xl items-center justify-center transform translate-x-2 '>
            <Image
              src='/company.svg'
              alt='Wide Image'
              layout='fill'
              className='w-full h-auto'
            />
          </div>
        </div>

        <div className='flex w-[50%] h-screen bg-[#F3F3F3] justify-start items-center  '>
          <div className='flex w-[90%] h-[70%] bg-white  rounded-r-xl items-center justify-center'>
            <div className='flex w-[90%] h-[80%]  flex-col items-center justify-around'>
              <h1 className='font-bold text-black text-3xl pb-1'>Sign up</h1>
              <div className='flex w-[100%]  items-center justify-center'>
                <Inputbox name='Company name' />
                <FaUser className='transform -translate-x-6 text-gray-500' />
              </div>
              <div className='flex w-[100%]  items-center justify-center'>
                <Inputbox name='Email' />
                <FaEnvelope className='transform -translate-x-6 text-gray-500' />
              </div>
              <div className='flex w-[100%]  items-center justify-center'>
                <Inputbox name='Password' />
                <FaEye className='transform -translate-x-6 text-gray-500' />
              </div>
              <div className='flex w-[100%]  items-center justify-center'>
                <Inputbox name='Confirm password' />
                <FaEye className='transform -translate-x-6 text-gray-500' />
              </div>
              <div className='flex w-[100%]  items-center justify-center'>
                <Inputbox name='xyz.com' />
                <FaGlobe className='transform -translate-x-6 text-gray-500' />
              </div>
              <div className='flex w-[100%]  items-center justify-center'>
                <Btn ButtonName='Sign up' color='#FDBE3B' />
                <FaArrowRight className='transform -translate-x-6 text-white' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
