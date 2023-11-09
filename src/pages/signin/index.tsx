import {Link, useLocation, useNavigate} from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Button from "../../components/ui/button";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {login} from "../../redux/authSlice";
import toastSuccess from "../../utils/toast-success";
import toastError from "../../utils/toast-error";
import {useState} from "react";
import {useAppDispatch} from "../../redux/hooks";
import {auth} from "../../api";
import {AuthType} from "../../types";
import {BeatSpinner} from "../../components/spinner";

const SignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  let location = useLocation();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<AuthType.Login>({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<AuthType.Login> = async (
    data: AuthType.Login
  ): Promise<void> => {
    setIsLoading(true);
    try {
      const result = await auth.login({
        email: data.email,
        password: data.password,
      });
      toastSuccess(result.message);
      dispatch(login({token: result.token, user: result.user}));
      reset();
      navigate(location?.state?.from?.pathname || "/");
    } catch (error: any) {
      toastError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="flex min-h-[600px] items-center justify-center dark:bg-secondary-700">
        <div className="relative rounded-lg border dark:border-secondary-500 p-8 shadow md:w-[450px]">
          <h2 className="text-center">Sign In your account!</h2>
          <div className="inline-flex w-full items-center justify-center">
            <hr className="my-4 h-px w-full border-0 bg-secondary-200 dark:bg-secondary-700" />
            <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-secondary-900 dark:bg-secondary-700 dark:text-white">
              or
            </span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label htmlFor="email">Email Address</label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                }}
                render={({field}) => (
                  <input
                    className={
                      errors.email ? "border-red-500 dark:border-red-500" : ""
                    }
                    id="email"
                    type="email"
                    placeholder="Email"
                    {...field}
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 dark:text-red-500" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <div className=" relative">
                <label htmlFor="password">Password</label>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "Password is required",
                  }}
                  render={({field}) => (
                    <div>
                      <input
                        type={showPassword ? "text" : "password"}
                        className={
                          errors.password
                            ? "border-red-500 dark:border-red-500"
                            : ""
                        }
                        id="password"
                        placeholder="Password"
                        {...field}
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
                  )}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 dark:text-red-500" role="alert">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button type={"submit"} className="w-full mb-6">
              {isLoading ? <BeatSpinner /> : "Sign In"}
            </Button>
            <p>
              Create an account?{" "}
              <Link
                to="/signup"
                className="font-bold text-primary-600 dark:text-white hover:underline">
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
