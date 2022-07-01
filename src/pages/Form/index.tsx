import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Form from "../../components/Form";
import Spinner from "../../components/Spinner/Spinner";
import WelcomeScreen from "../../components/WelcomeScreen";
import { HotelInfo } from "../../typing";
import { axiosInstance } from "../../utils/axiosInterceptors";

interface HotelState {
  hotel: HotelInfo;
  isLoading: boolean;
  error: string;
}

const FormPage = () => {
  const params = useParams();
  const [toggleWelcomeScreen, setToggleWelcomeScreen] = React.useState(true);
  const [hotelInfo, setHotelInfo] = React.useState<HotelState>({
    error: "",
    isLoading: false,
    hotel: {
      logo: "",
      welcome_text: "",
      welcome_background_image: "",
      social_links: [],
    },
  });

  const hotelId = useMemo(() => params.id, [params.id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setHotelInfo({ ...hotelInfo, isLoading: true });
        const { data } = await axiosInstance(
          `/v1/registration/hotel/${hotelId}/content`
        );
        setHotelInfo({ ...hotelInfo, hotel: data, isLoading: false });
        console.log("HotelInfo", data);
      } catch (error: any) {
        setHotelInfo({ ...hotelInfo, error: error.message, isLoading: false });
        console.log(error);
      }
    };
    fetchData();
  }, [hotelId]);

  if (hotelInfo?.isLoading) {
    return (
      <div className="flex flex-col justify-center align-middle h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      {toggleWelcomeScreen ? (
        <WelcomeScreen
          setToggleWelcomeScreen={setToggleWelcomeScreen}
          logo={hotelInfo?.hotel?.logo}
          welcome_text={hotelInfo?.hotel?.welcome_text}
          welcome_background_image={hotelInfo?.hotel?.welcome_background_image}
        />
      ) : (
        <Form />
      )}
    </>
  );
};

export default FormPage;
