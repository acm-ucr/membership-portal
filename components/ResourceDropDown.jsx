import React from "react";

const ResourceDropDown = () => {
  return (
    <div>
      <select
        name="resource-drop-down"
        id="resource-drop-down"
        className="bg-acm-black text-acm-white rounded-3xl h-9 w-64 align-middle"
      >
        <option value="today">today</option>
        <option value="last week">last week</option>
        <option value="last month">last month</option>
        <option value="last year">last year</option>
      </select>
    </div>
  );
};

export default ResourceDropDown;
