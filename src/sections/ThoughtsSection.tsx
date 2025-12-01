import { Link } from 'react-router-dom';
import { thoughts } from '../data/thoughts';
import ThoughtsList from '../components/ThoughtsList';

export default function ThoughtsSection() {
  // Sort thoughts by date descending
  const sortedThoughts = [...thoughts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Only show the first 5 items on the homepage
  const displayedThoughts = sortedThoughts.slice(0, 5);

  return (
    <section className="py-24 max-w-3xl mx-auto px-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-medium">Thoughts</h2>
        <Link to="/thoughts" className="text-sm text-neutral-500 hover:text-foreground transition-colors font-medium">
          (view all)
        </Link>
      </div>
      <ThoughtsList thoughts={displayedThoughts} />
    </section>
  );
}
