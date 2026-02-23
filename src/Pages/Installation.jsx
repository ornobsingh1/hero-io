import { useEffect, useState } from "react";
import useApps from "../Hooks/useApps";
import { getStoredApp } from "../utility/addToDB";
import { ArrowDownToLine, Container, Star } from "lucide-react";

const Installation = () => {
  const [install, setInstall] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  const { apps } = useApps();
  useEffect(() => {
    if (apps.length === 0) return;

    const storedAppData = getStoredApp();
    const convertedStoredApps = storedAppData.map((id) => parseInt(id));
    const myInstall = apps.filter((app) =>
      convertedStoredApps.includes(app.id),
    );
    setInstall(myInstall);
  }, [apps]);

  const sortedItem = () => {
    if (sortOrder === "price-asc") {
      return [...install].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "price-desc") {
      return [...install].sort((a, b) => b.downloads - a.downloads);
    } else {
      return install;
    }
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="py-4">
        <h1 className="text-3xl font-bold text-center">Your Installed Apps</h1>
        <p className="text-gray-500 text-center pt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center mb-4 mt-2 w-11/12 mx-auto">
        <h1 className="text-lg font-semibold">
          <span>({install.length})</span> Apps Found
        </h1>

        {/* sort */}
        <label className="form-control">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered"
          >
            <option value="none">Sort By Price</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      <div className="space-y-4">
        {sortedItem().map((i) => (
          <div className="w-11/12 mx-auto bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              {/* App Image */}
              <img
                className="w-14 h-14 bg-gray-300 rounded-lg object-cover"
                src={i.image}
                alt=""
              />

              {/* App Info */}
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {i.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1 text-emerald-600">
                    <ArrowDownToLine size={20} /> {i.downloads}
                  </span>

                  <span className="flex items-center gap-1 text-orange-500">
                    <Star size={20} /> {i.ratingAvg}
                  </span>

                  <span>{i.size} MB</span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-md transition cursor-pointer">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
