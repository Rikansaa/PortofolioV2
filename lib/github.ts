export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  updated_at: string;
}

const USERNAME = "Rikansaa";
const MAX_REPOS = 5;

export async function getGithubRepos(): Promise<GithubRepo[]> {
  const response = await fetch("https://api.github.com/users/" + USERNAME + "/repos?per_page=100&sort=updated", {
    next: { revalidate: 3600 }
  });

  if (!response.ok) {
    return [];
  }

  const data: GithubRepo[] = await response.json();
  return data
    .filter((repo) => !repo.fork)
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, MAX_REPOS);
}