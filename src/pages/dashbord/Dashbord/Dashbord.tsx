import { FaDollarSign } from "react-icons/fa";


const Dashbord = () => {
    return (
        <div className="p-10">
            <h5>Today's Data : </h5>
            <div className="flex gap-4">
                <div className="shadow-2xl  border p-10 flex gap-10  items-center ">
                    <div>
                        <p className="text-lg font-semibold  ">Payment amount :</p>
                        <p className="font-semibold">$ 500.00 </p>
                    </div>
                    <div className="w-10 h-10 bg-red-600 rounded-full flex justify-center items-center text-white">
                        <FaDollarSign />
                    </div>
                </div>
                <div className="shadow-2xl  border p-10 flex gap-10  items-center ">
                    <div>
                        <p className="text-lg font-semibold  ">Payment Order :</p>
                        <p className="font-semibold">$ 500.00 </p>
                    </div>
                    <div className="w-10 h-10 bg-yellow-600 rounded-full flex justify-center items-center text-white">
                        <FaDollarSign />
                    </div>
                </div>
                <div className="shadow-2xl  border p-10 flex gap-10  items-center ">
                    <div>
                        <p className="text-lg font-semibold  ">Payment Customer :</p>
                        <p className="font-semibold">$ 500.00 </p>
                    </div>
                    <div className="w-10 h-10 bg-green-600 rounded-full flex justify-center items-center text-white">
                        <FaDollarSign />
                    </div>
                </div>
                <div className="shadow-2xl  border p-10 flex gap-10  items-center ">
                    <div>
                        <p className="text-lg font-semibold  ">Payment Proceed :</p>
                        <p className="font-semibold">$ 500.00 </p>
                    </div>
                    <div className="w-10 h-10 bg-primary-600 rounded-full flex justify-center items-center text-white">
                        <FaDollarSign />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashbord;