import { useNavigate } from "react-router-dom";
import useScrollPosition from "./../hook/useScrollPosition";

const Home = () => {
  useScrollPosition();

  const navigate = useNavigate();

  const handlenav = () => {
    navigate("/all-user");
  };
  return (
    <div className="hero bg-green-50 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2n16okc-9Kzj7LMyik0LVGGxjl9nMsQ1xw&s"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Who Am I?</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button onClick={handlenav} className="btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
