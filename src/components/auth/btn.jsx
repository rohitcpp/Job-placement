const Btn = ({ ButtonName, color }) => {
  return (
    <>
      <button
        className='hover:scale-105  text-md text-white w-[50%] p-2 rounded-md shadow'
        style={{ backgroundColor: color }}>
        {ButtonName}
      </button>
    </>
  );
};
export default Btn;
