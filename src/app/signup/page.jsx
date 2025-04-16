import Btn from '../../components/auth/btn';
import Inputbox from '../../components/auth/inputbox';
import { FaUser, FaEye, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const Signup = () => {
  return (
    <>
      <div className='flex w-screen h-screen bg-white flex-row'>
        <div className='flex w-[50%] h-screen bg-[#d9e9fc] justify-end items-center'>
          <div className='flex w-[90%] h-[70%] bg-white  rounded-l-xl items-center justify-center'>
            <div className='flex w-[90%] h-[80%]  flex-col items-center justify-around'>
              <h1 className='font-bold text-black text-3xl pb-1'>Sign up</h1>
              <div className='flex w-[100%]  items-center justify-center'>
                <Inputbox name='Username' />
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
                <Inputbox name='Name' />
                <FaUser className='transform -translate-x-6 text-gray-500' />
              </div>
              <div className='flex w-[100%]  items-center justify-center'>
                <Btn ButtonName='Sign up' color='#191970' />
                <FaArrowRight className='transform -translate-x-6 text-white' />
              </div>
            </div>
          </div>
        </div>

        <div className='flex w-[50%] h-screen bg-[#191970] justify-start items-center  '>
          <div className='flex w-[90%] h-[70%] bg-blue-100  rounded-r-xl items-center justify-center transform -translate-x-2 '>
            <img src='/login.png' alt='' className='w-[85%] h-[80%]' />
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
