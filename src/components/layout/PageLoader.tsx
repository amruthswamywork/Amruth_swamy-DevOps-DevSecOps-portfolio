import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 h-1 bg-primary z-50"
    />
  );
}