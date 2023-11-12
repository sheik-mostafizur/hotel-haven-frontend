import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Button from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Controller, useForm } from "react-hook-form";
import toastSuccess from "../../utils/toast-success";
import toastError from "../../utils/toast-error";
import { useState } from "react";
import { axios } from "../../api";
import { BeatSpinner } from "../../components/spinner";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      photoURL: "",
      phone: "",
      age: "",
      gender: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = (data: Object) => {
    setIsLoading(true);
    axios
      .post("/auth/register", data)
      .then(({ data }) => {
        toastSuccess(data.message);
        navigate("/signin");
        setIsLoading(false);
      })
      .catch((error) => {
        toastError(error);
        setIsLoading(false);
      });
  };
  const isValidURL = (url: string) => {
    // A simple function to validate the URL format
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };
  return (
    <>
      <header>
        <Navbar />
      </header>
      <section className="min-h-[700px] py-12  dark:bg-secondary-700 flex items-center justify-center">
        <div className="relative rounded-lg border dark:border-secondary-800 p-8 shadow  md:w-[650px]">
          <h2 className="text-center">Create a new account!</h2>
          <div className="mb-4 inline-flex w-full items-center justify-center">
            <hr className="my-4 h-px w-full border-0 bg-secondary-200 dark:bg-secondary-700" />
            <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-secondary-900 dark:bg-secondary-700 dark:text-white">
              or
            </span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="mb-6">
                <label htmlFor="name">Full Name</label>
                <Controller
                  name={"name"}
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <input
                      className={
                        errors.name ? "border-red-500 dark:border-red-500" : ""
                      }
                      id={"name"}
                      type={"text"}
                      placeholder={"Name"}
                      {...field}
                    />
                  )}
                />
                {errors.name && (
                  <p
                    className="text-sm text-red-500 dark:text-red-500"
                    role="alert"
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="email">Email Address</label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
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
                  <p
                    className="text-sm text-red-500 dark:text-red-500"
                    role="alert"
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="photoURL">Profile Photo URL</label>
              <Controller
                name="photoURL"
                control={control}
                rules={{
                  required: "Profile Photo URL is required",
                  validate: {
                    validURL: (value) =>
                      isValidURL(value) || "Invalid URL format",
                  },
                }}
                render={({ field }) => (
                  <input
                    className={
                      errors.photoURL
                        ? "border-red-500 dark:border-red-500"
                        : ""
                    }
                    id="photoURL"
                    type="url"
                    placeholder="https://example.com/profile.jpg"
                    {...field}
                  />
                )}
              />
              {errors.photoURL && (
                <p
                  className="text-sm text-red-500 dark:text-red-500"
                  role="alert"
                >
                  {errors.photoURL.message}
                </p>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="mb-6">
                <label htmlFor="phone">Phone Number</label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Phone Number is required" }}
                  render={({ field }) => (
                    <input
                      className={
                        errors.phone ? "border-red-500 dark:border-red-500" : ""
                      }
                      id="phone"
                      type="text"
                      placeholder="Phone"
                      {...field}
                    />
                  )}
                />
                {errors.phone && (
                  <p
                    className="text-sm text-red-500 dark:text-red-500"
                    role="alert"
                  >
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="age">Age</label>
                <Controller
                  name="age"
                  control={control}
                  rules={{
                    required: "Age is required",
                    validate: {
                      validAge: (value) =>
                        parseInt(value) >= 18 || "Age must be at least 18",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      className={
                        errors.age ? "border-red-500 dark:border-red-500" : ""
                      }
                      id="age"
                      type="text"
                      placeholder="Age"
                      {...field}
                    />
                  )}
                />
                {errors.age && (
                  <p
                    className="text-sm text-red-500 dark:text-red-500"
                    role="alert"
                  >
                    {errors.age.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender
              </label>
              <Controller
                name="gender"
                control={control}
                rules={{ required: "Gender is required" }}
                render={({ field }) => (
                  <select
                    id="gender"
                    {...field}
                    className={`${
                      errors.gender
                        ? "border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500"
                        : "border-secondary-300 focus:border-primary-500"
                    } bg-secondary-50 border text-secondary-900 text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-800 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                  >
                    <option value="">Choose Your Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                )}
              />
              {errors.gender && (
                <p
                  className="text-sm text-red-500 dark:text-red-500"
                  role="alert"
                >
                  {errors.gender.message}
                </p>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="mb-6">
                <div className=" relative">
                  <label htmlFor="password">Password</label>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/,
                        message:
                          "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.",
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <input
                          type={showPassword ? "text" : "password"}
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
                  <p
                    className="text-sm text-red-500 dark:text-red-500"
                    role="alert"
                  >
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <div className="relative">
                  <label htmlFor="confirm_password">Confirm Password</label>
                  <Controller
                    name="confirm_password"
                    control={control}
                    rules={{
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    }}
                    render={({ field }) => (
                      <div>
                        <input
                          type={showConfPassword ? "text" : "password"}
                          id="confirm_password"
                          placeholder="Confirm Password"
                          {...field}
                        />
                        {showConfPassword ? (
                          <AiFillEye
                            onClick={() =>
                              setShowConfPassword(!showConfPassword)
                            }
                            className="absolute right-4 top-1/2 text-2xl text-secondary-600 cursor-pointer"
                          />
                        ) : (
                          <AiFillEyeInvisible
                            onClick={() =>
                              setShowConfPassword(!showConfPassword)
                            }
                            className="absolute right-4 top-1/2 text-2xl text-secondary-600 cursor-pointer"
                          />
                        )}
                      </div>
                    )}
                  />
                </div>
                {errors.confirm_password && (
                  <p
                    className="text-sm text-red-500 dark:text-red-500"
                    role="alert"
                  >
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
            </div>

            <Button type={"submit"} className="w-full mb-6">
              {isLoading ? <BeatSpinner /> : "Create an account"}
            </Button>
            <p>
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-bold text-primary-600 dark:text-white hover:underline"
              >
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
