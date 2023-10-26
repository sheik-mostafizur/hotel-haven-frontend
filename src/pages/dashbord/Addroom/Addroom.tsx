
import { useForm, Controller } from 'react-hook-form';

const Addroom = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        // Handle form submission here, e.g., send data to an API
        console.log(data);
    };

    return (
        <div className="w-3/4 shadow mx-auto  mt-5  p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <label htmlFor="title" className="block text-gray-700 font-medium">
                    Title:
                </label>
                <Controller
                    name="title"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            id="title"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-700"
                        />
                    )}
                />

                <label htmlFor="facilities" className="block text-gray-700 font-medium">
                    Facilities:
                </label>
                <Controller
                    name="facilities"
                    control={control}
                    defaultValue={[]}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            id="facilities"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-700"
                        />
                    )}
                />

                <label htmlFor="thumbnails" className="block text-gray-700 font-medium">
                    Thumbnails:
                </label>
                <Controller
                    name="thumbnails"
                    control={control}
                    defaultValue={[]}
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            id="thumbnails"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-700"
                        />
                    )}
                />

                <label className="block text-gray-700 font-medium">
                    Availability:
                </label>
                <Controller
                    name="availability.startDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            placeholder="Start Date"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-700"
                        />
                    )}
                />
                <Controller
                    name="availability.endDate"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            placeholder="End Date"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-700"
                        />
                    )}
                />
                <Controller
                    name="availability.isBlocked"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            placeholder="Is Blocked"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-700"
                        />
                    )}
                />

                <label className="block text-gray-700 font-medium">
                    Capacity:
                </label>
                <Controller
                    name="capacity.adult"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            {...field}
                            type="number"
                            placeholder="Adult"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-700"
                        />
                    )}
                />
                <Controller
                    name="capacity.children"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            {...field}
                            type="number"
                            placeholder="Children"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-700"
                        />
                    )}
                />

                <label className="block text-gray-700 font-medium">
                    Room Info:
                </label>
                <Controller
                    name="roomInfo.roomSize"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            placeholder="Room Size"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-700"
                        />
                    )}
                />
                <Controller
                    name="roomInfo.bedType"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            placeholder="Bed Type"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-700"
                        />
                    )}
                />
                <Controller
                    name="roomInfo.view"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            placeholder="View"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-700"
                        />
                    )}
                />
                <Controller
                    name="roomInfo.regularPrice"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            {...field}
                            type="number"
                            placeholder="Regular Price"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-700"
                        />
                    )}
                />
                <Controller
                    name="roomInfo.discountedPrice"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            {...field}
                            type="number"
                            placeholder="Discounted Price"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-700"
                        />
                    )}
                />
                <Controller
                    name="roomInfo.additionalInfo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <input
                            {...field}
                            type="text"
                            placeholder="Additional Info"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-700"
                        />
                    )}
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Addroom;