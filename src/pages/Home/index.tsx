import React from "react";
import Form from "../../components/Form";
import WelcomeScreen from "../../components/WelcomeScreen";

const Home = () => {
  const [toggleWelcomeScreen, setToggleWelcomeScreen] = React.useState(true);
  return (
    <>
      {toggleWelcomeScreen ? (
        <WelcomeScreen setToggleWelcomeScreen={setToggleWelcomeScreen} />
      ) : (
        <Form />
      )}
    </>
  );
};

export default Home;
