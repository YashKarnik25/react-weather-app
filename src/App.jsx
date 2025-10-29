import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [city, setCity] = useState("Dharampur");
  const [details, setDetails] = useState({ temp: 0 });
  function handleClick() {
    setCity(cityText.current.value);
  }

  useEffect(() => {
    // console.log(city);
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=661edaa67b7048c2916133408241312&q=${city}`
    )
      .then((res) => res.json())
      .then((data) =>
        setDetails((prev) => ({ ...prev, temp: data.current.temp_c }))
      )
      .catch((err) => console.log(err));
  }, [city]);

  const cityText = useRef(null);
  return (
    <div className="flex-col mx-96 border-2 rounded-md border-black mt-4 max-w-100% p-6 min-h-fit">
      <h1 className="text-center bg-gray-800 text-yellow-400  rounded-lg mt-4 p-4  text-2xl">
        Weather App
      </h1>
      <div className="input flex mt-8 justify-center text-center gap-5">
        <label>Enter City:</label>
        <input
          className="border-2 border-black rounded-md"
          type="text"
          placeholder={city}
          ref={cityText}
        />
        <button
          className="border-2  border-black w-100 rounded-md shadow-md shadow-black  text-l  cursor-pointer bg-blue-600 text-white"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      <div className="weather flex items-center justify-center text-center h-64 w-56 mx-auto mt-10 bg-gradient-to-br from-[#f0f0f0] to-blue-500 rounded-lg p-2">
        <div className="temprature inline-flex">
          <h1 className="text-7xl text-blue-50">{details.temp}</h1>
          <sup className="text-2xl text-blue-50">°C</sup>
        </div>
      </div>
    </div>
  );
}

export default App;
