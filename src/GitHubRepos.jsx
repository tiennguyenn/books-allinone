import { useState, useEffect } from "react";

function useGitHubRepos(username) {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getRepos();
  }, [username]);

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

class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
    this.setVisibility = this.setVisibility.bind(this);
  }
  setVisibility(visible) {
    this.setState({ visible });
  }
}

changeVolume = (e) => {
  this.setState({ volume: e.target.value });
};

<input onChange={() => this.changeVolume()} />;
