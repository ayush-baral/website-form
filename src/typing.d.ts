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
