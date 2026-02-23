import { useNavigate } from "react-router";

const AppNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-xl">
        {/* Illustration */}
        <img
          src={`/App-Error.png`}
          alt="App Not Found"
          className="w-64 md:w-80 mx-auto mb-6"
        />

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          OPPS!! APP NOT FOUND
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-base md:text-lg mb-6">
          The App you are requesting is not found on our system.
          <br />
          Please try another apps
        </p>

        {/* Button */}
        <button
          onClick={() => navigate(-1)}
          className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-3 rounded-md transition shadow-md"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default AppNotFound;
