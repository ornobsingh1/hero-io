import { Navigate } from "react-router";

const ErrorPage = () => {
  // const error = useRouteError();
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        {/* Illustration */}
        <img
          src={"/error-404.png"}
          alt="404 error"
          className="w-72 md:w-96 mb-6"
        />

        {/* Text */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Oops, page not found!
        </h1>

        <p className="text-gray-500 text-center max-w-md mb-6">
          The page you are looking for is not available.
        </p>

        {/* <p>{error.message}</p> */}

        {/* Button */}
        <button
          onClick={() => Navigate(-1)}
          className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-3 rounded-md transition"
        >
          Go Back!
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
