import { motion } from "framer-motion";

const components = [
  { name: "Application Load Balancer", logo: "logos/loadbalancer.jpeg" },
  { name: "EC2 Auto Scaling", logo: "logos/autoscale.jpeg" },
  { name: "RDS Database", logo: "logos/rds.jpeg" },
  { name: "CloudWatch Monitoring", logo: "logos/cloudwatch.jpeg" },
];

export default function Architecture() {

  const BASE = import.meta.env.BASE_URL;

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="uppercase text-sm tracking-widest text-primary">
            AWS Architecture
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4">
            Scalable 3-Tier Cloud Infrastructure 
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Production-ready infrastructure designed with scalability,
            reliability and observability across all layers.
          </p>
        </div>

        {/* VPC Boundary */}
        <div className="rounded-3xl p-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-inner">

          <div className="flex flex-col items-center space-y-16">

            {components.map((component, index) => (
              <div key={component.name} className="flex flex-col items-center">

                {/* CARD */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 w-80 text-center"
                >
                  <img
                    src={`${BASE}${component.logo}`}
                    alt={component.name}
                    className="h-14 mx-auto opacity-95"
                  />

                  <p className="mt-5 font-semibold text-gray-800 dark:text-gray-200">
                    {component.name}
                  </p>
                </motion.div>

                {/* CONNECTOR */}
                {index !== components.length - 1 && (
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-16 w-1 bg-gradient-to-b from-primary/40 to-primary rounded-full mt-8"
                  />
                )}

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}