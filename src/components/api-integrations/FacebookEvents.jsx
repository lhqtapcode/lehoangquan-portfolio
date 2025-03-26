import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchPageEvents, fetchPageInfo } from '../../api/meta';
import Card from '../shared/Card';
import { formatDate } from '../../utils/formatters';

/**
 * Component that displays Facebook events from a specific page
 * 
 * @param {Object} props - Component props
 * @param {string} props.pageId - Facebook page ID
 * @param {number} props.limit - Number of events to show (default: 3)
 * @param {string} props.timeFilter - Time filter (upcoming, past) (default: 'upcoming')
 * @param {string} props.className - Additional CSS classes
 */
const FacebookEvents = ({ 
  pageId, 
  limit = 3, 
  timeFilter = 'upcoming',
  className = ''
}) => {
  const [events, setEvents] = useState([]);
  const [pageInfo, setPageInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!pageId) {
          throw new Error('Page ID is required');
        }
        
        // Fetch page info
        const info = await fetchPageInfo(pageId);
        setPageInfo(info);
        
        // Fetch page events
        const eventsList = await fetchPageEvents({
          pageId,
          limit,
          timeFilter
        });
        
        setEvents(eventsList);
      } catch (err) {
        console.error('Error loading Facebook events:', err);
        setError('Failed to load events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (pageId) {
      loadData();
    } else {
      setLoading(false);
      setEvents([]);
    }
  }, [pageId, limit, timeFilter]);

  // Skeleton loader
  if (loading) {
    return (
      <div className={`w-full ${className}`}>
        <div className="space-y-4">
          {[...Array(Math.min(limit, 3))].map((_, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
              <div className="flex">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded mr-3"></div>
                <div className="flex-1">
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={`w-full ${className}`}>
        <div className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  // Empty state
  if (events.length === 0 && !loading) {
    return (
      <div className={`w-full ${className}`}>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
          <p className="text-textSecondary dark:text-gray-400">
            {timeFilter === 'upcoming' 
              ? 'No upcoming events found' 
              : 'No past events found'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {pageInfo && (
        <div className="mb-6 flex items-center">
          {pageInfo.picture?.url && (
            <img 
              src={pageInfo.picture.url} 
              alt={pageInfo.name}
              className="w-10 h-10 rounded-full mr-3"
            />
          )}
          <div>
            <h3 className="font-medium text-textPrimary dark:text-white">
              {pageInfo.name}
            </h3>
            {pageInfo.fan_count && (
              <p className="text-sm text-textSecondary dark:text-gray-400">
                {pageInfo.fan_count.toLocaleString()} followers
              </p>
            )}
          </div>
        </div>
      )}
      
      <div className="space-y-6">
        {events.map((event, index) => (
          <Card key={event.id} delay={index} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Event cover image */}
              {event.cover && (
                <div className="md:w-1/3 h-48 md:h-auto relative">
                  <img 
                    src={event.cover.source} 
                    alt={event.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              {/* Event details */}
              <div className={`p-6 ${event.cover ? 'md:w-2/3' : 'w-full'}`}>
                <h3 className="text-xl font-bold text-textPrimary dark:text-white mb-2">
                  {event.name}
                </h3>
                
                <div className="flex items-center text-textSecondary dark:text-gray-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">
                    {formatDate(event.start_time)}
                    {event.end_time && ` - ${formatDate(event.end_time)}`}
                  </span>
                </div>
                
                {event.place && (
                  <div className="flex items-center text-textSecondary dark:text-gray-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">
                      {event.place.name}
                      {event.place.location && event.place.location.city && `, ${event.place.location.city}`}
                    </span>
                  </div>
                )}
                
                {event.description && (
                  <p className="text-textSecondary dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>
                )}
                
                <a 
                  href={`https://facebook.com/${event.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                >
                  <span className="mr-1">View on Facebook</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Link to all events */}
      {pageInfo && events.length > 0 && (
        <div className="mt-4 text-center">
          <a 
            href={`https://facebook.com/${pageInfo.id}/events`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
          >
            <span className="mr-1">See all events</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default FacebookEvents;