import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Button from "../../components/ui/button";
import {Link, useNavigate} from "react-router-dom";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {useForm} from "react-hook-form";
import toastSuccess from "../../utils/toast-success";
import toastError from "../../utils/toast-error";
import {useState} from "react";
import {axios} from "../../api";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {userAuthRegister} from "../../redux/user-auth-slice";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
  const userAuthState = useAppSelector((state) => state.userAuth);
  console.log(userAuthState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    // formState: {errors},
  } = useForm();

  const onSubmit = async (data: any) => {
    await dispatch(userAuthRegister(data));
    return;
    axios
      .post("/auth/register", data)
      .then(({data}) => {
        toastSuccess(data.message);
        navigate("/signin");
      })
      .catch((error) => toastError(error));
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="min-h-[700px] py-12 flex items-center justify-center">
        <div className="relative rounded-lg border p-8 shadow  md:min-w-[600px]">
          <h2 className="text-center">Create a new account!</h2>
          <div className="inline-flex w-full items-center justify-center">
            <hr className="my-4 h-px w-full border-0 bg-secondary-200 dark:bg-secondary-700" />
            <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-secondary-900 dark:bg-secondary-900 dark:text-white">
              or
            </span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-4">
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
            <div className="grid md:grid-cols-2 gap-4">
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
            <div className="grid md:grid-cols-2 gap-4">
              <div className="mb-6 relative">
                <label htmlFor="password"> Password</label>
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

              <div className="mb-6 relative">
                <label htmlFor="confirm_password"> Confirm Password</label>
                <input
                  type={showConfPassword ? "text" : "password"}
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
                {showConfPassword ? (
                  <AiFillEye
                    onClick={() => setShowConfPassword(!showConfPassword)}
                    className="absolute right-4 top-1/2 text-2xl text-secondary-600 cursor-pointer"
                  />
                ) : (
                  <AiFillEyeInvisible
                    onClick={() => setShowConfPassword(!showConfPassword)}
                    className="absolute right-4 top-1/2 text-2xl text-secondary-600 cursor-pointer"
                  />
                )}
              </div>
            </div>

            <Button type={"submit"} className="w-full mb-6">
              {userAuthState.isLoading ? "loading..." : "Create an account"}
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
