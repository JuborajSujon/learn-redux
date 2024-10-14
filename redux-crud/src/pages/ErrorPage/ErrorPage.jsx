import { Link, useNavigate, useRouteError } from "react-router-dom";
import { useRef } from "react";
import errorAnimation from "./error.json";
import errorAnimation2 from "./errorLottie.json";
import Lottie from "lottie-react";
import useScrollToTop from "./../../hook/useScrollToTop";

const ErrorPage = () => {
  useScrollToTop();
  const error = useRouteError();
  const navigate = useNavigate();
  const erAnimation = useRef(null);

  const style = {
    width: "100%",
    height: "300px",
    margin: "0 auto",
    maxWidth: "500px",
  };

  return (
    <>
      <section className="relative bg-yellow-400/5">
        <div className="">
          <div className="grid grid-cols-1">
            <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
              <div className="text-center">
                <Link to={"/"}>
                  <img src="" className="mx-auto w-64" alt="" />
                </Link>
              </div>
              <div className=" text-center my-auto ">
                <div className="mx-auto ">
                  {error.status === 404 ? (
                    <Lottie
                      animationData={errorAnimation}
                      style={style}
                      lottieRef={erAnimation}
                      onLoopComplete={() => {
                        erAnimation.current.setDirection(1);
                      }}
                    />
                  ) : (
                    <Lottie
                      animationData={errorAnimation2}
                      style={style}
                      lottieRef={erAnimation}
                      onLoopComplete={() => {
                        erAnimation.current.setDirection(1);
                      }}
                    />
                  )}
                </div>
                {/* <img
                  src="https://i.ibb.co/SxMVZWM/error.png"
                  className="mx-auto"
                  alt=""
                /> */}
                <h1 className="mt-3 mb-6 md:text-4xl text-3xl font-bold ">
                  {error?.data}
                </h1>
                <p className="my-10 text-red-500 text-xl">
                  {" "}
                  Error {error.status}:
                  <i className="text-red-500 text-xl ml-3">
                    {error.statusText || error.message}
                  </i>
                </p>
                <p className="text-slate-400">
                  Whoops, this is embarassing. <br />
                  Looks like the page you were looking for was not found.
                </p>

                <div className="mt-4">
                  <div className="flex items-center justify-center mt-6 gap-x-3">
                    <button
                      onClick={() => navigate(-1)}
                      className="btn w-32 bg-orange-400 hover:bg-orange-500 border-orange-400 hover:border-orange-500 text-slate-900 rounded-md">
                      Go Back
                    </button>

                    <Link
                      to={"/"}
                      className="btn w-32 bg-orange-400 hover:bg-orange-500 border-orange-400 hover:border-orange-500 text-slate-900 rounded-md">
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="mb-0 text-slate-400">
                  @ {new Date().getFullYear()}{" "}
                  <span className="font-bold text-orange-600">
                    Md. Sujon Miah
                  </span>{" "}
                  All Rights Reserved, Inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
