import { motion } from "framer-motion";

const logos = [
  "logos/aws.svg",
  "logos/docker.svg",
  "logos/kubernetes.svg",
  "logos/terraform.svg",
  "logos/jenkins.svg",
  "logos/github.svg",
];

export default function FloatingLogos() {

  const BASE = import.meta.env.BASE_URL;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">

      {logos.map((logo, index) => (
        <motion.img
          key={index}
          src={`${BASE}${logo}`}
          alt="tech-logo"
          className="absolute opacity-10 dark:invert blur-sm"
          style={{
            width: 60 + index * 8,
            top: `${10 + index * 12}%`,
            left: `${5 + index * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

    </div>
  );
}