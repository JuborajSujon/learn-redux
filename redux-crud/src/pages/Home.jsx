import useScrollPosition from "./../hook/useScrollPosition";

const Home = () => {
  useScrollPosition();
  return <div className="hero min-h-screen bg-green-50">This is Home Page</div>;
};

export default Home;
