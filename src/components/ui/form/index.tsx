import {Controller, useForm} from "react-hook-form";
import Button from "../button";

const Form: React.FC = ({form = [], onSubmit}) => {
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
    formState: {errors},
  } = useForm({
    mode: "all",
    defaultValues: defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}>
      {form.map((item, index) => (
        <div key={`${item.name} ${index}`} className="my-4">
          {item.type !== "select" ? (
            <>
              {item.label && <label htmlFor={item.name}>{item.label}</label>}
              <Controller
                name={item.name}
                control={control}
                rules={item.rules}
                render={({field}) => (
                  <input
                    className={errors[item.name] ? "border-red-500" : ""}
                    id={item.name}
                    type={item.type || "text"}
                    {...field}
                  />
                )}
              />
              {errors[item.name] && (
                <p className="text-red-500" role="alert">
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
                render={({field}) => (
                  <select
                    id={item.name}
                    {...field}
                    className="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-secondary-700 dark:border-secondary-600 dark:placeholder-secondary-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    {item.option.map((opt, index) => (
                      <option key={`${opt.value} ${index}`} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors[item.name] && (
                <p className="text-red-500" role="alert">
                  {errors[item.name].message}
                </p>
              )}
            </>
          )}
        </div>
      ))}

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
