
import {useParams} from "react-router-dom";
import useAxiosGet from "../../../hooks/useAxiosGet";
import Main from "../../../layout/main";
import {HashSpinner} from "../../../components/spinner";

import Container from "../../../components/ui/container";

const HotelDetails = () => {
  const {_id} = useParams();
  const {isLoading, data} = useAxiosGet(`/hotel/${_id}`);

  return (
    <Main>
      <Container>

        <h1>HotelDetails</h1>

        {isLoading ? <HashSpinner /> : JSON.stringify(data)}

      </Container>
    </Main>
  );
};

export default HotelDetails;
