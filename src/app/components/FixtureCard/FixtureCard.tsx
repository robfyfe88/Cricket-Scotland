import React from 'react';

interface FixtureCardProps {
  date: string;
  match: string;
  team1: string;
  team2: string;
}

const FixtureCard: React.FC<FixtureCardProps> = ({ date, match, team1, team2 }) => {
  return (
    <div className="border rounded p-4 text-center">
      <div>{date}</div>
      <div className="font-bold">{match}</div>
      <div className="flex justify-around mt-2">
        <span>{team1}</span>
        <span>VS</span>
        <span>{team2}</span>
      </div>
    </div>
  );
};

export default FixtureCard;
