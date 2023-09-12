import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./App.css";
import "./index.css";

function App() {
  const api = "https://www.omdbapi.com/?s=avengers&apikey=e3b48f05";
  const [movie, setMovie] = useState([]);
  const [searched, setSearched] = useState("");
  const [movied, setMovieD] = useState("");
  const [color, setColor] = useState("lighttheme");

  useEffect(() => {
    document.body.className = color;
  }, [color]);

  const mode = ()=>{
    color === "darktheme" ? setColor("lighttheme"):
    setColor("darktheme")
  }

  useEffect(() => {
    async function news() {
      const res1 = await fetch(api);
      const data1 = await res1.json();
      console.log(data1);
      setMovie(data1.Search);
    }
    news();
  }, []);

  const hand = async (a) => {
    a.preventDefault();

    const link = `https://www.omdbapi.com/?s=${searched}&apikey=e3b48f05`;

    const res = await fetch(link);
    const data = await res.json();
    console.log(data);
    setMovie(data.Search);
  };

  return (
    <>
      <div>
        <ToastContainer />
        <nav className="bg-black fixed w-full " id="nav">
          <div className="  sm:px-6 ">
            <div className="flex h-16 items-center justify-between relative ">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <h1 className="text-white font-bold text-2xl">Movies</h1>
              </div>

              <div>
                <form className="bg-white rounded-sm px-3 py-2 hover:border-red-400 border hover:scale-105  duration-700">
                  <input
                    className="outline-none"
                    type="text"
                    onChange={(e) => {
                      setSearched(e.target.value);
                    }}
                  />
                  <button onClick={hand}>
                    <i
                      className="fa-solid fa-magnifying-glass"
                      onClick={() => {}}
                    ></i>
                  </button>
                </form>
              </div>
              <button onClick={mode} className="text-white pl-3 pr-1-">
                <i className="fa-solid fa-moon mommmm"></i>
              </button>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative ml-3">
                  <div className="sm:hidden md:block">
                    <button
                      type="button"
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div>{searched.Poster}</div>

        <div className="pt-16 ">
          {movie?.length > 0 ? (
            movie?.map((pack) => {
              const { Title, Poster, Year, Type } = pack;
              return (
                <>
                  <div className="">
                    <div className="container w-100 mx-auto">
                      <div className=" py-10 border-gray-900 md:flex sm:block ">
                        <img
                          className="rounded-lg sm:mr-9 border-red-400 boxsh border hover:scale-105 duration-300"
                          src={Poster}
                          alt=""
                        />
                        <div className="py-20 px-5 hover:scale-95 sm:py10 duration-300">
                          <a href="">
                            <h1 className=" font-bold text-3xl text-white sm:text-center md:text-start">
                              {" "}
                              {Title}
                            </h1>
                          </a>
                          <h2 className="text-2xl py-2 font-medium text-red-400 sm:text-center md:text-start">
                            Releas : {Year}
                          </h2>
                          <h2 className="text-white md:text-start uppercase sm:text-center">
                            {Type}
                          </h2>
                          <h3 className="text-1xl font-semibold text-white pt-2 sm:text-center md:text-start">
                            Description
                          </h3>
                          <p className="text-white sm:text-center md:text-start">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Reiciendis fugit illum sequi quo suscipit
                            nulla, delectus repudiandae qui reprehenderit quae
                            asperiores eligendi quaerat laborum recusandae
                            dolores dolore quibusdam neque ipsum.
                          </p>
                          <h3 className="pt-3 text-white sm:text-center md:text-start">
                            Rating |{" "}
                            <span className="font-bold text-red-500 md:text-start">
                              12+
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div>No movie Found</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
