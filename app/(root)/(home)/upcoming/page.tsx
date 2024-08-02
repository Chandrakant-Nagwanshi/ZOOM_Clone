import CallList from "@/components/CallList";
import React from "react";

const UpComing = () => {
  return (
    <section className="flex flex-col size-full text-white gap-10">
      <h1 className="text-3xl font-bold">Upcoming</h1>
      <CallList type="upcoming" />
    </section>
  );
};

export default UpComing;