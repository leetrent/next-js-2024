import reliabilityImg from '/public/reliability.jpg';
import Hero from '@/components/hero';

export default function ReliablityPage() {
    return (
        <Hero
            imgData={reliabilityImg} 
            imgAlt='Reliablity Background Image' 
            title="Reliablity" />
    );
}