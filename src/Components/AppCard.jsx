const AppCard = ({ app }) => {
  const { title, ratingAvg, downloads, image } = app;
  return (
    <div className="bg-base-200 hover:bg-base-300 duration-300 border border-gray-100 rounded-2xl shadow-sm p-4 cursor-pointer">
      <div className="">
        <img
          className="h-40 w-full object-cover rounded-xl"
          src={image}
          alt=""
        />
      </div>

      {/* Content Section */}
      <div className="space-y-4">
        {/* Title */}
        <h2 className="text-lg pt-3 font-bold text-[#001D3D] leading-tight tracking-tight">
          {title}
        </h2>

        {/* Footer Stats */}
        <div className="flex justify-between items-center pt-1">
          {/* Download Badge */}
          <div className="flex items-center gap-1.5 bg-[#F0F9F4] text-[#22C55E] px-3 py-1.5 rounded-md text-sm font-bold">
            <img className="w-4" src="/icon-downloads.png" alt="" />
            <span className="">{downloads}</span>
          </div>

          {/* Rating Badge */}
          <div className="flex items-center gap-1.5 bg-[#FFF7ED] text-[#F97316] px-3 py-1.5 rounded-md text-sm font-bold">
            <img className="w-4" src="/icon-ratings.png" alt="" />
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
