import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <dialog className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">SignUp</h3>
              <div className="mt-4">
                <label htmlFor="name" className="cursor-pointer">
                  Name
                </label>
                <br />
                <input
                  type="text"
                  className="w-full outline-none border py-1 px-2 rounded-md mt-2"
                  placeholder="Enter your Full name!"
                  id="name"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mt-4">
                <label htmlFor="SignEmail" className="cursor-pointer">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  className="w-full outline-none border py-1 px-2 rounded-md mt-2"
                  placeholder="Enter your Email!"
                  id="SignEmail"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="mt-4">
                <label htmlFor="SignPassword" className="cursor-pointer">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  className="w-full outline-none border py-1 px-2 rounded-md mt-2"
                  placeholder="Enter your Password"
                  id="SignPassword"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </form>
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="py-0 px-3 rounded-md bg-pink-500 text-white hover:bg-pink-700 duration-200"
              >
                SignUp
              </button>

              <div className="text-xl mt-4">
                <p>
                  Have an account?
                  <span
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </span>
                </p>
              </div>
              <Login />
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SignUp;
