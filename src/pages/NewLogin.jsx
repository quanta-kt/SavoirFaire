import loginImg from "../imgs/login.png";
// eslint-disable-next-line react/prop-types
const NewLogin = ({ children }) => {
  return (
    <>
      <div className="fixed top-0 left-0 h-full w-full overflow-auto z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg w-1/2 mx-auto mt-10 h-100px w-200px">
          <img src={loginImg} alt="" className="h-full " />
          {children}
        </div>
      </div>
    </>
  );
};

export default NewLogin;
