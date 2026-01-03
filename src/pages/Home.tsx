import spidey from "../../src/assets/spidey.png";
import bg from "../../src/assets/bg.jpg";

function Home() {
  return (
    <div className="bg-[#101014] w-full min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Image with Low Opacity */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ backgroundImage: `url(${bg})` }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Website Info */}
          <div className="flex-1 text-white space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold">Gameboxd</h1>
            <p className="text-xl lg:text-2xl text-gray-300">
              Track games you've played. Save those you want to play. Tell your
              friends what's good.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side - Spider-Man Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={spidey}
              alt="Spider-Man"
              className="max-w-full h-auto rounded-lg opacity-85 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
