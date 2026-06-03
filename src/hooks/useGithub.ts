import { useEffect, useState } from "react";
import axios from "axios";

interface GithubData {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
}

export function useGithub(username: string) {
  const [data, setData] = useState<GithubData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setData(res.data);
      } catch (error) {
        console.error("GitHub fetch error:", error);
      }
    }

    fetchData();
  }, [username]);

  return data;
}