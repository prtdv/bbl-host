
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Home = () => {
  const navigate = useNavigate();
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Auto-scrolling Carousel Section */}
      <div className="relative w-full z-10">
        <Carousel 
          ref={emblaRef} 
          className="w-full relative z-20"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="flex items-center justify-center w-full cursor-pointer hover:opacity-95 transition-opacity" onClick={() => window.open('https://www.instagram.com/brightbulblabs.in?igsh=ZHUxOGt5NWhqMjNm', '_blank')}>
                <img 
                  src="/lovable-uploads/c3718adf-d182-40f7-ab60-523af46fb0e1.png" 
                  alt="Cross-Punched Out Now! - Game boxes display" 
                  className="w-full h-auto block"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex items-center justify-center w-full cursor-pointer hover:opacity-95 transition-opacity" onClick={() => navigate('/timeline')}>
                <img 
                  src="/lovable-uploads/9bf8fb40-5c4c-412e-a774-7422b4fc3ed5.png" 
                  alt="Catch Up with Punched-Up!" 
                  className="w-full h-auto block"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex items-center justify-center w-full cursor-pointer hover:opacity-95 transition-opacity" onClick={() => navigate('/cross-punched')}>
                <img 
                  src="/lovable-uploads/484941f8-16e0-41b8-bf19-bfe3b392d3c9.png" 
                  alt="Spark-Flame-Blaze Out Now!" 
                  className="w-full h-auto block"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* Flip Cards Section */}
      <div className="py-16 bg-white relative z-0">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Not Your Typical <span className="animated-bingo">BINGO!</span>
          </h2>
          <p className="text-2xl font-semibold text-blue-600 mb-8">
            Try it Yourself!
          </p>
          
          {/* Flip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Buddhism Card */}
            <div className="flip-card w-full h-80">
              <div className="flip-card-inner w-full h-full relative preserve-3d transition-transform duration-600 hover:rotate-y-180">
                <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/f7407665-9ac3-4207-bd2c-3e488d4e73a3.png" 
                    alt="Buddhism front" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/8827ea0d-95e0-4525-901f-64f716bf0b9a.png" 
                    alt="Buddhism back" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Sushi Card */}
            <div className="flip-card w-full h-80">
              <div className="flip-card-inner w-full h-full relative preserve-3d transition-transform duration-600 hover:rotate-y-180">
                <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/c0bfa534-db38-4995-8b74-d4cf95363d91.png" 
                    alt="Sushi front" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/8e38b9d4-b586-4aa5-a7fa-9464cffda14b.png" 
                    alt="Sushi back" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Newton Card */}
            <div className="flip-card w-full h-80">
              <div className="flip-card-inner w-full h-full relative preserve-3d transition-transform duration-600 hover:rotate-y-180">
                <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/9ca469bb-30db-4cd9-ae6a-cb53f299f337.png" 
                    alt="Newton front" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/24531353-86a1-4ac5-a8f4-ba4206fd0fba.png" 
                    alt="Newton back" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Tony Stark Card */}
            <div className="flip-card w-full h-80">
              <div className="flip-card-inner w-full h-full relative preserve-3d transition-transform duration-600 hover:rotate-y-180">
                <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/dc1f5fae-1dfe-4bd8-a843-5fdc9979024e.png" 
                    alt="Tony Stark front" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/407da93e-4c9f-4582-a1b1-72cfc85fef50.png" 
                    alt="Tony Stark back" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Image Section - Clickable */}
      <div className="bg-gray-100 cursor-pointer hover:opacity-95 transition-opacity relative z-0" onClick={() => console.log('Know More clicked')}>
        <img 
          src="/lovable-uploads/1e6cc659-9907-4c87-a8dd-88516b12a1cb.png" 
          alt="Cross Out Boring Parties - Know More" 
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
};

export default Home;
