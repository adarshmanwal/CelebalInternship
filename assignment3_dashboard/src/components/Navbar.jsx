import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title}>
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-x1 rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right top-2"
      />
        {icon}
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClicked,
    screenSize,
    setScreenSize,
  } = useStateContext();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setActiveMenu(false);
      } else {
        setActiveMenu(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="menu"
        customFunc={() => setActiveMenu((prev) => !prev)}
        color="blue"
        icon={<AiOutlineMenu></AiOutlineMenu>}
      ></NavButton>
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClicked("cart")}
          color="blue"
          icon={<FiShoppingCart></FiShoppingCart>}
        ></NavButton>
        <NavButton
          title="chat"
          dotColor="#03C9D7"
          customFunc={() => handleClicked("chat")}
          color="blue"
          icon={<BsChatLeft></BsChatLeft>}
        ></NavButton>
        <NavButton
          title="chat"
          dotColor="#03C9D7"
          customFunc={() => handleClicked("notification")}
          color="blue"
          icon={<RiNotification3Line></RiNotification3Line>}
        ></NavButton>
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex item-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => {}}
          >
            <img className="rounded-full w-8 h-8" src={avatar} alt="" />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold text-14">Michael</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14"></MdKeyboardArrowDown>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
