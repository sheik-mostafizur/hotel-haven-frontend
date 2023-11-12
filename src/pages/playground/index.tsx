import Pagination from "../../components/pagination";
import Container from "../../components/ui/container";

const Playground: React.FC = () => {
  return (
    <Container className="dark:bg-secondary-700 w-screen h-screen">
      <h1 className="font-OpenSans">Playground</h1>

      <Pagination />
    </Container>
  );
};

export default Playground;
