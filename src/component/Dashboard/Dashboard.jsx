import React from "react";
import App from "../../assets/img/App.png";
import Website from "../../assets/img/Website.png";
import Chapter from "../../assets/img/Chapter.png";
import Knowledge from "../../assets/img/Knowledge.png";
import HR from "../../assets/img/HR.png";
import User from "../../assets/img/User.png";

function Dashboard() {
  return (
    <div className="flex h-auto ml-6 mb-6 mr-6 bg-[#243139] border border-[#BEBAB9] rounded-lg overflow-x-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
        {/* App Admin Panel */}
        <div className="flex flex-col justify-center items-center h-[319px]  w-full max-w-[405px] border-r border-[#BEBAB9]">
          <div className="w-24 h-24 bg-[#F15A2B] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={App} alt="App" className="w-[35px] h-[55px]" />
          </div>
          <div className="pt-3 flex flex-col items-center text-center">
            <span className="text-white font-Gilroy-Medium text-[16px] sm:text-[18px]">
              App
            </span>
            <span className="text-white font-Gilroy-Medium text-[16px] sm:text-[18px]">
              Admin Panel
            </span>
          </div>
        </div>
        {/* Website Admin Panel */}
        <div className="flex flex-col justify-center items-center h-[319px]  w-full max-w-[405px] border-t border-[#BEBAB9] md:border-r md:border-[#BEBAB9] ">
          <div className="w-24 h-24 bg-[#F15A2B] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={Website} alt="Website" className="w-[55px] h-[55px]" />
          </div>
          <div className="pt-3 flex flex-col items-center text-center">
            <span className="text-white font-Gilroy-Medium text-[16px] sm:text-[18px]">
              Website
            </span>
            <span className="text-white font-Gilroy-Medium text-[16px] sm:text-[18px]">
              Admin Panel
            </span>
          </div>
        </div>
        {/* Chapter Management Admin Panel */}
        <div className="flex flex-col justify-center items-center h-[319px] w-full max-w-[405px] border-t border-[#BEBAB9] md:border-r md:border-[#BEBAB9]">
          <div className="w-24 h-24 bg-[#F15A2B] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={Chapter} alt="Chapter" className="w-[55px] h-[55px]" />
          </div>

          <div className="pt-3 flex flex-col items-center text-center">
            <span className="text-white font-Gilroy-Medium text-[16px] sm:text-[18px]">
              Chapter Management
            </span>
            <span className="text-white font-Gilroy-Medium text-[16px] sm:text-[18px]">
              Admin Panel
            </span>
          </div>
        </div>

        {/* Knowledge Hub Admin Panel */}
        <div className="flex flex-col justify-center items-center h-[319px]  w-full max-w-[405px] border-t border-r border-[#BEBAB9]">
          <div className="w-24 h-24 bg-[#F15A2B] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={Knowledge}
              alt="Knowledge"
              className="w-[55px] h-[55px]"
            />
          </div>
          <div className="pt-3 flex flex-col items-center text-center">
            <span className="text-white font-Gilroy-Medium text-[16px] sm:text-[18px]">
              Knowledge Hub
            </span>
            <span className="text-white font-Gilroy-Medium text-[16px] sm:text-[18px]">
              Admin Panel
            </span>
          </div>
        </div>
        {/* HR Management Admin Panel */}
        <div className="flex flex-col justify-center items-center h-[319px]  w-full max-w-[405px] border-t border-r border-[#BEBAB9]">
          <div className="w-24 h-24 bg-[#F15A2B] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={HR} alt="Hr" className="w-[55px] h-[55px]" />
          </div>

          <div className="pt-3 flex flex-col items-center text-center">
            <span className="text-white font-Gilroy-Medium text-[16px] sm:text-[18px]">
              HR Management
            </span>
            <span className="text-white font-Gilroy-Medium text-[16px] sm:text-[18px]">
              Admin Panel
            </span>
          </div>
        </div>
        {/* User Management Admin Panel */}
        <div className="flex flex-col justify-center items-center h-[319px] border-t w-full max-w-[405px]">
          <div className="w-24 h-24 bg-[#F15A2B] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={User} alt="User" className="w-[55px] h-[55px]" />
          </div>
          <div className="pt-3 flex flex-col items-center text-center">
            <span className="text-white font-Gilroy-Medium text-[16px] sm:text-[18px]">
              User Management
            </span>
            <span className="text-white font-Gilroy-Medium text-[16px] sm:text-[18px]">
              Admin Panel
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
