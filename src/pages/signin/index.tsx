import {Link, useNavigate} from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Button from "../../components/ui/button";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {SubmitHandler, useForm} from "react-hook-form";
import {login} from "../../redux/authSlice";
import toastSuccess from "../../utils/toast-success";
import toastError from "../../utils/toast-error";
import {useState} from "react";
import {useAppDispatch} from "../../redux/hooks";
import {auth} from "../../api";
import {authType} from "../../types";

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    // formState: {errors},
  } = useForm<authType.Login>();

  const onSubmit: SubmitHandler<authType.Login> = async (
    data: authType.Login
  ): Promise<void> => {
    try {
      const result = await auth.login({
        email: data.email,
        password: data.password,
      });
      toastSuccess(result.message);
      dispatch(login({token: result.token, user: result.user}));
      reset();
      navigate("/");
    } catch (error: any) {
      toastError(error);
    }
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
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                {...register("password", {required: true})}
              />
              {showPassword ? (
                <AiFillEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 text-2xl text-secondary-600 cursor-pointer"
                />
              ) : (
                <AiFillEyeInvisible
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 text-2xl text-secondary-600 cursor-pointer"
                />
              )}
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
