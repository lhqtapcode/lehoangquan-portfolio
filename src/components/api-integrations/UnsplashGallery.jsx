import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { searchPhotos, fetchRandomPhotos } from '../../api/unsplash';

/**
 * Component that displays a gallery of images from Unsplash
 * 
 * @param {Object} props - Component props
 * @param {string} props.query - Search query
 * @param {number} props.count - Number of images to display (default: 6)
 * @param {string} props.layout - Gallery layout (grid, masonry) (default: 'grid')
 * @param {boolean} props.random - Whether to fetch random images or search (default: false)
 * @param {string} props.orientation - Image orientation (landscape, portrait, squarish) (default: 'landscape')
 * @param {string} props.className - Additional CSS classes
 */
const UnsplashGallery = ({ 
  query, 
  count = 6, 
  layout = 'grid',
  random = false,
  orientation = 'landscape',
  className = ''
}) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let photos = [];
        
        if (random) {
          photos = await fetchRandomPhotos({ 
            count, 
            query, 
            orientation 
          });
        } else {
          const result = await searchPhotos({ 
            query, 
            perPage: count, 
            orientation 
          });
          photos = result.results || [];
        }
        
        setImages(photos);
      } catch (err) {
        console.error('Error loading Unsplash images:', err);
        setError('Failed to load images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (query || random) {
      loadImages();
    } else {
      setLoading(false);
      setImages([]);
    }
  }, [query, count, random, orientation]);

  // Open image in lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Skeleton loader
  if (loading) {
    return (
      <div className={`w-full ${className}`}>
        <div className={`grid ${layout === 'masonry' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-4`}>
          {[...Array(count)].map((_, index) => (
            <div key={index} className="rounded-lg overflow-hidden animate-pulse">
              <div className="bg-gray-200 dark:bg-gray-700 h-48 w-full"></div>
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
  if (images.length === 0 && !loading) {
    return (
      <div className={`w-full ${className}`}>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center">
          <p className="text-textSecondary dark:text-gray-400">
            {query ? `No images found for "${query}"` : 'Enter a search term to find images'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`w-full ${className}`}>
        {layout === 'masonry' ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((image, index) => (
              <motion.div 
                key={image.id} 
                className="break-inside-avoid rounded-lg overflow-hidden cursor-pointer relative hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => openLightbox(image)}
              >
                <img
                  src={image.urls.regular}
                  alt={image.alt_description || 'Unsplash image'}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="flex items-center justify-between">
                    <a
                      href={`https://unsplash.com/@${image.user.username}?utm_source=lehoangquan&utm_medium=referral`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img 
                        src={image.user.profile_image.small} 
                        alt={image.user.name}
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span>{image.user.name}</span>
                    </a>
                    <a
                      href={image.links.html + "?utm_source=lehoangquan&utm_medium=referral"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xs"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Unsplash
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div 
                key={image.id} 
                className="rounded-lg overflow-hidden cursor-pointer relative hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => openLightbox(image)}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800">
                  <img
                    src={image.urls.regular}
                    alt={image.alt_description || 'Unsplash image'}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="flex items-center justify-between">
                    <a
                      href={`https://unsplash.com/@${image.user.username}?utm_source=lehoangquan&utm_medium=referral`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img 
                        src={image.user.profile_image.small} 
                        alt={image.user.name}
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span>{image.user.name}</span>
                    </a>
                    <a
                      href={image.links.html + "?utm_source=lehoangquan&utm_medium=referral"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xs"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Unsplash
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div 
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.urls.regular}
              alt={selectedImage.alt_description || 'Unsplash image'}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <a
                href={`https://unsplash.com/@${selectedImage.user.username}?utm_source=lehoangquan&utm_medium=referral`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white"
              >
                <img 
                  src={selectedImage.user.profile_image.small} 
                  alt={selectedImage.user.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span>Photo by {selectedImage.user.name} on <span className="underline">Unsplash</span></span>
              </a>
              <a
                href={selectedImage.links.download + "?force=true&utm_source=lehoangquan&utm_medium=referral"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UnsplashGallery;