import React from 'react';

function RepositoryList() {
  const repositories = [
    { name: 'design-system', language: 'React', visibility: 'Public', size: '7320 KB', updated: '1 day ago' },
    { name: 'codeant-ci-app', language: 'JavaScript', visibility: 'Private', size: '5671 KB', updated: '2 days ago' },
    // Add more repositories as needed
  ];

  return (
    <div>
      <h3>Repositories</h3>
      <button className="button">Add Repository</button>
      <ul>
        {repositories.map((repo, index) => (
          <li key={index}>
            <strong>{repo.name}</strong> - {repo.language} ({repo.visibility}) - {repo.size} - {repo.updated}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoryList;
