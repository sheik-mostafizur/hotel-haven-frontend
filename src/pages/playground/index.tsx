import SetTitle from "../../components/set-title";
import Container from "../../components/ui/container";

const Playground: React.FC = () => {
  return (
    <Container className="dark:bg-secondary-700 w-screen h-screen">
      <SetTitle title={`Playground`} />
      <h1 className="font-OpenSans">Playground</h1>
    </Container>
  );
};

export default Playground;
