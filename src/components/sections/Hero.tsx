
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 bg-lightbg dark:bg-darkbg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-widest text-sm text-primary font-medium">
            DevOps Engineer • AWS • Kubernetes • DevSecOps
          </p>

          <h1 className="text-6xl font-bold mt-4 leading-tight">
            Amruth Swamy C P
          </h1>

          <h2 className="text-2xl text-gray-600 dark:text-gray-400 mt-4">
            DevOps Engineer @ AppXcelerate Solutions Pvt Ltd
          </h2>

          <p className="mt-8 text-lg text-gray-600 dark:text-gray-400 max-w-xl">
            DevOps Engineer with hands-on experience in AWS cloud
            infrastructure, CI/CD automation, Docker, Kubernetes,
            Terraform, Ansible, monitoring, and DevSecOps practices.
            Passionate about building scalable, secure, and highly
            available cloud-native platforms through automation.
          </p>

          {/* Status */}
          <div className="mt-8 space-y-3">
            {[
              "AWS Cloud Infrastructure Management",
              "CI/CD & DevSecOps Automation",
              "Docker & Kubernetes Orchestration",
              "Monitoring with CloudWatch, Prometheus & Grafana",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-6 mt-10">
            <a
              href={`${import.meta.env.BASE_URL}Amruth_swamy -DevOps-DevSecOps_Engineer-Resume.pdf`}
              download
              className="px-8 py-3 bg-primary text-white rounded-xl shadow-sm hover:bg-accent transition"
            >
              Download Resume
            </a>

            <a
              href="/case-studies"
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-xl hover:border-primary transition"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="Amruth Swamy C P"
              className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
            />

            <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/30" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

