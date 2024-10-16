import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetails/userDetailSlice";
import CustomModal from "../components/CustomModal";
import { Link } from "react-router-dom";

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();

  const [showModal, setShowModal] = useState(false);

  const { isLoading, error, users } = useSelector((state) => state.app);

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
    <div className="mt-20 min-h-screen bg-green-50 px-6">
      <h2 className="text-4xl mt-4 text-center font-bold mb-3">
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3  items-center justify-items-center">
        {users &&
          users.map((user) => {
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
                    <Link className="btn btn-secondary min-h-8 h-8 sm:min-h-10 sm:h-10">
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
