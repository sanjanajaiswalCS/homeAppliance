import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({
  name,
  location,
  rating,
  text,
  date,
  appliance,
}) => {
  const stars = Array(5).fill(0).map((_, index) => (
    <Star
      key={index}
      className={`h-4 w-4 ${
        index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'
      }`}
    />
  ));

  return (
    <div className="bg-white p-6 rounded-lg shadow-custom border border-slate-100 h-full flex flex-col">
      <div className="flex items-center mb-2">{stars}</div>
      <p className="text-slate-600 italic mb-6 flex-grow">"{text}"</p>
      <div className="border-t border-slate-100 pt-4">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-slate-500">{location}</p>
        {appliance && (
          <p className="text-sm text-blue-600 mt-1">{appliance} Repair</p>
        )}
        <p className="text-xs text-slate-400 mt-1">{date}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
