import Image from 'next/image';
import homeImg from '/public/home.jpg';

export default function Home() {
  return (
    <div>
      <span color="white">Home Page</span>
      <div className="absolute -z-10 inset-0">
        <Image
        src={homeImg}
        alt="Car Factory"
        layout="fill"
        objectFit="cover"
        />
      </div>
    </div>
  );
}