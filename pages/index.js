import Head from "next/head";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function IndexPage() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <>
      <Head>
        <title>感恩節</title>
      </Head>
      <div className="w-screen h-screen-3 overflow-x-hidden bg-gradient-to-b from-purple-400 via-red-400 to-yellow-500">
        <div className="w-36 h-36 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-full h-full flex justify-center items-center overflow-hidden bg-white rounded-xl"
            style={{
              scale,
            }}
          >
            <motion.div
              className=""
              style={{
                scale: useTransform(scrollYProgress, [0, 1], [0, 3.5]),
              }}
            >
              🦃️
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
