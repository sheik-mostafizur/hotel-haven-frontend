import BeatSpinner from "../../components/spinner/BeatSpinner";
import Button from "../../components/ui/button";

const Playground: React.FC = () => {
  return (
    <>
      <h1>Playground</h1>
      <BeatSpinner />
      <Button>
        Button
        <BeatSpinner />
      </Button>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dolorem
        debitis perferendis, cum iure aut, voluptatem, voluptatum expedita ab
        vitae dolore? Natus quasi rem architecto nobis facere quod eveniet modi.
      </p>
    </>
  );
};

export default Playground;
