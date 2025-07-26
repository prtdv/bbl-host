
import { Button } from "@/components/ui/button";
import ReviewsSection from "@/components/ReviewsSection";

const Timeline = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full">
        <img 
          src="/lovable-uploads/1172e698-dd67-4efc-aff2-859bcb81bd91.png" 
          alt="Bright Bulb Labs Timeline - Light Bulb Moment to Punched Up!" 
          className="w-full h-auto block"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>

      <div className="w-full">
        <img 
          src="/lovable-uploads/c133f418-03b6-474a-bacf-6c3ea861ed33.png" 
          alt="Punched Up! - July 10, 8 PM, Hippie at heart, Kothrud" 
          className="w-full h-auto block"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>

      {/* Punched Up 2 Section */}
      <div className="bg-white py-12 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-red-600 mb-8">
            PUNCHED UP 2!
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Punched Up returned for its second edition on 10th July at Hippie at Heart, Kothrud, 
            turning bingo into a clue-based, culture-cracking game night once again. Hosted by 
            the quizmaster Naman Jain, and in collaboration with Mind Forge Quizzes. With pop 
            culture clues spanning everything from politics to poetry, it was a fast-paced evening 
            of brains, banter, and buzzing Gen Z energy — designed to make thinking fun and 
            winning even better.
          </p>
        </div>
      </div>

      {/* New images with hover zoom effect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/2ab63637-e441-4506-a595-4ef1f65b82d3.png" 
            alt="Event Photo 1" 
            className="w-full h-auto block transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/3cfe7836-9c02-420c-a7be-a645585e52e6.png" 
            alt="Event Photo 2" 
            className="w-full h-auto block transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/743b1d76-33b5-4998-8877-c5079d91bc51.png" 
            alt="Event Photo 3" 
            className="w-full h-auto block transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/bddf3b1f-029d-4622-b9b7-a5b17ad0cc12.png" 
            alt="Event Photo 4" 
            className="w-full h-auto block transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Subscribe Now Button */}
      <div className="flex justify-center py-8">
        <a 
          href="https://www.instagram.com/brightbulblabs.in?igsh=ZHUxOGt5NWhqMjNm" 
          target="_blank" 
          rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity"
            >
        <Button 
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Subscribe Now
        </Button>
        </a>
      </div>

      {/* Additional text below button */}
      <div className="flex justify-center pb-4">
        <p className="text-gray-600 text-lg">Keep up with our upcoming events!</p>
      </div>

      {/* Hear it from our visitors image */}
      <div className="w-full">
        <img 
          src="/lovable-uploads/d971a5fd-73cf-439a-a203-37e56666b9fd.png" 
          alt="Hear it from our visitors" 
          className="w-full h-auto block"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </div>

      {/* Reviews Section */}
      <ReviewsSection />
    </div>
  );
};

export default Timeline;
