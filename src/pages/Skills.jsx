import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Card from '../components/shared/Card';
import ProgressBar from '../components/shared/ProgressBar';

const Skills = () => {
  const { t } = useTranslation();

  // Programming skills with proficiency levels
  const programmingSkills = [
    { name: t('skills.cpp'), level: 60, color: 'primary' },
    // Add more programming skills here as needed
  ];

  // Language skills with proficiency levels
  const languageSkills = [
    { name: t('skills.english'), level: 90, color: 'secondary' },
    // Add more language skills here as needed
  ];

  // Soft skills with proficiency levels
  const softSkills = [
    { name: 'Communication', level: 85, color: 'accent' },
    { name: 'Teamwork', level: 80, color: 'accent' },
    { name: 'Problem Solving', level: 75, color: 'accent' },
    // Add more soft skills here as needed
  ];

  // Section animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  // Item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

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
            {t('skills.title')}
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Programming Skills */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className="h-full">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <h2 className="text-2xl font-bold text-textPrimary dark:text-white">{t('skills.programming')}</h2>
                </div>

                <div className="space-y-6">
                  {programmingSkills.map((skill, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <ProgressBar 
                        label={skill.name} 
                        value={skill.level} 
                        color={skill.color} 
                      />
                    </motion.div>
                  ))}

                  {/* Future skill slots */}
                  <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                    <p className="text-center text-textSecondary dark:text-gray-400">
                      Learning new technologies...
                    </p>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Language Skills */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 1 1 0 01.11-1.164A15.44 15.44 0 018.122 6H5a1 1 0 110-2h3V3a1 1 0 011-1zm3 6a1 1 0 00-1 1v1h-2a1 1 0 000 2h2v1a1 1 0 002 0v-1h2a1 1 0 000-2h-2V9a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <h2 className="text-2xl font-bold text-textPrimary dark:text-white">{t('skills.languages')}</h2>
                </div>

                <div className="space-y-6">
                  {languageSkills.map((skill, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <ProgressBar 
                        label={skill.name} 
                        value={skill.level} 
                        color={skill.color} 
                      />
                    </motion.div>
                  ))}

                  {/* Future language slots */}
                  <motion.div variants={itemVariants} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                    <p className="text-center text-textSecondary dark:text-gray-400">
                      Learning more languages...
                    </p>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <h2 className="text-2xl font-bold text-textPrimary dark:text-white">{t('skills.soft')}</h2>
                </div>

                <div className="space-y-6">
                  {softSkills.map((skill, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <ProgressBar 
                        label={skill.name} 
                        value={skill.level} 
                        color={skill.color} 
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Additional skills description */}
        <motion.div 
          className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-textPrimary dark:text-white mb-4">
            Developing for the Future
          </h2>
          <p className="mb-4 text-textSecondary dark:text-gray-300">
            I'm continuously learning and expanding my skill set to prepare for a future in AI and technology. 
            My foundation in mathematics and programming serves as a strong baseline for acquiring more specialized skills.
          </p>
          <p className="text-textSecondary dark:text-gray-300">
            Currently focused on deepening my C++ knowledge and exploring concepts in data structures, algorithms, 
            and mathematics required for advanced AI applications.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;