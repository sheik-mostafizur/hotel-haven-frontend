import SetTitle from "../../components/set-title";
import Button from "../../components/ui/button";
import Container from "../../components/ui/container";
import {useSignin, useSuccess} from "../../hooks";

const Playground: React.FC = () => {
  return (
    <Container className="dark:bg-secondary-700 w-screen h-screen">
      <SetTitle title={`Playground`} />
      <h1 className="font-OpenSans">Playground</h1>

      <Button
        onClick={async () => {
          useSignin();
        }}>
        Click
      </Button>
    </Container>
  );
};

export default Playground;
