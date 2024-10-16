import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetails/userDetailSlice";
import CustomModal from "../components/CustomModal";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [showModal, setShowModal] = useState(false);

  const [radioValue, setRadioValue] = useState("All");

  const { isLoading, error, users, searchData } = useSelector(
    (state) => state.app
  );

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (isLoading) {
    return (
      <div className="hero min-h-screen bg-green-50">
        <h2 className="text-2xl font-bold text-center">Loading.....</h2>
      </div>
    );
  }

  return (
    <div className="mt-16 min-h-screen bg-green-50 px-6">
      <h2 className="text-4xl mt-4 pt-6 text-center font-bold mb-3">
        Users Details
      </h2>
      {showModal && (
        <CustomModal
          id={id}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-6 flex flex-row gap-6 items-center justify-start">
        <h2 className="text-xl font-bold">Filter by</h2>
        <div className="form-control flex gap-3 flex-row items-center justify-start min-h-8 h-8 sm:min-h-10 sm:h-10">
          <label className="flex items-center gap-2">
            <input
              onChange={(e) => setRadioValue(e.target.value)}
              type="radio"
              name="gender"
              value="All"
              checked={radioValue === "All"}
              className="radio radio-success"
            />
            All
          </label>
          <label className="flex items-center gap-2">
            <input
              onChange={(e) => setRadioValue(e.target.value)}
              type="radio"
              name="gender"
              value="Male"
              checked={radioValue === "Male"}
              className="radio radio-success"
            />
            Male
          </label>
          <label className="flex items-center gap-2">
            <input
              onChange={(e) => setRadioValue(e.target.value)}
              type="radio"
              name="gender"
              value="Female"
              checked={radioValue === "Female"}
              className="radio radio-success"
            />
            Female
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3  items-center justify-items-center">
        {users &&
          users
            .filter((user) => {
              if (searchData === "") {
                return user;
              } else if (
                user.name.toLowerCase().includes(searchData.toLowerCase())
              ) {
                return user;
              }
            })
            .filter((user) => {
              if (radioValue === "All") {
                return user;
              } else if (radioValue === "Male") {
                return user.gender === "Male";
              } else if (radioValue === "Female") {
                return user.gender === "Female";
              } else {
                return user;
              }
            })

            .map((user) => {
              return (
                <div
                  key={user.id}
                  className="card bg-base-100 w-full shadow-xl px-4">
                  <div className="card-body">
                    <h2 className="text-lg">
                      <span className="font-medium">Name:</span>
                      {user.name}
                    </h2>
                    <p>Email: {user.email}</p>
                    <p>Gender: {user.gender}</p>
                    <div className="card-actions justify-center">
                      <button
                        onClick={() => [setId(user.id), setShowModal(true)]}
                        className="btn btn-info min-h-8 h-8 sm:min-h-10 sm:h-10">
                        view
                      </button>
                      <Link
                        to={`/update-user/${user.id}`}
                        className="btn btn-secondary min-h-8 h-8 sm:min-h-10 sm:h-10">
                        Edit
                      </Link>
                      <Link
                        onClick={() => dispatch(deleteUser(user.id))}
                        className="btn btn-error min-h-8 h-8 sm:min-h-10 sm:h-10">
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Read;
