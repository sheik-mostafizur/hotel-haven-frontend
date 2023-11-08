import RatingPopUp from "../../components/RatingPopUp";
import Container from "../../components/ui/container";

const Playground: React.FC = () => {
  return (
    <Container className="dark:bg-secondary-700 w-screen h-screen">
      <RatingPopUp></RatingPopUp>
    </Container>
  );
};

export default Playground;
