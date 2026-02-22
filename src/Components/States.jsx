const States = () => {
  return (
    <section className="bg-linear-to-r from-[#6D3DF2] to-[#9B5CF6] py-16">
      <div className="w-11/12 mx-auto text-white text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-14">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div>
            <p className="text-sm opacity-80 mb-2">Total Downloads</p>
            <h3 className="text-5xl font-bold mb-2">29.6M</h3>
            <p className="text-sm opacity-90">21% more than last month</p>
          </div>

          {/* Card 2 */}
          <div>
            <p className="text-sm opacity-80 mb-2">Total Reviews</p>
            <h3 className="text-5xl font-bold mb-2">906K</h3>
            <p className="text-sm opacity-90">46% More Than Last Month</p>
          </div>

          {/* Card 3 */}
          <div>
            <p className="text-sm opacity-80 mb-2">Active Apps</p>
            <h3 className="text-5xl font-bold mb-2">132+</h3>
            <p className="text-sm opacity-90">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default States;
