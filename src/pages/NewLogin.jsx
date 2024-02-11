import loginImg from "../imgs/login.png";
// eslint-disable-next-line react/prop-types
import Login from "./Login";

const NewLogin = () => {
  return (
    <>
      <div className="fixed top--10 left-0 h-full w-full overflow-auto z-50 bg-black bg-opacity-50 flex-column">
        <div className="bg-slate-800 rounded-lg w-1/2 mx-auto mt-10 h-100px w-200px">
          <img
            src={loginImg}
            alt=""
            className="h-full rounded-l-lg rounded-bl-lg"
          />
        </div>
        <div className="w-[50%]">
          <Login />
        </div>
      </div>
    </>
  );
};

export default NewLogin;
