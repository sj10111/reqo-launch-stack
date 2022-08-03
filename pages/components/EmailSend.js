import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import validator from "validator";

function EmailSend() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

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
  const form = useRef(null);
  async function handleClick(e) {
    e.preventDefault();
    console.log(e.target.value);
    setEmail("");
    if (validator.isEmail(email)) {
      setErrorMessage(false);
      console.log("Valid Email");
      setLoading(true);
      await axios(config)
        .then(function (response) {
          setLoading(false);

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
      setLoading(false);
      setSent(true);
      setErrorMessage(true);

      console.log("Invalid Email");
    }
  }
  return (
    <div className="flex fixed  flex-col ">
      <div className="flex justify-center mb-2 sm:mb-0 sm:justify-start font-work-sans tracking-tighter text-[18px] ">
        Be the first to know when we go live
      </div>
      <div className="flex  justify-center scale-75 sm:scale-100 ">
        <form onSubmit={(e) => handleClick(e)} className="flex flex-col sm:flex-row justify-center transition-all duration-500 ">
          <input
            type="text"
            placeholder="Enter your Email"
            className="font-work-sans text-[20px] sm:text-[18px]  w-[344px] outline-none focus:border-[#3263F3] bg-transparent border-b-2 transition-all duration-500 "
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            ref={form}
          />
          {loading ? (
            <div className="flex mt-2 items-center justify-center w-[221px] h-[53px] mx-auto sm:ml-5 transition:all ">
              <div
                className="spinner-border  text-[#3263F3] animate-spin inline-block w-4 h-4 border-2 rounded-full"
                role="status"
              >
                <span className="visually-hidden"></span>
              </div>
            </div>
          ) : (
            <input
              type="submit"
              value="Notify me"
              className="bg-[#3263F3] w-[221px] active:scale-105 h-[53px] text-white font-basic-sans rounded-[24px] mx-auto mt-5 sm:ml-5 sm:mt-0 hover:bg-[#1041D0] hover:shadow-md transition-all"
            />
          )}
        </form>
      </div>
      {sent &&
        (errorMessage ? (
          loading ? (
            <div>
              <div className="flex mt-2 items-center">
                <div
                  className="spinner-border text-[#3263F3] animate-spin inline-block w-4 h-4 border-2 rounded-full"
                  role="status"
                >
                  <span classNameyarn ="visually-hidden"></span>
                </div>
              </div>
            </div>
          ) : (
            <motion.div className="font-work-sans flex items-center mx-auto sm:mx-0  sm:mt-4 text-[#3263F3]">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M1 13.25L12.5 1.75"
                  stroke="#EC5D6D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <motion.div className="ml-2 text-red-500">
                Enter a Valid Email
              </motion.div>
            </motion.div>
          )
        ) : loading ? (
          <div>
            
          </div>
        ) : (
          <div className="font-work-sans mx-auto sm:mx-0 scale-75 sm:scale-100  sm:mt-4 flex items-center mt-4 text-[#3263F3]">
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <AnimatePresence>
              <motion.div
                className="ml-2 "
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
