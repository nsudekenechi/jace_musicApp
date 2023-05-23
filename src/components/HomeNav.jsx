/* eslint-disable react/prop-types */
import { HiDotsHorizontal } from "react-icons/hi";

const HomeNav = ({ data }) => {
  return (
    <nav className="flex justify-between items-center text-sm font-bold mb-5">
      <ul className="flex gap-x-5">
        {data.split(",").map((item, index) => (
          <li key={index}>
            <a href="">{item}</a>
          </li>
        ))}
      </ul>
      <HiDotsHorizontal className="text-black/40" />
    </nav>
  );
};

export default HomeNav;
