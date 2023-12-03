import bannerImg from "../../../assets/bannerBG.jpg";
const Banner = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bannerImg}
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative  flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-3xl  leading-tight mb-4">Animals</h1>
          <h1 className="text-8xl font-bold leading-tight mb-4">
            Needed Your Help
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            You can chip in with money & effort! Cats, Dogs and Even Raccoons
            Adopt Any Pet You Like!{" "}
          </p>
          <a
            href=""
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Donate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
