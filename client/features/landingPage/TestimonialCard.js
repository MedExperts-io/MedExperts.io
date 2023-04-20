import React from "react";

function TestimonialCard({ name, title, location, quote }) {
  return (
    <div className="bg-gradient-to-b from-slate-700 via-slate-500 to-slate-900 rounded-xl p-10">
      <h4 className="italic">{quote}</h4>
      <div className="pt-2">
        <div className="flex flex-col">
          <h6 className="text-3xl font-bold">{name.toUpperCase()},</h6>
          <p className="text-xl">{title}</p>
          <p className="text-lg -mt-2">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
