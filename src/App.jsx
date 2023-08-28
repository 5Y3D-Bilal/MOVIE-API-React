import React, { useState } from "react";
// import "./App.css";

function App() {

  const [movie, setMovie] = useState([]);
  const [searched, setSearched] = useState("");

  const hand = async (a) => {
    a.preventDefault();

    const link = `https://www.omdbapi.com/?s=${searched}&apikey=e3b48f05`;

    try {
      const res = await fetch(link);
      const data = await res.json();
      console.log(data);
      setMovie(data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav class="bg-black">
        <div class="  sm:px-6 ">
          <div class="flex h-16 items-center justify-between relative">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <h1 className="text-white font-bold text-2xl">Movies</h1>
            </div>

            <div>
              <form className="bg-white rounded-sm px-3 py-2 border-red-400 ">
                <input
                  className="outline-none"
                  type="text"
                  onChange={(e) => {
                    setSearched(e.target.value);
                  }}
                />
                <button onClick={hand}>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>

            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="relative ml-3">
                <div>
                  <button
                    type="button"
                    class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
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

    

      <div className="">
        {movie?.map((pack) => {
          const { Title, Poster, Year, Type } = pack;
          return (
            <>
              <div className="container w-90 mx-auto">
                <div className="flex py-10 border-gray-900">
                  <img
                    className="rounded-lg border-white border"
                    src={Poster}
                    alt=""
                  />
                  <div className="py-20 px-5">
                    <a href="">
                      <h1 className=" font-bold text-3xl text-white">
                        {" "}
                        {Title}
                      </h1>
                    </a>
                    <h2 className="text-2xl py-2 font-medium text-red-400">
                      Releas : {Year}
                    </h2>
                    <h2 className="text-white uppercase">{Type}</h2>
                    <h3 className="text-1xl font-semibold text-white pt-2">
                      Description
                    </h3>
                    <p className="text-white">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Reiciendis fugit illum sequi quo suscipit nulla, delectus
                      repudiandae qui reprehenderit quae asperiores eligendi
                      quaerat laborum recusandae dolores dolore quibusdam neque
                      ipsum.
                    </p>
                    <h3 className="pt-3 text-white">
                      Rating |{" "}
                      <span className="font-bold text-red-500">12+</span>
                    </h3>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
