import RatingPopUp from "../../components/RatingPopUp";
import Container from "../../components/ui/container";
import Form from "../../components/ui/form";

const Playground: React.FC = () => {
  const form: FormField[] = [
    {
      type: "text",
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
      tag: "textarea",
      name: "message",
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
  ];
  return (
    <Container className="dark:bg-secondary-700 w-screen h-screen">
      <h1 className="font-OpenSans">Playground</h1>

      <Form
        form={form}
        onSubmit={(data) => {
          console.log(data);
        }}
      />

      <RatingPopUp />
    </Container>
  );
};

export default Playground;
