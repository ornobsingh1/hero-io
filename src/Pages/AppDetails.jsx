import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { ArrowDownToLine, MessageCircleCode, Star } from "lucide-react";
import { addToStoredDB } from "../utility/addToDB";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();

  if (loading) return <p>Loading...</p>;
  const app = apps.find((a) => a.id === Number(id));
  if (!app) {
    return <p className="text-center">App Not Found</p>;
  }

  const {
    image,
    companyName,
    title,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
  } = app;

  const handleAddToLocalStorage = (id) => {
    addToStoredDB(id);
  };
  return (
    <div>
      <div className="max-w-6xl mx-auto p-6 bg-white">
        <div className="flex flex-col md:flex-row gap-6">
          {/* App Image */}
          <div className="w-full md:w-1/4 flex justify-center">
            <img
              src={image}
              alt="App Icon"
              className="w-full h-full object-cover"
            />
          </div>

          {/* App Info */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

            <p className="text-gray-600 mt-1">
              Developed by{" "}
              <span className="text-indigo-600 font-semibold">
                {companyName}
              </span>
            </p>

            <hr className="my-4" />

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Downloads */}
              <div>
                <span className="text-green-500 text-3xl">
                  <ArrowDownToLine size={36} />
                </span>
                <div className="pt-2">
                  <p className="text-sm text-gray-500">Downloads</p>
                  <p className="text-2xl font-bold">{downloads}</p>
                </div>
              </div>

              {/* Rating */}
              <div>
                <span className="text-orange-400 text-3xl">
                  <Star size={36} />
                </span>
                <div className="pt-2">
                  <p className="text-sm text-gray-500">Average Ratings</p>
                  <p className="text-2xl font-bold">{ratingAvg}</p>
                </div>
              </div>

              {/* Reviews */}
              <div>
                <span className="text-purple-500 text-3xl">
                  <MessageCircleCode size={36} />
                </span>
                <div className="pt-2">
                  <p className="text-sm text-gray-500">Total Reviews</p>
                  <p className="text-2xl font-bold">{reviews}</p>
                </div>
              </div>
            </div>

            {/* Install Button */}
            <button
              onClick={() => handleAddToLocalStorage(id)}
              className="cursor-pointer mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Install Now ({size} MB)
            </button>
          </div>
        </div>

        <hr className="mt-8" />

        <h1 className="text-2xl font-bold text-gray-900 py-2">Description</h1>
        <p className="text-md text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
