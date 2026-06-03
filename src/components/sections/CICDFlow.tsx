import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stages = [
  { name: "Git Push", logo: "logos/github.svg" },
  { name: "Jenkins CI", logo: "logos/jenkins.svg" },
  { name: "Docker Build", logo: "logos/docker.svg" },
  { name: "ECR Registry", logo: "logos/ecr.svg.jpeg" },
  { name: "Kubernetes Deploy", logo: "logos/kubernetes.svg" },
  { name: "Monitoring", logo: "logos/cloudwatch.svg.jpeg" },
];

export default function CICDFlow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const BASE = import.meta.env.BASE_URL;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === stages.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-8">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="uppercase text-sm tracking-widest text-primary">
            CI/CD Architecture
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4">
            Automated Deployment Pipeline
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous integration and delivery with containerized,
            scalable cloud infrastructure.
          </p>
        </div>

        {/* PIPELINE */}
        <div className="flex items-center justify-center flex-wrap gap-8">

          {stages.map((stage, index) => (
            <div key={stage.name} className="flex items-center">

              {/* CARD */}
              <motion.div
                animate={{
                  scale: activeIndex === index ? 1.06 : 1,
                  boxShadow:
                    activeIndex === index
                      ? "0px 0px 30px rgba(59,130,246,0.35)"
                      : "0px 10px 25px rgba(0,0,0,0.05)",
                }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 w-44 text-center"
              >
                <img
                  src={`${BASE}${stage.logo}`}
                  alt={stage.name}
                  className="h-12 mx-auto opacity-90"
                />

                <p className="mt-3 text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {stage.name}
                </p>
              </motion.div>

              {/* CONNECTOR */}
              {index !== stages.length - 1 && (
                <motion.div
                  animate={{
                    opacity: activeIndex === index ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-1 mx-4 bg-gradient-to-r from-primary/40 to-primary rounded-full"
                />
              )}

            </div>
          ))}

        </div>

        {/* METRICS */}
        <div className="grid md:grid-cols-3 gap-12 mt-24 text-center">

          <div>
            <h3 className="text-3xl font-bold text-primary">65%</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Deployment Time Reduction
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary">Zero Downtime</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Rolling Kubernetes Updates
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-primary">Auto Scaling</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Load-Based Infrastructure Scaling
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}