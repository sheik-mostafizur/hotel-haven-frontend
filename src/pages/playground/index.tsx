import Container from "../../components/ui/container";
import Modal from "../../components/ui/modal";

const Playground: React.FC = () => {
  return (
    <Container className="dark:bg-secondary-700 w-screen h-screen">
      <h1>Playground</h1>
      <Modal />
    </Container>
  );
};

export default Playground;
