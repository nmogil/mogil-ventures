import { useParams, Link } from 'react-router-dom';
import { thoughts } from '../data/thoughts';
import Footer from '../sections/Footer';

export default function BlogPost() {
  const { slug } = useParams();
  const thought = thoughts.find(t => t.slug === slug);

  if (!thought) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl">Post not found</h1>
        <Link to="/" className="text-neutral-500 hover:text-foreground">Return home</Link>
      </div>
    );
  }

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
          
          <h1 className="text-3xl md:text-4xl font-medium mb-4 tracking-tight">{thought.title}</h1>
          <p className="text-neutral-500 text-lg mb-4">{thought.description}</p>
          
          <div className="flex items-center gap-3 text-sm text-neutral-600 font-mono">
            <time dateTime={thought.date}>
              {new Date(thought.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>

        <article className="prose prose-invert prose-neutral max-w-none">
            <div className="whitespace-pre-wrap font-sans leading-relaxed text-neutral-300">
                {thought.content}
            </div>
        </article>
        
        <div className="mt-24 pt-8 border-t border-neutral-900">
            <Footer />
        </div>
      </div>
    </div>
  );
}

