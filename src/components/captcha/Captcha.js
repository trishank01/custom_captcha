import React, { useEffect, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";

let allCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

const Captcha = ({setIsCaptchaValid ,isCaptchaValid}) => {
  const [randomString, setRandomString] = useState("");
  const [userEnteredCaptcha, setUserEnteredCaptcha] = useState("");
  const [rotateIcon, setRotateIcon] = useState(false);

  const [alertMsg, setAlertMsg] = useState("");

  function getCaptcha() {
    let randomsix = "";
    for (let i = 0; i < 6; i++) {
      randomsix +=
        allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    setRandomString(randomsix);
  }
  useEffect(() => {
    getCaptcha();

  }, []);

  useEffect(() => {
    setRotateIcon(!rotateIcon)
  },[randomString])

  const handleReload = () => {
    getCaptcha();
  };

  const handleCheckCaptcha = () => {
    if (randomString === userEnteredCaptcha) {
      setIsCaptchaValid(true);
      setAlertMsg(
        <p className="text-green-400 pt-3 text-[14px]">Captcha Matched...</p>
      );
    } else {
      setIsCaptchaValid(false);
      setAlertMsg(
        <p className="text-red-400 pt-3 text-[14px]">
          captcha not matched. Please try again
        </p>
      );
    }
  };


  return (
    <div className="m-8">
      <div className="flex justify-evenly w-full">
        <span id="disableCopy" className=" p-4 w-[80%] dark:bg-color-brand bg-color-base text-white dark:text-black text-grey font-semibold font-sans border-0 focus:outline-none mb-3 tracking-[20px]">
          {randomString}
        </span>
        <button
          onClick={handleReload}
          className={"w-[20%] border-0 focus:outline-none mb-3 cursor-pointer"}
        >
          <AiOutlineReload size={28}  className={`${rotateIcon ? "rotate-180 duration-300" : "rotate-[-180deg] duration-300"}`}/>
        </button>
      </div>
      <div className="flex relative">
        <input
          className="p-4 w-[100%] bg-[#F2F2F2] text-grey font-semibold font-sans border-0 focus:outline-none"
          type="text"
          placeholder="Enter captcha"
          onChange={(e) => setUserEnteredCaptcha(e.target.value)}
        />
        {userEnteredCaptcha !== "" && (
          <button type="button"
            onClick={handleCheckCaptcha}
            className="w-[25%] border-0 focus:outline-none bg-color-base text-white cursor-pointer font-semibold "
          >
            Check
          </button>
        )}
      </div>

      {userEnteredCaptcha.length > 0 && alertMsg}
    </div>
  );
};

export default Captcha;
