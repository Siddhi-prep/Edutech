import React, { useState, useEffect } from 'react';
import { X, Calendar } from 'react-feather';

const PromotionalPopup = ({ isChatbotOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageExists, setImageExists] = useState(false);
  const [imagePath, setImagePath] = useState('');
  const [showEventsButton, setShowEventsButton] = useState(false);

  // Check if popup was closed in this session
  const POPUP_CLOSED_KEY = 'promotional_popup_closed';
  const POPUP_SESSION_KEY = 'promotional_popup_session';

  useEffect(() => {
    // Check if image exists
    checkForPromotionalImage();
    
    // Check if Events button should be shown (if user closed popup before in this session)
    const wasClosedBefore = sessionStorage.getItem(POPUP_SESSION_KEY);
    if (wasClosedBefore === 'true') {
      setShowEventsButton(true);
    }
  }, []);

  const checkForPromotionalImage = async () => {
    // List of possible promotional image names to check
    const possibleImages = [
      '/promotional-images/offer.jpg',
      '/promotional-images/offer.png',
      '/promotional-images/offer.jpeg',
      '/promotional-images/offer.webp',
      '/promotional-images/promo.jpg',
      '/promotional-images/promo.png',
      '/promotional-images/promotion.jpg',
      '/promotional-images/promotion.png',
      '/promotional-images/banner.jpg',
      '/promotional-images/banner.png',
    ];

    console.log('🔍 Checking for promotional images...');

    // Check session storage - if closed before, don't auto-show popup
    const sessionClosed = sessionStorage.getItem(POPUP_SESSION_KEY);
    if (sessionClosed === 'true') {
      console.log('⚠️ Popup was closed before. Events button will be available.');
      // Still check if image exists for the Events button to work
    }

    // Try to find an existing image
    for (const imagePath of possibleImages) {
      try {
        console.log(`Checking: ${imagePath}`);
        const response = await fetch(imagePath, { method: 'HEAD' });
        if (response.ok) {
          console.log(`✅ Found promotional image: ${imagePath}`);
          setImagePath(imagePath);
          setImageExists(true);
          
          // Only auto-show popup if it hasn't been closed before in this session
          if (sessionClosed !== 'true') {
            // Show popup after a short delay for better UX
            setTimeout(() => {
              console.log('🎉 Showing promotional popup now!');
              setIsVisible(true);
            }, 1500);
          } else {
            console.log('✅ Image loaded. Events button is ready.');
          }
          break;
        }
      } catch (error) {
        console.log(`❌ Not found: ${imagePath}`);
        // Image doesn't exist, continue checking
        continue;
      }
    }

    console.log('🔍 Finished checking all promotional image names.');
  };

  const handleClose = () => {
    setIsVisible(false);
    // Remember that user closed it for this session
    sessionStorage.setItem(POPUP_SESSION_KEY, 'true');
    
    // Show the Events button after closing
    setTimeout(() => {
      setShowEventsButton(true);
    }, 500);
  };

  const handleEventsButtonClick = () => {
    // Reopen the popup when Events button is clicked
    setIsVisible(true);
    setShowEventsButton(false);
  };

  const handleBackdropClick = (e) => {
    // Close when clicking on backdrop (outside the image)
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Don't render anything if image doesn't exist or popup is not visible
  if (!imageExists) {
    return null;
  }

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-[9999] transition-all duration-300 ${
          isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        onClick={handleBackdropClick}
      >
        {/* Popup Container */}
        <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
          <div
            className={`relative transform transition-all duration-500 ease-out ${
              isVisible
                ? 'scale-100 opacity-100 translate-y-0'
                : 'scale-95 opacity-0 translate-y-4'
            }`}
            style={{ maxWidth: '90vw', maxHeight: '90vh' }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-10 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 md:p-3 shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 group"
              aria-label="Close promotional popup"
            >
              <X 
                size={24} 
                className="group-hover:rotate-90 transition-transform duration-300"
              />
            </button>

            {/* Promotional Image */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={imagePath}
                alt="Special Promotional Offer"
                className="w-full h-auto object-contain"
                style={{
                  maxHeight: '85vh',
                  maxWidth: '100%',
                }}
                onError={() => {
                  console.error('Failed to load promotional image');
                  setImageExists(false);
                }}
              />
              
              {/* Optional: Gradient overlay for better close button visibility */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-black/10 to-transparent pointer-events-none" />
            </div>

            {/* Optional: Bottom action area (if needed) */}
            {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
              <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Offer Details
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Events Button - Shows after popup is closed, hidden when chatbot is open */}
      {showEventsButton && !isVisible && !isChatbotOpen && (
        <button
          onClick={handleEventsButtonClick}
          className="fixed bottom-24 right-6 z-[9998] bg-[#5B9BD5] hover:bg-[#4A8BC2] text-white rounded-full p-3 md:p-4 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="View current events and offers"
          title="View Events & Offers"
        >
          <Calendar 
            size={24} 
            className="group-hover:rotate-12 transition-transform duration-300"
          />
          
          {/* Tooltip */}
          <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            View Events 🎉
          </span>
        </button>
      )}

      {/* Prevent body scroll when popup is open */}
      <style>
        {isVisible && `
          body {
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
};

export default PromotionalPopup;
