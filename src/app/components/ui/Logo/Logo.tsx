import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src="/logo_icon.png" alt="Cricket Scotland Icon" width={50} height={50} />
      <Image src="/logo_text.png" alt="Cricket Scotland Text" width={150} height={50} />
    </div>
  );
};

export default Logo;
