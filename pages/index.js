import EmailSend from "./components/EmailSend";
import FinalCountDown from "./components/FinalCountDown";
import LoveAntstack from "./components/LoveAntstack";
import ReqoLogo from "./components/ReqoLogo";
import StatusBar from "./components/StatusBar";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div className="flex flex-col justify-center items-center w-screen h-screen">
      <motion.div
        initial={{
          y: "50%",
          scale: 1.2,
        }}
        animate={{
          opacity: 1,
          y: "-350%",
          scale: 1,
        }}
        transition={{
          delay: 1,

          default: { ease: "linear" },
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
        <FinalCountDown />
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
  );
}
