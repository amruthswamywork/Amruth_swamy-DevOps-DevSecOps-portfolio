import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function CurrentWork() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Current Experience
          </h2>

          <p className="text-center text-gray-400 mb-12">
            My current role and responsibilities in DevOps & DevSecOps.
          </p>

          <div className="bg-slate-900/70 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 shadow-xl hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="text-cyan-400" size={28} />
                  <h3 className="text-2xl font-bold text-white">
                    DevOps Intern
                  </h3>
                </div>

                <p className="text-cyan-400 text-lg font-semibold">
                  AppXcelerate Solutions Pvt Ltd
                </p>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={18} />
                <span>Mar 2026 – Present</span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-8">
              Working on AWS cloud infrastructure, Infrastructure as Code,
              CI/CD automation, containerization, Kubernetes orchestration,
              monitoring, logging, and DevSecOps implementation to build
              scalable, secure, and highly available cloud environments.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                ✅ Designed and deployed AWS infrastructure using EC2, IAM,
                VPC, Route 53, Auto Scaling and Load Balancers.
              </div>

              <div>
                ✅ Automated infrastructure provisioning using Terraform and
                Ansible.
              </div>

              <div>
                ✅ Built CI/CD pipelines using Jenkins, CodeBuild and
                CodePipeline.
              </div>

              <div>
                ✅ Containerized applications using Docker and Kubernetes.
              </div>

              <div>
                ✅ Implemented monitoring with CloudWatch, Prometheus and
                Grafana.
              </div>

              <div>
                ✅ Applied DevSecOps practices using IAM, Secrets Manager and
                secure deployment strategies.
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
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
                  className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}