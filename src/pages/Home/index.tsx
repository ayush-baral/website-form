import React from "react";
import WelcomeScreen from "../../components/WelcomeScreen";

const Home = () => {
  const [toggleWelcomeScreen, setToggleWelcomeScreen] = React.useState(true);
  return (
    <>
      {toggleWelcomeScreen ? (
        <WelcomeScreen setToggleWelcomeScreen={setToggleWelcomeScreen} />
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
