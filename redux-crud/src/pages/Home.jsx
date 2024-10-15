import useScrollPosition from "./../hook/useScrollPosition";
import Create from "./Create";

const Home = () => {
  useScrollPosition();
  return (
    <div className="">
      <Create />
    </div>
  );
};

export default Home;
