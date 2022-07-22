import Card from "./Card";
import { FormEvent, useState } from "react";
import { fetchData } from "../services/Api";
import classNames from "classnames";

export default function Form() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    fetchData(city).then((response) => {
      setData(response);
    });
  };

  const handleFormSubmit = (event: FormEvent) => {
    handleSubmit(event);

    setTimeout(() => {
      setCity("");
    }, 150);
  };

  const isDay = data.current?.is_day;

  return (
    <div
      className={classNames(
        "flex w-full h-screen items-center sm:justify-center flex-col p-4",
        {
          "bg-gradient-to-b from-[#14213d] to-[#023e8a]": isDay === 0,
          "bg-gradient-to-b from-[#00b4d8] to-[#80ed99]": isDay === 1,
        }
      )}
    >
      <form
        onSubmit={(event) => handleFormSubmit(event)}
        className="fixed bottom-0 w-full flex p-4 sm:relative justify-center"
      >
        <input
          type="text"
          placeholder="City"
          className="p-3 rounded-lg outline-none w-full sm:max-w-[300px] flex-1"
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          type="submit"
          className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>

      <Card data={data} />
    </div>
  );
}
