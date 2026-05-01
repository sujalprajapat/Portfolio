import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import WelcomeSection from "./WelcomeSection";
import Dock from "../ExternalComponent/Dock";
import { FaBars} from "react-icons/fa";
import Email from '../Asset/email.png';
import Github from '../Asset/github.png';
import LinkedIn from '../Asset/linkedin.png';
import Resume from '../Asset/cv.png';
import upwork from '../Asset/upwork.png'
import fiverr from '../Asset/fiverr.png'
import stack from '../Asset/stack.png'
import { IoClose } from "react-icons/io5";
import Footer from "./Home/Footer";
function Layout() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMenu, setIsMenu] = useState(false);
  setTimeout(() => {
    setIsLoading(false);
  }, [5000])
    const dockItems = [
        {
            icon: Email,
            label: "Email",
            onClick: () => {
                window.location.href = "mailto:sujalprajapat49@gmail.com";
            },
        },
        {
            icon: upwork,
            label: "Upwork",
            onClick: () => window.location.href="https://www.upwork.com/freelancers/~01a8bec1588d616b1d",
        },
        {
            icon: Github,
            label: "Github",
            onClick: () => {
                window.location.href = "https://github.com/sujalprajapat49"
            },
        },
        {
            icon: LinkedIn,
            label: "LinkedIn",
            onClick: () => window.location.href = "https://linkedin.com/in/sujal-prajapat-2a44802b2",
        },
        {
            icon: fiverr,
            label: "Fiverr",
            onClick: () => window.location.href = "https://www.fiverr.com/sujalprajapat/buying?source=avatar_menu_profile",
        },
        {
            icon: stack,
            label: "Stack",
            onClick: () => window.location.href = "https://stackoverflow.com/users/24679865/sujal-prajapat",
        },
        {
            icon: Resume,
            label: "Resume",
            onClick: () => {
                const link = document.createElement("a");
                link.href = "/Sujal_Prajapat_Resume.pdf"; // make sure file is in public folder
                link.download = "Sujal_Prajapat_Resume.pdf";
                link.click();
            },
        },
    ];
  return (
    <>
      {isLoading ? <WelcomeSection />
        :
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>

      }

      {!isLoading && (
        <div className="bg-white hover:bg-white/50 hover:border-[] cursor-pointer h-12 w-12 rounded-full flex justify-center items-center fixed bottom-2 right-2 curser-pointer z-[99]" onClick={() => { setIsMenu((prev) => !prev) }}>{!isMenu ? <FaBars /> : <IoClose />}</div>

      )}
      
      {isMenu && (
        <Dock items={dockItems} />
      )}
    </>
  )
}
export default Layout;