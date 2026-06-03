
import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar } from "lucide-react";

export default function CurrentWork() {
  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] text-primary text-sm font-semibold">
            Professional Experience
          </p>

          <h2 className="text-5xl font-bold mt-4 text-slate-900 dark:text-white">
            Current Experience
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Currently contributing to cloud infrastructure automation,
            CI/CD pipelines, container orchestration and DevSecOps initiatives.
          </p>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            bg-white
            dark:bg-slate-900
            rounded-3xl
            shadow-xl
            border
            border-slate-200
            dark:border-slate-800
            overflow-hidden
          "
        >
          {/* Left Accent Bar */}
          <div className="absolute left-0 top-0 h-full w-2 bg-primary" />

          <div className="p-10 md:p-12">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

              <div>
                <div className="flex items-center gap-3">
                  <Briefcase
                    className="text-primary"
                    size={28}
                  />

                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                    DevOps Intern
                  </h3>
                </div>

                <div className="flex items-center gap-2 mt-3 text-primary font-medium">
                  <Building2 size={18} />
                  AppXcelerate Solutions Pvt Ltd
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-500">
                <Calendar size={18} />
                <span>Mar 2026 – Present</span>
              </div>

            </div>

            {/* Description */}
            <p className="mt-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Working on AWS cloud infrastructure, Infrastructure as Code,
              CI/CD automation, containerization, Kubernetes orchestration,
              monitoring, logging and DevSecOps implementation to build
              scalable, secure and highly available cloud-native environments.
            </p>

            {/* Responsibilities */}
            <div className="grid md:grid-cols-2 gap-4 mt-10">

              {[
                "AWS Infrastructure Design & Management",
                "Infrastructure Provisioning using Terraform & Ansible",
                "CI/CD Pipelines using Jenkins & AWS Services",
                "Docker Containerization & Kubernetes Deployment",
                "Monitoring with CloudWatch, Prometheus & Grafana",
                "DevSecOps Security & Secrets Management",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex items-center gap-3
                    bg-slate-50
                    dark:bg-slate-800
                    border border-slate-200
                    dark:border-slate-700
                    rounded-xl
                    p-4
                  "
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            {/* Technologies */}
            <div className="mt-10">

              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                Technologies & Tools
              </h4>

              <div className="flex flex-wrap gap-3">

                {[
                  "AWS",
                  "Terraform",
                  "Ansible",
                  "Docker",
                  "Kubernetes",
                  "Jenkins",
                  "CloudWatch",
                  "Prometheus",
                  "Grafana",
                  "DevSecOps",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-primary/10
                      text-primary
                      text-sm
                      font-medium
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
