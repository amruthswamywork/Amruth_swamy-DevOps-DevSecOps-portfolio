import { motion } from "framer-motion";

const icons = [
  "/icons/aws.svg",
  "/icons/docker.svg",
  "/icons/kubernetes.svg",
  "/icons/terraform.svg",
  "/icons/jenkins.svg",
  "/icons/github.svg",
  "/icons/linux.svg",
  "/icons/python.svg",
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map((icon, i) => (
        <motion.img
          key={i}
          src={icon}
          className="absolute w-12 opacity-20"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}