import Container from "./Container";

const Banner = () => {
  return (
    <>
      <section className="bg-gray-100 pt-14">
        <Container>
          <div className="text-center space-y-1">
            <h1 className="text-5xl font-bold">We Build</h1>
            <h1 className="text-5xl font-bold">
              <span className="font-extrabold text-5xl bg-linear-to-t from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>
            <div className="pt-2">
              <p className="text-gray-500 text-sm">
                At HERO.IO, we craft innovative apps designed to make everyday
                life simpler, smarter, and more exciting.
              </p>{" "}
              <p className="text-gray-500 text-sm">
                Our goal is to turn your ideas into digital experiences that
                truly make an impact.
              </p>
            </div>

            {/* btn */}
            <div className="pt-4">
              <button className="btn btn-outline mr-2 border-gray-400">
                <img className="w-7" src="/playStore.png" alt="" /> Google Play
              </button>
              <button className="btn btn-outline border-gray-400">
                <img className="w-7" src="/appStore.png" alt="" /> App Store
              </button>
            </div>
          </div>

          <div className="w-2/3 mx-auto pt-6">
            <img src="/hero.png" alt="" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
