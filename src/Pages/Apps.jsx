import { useState } from "react";
import AppCard from "../Components/AppCard";
import useApps from "../Hooks/useApps";
import Container from "../Components/Container";

const Apps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");

  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <>
      <title>Hero IO - Apps</title>
      <div className="bg-gray-100">
        <Container>
          <div className="py-4">
            <h1 className="text-3xl font-bold text-center">
              Our All Applications
            </h1>
            <p className="text-gray-500 text-center pt-2">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>

          <div className="flex justify-between items-center my-4">
            <h1 className="text-xl font-semibold">
              <span>({searchedApps.length})</span> Apps Found
            </h1>

            <div className="join">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                className="input join-item"
                placeholder="search Apps"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
            {searchedApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Apps;
