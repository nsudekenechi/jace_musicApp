/* eslint-disable react/prop-types */
const HomeTopArtists = ({ img, handler, artist }) => {
  //   console.log(handler.topArtist);
  return (
    <div className="col-span-1 flex flex-col items-center">
      <div
        className="h-[70px] w-[70px] mb-2 relative overflow-hidden  rounded-2xl"
        onMouseOver={handler.handleTopArtist}
      >
        <img
          src={`./Img/${img}`}
          className="w-[100%] h-[100%] object-cover  shadow-md"
          alt=""
        />
        <div
          className={`absolute  w-[100%] h-[100%] bg-black left-0 top-[${100}%]`}
        ></div>
      </div>
      <h1 className=" text-sm">{artist}</h1>
    </div>
  );
};

export default HomeTopArtists;
