import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BiLogoGoogle } from "react-icons/bi";
import { FaUserAstronaut } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const UserLogin = async () => {
    try {
    } catch (error) {}
  };

  return (
    <>
      <div
        className="md:min-w-[30%] w-fit flex flex-col justify-center item-center
                   h-fit md:px-5 md:py-5 px-1 py-2 gap-5 rounded-xl border-2"
      >
        <label className="flex justify-center text-center w-full  font-semibold text-[2rem] gap-2 ">
          <FaUserAstronaut className="self-center " />
          Login
        </label>
        <div className="w-full px-2 self-center">
          <div className="label">
            <span className="label-text font-semibold">Email</span>
          </div>

          <input
            type="text"
            placeholder="Useremail ID"
            className="input input-bordered w-full md:input-md sm:input-sm"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

        </div>
        <div className="w-full px-2">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            placeholder="User Password"
            className="input input-bordered w-full md:input-md sm:input-sm"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div></div>
        <div className="self-center w-full px-2">
          <button className=" btn w-full px-5 py-2 min-h-0 outline-none text-xl">
            Login
          </button>
        </div>
        <div className="w-full px-2 text-center">
          <label className="w-full ">
            ______________________ OR ______________________
          </label>
        </div>
        <div className="w-full px-2 flex">
          <button className="btn m-auto flex-2">
            <FaGithub size={20} />
            Github
          </button>
          <button className="btn m-auto flex-2">
            <BiLogoGoogle size={25} />
            Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
