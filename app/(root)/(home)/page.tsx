import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-india", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-india", {
    dateStyle: "full",
  }).format(now);
  return (
    <section className="flex flex-col size-full text-white gap-10">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex flex-col justify-between h-full max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 text-base text-center">
            Upcoming Meeting at: 12:30 PM{" "}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};
// meetingTpeList is a client file we dont want it in this server file
// thats why we created it on another file it will make it so the content on
// the server file will load fast ex. time ,date etc. then client file ex. cards

export default Home;
