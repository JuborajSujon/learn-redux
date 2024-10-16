import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { showUser, updateUser } from "../features/userDetails/userDetailSlice";

const Update = () => {
  const navigation = useNavigate();
  const { id } = useParams();

  const { isLoading, users } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  const [updateData, setUpdateData] = useState({});

  useEffect(() => {
    if (id) {
      const singleUser = users.find((user) => user.id === id);

      setUpdateData(singleUser);
    }
  }, [users.length, dispatch, id, users]);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(showUser());
    }
  }, [dispatch, users.length]);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigation("/all-user");
  };

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  return (
    <div className="hero min-h-screen bg-green-50">
      <form
        className="w-full sm:w-1/2 mx-auto p-10 bg-green-300 rounded-lg"
        onSubmit={handleUpdate}>
        <h3 className="text-2xl font-bold text-center mb-3">
          User Update Form{" "}
        </h3>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2  items-center">
          <div>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold text-base">Name</span>
              </div>
              <input
                onChange={newData}
                type="text"
                name="name"
                value={updateData?.name || ""}
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
                onChange={newData}
                type="email"
                name="email"
                value={updateData?.email || ""}
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
                onChange={newData}
                type="number"
                name="age"
                value={updateData?.age || ""}
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
                  onChange={newData}
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={updateData?.gender === "Male"}
                  className="radio radio-success"
                />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  onChange={newData}
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={updateData?.gender === "Female"}
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
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
