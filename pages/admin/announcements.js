import React from "react";
import Header from "../components/admin/Header";
import AddAnnouncements from "../components/admin/AddAnnouncements";
import Announcements from "../components/admin/Announcements";

const announcements = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-24">
      <Header title="Announcements" color="bg-acm-blue" />
      <AddAnnouncements />
      <Announcements />
    </div>
  );
};

export default announcements;
