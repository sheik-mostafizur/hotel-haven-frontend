import {Link} from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Button from "../../components/ui/button";
import {AiFillEyeInvisible} from "react-icons/ai";
import {useForm} from "react-hook-form";
import axios from "axios";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // POST: /register
    axios
      .post("/auth/login", data)
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
      <section className="flex min-h-[600px] items-center justify-center">
        <div className="relative rounded-lg border p-8 shadow md:w-[450px]">
          <h2>Sign In your account!</h2>
          <div className="mt-4 flex items-center justify-center">
            <button
              type="button"
              disabled
              className="mb-2 mr-2 rounded-lg border border-secondary-200 bg-white py-1 pe-4 ps-2 text-sm font-medium text-secondary-900 hover:bg-secondary-100 hover:text-primary-600 focus:z-10 focus:outline-none focus:ring-4 focus:ring-secondary-200 dark:border-secondary-600 dark:bg-secondary-800 dark:text-secondary-400 dark:hover:bg-secondary-700 dark:hover:text-white dark:focus:ring-secondary-700">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="google"
                className="inline-block h-8 w-8"
              />
              Continue with Google
            </button>
          </div>
          <div className="inline-flex w-full items-center justify-center">
            <hr className="my-4 h-px w-full border-0 bg-secondary-200 dark:bg-secondary-700" />
            <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-secondary-900 dark:bg-secondary-900 dark:text-white">
              or
            </span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", {required: true})}
              />
            </div>

            <div className="mb-6 relative">
              <label htmlFor="password">Your Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                {...register("password", {required: true})}
              />
              <AiFillEyeInvisible className="absolute right-4 top-1/2 text-2xl text-secondary-600 cursor-pointer" />

              {/* <AiFillEye className="absolute right-4 top-1/2 text-2xl text-secondary-600 cursor-pointer" /> */}
            </div>

            <Button type={"submit"} className="w-full mb-6">
              Sign In
            </Button>
            <p>
              Create an account?{" "}
              <Link
                to="/signup"
                className="font-bold text-primary-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignIn;
