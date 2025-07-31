import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";

const ListRooms = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  return (
    <div>
      <Title
        align={"left"}
        font={"outfit"}
        title={"Room List"}
        subTitle={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sed rem in facilis, voluptatibus accusamus eius quis quibusdam accusantium voluptatum"
        }
      />
      <p className="text-gray-500 mt-8">All Room</p>

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                Facility
              </th>
              <th className="py-3 px-4  text-gray-800 font-medium">
                Price/Night
              </th>
              <th className="py-3 text-center px-4 text-gray-800 font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rooms.map((room, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 ">
                  {room.roomType}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden ">
                  {room.amenities.join(", ")}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 ">
                  ${room.pricePerNight}
                </td>
                <td className="py-3 px-4 text-red-500 text-center border-t border-gray-300 ">
                  <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                    <input type="checkbox" className="sr-only peer" checked={room.isAvailable} />
                    <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                    <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                  </label>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRooms;
