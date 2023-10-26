import {Link, useNavigate} from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Button from "../../components/ui/button";
import {AiFillEyeInvisible} from "react-icons/ai";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useDispatch} from "react-redux";
import {login} from "../../redux/authSlice";
import toastSuccess from "../../utils/toastSuccess";
import toastError from "../../utils/toastError";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = (data: Object) => {
    axios
      .post("/auth/login", data)
      .then(({data}) => {
        toastSuccess(data.message);
        dispatch(login({token: data.token, user: data.user}));
        navigate(-1);
      })
      .catch((error) => {
        toastError(error);
      });
  };
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="flex min-h-[600px] items-center justify-center">
        <div className="relative rounded-lg border p-8 shadow md:w-[450px]">
          <h2 className="text-center">Sign In your account!</h2>
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
