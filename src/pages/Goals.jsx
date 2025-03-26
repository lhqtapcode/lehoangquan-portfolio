import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Card from '../components/shared/Card';
import Button from '../components/shared/Button';

const Goals = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  // Short-term goals
  const shortTermGoals = [
    {
      title: "Expand C++ Knowledge",
      description: "Deepen understanding of advanced C++ concepts and data structures.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Strengthen Mathematics Foundation",
      description: "Focus on advanced mathematics topics including calculus, linear algebra, and statistics essential for AI.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Develop Personal AI Projects",
      description: "Begin creating small AI-related projects to apply and reinforce theoretical knowledge.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13 7H7v6h6V7z" />
          <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Improve English Proficiency",
      description: "Continue enhancing English language skills, particularly technical English for academic and research purposes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  // Long-term goals
  const longTermGoals = [
    {
      title: "Study AI and Machine Learning",
      description: "Pursue higher education in AI, focusing on deep learning, neural networks, and computer vision.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Contribute to Technological Innovation",
      description: "Develop solutions that address real-world problems using AI technologies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Research in AI Ethics and Safety",
      description: "Explore the ethical implications of AI and contribute to developing safe AI systems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Balance Technology and Humanity",
      description: "Continue involvement in conservation and charitable causes while advancing technology.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container-custom">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-textPrimary dark:text-white mb-4">
            {t('goals.title')}
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Short-term goals */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/5 dark:to-primary/0 p-8 rounded-lg">
              <div className="relative mb-8">
                <motion.div
                  className="absolute -top-6 -left-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                  </svg>
                </motion.div>
                <h2 className="text-3xl font-bold text-textPrimary dark:text-white pl-8">
                  {t('goals.shortTerm.title')}
                </h2>
              </div>

              <motion.p
                className="text-lg text-textSecondary dark:text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {t('goals.shortTerm.description')}
              </motion.p>

              <div className="space-y-6">
                {shortTermGoals.map((goal, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
                  >
                    <div className="flex">
                      <div className="mr-4">
                        {goal.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-textPrimary dark:text-white mb-2">
                          {goal.title}
                        </h3>
                        <p className="text-textSecondary dark:text-gray-300">
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Long-term goals */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 dark:from-secondary/5 dark:to-secondary/0 p-8 rounded-lg">
              <div className="relative mb-8">
                <motion.div
                  className="absolute -top-6 -left-6 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <h2 className="text-3xl font-bold text-textPrimary dark:text-white pl-8">
                  {t('goals.longTerm.title')}
                </h2>
              </div>

              <motion.p
                className="text-lg text-textSecondary dark:text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {t('goals.longTerm.description')}
              </motion.p>

              <div className="space-y-6">
                {longTermGoals.map((goal, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
                  >
                    <div className="flex">
                      <div className="mr-4">
                        {goal.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-textPrimary dark:text-white mb-2">
                          {goal.title}
                        </h3>
                        <p className="text-textSecondary dark:text-gray-300">
                          {goal.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* AI Roadmap */}
        <motion.div
          className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-textPrimary dark:text-white mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            AI Learning Roadmap
          </h2>

          <div className="relative">
            {/* Roadmap line */}
            <div className="absolute top-0 bottom-0 left-3 w-1 bg-gray-200 dark:bg-gray-700"></div>

            <div className="space-y-8 relative ml-10">
              {/* Steps */}
              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-accent bg-white dark:bg-gray-800"></div>
                <h3 className="text-xl font-bold text-textPrimary dark:text-white mb-2">
                  Foundation (Present)
                </h3>
                <p className="text-textSecondary dark:text-gray-300">
                  Building strong fundamentals in mathematics, C++ programming, and understanding algorithmic concepts.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-accent bg-white dark:bg-gray-800"></div>
                <h3 className="text-xl font-bold text-textPrimary dark:text-white mb-2">
                  Exploration (1-2 Years)
                </h3>
                <p className="text-textSecondary dark:text-gray-300">
                  Introduction to machine learning concepts, data structures, and AI frameworks. 
                  Beginning to work on small projects to apply theoretical knowledge.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-accent bg-white dark:bg-gray-800"></div>
                <h3 className="text-xl font-bold text-textPrimary dark:text-white mb-2">
                  Specialization (3-5 Years)
                </h3>
                <p className="text-textSecondary dark:text-gray-300">
                  Deeper focus on specific areas of AI such as computer vision, natural language processing, 
                  or reinforcement learning through formal education and practical projects.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-10 mt-1.5 h-6 w-6 rounded-full border-2 border-accent bg-white dark:bg-gray-800"></div>
                <h3 className="text-xl font-bold text-textPrimary dark:text-white mb-2">
                  Innovation (5+ Years)
                </h3>
                <p className="text-textSecondary dark:text-gray-300">
                  Contributing to AI advancements through research and development, 
                  creating novel solutions that positively impact society while maintaining 
                  ethical considerations and continuing involvement in conservation efforts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-textSecondary dark:text-gray-300 mb-4">
            Interested in collaborating on projects or learning more about my journey?
          </p>
          <Button to="/contact" size="lg">{t('navigation.contact')}</Button>
        </div>
      </div>
    </div>
  );
};

export default Goals;