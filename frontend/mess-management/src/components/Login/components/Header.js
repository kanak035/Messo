import { Link } from "react-router-dom";
import { MdFoodBank } from "react-icons/md";

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <MdFoodBank fontSize={64} color="teal" />
        <span className="text-black text-xl pt-6 size-15 font-semibold">
          Messo
        </span>
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className=" text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-teal-600 hover:text-teal-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
