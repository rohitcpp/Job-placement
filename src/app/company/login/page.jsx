import Link from 'next/link';
import { FaEye, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import Inputbox from '../../../components/auth/inputbox';
import Btn from '../../../components/auth/btn';
import Image from 'next/image';

const Login = () => {
  return (
    <>
      <div className='flex w-screen h-screen bg-white flex-row'>
        <div className='flex w-[50%] h-screen bg-[#FDBE3B] justify-end items-center'>
          <div className='flex w-[90%] h-[70%] bg-[#F3F3F3]  rounded-l-xl items-center justify-center transform translate-x-2 '>
            <Image
              src='/company.svg'
              alt='Wide Image'
              layout='fill'
              className='w-full h-auto '
            />
          </div>
        </div>
        <div className='flex w-[50%] h-screen bg-[#F3F3F3] justify-start items-center  '>
          <div className='flex w-[90%] h-[70%] bg-white  rounded-r-xl items-center justify-center '>
            <div className='flex w-[90%] h-[70%]  flex-col items-center justify-around'>
            <Image
             src='/logo.png' 
             alt='Company Logo'
             width={150} 
             height={150} 
             className='mb-4' 
             />
              <h1 className='font-bold text-black text-3xl pb-1'>
                Welcome Back
              </h1>
              <div className='flex w-[100%] items-center justify-center'>
                <Inputbox name='email' />
                <FaEnvelope className='transform -translate-x-6 text-gray-500' />
              </div>
              <div className='flex w-[100%]  items-center justify-center'>
                <Inputbox name='Password' />
                <FaEye className='transform -translate-x-6 text-gray-500' />
              </div>
              <div className='flex w-[67%] justify-end items-end '>
                <p>
                  <Link
                    href='/forgetPassword'
                    className='text-blue-400 underline'>
                    Forget password?
                  </Link>
                </p>
              </div>
              <div className='flex w-[100%]  items-center justify-center'>
                <Btn ButtonName='login' color='#FDBE3B' />
                <FaArrowRight className='transform -translate-x-6 text-white' />
              </div>
              <p className='font-medium text-black'>
                Don't have an account?
                <Link
                  href='/company/signup'
                  className='text-blue-400 underline'>
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
