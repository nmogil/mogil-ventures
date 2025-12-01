import { Link } from 'react-router-dom';
import { thoughts } from '../data/thoughts';
import ThoughtsList from '../components/ThoughtsList';
import FuzzyText from '@/components/FuzzyText';

export default function ThoughtsSection() {
  // Sort thoughts by date descending
  const sortedThoughts = [...thoughts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Only show the first 5 items on the homepage
  const displayedThoughts = sortedThoughts.slice(0, 5);

  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <div className="flex items-end justify-between mb-12">
        <div className="-ml-[50px]">
          <FuzzyText
            baseIntensity={0}
            hoverIntensity={0.05}
            enableHover={true}
            fontSize="clamp(2rem, 4vw, 3.5rem)"
            fontWeight={900}
            color="#fff"
            className="!mx-0"
          >
            Thoughts
          </FuzzyText>
        </div>
        <Link to="/thoughts" className="text-sm text-neutral-500 hover:text-foreground transition-colors font-medium mb-4">
          (view all)
        </Link>
      </div>
      <ThoughtsList thoughts={displayedThoughts} />
    </section>
  );
}
