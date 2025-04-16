const Btn = ({ ButtonName, color }) => {
  return (
    <>
      <button
        className='border-2   text-2xl text-white w-2/3 p-2 rounded-sm'
        style={{ backgroundColor: color }}>
        {ButtonName}
      </button>
    </>
  );
};
export default Btn;
