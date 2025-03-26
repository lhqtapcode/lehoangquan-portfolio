import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';
import GitHubProjects from '../components/api-integrations/GitHubProjects';
import UnsplashGallery from '../components/api-integrations/UnsplashGallery';
import { fetchRandomPhotos } from '../api/unsplash';

const Projects = () => {
  const { t } = useTranslation();
  
  // Filter state
  const [filter, setFilter] = useState('all');
  
  // Project images from Unsplash
  const [projectImages, setProjectImages] = useState({});
  const [imagesLoading, setImagesLoading] = useState(true);
  
  // Fetch project images on mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setImagesLoading(true);
        
        // Fetch wildlife image for Whisper of Wild
        const wildlifeImages = await fetchRandomPhotos({
          query: 'wildlife conservation',
          count: 1
        });
        
        // Fetch charity image for Benignity
        const charityImages = await fetchRandomPhotos({
          query: 'charity volunteer',
          count: 1
        });
        
        if (wildlifeImages.length > 0 && charityImages.length > 0) {
          setProjectImages({
            whisper: wildlifeImages[0].urls.regular,
            benignity: charityImages[0].urls.regular
          });
        }
      } catch (error) {
        console.error('Error fetching project images:', error);
      } finally {
        setImagesLoading(false);
      }
    };
    
    fetchImages();
  }, []);
  
  // Project data for charity projects
  const charityProjects = [
    {
      id: 'whisper',
      title: t('projects.whisper.title'),
      period: t('projects.whisper.period'),
      goal: t('projects.whisper.goal'),
      role: t('projects.whisper.role'),
      image: projectImages.whisper || 'https://source.unsplash.com/random/300x200/?wildlife',
      type: 'charity',
      tags: ['wildlife', 'conservation', 'leadership']
    },
    {
      id: 'benignity',
      title: t('projects.benignity.title'),
      period: t('projects.benignity.period'),
      goal: t('projects.benignity.goal'),
      role: t('projects.benignity.role'),
      image: projectImages.benignity || 'https://source.unsplash.com/random/300x200/?charity',
      type: 'charity',
      tags: ['volunteer', 'community', 'teamwork']
    }
  ];
  
  // Filter projects based on selected filter
  const filteredProjects = filter === 'all' 
    ? charityProjects 
    : charityProjects.filter(project => project.type === filter);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container-custom">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-textPrimary dark:text-white mb-4">
            {t('projects.title')}
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              variant={filter === 'all' ? 'primary' : 'outline'} 
              onClick={() => setFilter('all')}
            >
              {t('projects.filters.all')}
            </Button>
            <Button 
              variant={filter === 'charity' ? 'secondary' : 'outline'} 
              onClick={() => setFilter('charity')}
            >
              {t('projects.filters.charity')}
            </Button>
            <Button 
              variant={filter === 'tech' ? 'accent' : 'outline'} 
              onClick={() => setFilter('tech')}
            >
              {t('projects.filters.tech')}
            </Button>
          </div>
        </motion.div>
        
        {/* Charity Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card delay={index} className="h-full">
                  {/* Project Image */}
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <div 
                      className="w-full h-full bg-gray-200 dark:bg-gray-700"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      <span className={`inline-block px-3 py-1 text-xs font-medium text-white rounded-full ${
                        project.type === 'charity' ? 'bg-secondary' : 'bg-accent'
                      }`}>
                        {project.type === 'charity' ? t('projects.filters.charity') : t('projects.filters.tech')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-textPrimary dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-4">
                      {project.period}
                    </p>
                    <p className="text-textSecondary dark:text-gray-300 mb-4">
                      {project.goal}
                    </p>
                    <div className="flex items-center text-textSecondary dark:text-gray-400 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-sm">{project.role}</span>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-textSecondary dark:text-gray-300 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xl text-textSecondary dark:text-gray-400">
              No projects found for this filter.
            </p>
          </motion.div>
        )}
        
        {/* GitHub Projects Section */}
        <motion.div
          className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-textPrimary dark:text-white mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.933.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            <h2 className="text-2xl font-bold text-textPrimary dark:text-white">
              GitHub Projects
            </h2>
          </div>
          
          <p className="text-textSecondary dark:text-gray-300 mb-6">
            My technical projects showcase programming skills in C++ and other technologies.
            Below are some of my recent GitHub repositories.
          </p>
          
          {/* GitHub Projects Component */}
          <GitHubProjects 
            limit={4}
            sort="updated"
            className="mb-6"
          />
          
          <div className="text-center mt-6">
            <a 
              href={`https://github.com/${import.meta.env.VITE_GITHUB_USERNAME || 'lhqtapcode'}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              <span className="mr-1">View all repositories on GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </motion.div>
        
        {/* Project Gallery */}
        <motion.div
          className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-textPrimary dark:text-white mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="M21 15l-5-5L5 21"/>
            </svg>
            <h2 className="text-2xl font-bold text-textPrimary dark:text-white">
              Project Gallery
            </h2>
          </div>
          
          <p className="text-textSecondary dark:text-gray-300 mb-6">
            Visual inspirations related to my projects and interests in technology, charity, and wildlife conservation.
          </p>
          
          {/* Unsplash Gallery Component */}
          <UnsplashGallery 
            query="technology nature charity"
            count={6}
            layout="masonry"
            random={true}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;