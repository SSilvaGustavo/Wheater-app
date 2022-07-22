import classNames from "classnames";

export interface CardProps {
  data: {
    location?: {
      name: string;
      region: string;
      country: string;
      localtime: string;
    };
    current?: {
      last_updated: string;
      temp_c: number;
      is_day: number;
      condition: {
        text: string;
        icon: string;
      };
    };
  };
}

export default function Card({ data }: CardProps) {
  const isDay = data.current?.is_day;

  return (
    <div
      className={classNames(
        "relative bg-cover bg-no-repeat p-6 mt-10 rounded-lg shadow-md min-w-[290px] min-h-[310px]",
        {
          "bg-day": isDay === 1,
          "bg-nigth": isDay === 0,
          "bg-slate-300": isDay != 1 || 0,
        }
      )}
    >
      <div className="flex flex-col justify-center text-center">
        <strong className="text-xl text-white">
          {data.location?.name ? data.location?.name : "-"}
        </strong>
        <span className="text-white text-sm font-medium">
          {data.location?.region ? data.location?.region : "-"}{" "}
          {data.location?.country ? data.location?.country : "-"}
        </span>
      </div>

      <div className="flex justify-center mt-4 mb-16 font-bold text-white">
        <span className="text-8xl ">
          {data.current?.temp_c ? data.current?.temp_c : 0}
        </span>
        <span className="text-3xl mt-3">°C</span>
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <span className="text-white font-semibold">
          {data.current?.condition.text}
        </span>
      </div>
      <img
        className="absolute bottom-[76%] right-[75%]"
        src={data.current?.condition.icon ? data.current?.condition.icon : ""}
        alt={data.current?.condition.icon ? "weather icon" : ""}
      />
    </div>
  );
}
