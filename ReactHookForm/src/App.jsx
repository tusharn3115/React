import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("submmited", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
        <input
          autoComplete="off"
          {...register("firstName", {
            required: true,
            minLength: {value: 3, message: "First Name must be at least 3 characters"},
          })}
        />
        {errors.firstName && <p style={{ color: "red", fontSize: "14px"}}>{errors.firstName.message}</p>}
      </div>
      <br />

      <div>
        <label>Last Name: </label>
        <input
          autoComplete="off"
          {...register("lastName", {
            required: true,
            minLength: {value: 3, message: "Last Name must be at least 3 characters"},
          })}
        />
        {errors.lastName && <p style={{ color: "red", fontSize: "14px" }}>{errors.lastName.message}</p>}
      </div>
      <br />

      <input type="submit" />
    </form>
  );
}

export default App;
