import PageWrapper from "../components/layout/PageWrapper";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <PageWrapper>
      <section className="min-h-screen py-28">
        <div className="max-w-6xl mx-auto px-8">

          <div className="text-center mb-20">
            <p className="uppercase text-sm tracking-widest text-primary">
              Contact
            </p>
            <h1 className="text-4xl font-bold mt-4">
              Let's Connect
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Open to  DevOps/DevSecOps opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  amruthswamy11@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  +91 8548030086
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  LinkedIn
                </h3>
                <a
                  href="https://linkedin.com/in/amruthswamycp079"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition"
                >
                  linkedin.com/in/amruthswamycp079
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary">
                  GitHub
                </h3>
                <a
                  href="https://github.com/amruthswamywork"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition"
                >
                  github.com/amruthswamywork
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl shadow-md"
            >
              <form className="space-y-6">

                <div>
                  <label className="block text-sm mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:border-primary transition"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:border-primary transition"
                  />
                </div>

                <button
                  type="button"
                  className="w-full py-3 bg-primary text-white rounded-xl hover:bg-accent transition"
                >
                  Send Message
                </button>

              </form>
            </motion.div>

          </div>

        </div>
      </section>
    </PageWrapper>
  );
}