
import { useGithub } from "../../hooks/useGithub";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  created_at: string;
  description: string;
  fork: boolean;
  readme?: string;
}

export default function GithubStats() {
  const data = useGithub("amruthswamywork");

  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await axios.get(
          "https://api.github.com/users/amruthswamywork/repos?sort=created&per_page=20"
        );

        const latestRepos = res.data
          .filter((repo: Repo) => !repo.fork)
          .slice(0, 3);

        const reposWithReadme = await Promise.all(
          latestRepos.map(async (repo: Repo) => {
            try {
              const readmeRes = await axios.get(
                `https://raw.githubusercontent.com/amruthswamywork/${repo.name}/main/README.md`
              );

              return {
                ...repo,
                readme: readmeRes.data,
              };
            } catch {
              try {
                const readmeRes = await axios.get(
                  `https://raw.githubusercontent.com/amruthswamywork/${repo.name}/master/README.md`
                );

                return {
                  ...repo,
                  readme: readmeRes.data,
                };
              } catch {
                return {
                  ...repo,
                  readme:
                    repo.description ||
                    "README not available for this repository.",
                };
              }
            }
          })
        );

        setRepos(reposWithReadme);
      } catch (error) {
        console.error("GitHub API Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (!data) {
    return (
      <section className="py-28">
        <div className="text-center">
          Loading GitHub Projects...
        </div>
      </section>
    );
  }

  return (
    <section className="py-28 bg-gray-50 dark:bg-darkbg">
      <div className="max-w-6xl mx-auto px-8 text-center">

        <p className="uppercase text-sm tracking-widest text-primary">
          GitHub Activity
        </p>

        <h2 className="text-4xl font-bold mt-4">
          Open Source & DevOps Projects
        </h2>

        {/* Repository Count */}
        <div className="mt-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-md"
          >
            <h3 className="text-5xl font-bold text-primary">
              {data.public_repos}
            </h3>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Public Repositories
            </p>
          </motion.div>
        </div>

        {/* Latest Projects */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-10">
            Latest Projects
          </h3>

          {loading ? (
            <p>Loading repositories...</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {repos.map((repo) => (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md text-left hover:shadow-xl transition overflow-hidden"
                >
                  <h3 className="font-semibold text-primary text-lg mb-3">
                    {repo.name}
                  </h3>

                  <div className="prose prose-sm dark:prose-invert max-h-52 overflow-hidden">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {repo.readme || ""}
                    </ReactMarkdown>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary mt-4 inline-block"
                  >
                    View Repository →
                  </a>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* GitHub Profile */}
        <div className="mt-16">
          <a
            href="https://github.com/amruthswamywork"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-primary text-white rounded-xl shadow-sm hover:bg-accent transition"
          >
            Visit GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
}
