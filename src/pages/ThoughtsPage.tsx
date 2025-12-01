import { Link } from 'react-router-dom';
import { thoughts } from '../data/thoughts';
import ThoughtsList from '../components/ThoughtsList';
import Footer from '../sections/Footer';

export default function ThoughtsPage() {
  // Sort thoughts by date descending
  const sortedThoughts = [...thoughts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-neutral-800 selection:text-white">
      <div className="max-w-3xl mx-auto px-6 pt-24 md:pt-32 pb-12">
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-neutral-500 hover:text-foreground transition-colors mb-8 group font-medium"
          >
            <span className="text-[#c0eb75] mr-2 group-hover:-translate-x-1 transition-transform duration-200">~</span> 
            Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-medium mb-4 tracking-tight">Thoughts</h1>
          <p className="text-neutral-500 text-lg mb-8">A collection of ideas, tutorials, and updates.</p>
        </div>

        <ThoughtsList thoughts={sortedThoughts} />
        
        <div className="mt-24 pt-8 border-t border-neutral-900">
            <Footer />
        </div>
      </div>
    </div>
  );
}

