import React from "react";
import Form from "../../components/Form";
import WelcomeScreen from "../../components/WelcomeScreen";

const FormPage = () => {
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

export default FormPage;
