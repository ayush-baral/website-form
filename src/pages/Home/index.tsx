import React from "react";

const DUMMY_DATA = { name: "Hotel Mountain View" };

const Home = () => {
  return (
    <>
      <div className="h-[60vh] overflow-hidden pt-[50px]">
        {/* Heading starts */}
        <h1 className="font-medium text-xl text-center">
          Welcome to {DUMMY_DATA.name}
        </h1>

        {/* Image Container Starts */}
        <div className="mt-14 w-[120px] h-[120px] bg-[#D9D9D9] rounded-full mx-auto overflow-hidden">
          <img
            src="https://source.unsplash.com/random/800x600"
            alt="hotel"
            className="h-full w-full "
          />
        </div>
        <div className="flex justify-center mb-[40px]">
          <button className="bg-[#01494F] text-white w-full  max-w-[350px] py-6 px-20 mt-[132px] hover:opacity-80 transition duration-300 ease-out">
            Proceed to Check in
          </button>
        </div>
      </div>
      <div className="background-image h-[40vh] object-fill max-w-[400px] mx-auto"></div>
    </>
  );
};

export default Home;
