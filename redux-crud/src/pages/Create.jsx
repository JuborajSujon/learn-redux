import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetails/userDetailSlice";

const Create = () => {
  const [users, setUsers] = useState({});

  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users", users);
    dispatch(createUser(users));
  };

  return (
    <div className="hero min-h-screen bg-green-50">
      <form
        className="w-full sm:w-1/2 mx-auto p-10 bg-green-300 rounded-lg"
        onSubmit={handleSubmit}>
        <h3 className="text-2xl font-bold text-center mb-3">User Create </h3>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2  items-center">
          <div>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold text-base">Name</span>
              </div>
              <input
                onChange={getUserData}
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered input-success w-full min-h-8 h-8 sm:min-h-10 sm:h-10  focus-visible:border-none"
              />
            </label>
          </div>

          <div>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold text-base">
                  Email
                </span>
              </div>
              <input
                onChange={getUserData}
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered input-success w-full min-h-8 h-8 sm:min-h-10 sm:h-10  focus-visible:border-none"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold text-base">Age</span>
              </div>
              <input
                onChange={getUserData}
                type="number"
                name="age"
                placeholder="Enter your age"
                className="input input-bordered input-success w-full min-h-8 h-8 sm:min-h-10 sm:h-10  focus-visible:border-none"
              />
            </label>
          </div>
          <div>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold text-base">
                  Gender
                </span>
              </div>
            </label>

            <div className="form-control flex gap-2 flex-row items-center justify-start  min-h-8 h-8 sm:min-h-10 sm:h-10 ">
              <label className="flex items-center gap-2">
                <input
                  onChange={getUserData}
                  type="radio"
                  name="gender"
                  value="Male"
                  className="radio radio-success"
                />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  onChange={getUserData}
                  type="radio"
                  name="gender"
                  value="Female"
                  className="radio radio-success"
                />
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn btn-info w-full min-h-8 h-8 sm:min-h-10 sm:h-10">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
