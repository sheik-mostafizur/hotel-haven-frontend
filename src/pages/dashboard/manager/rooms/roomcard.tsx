import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Modal from "../../../../components/ui/modal";
import Button from "../../../../components/ui/button";
interface HotelRoomCardProps {
  title: string;
  thumbnails: [];
  thumbnail1: string;
  thumbnail2: string;
  thumbnail3: string;
  facilities: [];
  facilities1: string;
  facilities2: string;
  facilities3: string;
  facilities4: string;
  adult: number;
  children: number;
  roomSize: string;
  view: string;
  bedType: string;
  description: string;
  regularPrice: number;
  discountPrice: number;
  capacity: {
    adult: number;
    children: number;
  };
  roomInfo: {
    roomSize: string;
    bedType: string;
    regularPrice: number;
    discountedPrice: number;
  };
}

interface IFormInputs {
  _id: string;
  title: string;
  thumbnails: {
    [0]: string;
    [1]: string;
    [2]: string;
  };
  facilities: {
    [0]: string;
    [1]: string;
    [2]: string;
    [3]: string;
  };
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

const HotelRoomCard: React.FC<HotelRoomCardProps> = ({
  title,
  thumbnails,
  facilities,
  capacity,
  roomInfo,
}) => {
  const { handleSubmit, control } = useForm<IFormInputs>({});
  const onSubmit: SubmitHandler<IFormInputs> = async (data: any) => {
    data.facilities = data.facilities.filter((facilitie: any) =>
      Boolean(facilitie)
    );
    data.thumbnails = data.thumbnails.filter((thumbnail: any) =>
      Boolean(thumbnail)
    );
  };
  return (
    <div className="bg-white rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-5 lg:p-4  shadow-md border mt-5 p-2">
      <div className="relative  w-full ">
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {thumbnails.map((img, index) => (
            <SwiperSlide key={index}>
              <img className="h-72 w-full" src={img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="p-4   grid grid-cols-1 gap-5   w-full">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <h3 className="text-lg font-semibold w-[25%] mb-2 border-b border-primary-500">
            Facilities:
          </h3>
          <ul className="mb-4 list-disc ms-10">
            {facilities.map((facilitie: any) => (
              <li className="text-[14px]" key={facilitie}>
                {facilitie}
              </li>
            ))}
          </ul>
          <p>
            <span className="font-semibold">Adults:</span> {capacity?.adult}
          </p>
          <p>
            <span className="font-semibold">Children:</span>{" "}
            {capacity?.children}
          </p>
          <p>
            <span className="font-semibold">Room Size:</span>{" "}
            {roomInfo.roomSize}
          </p>

          <p>
            <span className="font-semibold">Bed Type: </span> {roomInfo.bedType}
          </p>

          <div className="mt-4">
            <p className="text-lg">
              <span className="font-semibold text-gray-700 line-through">
                Regular Price: ${roomInfo.regularPrice}
              </span>
            </p>
            <p className="text-xl text-red-600 font-semibold">
              Discount Price: ${roomInfo.discountedPrice}
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <Modal
            title={"Edit Room"}
            button={{ label: "Edit Room", className: "block ml-auto px-4" }}
          >
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="title">Title</label>
                <Controller
                  name="title"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <input {...field} />}
                />
                <div className="grid md:grid-cols-1 lg:grid-cols-3 py-2 gap-4">
                  <div>
                    <label htmlFor="thumbnails[0]">Thumbnails 1</label>
                    <Controller
                      name="thumbnails[0]"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <input {...field} type="url" />}
                    />
                  </div>
                  <div>
                    <label htmlFor="thumbnails[1]">Thumbnails 2</label>
                    <Controller
                      name="thumbnails[1]"
                      control={control}
                      render={({ field }) => <input {...field} type="url" />}
                    />
                  </div>
                  <div>
                    <label htmlFor="thumbnails[2]">Thumbnails 3</label>
                    <Controller
                      name="thumbnails[2]"
                      control={control}
                      render={({ field }) => <input {...field} type="url" />}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-4 py-2 gap-4">
                  <div>
                    <label htmlFor="facilities[0]">Facilities 1</label>
                    <Controller
                      name="facilities[0]"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <input {...field} />}
                    />
                  </div>
                  <div>
                    <label htmlFor="facilities[1]">Facilities 2</label>
                    <Controller
                      name="facilities[1]"
                      control={control}
                      render={({ field }) => <input {...field} />}
                    />
                  </div>
                  <div>
                    <label htmlFor="facilities[2]">Facilities 3</label>
                    <Controller
                      name="facilities[2]"
                      control={control}
                      render={({ field }) => <input {...field} />}
                    />
                  </div>
                  <div>
                    <label htmlFor="facilities[3]">Facilities 4</label>
                    <Controller
                      name="facilities[3]"
                      control={control}
                      render={({ field }) => <input {...field} />}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 py-2 gap-4">
                  <div>
                    <label htmlFor="adult">Adult</label>
                    <Controller
                      name="capacity.adult"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <input {...field} type="number" />}
                    />
                  </div>
                  <div>
                    <label htmlFor="child">Children</label>
                    <Controller
                      name="capacity.children"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <input {...field} type="number" />}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 py-2 gap-4">
                  <div>
                    <label htmlFor="roomSize">Room Size</label>
                    <Controller
                      name="roomInfo.roomSize"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <input {...field} />}
                    />
                  </div>
                  <div>
                    <label htmlFor="regularPrice">Regular Price</label>
                    <Controller
                      name="roomInfo.regularPrice"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <input {...field} />}
                    />
                  </div>
                  <div>
                    <label htmlFor="discountPrice">Discount price</label>
                    <Controller
                      name="roomInfo.discountedPrice"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <input {...field} />}
                    />
                  </div>
                  <div>
                    <label htmlFor="view">View</label>
                    <Controller
                      name="roomInfo.view"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <input {...field} type="text" />}
                    />
                  </div>
                  <div>
                    <label htmlFor="bedType">Bed type</label>
                    <Controller
                      name="roomInfo.bedType"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <input {...field} />}
                    />
                  </div>
                  <div>
                    <label htmlFor="additionalInfo">additional info</label>
                    <Controller
                      name="roomInfo.additionalInfo"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => <input {...field} />}
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full mt-3">
                  Save
                </Button>
              </form>
              <br />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default HotelRoomCard;
