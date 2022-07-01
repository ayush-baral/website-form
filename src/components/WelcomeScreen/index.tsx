import React from "react";
import Layout from "../Layout";

const DUMMY_DATA = { name: "Hotel Mountain View" };

const WelcomeScreen: React.FC<{
  setToggleWelcomeScreen: (toggleWelcomeScreen: boolean) => void;
  logo: string;
  welcome_background_image: string;
  welcome_text: string;
}> = ({
  setToggleWelcomeScreen,
  welcome_text,
  welcome_background_image,
  logo,
}) => {
  console.log("welcome_text", welcome_text);
  console.log("welcome_background_image", welcome_background_image);
  console.log("logo", logo);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="overflow-hidden pt-[50px] h-full w-full">
        {/* Heading starts */}
        <h1 className="font-medium text-xl text-center text-white">
          {welcome_text}
        </h1>

        {/* Image Container Starts */}
        <div className="mt-14 w-[120px] h-[120px] bg-[#D9D9D9] rounded-full mx-auto overflow-hidden">
          <img src={logo} alt="hotel" className="h-full w-full object-cover" />
        </div>
        <div className="flex justify-center mb-[40px]">
          <button
            className="bg-[#01494F] text-white w-full  max-w-[350px] py-6 px-20 mt-[132px] hover:opacity-80 transition duration-300 ease-out"
            onClick={() => setToggleWelcomeScreen(false)}
          >
            Proceed to Check in
          </button>
        </div>
      </div>
      <div className="absolute bg-black top-0 left-0 opacity-30 h-full w-full z-[-1]" />
      <div className="absolute top-0 left-0 h-full z-[-2] w-full">
        <img
          src={welcome_background_image}
          alt="hotel"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default WelcomeScreen;
