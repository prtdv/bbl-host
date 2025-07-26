const About = () => {
  const teamImages = [
    "/lovable-uploads/e7270a84-1e9c-4678-b9a5-d78c2706f9c1.png",
    "/lovable-uploads/9e5bcf07-214f-4e7e-a999-55c59b446100.png",
    "/lovable-uploads/9604be40-7c2b-4d6d-b890-87438d99e6b3.png",
    "/lovable-uploads/dc19569e-0c53-445f-8720-2447d4997de7.png",
    "/lovable-uploads/276b3fd7-fe73-44cd-91d2-a1762147eaf9.png",
    "/lovable-uploads/cdd4f88a-4bf8-4283-8b66-2e475d0ca905.png"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-12" style={{ color: '#7FB069' }}>
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium mb-16">
            Bright Bulb Labs is where learning meets fun—with games, events, and content that get Gen Z thinking, 
            questioning, and talking. We bring real-world topics to life in ways that actually stick.
          </p>

          {/* Team Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Team member ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Vision Section */}
          <div className="mt-20 mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: '#E91E63' }}>
              Vision
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
              To make staying informed cool again—by turning knowledge into an adventure and sparking critical thinking in every curious Gen Z mind.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mt-16 mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8" style={{ color: '#E91E63' }}>
              Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
              We design playful, interactive experiences that bridge the gap between current affairs, general knowledge, and Gen Z. Through games, events, content, and workshops, we make information engaging, accessible, and worth talking about.
            </p>
          </div>

          {/* Founder Section */}
          <div className="mt-20 bg-white/80 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#3B82F6' }}>
                Chaitra Apte
              </h2>
              <p className="text-xl md:text-2xl font-medium" style={{ color: '#10B981' }}>
                CEO & Founder of Bright Bulb Labs
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Hi! I'm <strong>Chaitra Apte</strong> — a Gen Z trying to solve Gen Z problems in ways that actually feel Gen Z. I studied journalism and communication (yep, I once wanted to be a journalist), but soon realised the issue isn't the lack of information — it's the way it's delivered to us. So, I decided to do something about it. After over six months of refining the idea, here I am — with a small team, big dreams, and endless possibilities.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-gray-300 rounded-2xl aspect-video flex items-center justify-center shadow-lg">
                <video
                src="/lovable-uploads/sgfaf.mp4"  // Change this to match your actual file name
                controls
                className="rounded-2xl w-full h-full object-cover"
                />
              </div>

              </div>

            </div>
          </div>

          {/* Our Recent Collaborators Section */}
          <div className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
              Our Recent Collaborators
            </h2>
            <div className="flex justify-center items-center gap-16 flex-wrap">
              {/* H❤H Logo */}
              <div className="transform hover:scale-110 transition-all duration-300 hover:shadow-lg">
                <div className="bg-white/90 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="/lovable-uploads/24bef4d9-497a-4787-ae3a-7a6555a325f6.png"
                    alt="H❤H Logo"
                    className="w-32 h-20 object-contain"
                  />
                </div>
              </div>
              
              {/* Om Symbol */}
              <div className="transform hover:scale-110 transition-all duration-300 hover:shadow-lg">
                <div className="bg-white/90 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="/lovable-uploads/979a58f7-f73b-44c7-be37-8f5aebe21d87.png"
                    alt="Om Symbol"
                    className="w-20 h-20 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
