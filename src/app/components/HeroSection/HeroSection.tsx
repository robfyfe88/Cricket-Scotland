import React from 'react';
import SectionTitle from '../ui/SectionTitle/SectionTitle';
import NewsCard from '../ui/NewsCard/NewsCard';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Top blue section with title */}
      <div className="relative w-full h-1/3 bg-blue-900 flex items-end text-white pb-4">
        <SectionTitle title="UNITED BY CRICKET" size="large" position="bottom" className="text-center w-full" />
      </div>
      
      {/* Hero image */}
      <div className="relative w-full h-2/3">
      <Image src="/hero_image.png" alt="Hero" layout="fill" objectFit="cover" objectPosition="center" />

        
        {/* News section overlay */}
        <div className="absolute top-0 right-0 mt-20 mx-10 space-y-0">
          <div className="relative group">
            <NewsCard
              title="Kathryn Bryce leads Scotland to victory over USA"
              date="01 May"
              category="SCOTLAND WOMENS"
              color="#864594"
            />
          </div>
          <div className="relative group">
            <NewsCard
              title="Scotland open qualifying with dominant win over Uganda"
              date="21 April"
              category="SCOTLAND MENS"
              color="#682C75"
            />
          </div>
          <div className="relative group">
            <NewsCard
              title="Men's squad named for Netherlands Tri-Series"
              date="26 April"
              category="SCOTLAND MENS"
              color="#391B4F"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
