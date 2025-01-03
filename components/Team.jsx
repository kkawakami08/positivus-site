import MainLabel from "./ui/MainLabel";
import TeamCard from "./TeamCard";
import { team } from "@/constants/team";

const Team = () => {
  return (
    <div className=" flex flex-col gap-5 items-center px-5 lg:px-0 w-full ">
      <div className="flex flex-col items-center gap-5 py-3 sm:flex-row justify-center  sm:col-span-3 sm:max-w-xl md:max-w-2xl">
        <MainLabel text="Team" bgColor="bg-brand-green" />
        <p className="text-center sm:text-left">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-3 w-full ">
        {team.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
