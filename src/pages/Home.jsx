import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';
import { Timeline, TimelineItem } from '../components/shared/Timeline';
import FacebookEvents from '../components/api-integrations/FacebookEvents';

const Home = () => {
  const { t } = useTranslation();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  // Core values data
  const coreValues = [
    {
      title: t('home.values.diligence.title'),
      description: t('home.values.diligence.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: t('home.values.breakthrough.title'),
      description: t('home.values.breakthrough.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: t('home.values.creativity.title'),
      description: t('home.values.creativity.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      )
    }
  ];

  // Journey timeline data
  const journeyTimeline = [
    {
      date: '2020',
      title: t('education.middleSchool.name'),
      subtitle: t('education.middleSchool.period'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      content: t('education.middleSchool.achievements')[0]
    },
    {
      date: '2023',
      title: t('education.highSchool.name'),
      subtitle: t('education.highSchool.period'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      content: t('education.highSchool.achievements')[0]
    },
    {
      date: '2024-2025',
      title: t('projects.whisper.title'),
      subtitle: t('projects.whisper.period'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: t('projects.whisper.role')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 -z-10"></div>
        
        {/* Particle effect (optional) */}
        <div className="absolute inset-0 opacity-30 -z-10">
          {Array(20).fill(0).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.25,
                animation: `pulse ${Math.random() * 5 + 5}s infinite`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text content */}
            <motion.div
              className="order-2 lg:order-1"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-textPrimary dark:text-white">
                {t('home.title')}
              </h1>
              <p className="text-lg text-textSecondary dark:text-gray-300 mb-6">
                {t('home.subtitle')}
              </p>
              <p className="text-base text-textPrimary dark:text-gray-200 mb-8">
                {t('home.about')}
              </p>
              <div className="flex space-x-4">
                <Button to="/projects">{t('navigation.projects')}</Button>
                <Button to="/contact" variant="outline">{t('navigation.contact')}</Button>
              </div>
            </motion.div>
            
            {/* Profile image */}
            <motion.div
              className="order-1 lg:order-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  {/* Placeholder profile image - replace with your actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-6xl font-bold">
                    LHQ
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -right-5 top-5 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute -left-5 bottom-5 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core values section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-textPrimary dark:text-white mb-4">
              {t('home.values.title')}
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} delay={index}>
                <div className="p-6">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-textPrimary dark:text-white mb-2 text-center">
                    {value.title}
                  </h3>
                  <p className="text-textSecondary dark:text-gray-300 text-center">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey section */}
      <section className="py-16 bg-background dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-textPrimary dark:text-white mb-4">
              {t('home.journey')}
            </h2>
          </motion.div>
          
          <Timeline>
            {journeyTimeline.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
                delay={index}
              >
                <p>{item.content}</p>
              </TimelineItem>
            ))}
          </Timeline>
          
          <div className="mt-8 text-center">
            <Button to="/education">{t('navigation.education')}</Button>
          </div>
        </div>
      </section>

      {/* Events from Facebook */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-textPrimary dark:text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-textSecondary dark:text-gray-300 max-w-3xl mx-auto">
              Join us for these upcoming charity and volunteer events.
            </p>
          </motion.div>
          
          <div className="mt-8">
            <FacebookEvents 
              pageId={import.meta.env.VITE_FACEBOOK_WHISPER_PAGE_ID || '102252932609290'}
              limit={2}
              timeFilter="upcoming"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;