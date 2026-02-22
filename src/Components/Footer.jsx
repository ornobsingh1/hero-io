import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-6">
      {/* Inner Container */}
      <div className="w-11/12 mx-auto flex flex-col items-center">
        {/* Top Row */}
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <img className="h-10" src="/logo.png" alt="" />
            <h1 className="bg-linear-to-t from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
              Hero.IO
            </h1>
          </div>

          {/* Social */}
          <div className="text-white text-right">
            <p className="font-semibold text-sm">Social Links</p>
            <div className="flex gap-3 justify-end">
              <Twitter className="cursor-pointer hover:text-purple-400 transition" />
              <Linkedin className="cursor-pointer hover:text-purple-400 transition" />
              <Facebook className="cursor-pointer hover:text-purple-400 transition" />
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <aside className="mt-4 text-center">
          <p className="text-white text-sm">
            Copyright © {new Date().getFullYear()} – All right reserved by
            Hero.io Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
