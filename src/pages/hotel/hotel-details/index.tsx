import { useParams } from "react-router-dom";
import Main from "../../../layout/main";
import Container from "../../../components/ui/container";

const HotelDetails = () => {
  const { _id } = useParams();
  console.log(_id);
  return (
    <Main>
      <Container>
        <h1>HotelDetails</h1>
      </Container>
    </Main>
  );
};

export default HotelDetails;
