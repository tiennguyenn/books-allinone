import { useState, useEffect } from "react";

function useGitHubRepos(username) {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return [repos, isLoading];
}

function GitHubRepos({ username }) {
  const [repos, isLoading] = useGitHubRepos(username);

  return (
    <div>
      <h2>GitHub Repositories</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GitHubRepos;
