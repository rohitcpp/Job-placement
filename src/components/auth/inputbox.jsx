const Inputbox = ({ name }) => {
  return (
    <>
      <input
        type='text'
        placeholder={name}
        className='border-2 border-black text-black rounded-sm p-2 w-2/3'
      />
    </>
  );
};
export default Inputbox;
