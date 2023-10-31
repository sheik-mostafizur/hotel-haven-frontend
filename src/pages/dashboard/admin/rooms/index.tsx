// import { useEffect, useState } from "react";
// import { axios } from "../../../../api";

interface IFormInputs {
  title: string;
  thumbnails: Array<string>;
  facilities: Array<string>;
  capacity: {
    children: number;
    adult: number;
  };
  roomInfo: {
    bedType: string;
    view: number;
    roomSize: string;
    regularPrice: number;
    discountedPrice: number;
    additionalInfo: string;
  };
}

const Rooms: React.FC = () => {
  // const [loader, setLoader] = useState(false);
  // const [room, setRooom] = useState<IFormInputs[]>();

  // useEffect(() => {
  //   axios
  //     .get("admin/room")
  //     .then(({ data }) => {
  //       setRooom(data);
  //       setLoader(true);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  // console.log(room);
  return (
    <div>
      <h2 className="text-center">Our Hotels</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"></div>
    </div>
  );
};

export default Rooms;
