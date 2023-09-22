import { FaWindowClose } from "react-icons/fa";

const Menu = (props) => {
  const closeMenuHandler = () => {
    props.getVal(false);
  };
  return (
    <div className="flex flex-col h-full w-full  bg-black opacity-80 justify-center items-center absolute z-50 xl:hidden">
      <FaWindowClose
        color="white"
        className="cursor-pointer"
        onClick={closeMenuHandler}
      />
      <div className="h-3/4 w-1/2 bg-gray-400 text-white flex flex-col items-center">
        <p className="cursor-pointer">Solutions</p>
        <p className="cursor-pointer">Services</p>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Culture</p>
      </div>
    </div>
  );
};
export default Menu;
