import Head from 'next/head';
import HeroSection from './components/HeroSection/HeroSection';
import SectionTitle from './components/ui/SectionTitle/SectionTitle';
import FixtureCard from './components/FixtureCard/FixtureCard';
// import MediaSection from '../components/MediaSection';
// import ClubSection from '../components/ClubSection';
// import ReplicaSection from '../components/ReplicaSection';
// import ExploreSection from '../components/ExploreSection';
// import FollowSection from '../components/FollowSection';
// import PartnersSection from '../components/PartnersSection';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Cricket Scotland</title>
        <meta name="description" content="Welcome to the Cricket Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <section className="py-16">
          <SectionTitle title="We Dinnae Like Cricket... We Love it!" size="medium" position="center" />
          <SectionTitle title="FIXTURES" size="medium" position="bottom"/>
          <div className="flex justify-around">
            <FixtureCard date="Sat, 18 May 2024" match="ICC Men's T20 World Cup" team1="NTL" team2="SCT" />
            <FixtureCard date="Mon, 20 May 2024" match="ICC Men's T20 World Cup" team1="IRE" team2="SCT" />
            <FixtureCard date="Wed, 22 May 2024" match="ICC Men's T20 World Cup" team1="NTL" team2="SCT" />
          </div>
        </section>
        {/* <MediaSection />
        <ClubSection />
        <ReplicaSection />
        <ExploreSection />
        <FollowSection />
        <PartnersSection /> */}
      </main>
{/* 
      <Footer /> */}
    </div>
  );
};

export default Home;
