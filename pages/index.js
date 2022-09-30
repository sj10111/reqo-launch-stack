import EmailSend from "./components/EmailSend";

import LoveAntstack from "./components/LoveAntstack";
import ReqoLogo from "./components/ReqoLogo";
import StatusBar from "./components/StatusBar";
import { motion } from "framer-motion";
import Head from 'next/head'

export default function Home() {

  return (
   <>
   <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title >Reqo</title>
    <link className="w-2 h-2" rel="icon" href="selection.png"  />
   </Head>
    <motion.div className="flex flex-col justify-center -mt-9 sm:m-0 items-center w-[100vw] h-[100vh]">
      <motion.div
        initial={{
          y: "50%",
          scale: 1.2,
        }}
        animate={{
          opacity: 1,
          y: "-350%",
          scale: 1,
          default:{ease:"easeInOut"}
        }}
        transition={{
          delay: 1,
          duration:0.9
          
          
        }}
        className="w-screen justify-center flex"
      >
        <ReqoLogo />
      </motion.div>
      <motion.div
        initial={{
          y: "-150px",
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
        }}
        className="w-screen justify-center flex"
      >
        <StatusBar />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="flex w-screen justify-center"
      >
      
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: "50px",
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 3,
        }}
        className="w-screen justify-center flex"
      >
        <EmailSend />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: "200px",
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 3 }}
        className="w-screen justify-center flex"
      >
        <LoveAntstack />
      </motion.div>
    </motion.div>
  </>
  );
}
