import { Controller, useForm } from "react-hook-form";
import Button from "../button";

const Form: React.FC = ({ form = [], onSubmit, btnClass = "" }) => {
  const defaultValues = form.reduce((acc, val) => {
    if (val.name) {
      acc[val.name] = val.defaultValue;
    }
    return acc;
  }, {});
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      {form.map((item: any, index: number) => (
        <div key={`${item.name} ${index}`} className="my-4">
          {item.tag !== "select" ? (
            <>
              {item.label && <label htmlFor={item.name}>{item.label}</label>}
              <Controller
                name={item.name}
                control={control}
                rules={item.rules}
                render={({ field }) => (
                  <>
                    {item.tag == "textarea" ? (
                      <textarea
                        id={item.name}
                        className={
                          errors[item.name]
                            ? "border-red-500 dark:border-red-500"
                            : ""
                        }
                        placeholder={item?.placeholder}
                        rows={item?.rows || 4}
                        {...field}
                      ></textarea>
                    ) : (
                      <input
                        className={
                          errors[item.name]
                            ? "border-red-500 dark:border-red-500"
                            : ""
                        }
                        id={item.name}
                        type={item.type || "text"}
                        placeholder={item?.placeholder}
                        {...field}
                      />
                    )}
                  </>
                )}
              />
              {errors[item.name] && (
                <p className="text-red-500 dark:text-red-500" role="alert">
                  {errors[item.name].message}
                </p>
              )}
            </>
          ) : (
            <>
              {item.label && <label htmlFor={item.name}>{item.label}</label>}
              <Controller
                control={control}
                name={item.name}
                rules={item.rules}
                render={({ field }) => (
                  <select
                    id={item.name}
                    {...field}
                    className={`${
                      errors[item.name]
                        ? "border-red-500 dark:border-red-500 focus:border-red-500"
                        : "border-secondary-300 focus:border-primary-500"
                    } bg-secondary-50 border text-secondary-900 text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-800 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                  >
                    {item.option.map((opt: any, index: number) => (
                      <option key={`${opt.value} ${index}`} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors[item.name] && (
                <p className="text-red-500 dark:text-red-500" role="alert">
                  {errors[item.name].message}
                </p>
              )}
            </>
          )}
        </div>
      ))}
      <Button type="submit" className={` ${btnClass}`}>
        Submit
      </Button>
    </form>
  );
};

export default Form;
