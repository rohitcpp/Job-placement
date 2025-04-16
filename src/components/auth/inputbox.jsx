const Inputbox = ({ name }) => {
  return (
    <>
      <input
        type='text'
        placeholder={name}
        className='border-1 border-gray-100 text-black rounded-md p-2 w-[65%] shadow'
      />
    </>
  );
};
export default Inputbox;
