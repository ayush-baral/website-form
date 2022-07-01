export interface FormDataInterface {
  name: string;
  description: string;
  step_fields: InputField[];
}

interface InputField {
  input_type?: string;
  name: string;
  required: boolean;
  label: string;
  placeholder?: string;
  options?: string[];
}

export interface HotelInfo {
  welcome_text: string;
  logo: string;
  welcome_background_image: string;
  social_links: SocialLink[];
}

interface SocialLink {
  name: string;
  link: string;
}
