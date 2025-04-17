import Btn from '../../components/auth/btn';
import Inputbox from '../../components/auth/inputbox';
import Link from 'next/link';
import { FaEye, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Login = () => {
  return (
    <>
      <div className='flex w-screen h-screen bg-white flex-row'>
        <div className='flex w-[50%] h-screen bg-[#d9e9fc] justify-end items-center'>
          <div className='flex w-[90%] h-[70%] bg-white  rounded-l-xl items-center justify-center '>
            <div className='flex w-[90%] h-[75%]  flex-col items-center justify-around'>
              <Image
                src='/logo.png' 
                alt='Company Logo'
                width={150} 
                height={150} 
                className='mb-4' 
                />
              <h1 className='font-bold text-black text-3xl pb-5'>
                Welcome Back
              </h1>
              <div className='flex w-[100%] items-center justify-center'>
                <Inputbox name='Email' />
                <FaEnvelope className='transform -translate-x-6 text-gray-500' />
              </div><br/>
              <div className='flex w-[100%]  items-center justify-center'>
                <Inputbox name='Password' />
                <FaEye className='transform -translate-x-6 text-gray-500' />
              </div>
              <div className='flex w-[60%] justify-end items-end '>
                <p>
                  <Link
                    href='/forgetPassword'
                    className='text-blue-400 underline'>
                    Forget password?
                  </Link>
                </p>
              </div>
              <div className='flex w-[100%]  items-center justify-center'>
                <Btn ButtonName='Login' color='#191970' />
                <FaArrowRight className='transform -translate-x-6 text-white' />
              </div>
              <p className='font-medium text-black'>
                Don't have an account?
                <Link href='/signup' className='text-blue-400 underline'>
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className='relative flex w-[50%] h-screen bg-[#191970] justify-start items-center '>
          <div className='relative flex w-[90%] h-[70%] bg-blue-50  rounded-r-xl items-center justify-center transform -translate-x-2 '>
            <Image
              src='/login.png'
              alt='Wide Image'
              width={1200}
              height={600}
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
