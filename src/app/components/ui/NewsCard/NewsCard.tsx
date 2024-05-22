import React from 'react';

interface NewsCardProps {
  title: string;
  date: string;
  category: string;
  color: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, category, color }) => {
  return (
    <div className={`relative p-4 w-120 h-40 transition-shadow hover:shadow-lg`} style={{ backgroundColor: color }}>
      <div className="absolute top-0 left-[-8px] h-full w-2 bg-transparent transition-all duration-300 ease-in-out group-hover:bg-[#D0388D]"></div>
      <h3 className="font-bold text-lg">{title}</h3>
      <div className="text-sm mt-2">{category}</div>
      <div className="text-sm mt-1">{date}</div>
    </div>
  );
};

export default NewsCard;
