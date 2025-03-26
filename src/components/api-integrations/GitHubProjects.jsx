import { useState, useEffect } from 'react';
import { fetchRepositories } from '../../api/github';
import Card from '../shared/Card';

/**
 * Component that displays GitHub projects from the user's repositories
 * 
 * @param {Object} props - Component props
 * @param {number} props.limit - Number of repositories to show (default: 4)
 * @param {string} props.language - Filter repositories by language (default: null)
 * @param {string} props.sort - Sort criteria (updated, created, pushed, full_name) (default: 'updated')
 * @param {string} props.className - Additional CSS classes
 */
const GitHubProjects = ({ 
  limit = 4, 
  language = null, 
  sort = 'updated',
  className = '' 
}) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        setLoading(true);
        const repos = await fetchRepositories({ 
          limit, 
          language, 
          sort,
          direction: 'desc' 
        });
        setRepositories(repos);
      } catch (err) {
        console.error('Error loading repositories:', err);
        setError('Failed to load GitHub projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadRepositories();
  }, [limit, language, sort]);

  // Get language display color
  const getLanguageColor = (lang) => {
    const colors = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#3178c6',
      'Python': '#3572A5',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'PHP': '#4F5D95',
      'Ruby': '#701516',
      'Go': '#00ADD8',
      'Swift': '#ffac45',
      'Kotlin': '#A97BFF',
      'Rust': '#dea584',
    };
    return colors[lang] || '#8e8e8e';
  };

  if (loading) {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex flex-col space-y-4">
          {[...Array(Math.min(limit, 3))].map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
              <div className="flex items-center mt-4">
                <div className="h-3 w-3 bg-gray-200 dark:bg-gray-700 rounded-full mr-2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`w-full ${className}`}>
        <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  if (repositories.length === 0) {
    return (
      <div className={`w-full ${className}`}>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
          <p className="text-textSecondary dark:text-gray-400">
            No repositories found {language ? `with language: ${language}` : ''}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {repositories.map((repo, index) => (
          <Card key={repo.id} delay={index} className="h-full flex flex-col">
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-textPrimary dark:text-white mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-textSecondary dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {repo.name}
                </a>
              </h3>
              
              <p className="text-textSecondary dark:text-gray-300 text-sm mb-4 flex-grow">
                {repo.description || 'No description provided'}
              </p>
              
              <div className="flex flex-wrap justify-between items-end mt-auto">
                <div className="flex items-center">
                  {repo.language && (
                    <div className="flex items-center mr-4">
                      <span 
                        className="w-3 h-3 rounded-full mr-1"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      ></span>
                      <span className="text-xs text-textSecondary dark:text-gray-400">
                        {repo.language}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mr-3">
                    <svg className="w-4 h-4 mr-1 text-textSecondary dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582a1.5 1.5 0 01.646 2.415l-1.222 1.221a7.5 7.5 0 11-4.744-4.745l1.221-1.221a1.5 1.5 0 012.416.646L14.677 8H16a1 1 0 110 2h-5a1 1 0 01-1-1V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-textSecondary dark:text-gray-400">
                      {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-textSecondary dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 1l8.47 8.47-4.24 4.24-3.18-3.18v7.94H8.95v-7.94l-3.18 3.18L1.53 9.47 10 1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-textSecondary dark:text-gray-400">{repo.stargazers_count}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-textSecondary dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0 8a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-textSecondary dark:text-gray-400">{repo.forks_count}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GitHubProjects;