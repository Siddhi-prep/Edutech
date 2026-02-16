import React, { useState, useEffect } from 'react';
import { X, Calendar, Info } from 'react-feather';

const PromotionalPopup = ({ isChatbotOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageExists, setImageExists] = useState(false);
  const [imagePath, setImagePath] = useState('');
  const [showEventsButton, setShowEventsButton] = useState(true);
  const [showNoEvents, setShowNoEvents] = useState(false);

  const POPUP_SESSION_KEY = 'promotional_popup_session';

  useEffect(() => {
    checkForPromotionalImage();
  }, []);

  const checkForPromotionalImage = async () => {
    const possibleImages = [
      '/promotional-images/offer.jpg',
      '/promotional-images/offer.png',
      '/promotional-images/offer.jpeg',
      '/promotional-images/offer.webp',
      '/promotional-images/promo.jpg',
      '/promotional-images/promo.jpeg',
      '/promotional-images/promo.png',
      '/promotional-images/promotion.jpg',
      '/promotional-images/promotion.png',
      '/promotional-images/banner.jpg',
      '/promotional-images/banner.png',
    ];

    const sessionClosed = sessionStorage.getItem(POPUP_SESSION_KEY);

    for (const path of possibleImages) {
      try {
        const response = await fetch(path, { method: 'HEAD' });
        if (response.ok) {
          setImagePath(path);
          setImageExists(true);

          if (sessionClosed !== 'true') {
            setTimeout(() => {
              setIsVisible(true);
            }, 1500);
          }
          return;
        }
      } catch {
        continue;
      }
    }

    // No image found — no popup, Events button will show "No current events"
    setImageExists(false);
  };

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem(POPUP_SESSION_KEY, 'true');
    setShowEventsButton(true);
  };

  const handleEventsButtonClick = () => {
    if (imageExists) {
      setIsVisible(true);
    } else {
      setShowNoEvents(true);
      setTimeout(() => setShowNoEvents(false), 2500);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      {/* Backdrop overlay — only when image exists and popup is visible */}
      {imageExists && (
        <div
          className={`fixed inset-0 z-[9999] transition-all duration-300 ${
            isVisible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
          onClick={handleBackdropClick}
        >
          <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
            <div
              className={`relative transform transition-all duration-500 ease-out ${
                isVisible
                  ? 'scale-100 opacity-100 translate-y-0'
                  : 'scale-95 opacity-0 translate-y-4'
              }`}
              style={{ maxWidth: '90vw', maxHeight: '90vh' }}
            >
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

              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={imagePath}
                  alt="Special Promotional Offer"
                  loading="lazy"
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: '85vh', maxWidth: '100%' }}
                  onError={() => setImageExists(false)}
                />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-black/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Events Button — always visible, hidden when chatbot is open */}
      {showEventsButton && !isVisible && !isChatbotOpen && (
        <div className="fixed bottom-24 right-6 z-[9998]">
          {/* "No current events" toast */}
          {showNoEvents && (
            <div className="absolute bottom-full right-0 mb-3 bg-white border border-gray-200 rounded-xl shadow-xl px-4 py-3 flex items-center gap-2 whitespace-nowrap animate-fade-in">
              <Info size={16} className="text-gray-400 flex-shrink-0" />
              <span className="text-sm text-gray-600 font-medium">No current events</span>
            </div>
          )}
          <button
            onClick={handleEventsButtonClick}
            className="bg-[#5B9BD5] hover:bg-[#4A8BC2] text-white rounded-full p-3 md:p-4 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
            aria-label="View current events and offers"
            title="View Events & Offers"
          >
            <Calendar
              size={24}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
          </button>
        </div>
      )}

      {/* Prevent body scroll when popup is open */}
      {isVisible && (
        <style>{`body { overflow: hidden; }`}</style>
      )}
    </>
  );
};

export default PromotionalPopup;
