import React from "react";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";

import Layout from "../Layout";

const SuccessScreen = () => {
  return (
    <Layout>
      <h2 className="text-[#B07831] font-[habibi] text-[32px] text-center mt-[190px] mb-[14px]">
        THANK YOU
      </h2>
      <hr className="border-t-[4px] border-[#D9D9D9] rounded-md w-[90%] mx-auto" />
      <p className=" mt-4 ">We hope you had a wonderful stay with us</p>

      <p className="text-center mt-[48px]">
        You can view your .....................
      </p>

      <div className="mt-[150px] mb-20">
        <h3 className="text-xl font-medium text-center mb-5">Follow us:</h3>
        <div className="flex justify-center gap-x-4">
          <a
            href="https://www.facebook.com"
            rel="noreferrer"
            target={"_blank"}
            className="text-[#18ACFE] text-[40px]"
          >
            <img src={Facebook} alt="facebook" />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com"
            target={"_blank"}
            className="bg-[#6a45be00] text-[40px]"
          >
            <img src={Instagram} alt="facebook" />
          </a>
        </div>
      </div>

      <footer className="text-center">Powered by Hotel Mountain View</footer>
    </Layout>
  );
};

export default SuccessScreen;
