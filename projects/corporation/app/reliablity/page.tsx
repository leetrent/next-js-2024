import reliabilityImg from '/public/reliability.jpg';
import Hero from '@/components/hero';

export default function ReliablityPage() {
    return (
        <Hero
            imgData={reliabilityImg} 
            imgAlt='Image of welding taking place' 
            title="Super high reliablity hosting" />
    );
}