import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/themeContext";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import Captcha from "../components/captcha/Captcha";

let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [formValue, setformValue] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  //   "A",
  //   "B",
  //   "C",
  //   "D",
  //   "E",
  //   "F",
  //   "G",
  //   "H",
  //   "I",
  //   "J",
  //   "K",
  //   "L",
  //   "M",
  //   "N",
  //   "O",
  //   "P",
  //   "Q",
  //   "R",
  //   "S",
  //   "T",
  //   "U",
  //   "V",
  //   "W",
  //   "X",
  //   "Y",
  //   "Z",
  //   "a",
  //   "b",
  //   "c",
  //   "d",
  //   "e",
  //   "f",
  //   "g",
  //   "h",
  //   "i",
  //   "j",
  //   "k",
  //   "l",
  //   "m",
  //   "n",
  //   "o",
  //   "p",
  //   "q",
  //   "r",
  //   "s",
  //   "t",
  //   "u",
  //   "v",
  //   "w",
  //   "x",
  //   "y",
  //   "z",
  //   0,
  //   1,
  //   2,
  //   3,
  //   4,
  //   5,
  //   6,
  //   7,
  //   8,
  //   9,
  // ]);





  const { handleThemeSwitch, theme } = useContext(ThemeContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const getFormValue = {
      name,
      email,
      password,
    };
    setformValue(getFormValue);
    localStorage.setItem("user", JSON.stringify(getFormValue));
  };

  console.log(formValue)

  return (
    <section
      className={`flex h-screen justify-center items-center bg-[#F2F2F2] dark:bg-color-base`}
    >
      <div>
        <h2 className="text-[24px] text-color-base  dark:text-color-brand flex justify-center">
          Register Your Self
        </h2>
        <div className=" w-[370px] md:w-[400px] h-[500px] mt-7">
          <form
            onSubmit={handleFormSubmit}
        
            className="bg-white p-5 rounded-xl drop-shadow-lg"
          >
            <div className="m-8">
              <input
                className="p-4 w-[100%] bg-[#F2F2F2] text-grey font-semibold font-sans border-0 focus:outline-none"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="m-8">
              <input
                className="p-4 w-[100%] bg-[#F2F2F2] text-grey font-semibold font-sans border-0 focus:outline-none"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="m-8">
              <input
                className="p-4 w-[100%] bg-[#F2F2F2] text-grey font-semibold font-sans border-0 focus:outline-none"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Captcha setIsCaptchaValid={setIsCaptchaValid} isCaptchaValid={isCaptchaValid}/>
            <div className="m-8">
              <button type="submit" disabled={isCaptchaValid === false} className="p-4 w-[100%] cursor-pointer text-white disabled:bg-gray-400  bg-color-base font-bold border-0 focus:outline-none  disabled:cursor-not-allowed">
                Sign In
              </button>
            </div>
          </form>
          <button
            onClick={handleThemeSwitch}
            className="fixed top-5 right-5 bg-gray-400 border-0 rounded-lg p-2 cursor-pointer"
          >
            {theme === "dark" ? (
              <MdOutlineLightMode size={28} />
            ) : (
              <MdDarkMode size={28} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
