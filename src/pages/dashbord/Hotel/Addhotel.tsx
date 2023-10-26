
import { useForm, Controller } from 'react-hook-form';


const HotelForm = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data: any) => {
        // Handle form submission here, e.g., send data to an API
        console.log(data);
    };

    return (
        <div className='w-3/4 shadow mx-auto border  mt-5 p-10 '>
            <h4>Hotel Add From : </h4>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <label>Name:</label>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} />}
                />

                <label>Phone:</label>
                <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} />}
                />

                <label>Photo URL:</label>
                <Controller
                    name="photoURL"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} />}
                />

                <label>Description:</label>
                <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} />}
                />

                <label>Available Room:</label>
                <Controller
                    name="availableRoom"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="number" />}
                />

                {/* Address section */}
                < label > Address:</label>
                <Controller
                    name="address.thumbnailURL"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} />}
                />

                <label>Latitude:</label>
                <Controller
                    name="address.map.lat"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="number" />}
                />

                <label>Longitude:</label>
                <Controller
                    name="address.map.lng"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="number" />}
                />

                <label>Status:</label>
                <Controller
                    name="status"
                    control={control}
                    defaultValue="PENDING"
                    render={({ field }) => (
                        <select {...field}>
                            <option value="PENDING">PENDING</option>
                            <option value="APPROVED">APPROVED</option>
                            <option value="REJECTED">REJECTED</option>
                        </select>
                    )}
                />

                <label>Feedback:</label>
                <Controller
                    name="feedback"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <textarea {...field} className='focus:outline-none border-2 rounded-lg  border-primary-600' />}
                />

                <button className='block bg-primary-600 rounded-lg py-4 px-8 mt-5' type="submit">Submit</button>
            </form >
        </div >
    );
};

export default HotelForm;

