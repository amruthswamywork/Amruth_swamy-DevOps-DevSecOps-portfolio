import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-28 bg-gray-50 dark:bg-darkbg">
      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-20">
          <p className="uppercase text-sm tracking-widest text-primary">
            Education
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4">
            Academic Background
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/60 border border-white/20 dark:border-gray-700 p-10 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-primary">
            Master of Computer Applications (MCA)
          </h3>

          <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">
            Bangalore Institute of Technology
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            V.V. Puram, Bangalore
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <span className="font-semibold">Graduation:</span> December 2025
            </div>
            <div>
              <span className="font-semibold">CGPA:</span> 8.82
            </div>
            <div>
              <span className="font-semibold">Degree:</span> Postgraduate
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}