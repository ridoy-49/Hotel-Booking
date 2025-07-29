import { useNavigate } from "react-router-dom";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";

const FeatureDestination = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title
        title="Feature Destination"
        subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b"
      />
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20 ">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
      <button onClick={()=>{navigate('/rooms'), scrollTo(0,0)}} className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-200 transition-all cursor-pointer">
        View All Destination
      </button>
    </div>
  );
};

export default FeatureDestination;
