import { useSelector } from "react-redux";
import "./CustomModal.css";

const CustomModal = ({ id, setShowModal, showModal }) => {
  const allUsers = useSelector((state) => state.app.users);

  const singleUser = allUsers.find((user) => user.id === id);
  console.log(singleUser);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn flex justify-end">
          <button onClick={() => setShowModal(false)} className="closeButton">
            X
          </button>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="body">
            <h2 className="text-lg">
              <span className="font-medium">Name:</span>
              {singleUser?.name}
            </h2>
            <p>Email: {singleUser?.email}</p>
            <p>Age: {singleUser?.age}</p>
            <p>Gender: {singleUser?.gender}</p>
          </div>

          <div className="footer">
            <button
              onClick={() => setShowModal(false)}
              className="bg-green-200 p-3 rounded-lg hover:bg-green-400 hover:text-white">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
