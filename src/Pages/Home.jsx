import { Link } from "react-router";
import AppCard from "../Components/AppCard";
import Banner from "../Components/Banner";
import Container from "../Components/Container";
import States from "../Components/States";
import useApps from "../Hooks/useApps";

const Home = () => {
  const { apps } = useApps();

  const trendingApp = apps.slice(0, 8);
  return (
    <div>
      <Banner />
      <States />

      <div className="py-12">
        <h1 className="text-3xl font-bold text-center">Trending Apps</h1>
        <p className="text-gray-500 text-center pt-2">
          Explore All Trending Apps on the Market developed by us
        </p>

        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {trendingApp.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-6">
            <Link
              to="/apps"
              className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
            >
              Show All
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
