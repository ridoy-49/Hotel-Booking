import { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const [input, setInput] = useState({
    roomType: "",
    pricePreNight: "",
    amenities: {
      "Free Wifi": false,
      "Free Breakfast": false,
      "Romm Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });
  return (
    <div>
      <form>
        <Title
          align={"left"}
          font={"outfit"}
          title={"Add Room"}
          subTitle={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nisi labore deleniti iure sequi error in esse animi"
          }
        />
        {/* Upload Images */}
        <p className="text-gray-800 mt-10">Images:</p>
        <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
          {Object.keys(images).map((key) => (
            <label htmlFor={`roomImages${key}`} key={key}>
              <img
                src={
                  images[key]
                    ? URL.createObjectURL(images[key])
                    : assets.uploadArea
                }
                alt=""
                className="max-h-13 cursor-pointer opacity-80"
              />
              <input
                type="file"
                accept="image/*"
                id={`roomImages${key}`}
                hidden
                onChange={(e) => {
                  setImages({ ...images, [key]: e.target.files[0] });
                }}
              />
            </label>
          ))}
        </div>

        <div className="w-full flex max-sm:flex-col sm:gap-4 mt-4">
          <div className="flex-1 max-w-48">
            <p className="text-gray-800 mt-4">Room Type</p>
            <select
              value={input.roomType}
              onChange={(e) => setInput({ ...input, roomType: e.target.value })}
              className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-full"
            >
              <option value=""> Select Room Type</option>
              <option value="Single Room"> Single Room</option>
              <option value="Double Room"> Double Room</option>
              <option value="Luxury Room"> Luxury Room</option>
              <option value="Family Suite"> Family Suite</option>
            </select>
          </div>

          <div>
            <p className="mt-4 text-gray-800">
              Price <span className="text-xs">/Night</span>
            </p>
            <input
              onChange={(e) =>
                setInput({ ...input, pricePreNight: e.target.value })
              }
              type="number"
              placeholder="0"
              className="border border-gray-300 mt-1 rounded p-2 w-24"
              value={input.pricePreNight}
            />
          </div>
        </div>

        <p className="text-gray-800 mt-4 ">Amenities</p>

        <div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
          {Object.keys(input.amenities).map((aminity, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={`aminties${index + 1}`}
                checked={input.amenities[aminity]}
                onChange={() =>
                  setInput({
                    ...input,
                    amenities: {
                      ...input.amenities,
                      [aminity]: !input.amenities[aminity],
                    },
                  })
                }
              />
              <label htmlFor={`aminties${index + 1}`}> {aminity} </label>
            </div>
          ))}
        </div>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault(), console.log({ input, images });
          }}
          className="bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer"
        >
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
