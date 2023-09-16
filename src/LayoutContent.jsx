import Sidebar from "./components/Sidebar";
import SidebarRight from "./components/SidebarRight";
import NavbarContent from "./components/NavbarContent";

const LayoutContent = ({ children }) => {
  const dataSideRight = {
    install: ["install", "tailwind config", "example repositories"],
    cdn: ["install", "tailwind config", "example repositories"],
  };
  return (
    <>
      <NavbarContent />
      <div className="bg-[#e9edf0] min-h-screen flex justify-center text-[#293948]">
        <div className="w-full flex max-w-[1280px]">
          <Sidebar />
          <div className="lg:w-[60%] w-full bg-[#e9edf0] min-h-screen ">
            <main className="pt-[60px] text-[#293948] ">
              <div className="lg:px-[50px] p-5 lg:py-[20px]">{children}</div>
            </main>
          </div>

          <SidebarRight menuData={dataSideRight} />
        </div>
      </div>
    </>
  );
};

export default LayoutContent;
