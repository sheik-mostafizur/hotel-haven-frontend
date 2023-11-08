import {useForm} from "react-hook-form";
import Container from "../../components/ui/container";
import Form from "../../components/ui/form";

type FormField = {
  type?: string;
  name: string;
  defaultValue: string;
  label?: string;
  placeholder?: string;
  rules?: {
    required: string;
    minLength?: {
      value: number;
      message: string;
    };
    maxLength?: {
      value: number;
      message: string;
    };
  };
  option?: Array<{
    label: string;
    value: string;
  }>;
};

const Playground: React.FC = () => {
  const form: FormField[] = [
    {
      type: "password",
      name: "password",
      defaultValue: "",
      placeholder: "Enter your password",
      rules: {
        required: "This is required",
        minLength: {
          value: 3,
          message: "Too Few Characters",
        },
        maxLength: {
          value: 30,
          message: "Too Many Characters",
        },
      },
    },
    {
      type: "password",
      name: "conform_password",
      defaultValue: "",
      label: "I am label",
      placeholder: "Enter your confirm password",
      rules: {
        required: "This is required",
        validate: (val: string) => {
          console.log(watch("password"));
          if (watch("password") != val) {
            return "Your passwords do no match";
          }
        },
      },
    },
  ];
  return (
    <Container className="dark:bg-secondary-700 w-screen h-screen">
      <h1>Playground</h1>
      <Form
        form={form}
        onSubmit={(data) => {
          console.log(data);
        }}
      />
      {form[1].rules.validate(3)}
    </Container>
  );
};

export default Playground;
