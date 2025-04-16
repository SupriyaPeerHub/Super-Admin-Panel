import React from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import classNames from "classnames";
import PeerHubLogo from "../../assets/img/PeerHubLogo.png";
import SMyProfile from "../../assets/img/SMyProfile.png";
import SDashBord from "../../assets/img/SDashBord.png";
import SClubs from "../../assets/img/SClubs.png";
import SEvents from "../../assets/img/SEvents.png";
import SGroups from "../../assets/img/SGroups.png";
import SUserInfo from "../../assets/img/SUserInfo.png";
import SReport from "../../assets/img/SReport.png";
import SLogout from "../../assets/img/SLogout.png";
import LMyProfile from "../../assets/img/LMyProfile.png";
import LDashBord from "../../assets/img/LDashBord.png";
import LClubs from "../../assets/img/LClubs.png";
import LEvents from "../../assets/img/LEvents.png";
import LGroups from "../../assets/img/LGroups.png";
import LUserInfo from "../../assets/img/LUserInfo.png";
import LReport from "../../assets/img/LReport.png";
import LLogout from "../../assets/img/LLogout.png";
import SVerification from "../../assets/img/SVerification.png";
import LVerification from "../../assets/img/LVerification.png";
import BackgroundImg from "../../assets/img/BackgroundImg.png";

export function DashboardLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("/"); // Manage active menu globally
  const [openLogOutPopup, setOpenLogOutPopup] = useState(false);

  // Get the current route's data (pageName, pageDescription)
  return (
    <div
      className="flex h-screen bg-slate-900 text-slate-100  bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      {/* Sidebar */}
      <aside
        className={classNames(
          "flex flex-col bg-[#243139] transition-all duration-300 ml-6 mt-8 mb-6 mr-1",
          isSidebarCollapsed ? "w-[70px]" : "w-[230px]"
        )}
      >
        {/* Logo */}
        <div className="p-4 pb-7">
          {isSidebarCollapsed ? (
            "PH"
          ) : (
            <img
              src={PeerHubLogo}
              alt="PeerHubLogo"
              className="h-[24px] w-[108px]"
            />
          )}
        </div>

        {/* Profile Link */}
        <div className="p-2 border-b border-[#605E5E]">
          <NavItem
            image={SMyProfile}
            clickImage={LMyProfile}
            label="Admin Insights"
            path="/admin-insights"
            collapsed={isSidebarCollapsed}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
          <NavItem
            image={SDashBord}
            clickImage={LDashBord}
            label="User Permissions"
            path="/user-permissions"
            collapsed={isSidebarCollapsed}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
          <NavItem
            image={SClubs}
            clickImage={LClubs}
            label="Trust & Safety"
            path="/trust-safety"
            collapsed={isSidebarCollapsed}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        </div>

        {/* Main Navigation */}
        <div className="p-2 pb-4">
          {!isSidebarCollapsed && (
            <p className="px-2 py-1 text-xs text-[#BEBAB9]">MAIN</p>
          )}
          <nav className="space-y-1">
            <NavItem
              image={SEvents}
              clickImage={LEvents}
              label="App Panel"
              path="/app-panel"
              collapsed={isSidebarCollapsed}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
            <NavItem
              image={SGroups}
              clickImage={LGroups}
              label="Web cPanel"
              path="/web-panel"
              collapsed={isSidebarCollapsed}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
            <NavItem
              image={SUserInfo}
              clickImage={LUserInfo}
              label="Chapters Panel"
              path="/chapters-panel"
              collapsed={isSidebarCollapsed}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
            <NavItem
              image={SVerification}
              clickImage={LVerification}
              label="Knowledge Hub Panel"
              path="/knowledge-hub-panel"
              collapsed={isSidebarCollapsed}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
            <NavItem
              image={SReport}
              clickImage={LReport}
              label="HR Panel"
              path="/hr-panel"
              collapsed={isSidebarCollapsed}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
            <NavItem
              image={SReport}
              clickImage={LReport}
              label="User Data Panel"
              path="user-data-panel"
              collapsed={isSidebarCollapsed}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          </nav>
        </div>

        {/* Logout at bottom */}
        <div className="mt-auto pl-2 pt-8">
          <NavItem
            image={SLogout}
            clickImage={LLogout}
            label="Logout"
            openLogOutPopup={openLogOutPopup}
            setOpenLogOutPopup={setOpenLogOutPopup}
            collapsed={isSidebarCollapsed}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        </div>

        {/* Collapse button */}
        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="self-end p-2 m-2 rounded-full hover:bg-slate-800"
        >
          <ChevronDown
            className={classNames(
              "h-5 w-5 text-slate-400 transition-transform",
              isSidebarCollapsed ? "-rotate-90" : "rotate-90"
            )}
          />
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden mt-8">
        {/* Header */}
        {/* <header className="flex items-center justify-between ml-8 mr-8 pt-4 pb-4 h-[102px] border-b border-[#605E5E] bg-[#0B1E29]">
          <div>
            <h1 className="text-xl text-[#FFFFFF] font-Gilroy-SemiBold">
              Dashboard
            </h1>
            
              <p className="text-sm font-Gilroy-Light text-[#FFFFFF]">
                dddd
              </p>
          
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="search"
                placeholder="Search"
                className="w-[250px] h-[45px] pl-10 bg-[#2C3B44] border-[#444444] font-Gilroy-Regular
                 text-[#BEBAB9] placeholder:text-slate-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center space-x-3">
              <img
                src={AdminImage}
                alt="AdminImage"
                className="h-9 w-9 rounded-full"
              />

              <div className="hidden md:block">
                <p className="text-sm font-medium">Daksh Malhotra</p>
                <p className="text-xs text-slate-400">Admin</p>
              </div>
            </div>
          </div>
        </header> */}

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {/* {children} */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function NavItem({
  image,
  clickImage,
  label,
  path,
  collapsed,
  activeMenu,
  setActiveMenu,
  openLogOutPopup,
  setOpenLogOutPopup,
}) {
  const navigate = useNavigate();

  // When Page open, then First active manu is set to overview Page
  useEffect(() => {
    setActiveMenu("/");
    navigate("/");
  }, []);

  const handleOnclickMenu = () => {
    if (openLogOutPopup === false) {
      setOpenLogOutPopup(true);
    } else {
      setActiveMenu(path);
      navigate(path);
    }
  };
  return (
    <button
      onClick={() => handleOnclickMenu()}
      className={classNames(
        "flex items-center w-full p-2 rounded-md cursor-pointer"
      )}
    >
      <img
        src={activeMenu === path ? clickImage : image}
        alt={`sidebarImage-${label}`}
        className="h-[20px] w-[20px] mr-3"
      />
      {!collapsed && (
        <span
          className={` ${
            activeMenu === path ? "text-[#F3642A]" : "text-[#FFFFFF] "
          } font-Gilroy-Regular`}
        >
          {label}
        </span>
      )}
    </button>
  );
}
