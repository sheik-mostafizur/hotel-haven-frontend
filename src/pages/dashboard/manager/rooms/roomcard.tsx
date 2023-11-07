import React from 'react';
import 'tailwindcss/tailwind.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Button from '../../../../components/ui/button';
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
    capacity: {};
    roomInfo: {};
}

const HotelRoomCard: React.FC<HotelRoomCardProps> = ({
    title,
    thumbnails,
    facilities,
    capacity,
    roomInfo,
}) => {


    return (
        <div className="bg-white rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-5 lg:p-4  shadow-md border mt-5 p-2">
            <div className="relative  w-full ">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Autoplay]}

                    className="mySwiper"

                >

                    {
                        thumbnails.map((img) => <SwiperSlide>
                            <img src={img} alt="" />
                        </SwiperSlide>
                        )
                    }

                </Swiper>

            </div>
            <div className="p-4   grid grid-cols-1 lg:grid-cols-2 gap-5   w-full">
                <div className='w-full'>
                    <h2 className="text-2xl font-bold mb-2">{title}</h2>
                    <h3 className='text-lg font-semibold w-[25%] mb-2 border-b border-primary-500'>Facilities:</h3>
                    <ul className="mb-4 list-disc ms-10">

                        {
                            facilities.map((facilitie) => <li className='text-[14px]' key={facilitie}>
                                {facilitie}
                            </li>)
                        }

                    </ul>
                    <p>
                        <span className="font-semibold">Adults:</span> {capacity.adult}
                    </p>
                    <p>
                        <span className="font-semibold">Children:</span> {capacity.children}
                    </p>
                    <p>
                        <span className="font-semibold">Room Size:</span> {roomInfo.roomSize}
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
                <div className='flex gap-5 items-center justify-center'>
                    <Button className='h-12 w-32'>Edit</Button>
                    <Button className='h-12 w-32'>Delete</Button>
                </div>
            </div>
        </div>
    );
};

export default HotelRoomCard;
