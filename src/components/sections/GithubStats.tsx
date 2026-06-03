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
  fork: boolean;
  readme?: string;
}

export default function GithubStats() {
  const data = useGithub("amruthswamywork");
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await axios.get(
          "https://api.github.com/users/amruthswamywork/repos?per_page=100"
        );

        const latestRepos = res.data
          .filter((repo: Repo) => !repo.fork)
          .sort(
            (a: Repo, b: Repo) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .slice(0, 3);

        const reposWithReadme = await Promise.all(
          latestRepos.map(async (repo: Repo) => {
            try {
              const readmeRes = await axios.get(
                `https://api.github.com/repos/amruthswamywork/${repo.name}/readme`
              );

              // Proper UTF-8 decode
              const decoded = decodeURIComponent(
                escape(window.atob(readmeRes.data.content))
              );

              return {
                ...repo,
                readme: decoded
              };
            } catch {
              return {
                ...repo,
                readme: "No README available."
              };
            }
          })
        );

        setRepos(reposWithReadme);
      } catch (error) {
        console.error("GitHub API Error:", error);
      }
    }

    fetchRepos();
  }, []);

  if (!data) return null;

  return (
    <section className="py-28 bg-gray-50 dark:bg-darkbg">
      <div className="max-w-6xl mx-auto px-8 text-center">

        <p className="uppercase text-sm tracking-widest text-primary">
          GitHub Activity
        </p>

        <h2 className="text-4xl font-bold mt-4">
          Code & Open Source Projects
        </h2>

        {/* Repo Count */}
        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-md inline-block"
          >
            <h3 className="text-4xl font-bold text-primary">
              {data.public_repos}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Public Repositories
            </p>
          </motion.div>
        </div>

        {/* Latest Repositories */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
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

              {/* Markdown Preview */}
              <div className="prose prose-sm dark:prose-invert max-h-40 overflow-hidden">
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

        {/* Profile CTA */}
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