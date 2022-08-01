import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import validator from "validator";

function EmailSend() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  var data = JSON.stringify({
    email: `${email}`,
  });
  var config = {
    method: "post",
    url: "https://qzf18t26tk.execute-api.ap-south-1.amazonaws.com/Prod/email",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  async function handleClick() {
    if (validator.isEmail(email)) {
      setErrorMessage(false);
      console.log("Valid Email");
      await axios(config)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      setSent(true);
      setTimeout(() => {
        setSent(false);
      }, 3000);
    } else {
      setSent(true);
      setErrorMessage(true);
      console.log("Invalid Email");
    }
  }
  return (
    <div className="flex fixed  flex-col ">
      <div className="flex font-work-sans tracking-tighter text-[18px] ">
        Be the first to know when we go live
      </div>
      <div className="flex justify-center">
        <input
          value={email.value}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="font-work-sans text-[18px]  w-[344px] outline-none bg-transparent border-b-2"
          placeholder="Enter your E-mail"
        ></input>
        <motion.button
          onClick={handleClick}
          className="bg-[#3263F3] w-[221px] active:scale-105 h-[53px] text-white font-basic-sans rounded-[24px] ml-5 hover:bg-[#1041D0] hover:shadow-md transition-all"
        >
          Notify Me
        </motion.button>
      </div>
      {sent &&
        (errorMessage ? (
          <motion.div className="font-work-sans flex items-center mt-4 text-[#3263F3]">
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.75L12.5 13.25"
                stroke="#EC5D6D"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M1 13.25L12.5 1.75"
                stroke="#EC5D6D"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <motion.div className="ml-2 text-red-500">
              Enter a Valid Email
            </motion.div>
          </motion.div>
        ) : (
          <div className="font-work-sans flex items-center mt-4 text-[#3263F3]">
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 5.5L6 11L16.5 1"
                stroke="#3263F3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <AnimatePresence>
              <motion.div
                className="ml-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0 }}
              >
                Thank you for your interest we will reach out to you soon.
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
    </div>
  );
}

export default EmailSend;
