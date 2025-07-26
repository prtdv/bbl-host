
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import WriteReviewSection from './WriteReviewSection';

interface Review {
  id: string;
  name: string;
  rating: number;
  review_text: string;
  created_at: string;
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isAnimating, setIsAnimating] = useState(false);

  // Fetch reviews from database
  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching reviews:', error);
      } else {
        setReviews(data || []);
      }
    };

    fetchReviews();

    // Set up real-time subscription
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'reviews'
        },
        (payload) => {
          setReviews(prev => [payload.new as Review, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (reviews.length <= 3) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex(prev => {
          let newIndex;
          if (direction === 1) {
            newIndex = prev + 1;
            if (newIndex >= reviews.length - 2) {
              setDirection(-1);
            }
          } else {
            newIndex = prev - 1;
            if (newIndex <= 0) {
              setDirection(1);
            }
          }
          return Math.max(0, Math.min(newIndex, reviews.length - 3));
        });
        setIsAnimating(false);
      }, 150);
    }, 3000);

    return () => clearInterval(interval);
  }, [direction, reviews.length]);

  const getVisibleReviews = () => {
    if (reviews.length === 0) return [];
    if (reviews.length <= 3) return reviews;
    
    const visibleReviews = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      visibleReviews.push(reviews[index]);
    }
    return visibleReviews;
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-8 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl transition-all duration-500 ease-in-out ${
            isAnimating ? 'opacity-70 transform scale-95' : 'opacity-100 transform scale-100'
          }`}>
            {getVisibleReviews().map((review, index) => (
              <div
                key={`${review.id}-${currentIndex}-${index}`}
                className={`bg-white rounded-xl shadow-lg p-6 transform transition-all duration-700 ease-out ${
                  index === 1 ? 'scale-105 shadow-xl border-2 border-blue-200' : 'hover:scale-102'
                } ${isAnimating ? 'translate-y-2' : 'translate-y-0'}`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {getInitials(review.name)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{review.name}</h3>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{review.review_text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        {reviews.length > 3 && (
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index >= currentIndex && index < currentIndex + 3
                    ? 'bg-blue-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}

        {/* Direction indicator */}
        {reviews.length > 3 && (
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className={`transition-all duration-300 ${direction === 1 ? 'text-blue-500' : ''}`}>
                →
              </span>
              <span>Auto-scrolling</span>
              <span className={`transition-all duration-300 ${direction === -1 ? 'text-blue-500' : ''}`}>
                ←
              </span>
            </div>
          </div>
        )}

        {/* Show message when no reviews */}
        {reviews.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No reviews yet. Be the first to write one!</p>
          </div>
        )}

        {/* Write a Review Section */}
        <WriteReviewSection />
      </div>
    </div>
  );
};

export default ReviewsSection;
