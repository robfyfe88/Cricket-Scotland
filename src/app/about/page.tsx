import Head from 'next/head';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>About Us</title>
        <meta name="description" content="About the Cricket Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          About the Cricket Club
        </h1>
      </main>
    </div>
  );
};

export default About;
