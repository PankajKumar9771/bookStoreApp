import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to={"/"}>
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => {
                  document.getElementById("my_modal_3").close();
                }}
              >
                ✕
              </button>
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                className="w-full outline-none border py-1 px-2 rounded-md mt-2"
                placeholder="Enter your Email!"
                id="email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="mt-4">
              <label htmlFor="email">Password</label>
              <br />
              <input
                type="password"
                className="w-full outline-none border py-1 px-2 rounded-md mt-2"
                placeholder="Enter your Password"
                id="password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button className="py-1 px-3 rounded-md bg-pink-500 text-white hover:bg-pink-700 duration-200">
                Login
              </button>
              <Link to={"/signUp"}>
                Not register?{" "}
                <span
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => {
                    document.getElementById("my_modal_3").close();
                  }}
                >
                  Sign up
                </span>
              </Link>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
