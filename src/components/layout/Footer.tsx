export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-8 text-center text-sm text-gray-600 dark:text-gray-400">

        <p className="font-semibold text-primary">
          Amruth Swamy C P
        </p>

        <p className="mt-2">
          DevOps/DevSecOps Engineer 
        </p>

        <div className="mt-4 flex justify-center gap-6">
          <a href="https://github.com/amruthswamywork" target="_blank">
            GitHub
          </a>
          <a href="https://linkedin.com/in/amruthswamycp079" target="_blank">
            LinkedIn
          </a>
          <a href="mailto:amruthswamy11@gmail.com">
            Email
          </a>
        </div>

        <p className="mt-6 text-xs">
              Visitors: {localStorage.getItem("visits") || 1}

          © {new Date().getFullYear()} Amruth Swamy C P .
        </p>

      </div>
    </footer>
  );
}