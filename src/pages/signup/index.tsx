import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Button from "../../components/ui/button";
import {Link} from "react-router-dom";
import {AiFillEyeInvisible} from "react-icons/ai";
import {useForm} from "react-hook-form";
import axios from "axios";
import ContinueWithGoogle from "../../components/ContinueWithGoogle";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = (data: Object) => {
    axios
      .post("/auth/register", data)
      .then(({data}) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="flex min-h-[900px] items-center justify-center">
        <div className="relative rounded-lg border p-8 shadow md:w-[450px]">
          <h2>Create a new account!</h2>
          <div className="mt-4 flex items-center justify-center">
            <ContinueWithGoogle />
          </div>
          <div className="inline-flex w-full items-center justify-center">
            <hr className="my-4 h-px w-full border-0 bg-secondary-200 dark:bg-secondary-700" />
            <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-secondary-900 dark:bg-secondary-900 dark:text-white">
              or
            </span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label htmlFor="name"> Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                {...register("name", {required: true})}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email"> email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", {required: true})}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="photoURL"> Profile Photo URL</label>
              <input
                type="url"
                id="photoURL"
                placeholder="Photo URL"
                {...register("photoURL")}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone"> Phone Number</label>
              <input
                type="text"
                id="phone"
                placeholder="Phone"
                {...register("phone", {required: true})}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="age"> Age</label>
              <input
                type="text"
                id="age"
                placeholder="Age"
                {...register("age", {required: true})}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Gender
              </label>
              <select
                id="gender"
                {...register("gender", {required: true})}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option defaultValue={""}>Choose Your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-6 relative">
              <label htmlFor="password"> Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                {...register("password", {required: true})}
              />
              <AiFillEyeInvisible className="absolute right-4 top-1/2 text-2xl text-secondary-600 cursor-pointer" />

              {/* <AiFillEye className="absolute right-4 top-1/2 text-2xl text-secondary-600 cursor-pointer" /> */}
            </div>

            <div className="mb-6 relative">
              <label htmlFor="confirm_password"> Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                placeholder="Confirm Password"
                {...register("confirm_password", {
                  required: true,
                  validate: (val: string) => {
                    if (watch("password") != val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
              />
              <AiFillEyeInvisible className="absolute right-4 top-1/2 text-2xl text-secondary-600 cursor-pointer" />

              {/* <AiFillEye className="absolute right-4 top-1/2 text-2xl text-secondary-600 cursor-pointer" /> */}
            </div>

            <Button type={"submit"} className="w-full mb-6">
              Create an account
            </Button>
            <p>
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-bold text-primary-600 hover:underline">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignUp;
