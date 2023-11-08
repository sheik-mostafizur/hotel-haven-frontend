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
      type: "email",
      name: "email",
      defaultValue: "",
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
      name: "name",
      defaultValue: "",
      label: "I am label",
      placeholder: "I am placeholder",
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
      type: "select",
      name: "country",
      defaultValue: "",
      option: [
        {
          label: "Chose a value",
          value: "",
        },
        {
          label: "Travel and Adventure",
          value: "travel and adventure",
        },
      ],
      label: "Select label",
      rules: {
        required: "This is required",
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
    </Container>
  );
};

export default Playground;
