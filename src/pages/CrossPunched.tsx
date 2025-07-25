
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ReviewsSection from "@/components/ReviewsSection";
import { useState } from "react";

const CrossPunched = () => {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  const [showBottomsUpText, setShowBottomsUpText] = useState(false);
  const [showDecodeText, setShowDecodeText] = useState(false);

  const handleImageClick = () => {
    window.open('https://www.instagram.com/brightbulblabs.in?igsh=ZHUxOGt5NWhqMjNm', '_blank');
  };

  const handleBuyNow = () => {
    window.open('https://www.instagram.com/brightbulblabs.in?igsh=ZHUxOGt5NWhqMjNm', '_blank');
  };

  const handleBottomImageClick = () => {
    setShowText(!showText);
  };

  const handleBottomsUpImageClick = () => {
    setShowBottomsUpText(!showBottomsUpText);
  };

  const handleDecodeImageClick = () => {
    setShowDecodeText(!showDecodeText);
  };

  return (
    <div className="min-h-screen">
      {/* Clickable Background Image */}
      <img 
        src="/lovable-uploads/be1e48ef-1d1b-4898-be79-7036ea686a8b.png" 
        alt="Cross-Punched - Not Your Typical BINGO" 
        className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
        onClick={handleImageClick}
      />
      
      {/* New section below */}
      <div className="w-full">
        <img 
          src="/lovable-uploads/3c8bf824-f9cd-4b61-8a28-afc0214e32a4.png" 
          alt="What is Cross-Punched? - Game description" 
          className="w-full h-auto block"
        />
      </div>

      {/* Enhanced Grid layout for game examples */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/lovable-uploads/42ee9122-0758-4dbf-b0f1-43f9a016daea.png" 
                    alt="Cross-Punched game example with Nike card" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="text-white text-center p-6 pb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold mb-2 tracking-wide">CROSS</h3>
                    <p className="text-sm uppercase tracking-wider opacity-90">Nike Brand Challenge</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/lovable-uploads/c1acdaf2-c2f8-43d6-81a9-b87b8936f12b.png" 
                    alt="Cross-Punched game examples with multiple cards" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="text-white text-center p-6 pb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold mb-2 tracking-wide">PUNCHED</h3>
                    <p className="text-sm uppercase tracking-wider opacity-90">Multiple Game Cards</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer md:col-span-2 lg:col-span-1">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/lovable-uploads/1752119e-c2c6-4ec0-b6dd-8dffa8837349.png" 
                    alt="Cross-Punched completed game board" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                  <div className="text-white text-center p-6 pb-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold mb-2 tracking-wide">CROSS-PUNCHED</h3>
                    <p className="text-sm uppercase tracking-wider opacity-90">Completed Game Board</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Playback Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How to Play</h2>
            <p className="text-lg text-gray-600">Watch the video to learn the game rules</p>
          </div>
          
          <div className="aspect-video rounded-2xl shadow-lg overflow-hidden">
          <iframe
            src="https://drive.google.com/file/d/1-nZ6XhWwao_YxQNDUYhuh0jgH9eDfR-U/preview"
            allow="autoplay"
            className="w-full h-full"
          ></iframe>
          </div>
        </div>
      </div>

      {/* Buy Now Section */}
      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Button 
            onClick={handleBuyNow}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
          >
            Buy Now
          </Button>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">What our Customers Think.....</h2>
          </div>
          <ReviewsSection />
        </div>
      </div>

      {/* Clickable image section with text overlay */}
      <div className="w-full relative">
        <img 
          src="/lovable-uploads/756d9d4a-32ba-4319-8a53-d0d8571613b2.png" 
          alt="PYAAR, TAQRAAR AUR BINGO KA WAR! - Game Details" 
          className="w-full h-auto block cursor-pointer hover:opacity-95 transition-opacity"
          onClick={handleBottomImageClick}
        />
        
        {/* Animated text overlay */}
        <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-500 ${
          showText ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className={`text-white text-center px-8 py-12 max-w-4xl mx-auto transform transition-all duration-700 ${
            showText ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
          }`}>
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 transition-all duration-700 delay-200 ${
              showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              PYAAR, TAQRAAR AUR BINGO KA WAR!
            </h3>
            <p className={`text-lg md:text-xl lg:text-2xl leading-relaxed transition-all duration-700 delay-400 ${
              showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              The perfect mix of bonding and fun for all ages, making family getaways and gatherings more engaging. Wild cards let players mark extra words, swap choices, or double their chances of winning!
            </p>
            <div className={`mt-8 transition-all duration-700 delay-600 ${
              showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Button 
                onClick={handleBottomImageClick}
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:border-white/40"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Gap between the two image sections */}
      <div className="py-8"></div>

      {/* Bottom's Up image section with text overlay */}
      <div className="w-full relative">
        <img 
          src="/lovable-uploads/0510f801-905c-471c-84a8-cab7d1bb0e90.png" 
          alt="BOTTOM'S UP! - Party Edition Game" 
          className="w-full h-auto block cursor-pointer hover:opacity-95 transition-opacity"
          onClick={handleBottomsUpImageClick}
        />
        
        {/* Animated text overlay for Bottom's Up */}
        <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-500 ${
          showBottomsUpText ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className={`text-white text-center px-8 py-12 max-w-4xl mx-auto transform transition-all duration-700 ${
            showBottomsUpText ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
          }`}>
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 transition-all duration-700 delay-200 ${
              showBottomsUpText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              BOTTOM'S UP!
            </h3>
            <p className={`text-lg md:text-xl lg:text-2xl leading-relaxed transition-all duration-700 delay-400 ${
              showBottomsUpText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              A wild and unpredictable party edition that brings life (and lots of drinks) to the table! Special wild cards involve taking shots, calling the shots, and punishing the least lucky player.
            </p>
            <div className={`mt-8 transition-all duration-700 delay-600 ${
              showBottomsUpText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Button 
                onClick={handleBottomsUpImageClick}
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:border-white/40"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Gap between Bottom's Up and Decode sections */}
      <div className="py-8"></div>

      {/* Decode image section with text overlay */}
      <div className="w-full relative">
        <img 
          src="/lovable-uploads/837670a3-bd2f-465b-9096-1044f6e8749e.png" 
          alt="DECODE! - Educational Quiz Game" 
          className="w-full h-auto block cursor-pointer hover:opacity-95 transition-opacity"
          onClick={handleDecodeImageClick}
        />
        
        {/* Animated text overlay for Decode */}
        <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-500 ${
          showDecodeText ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className={`text-white text-center px-8 py-12 max-w-4xl mx-auto transform transition-all duration-700 ${
            showDecodeText ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
          }`}>
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 transition-all duration-700 delay-200 ${
              showDecodeText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              DECODE!
            </h3>
            <p className={`text-lg md:text-xl lg:text-2xl leading-relaxed transition-all duration-700 delay-400 ${
              showDecodeText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Designed for kids 12+, this mode turns learning into a competitive quiz where correct answers lead to victory. Wild cards introduce bonus challenges, rapid-fire rounds, and news-based tasks to keep things exciting.
            </p>
            <div className={`mt-8 transition-all duration-700 delay-600 ${
              showDecodeText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Button 
                onClick={handleDecodeImageClick}
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30 hover:border-white/40"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Rules Explained Section */}
      <div className="w-full">
        <img 
          src="/lovable-uploads/a74b72e6-bb80-45bb-af3b-c73ce32fd7fc.png" 
          alt="Rules Explained - Game Rules and Instructions" 
          className="w-full h-auto block"
        />
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Get answers to common questions about Cross-Punched</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="delivery" className="bg-white rounded-lg shadow-md border border-blue-100">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-blue-700 hover:text-blue-800">
                How long will it take to deliver my cross punched?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-lg">1-2 days within Pune. 2-7 days anywhere within Maharashtra.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="answer-key" className="bg-white rounded-lg shadow-md border border-blue-100">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-blue-700 hover:text-blue-800">
                I have lost my answer key. What do I do?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="mb-2">Don't worry! We have an answer key for all the sets right here on our website.</p>
                  <Button 
                    variant="outline" 
                    className="bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
                  >
                    Click Here
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="used-cards" className="bg-white rounded-lg shadow-md border border-blue-100">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-blue-700 hover:text-blue-800">
                I have played and used up my bingo cards of one set. What do I do?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p>You can always buy more bingo cards of the same set. Just slide into our DMs, and you are good to go.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="multiple-modes" className="bg-white rounded-lg shadow-md border border-blue-100">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold text-blue-700 hover:text-blue-800">
                Can I play 2 modes at the same time?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p>Of course you can! This game is to test your creativity and maximise on your fun. Get ready to take shots with your family, though!</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CrossPunched;
