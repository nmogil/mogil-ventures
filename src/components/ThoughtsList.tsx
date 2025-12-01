import { Link } from 'react-router-dom';
import type { Thought } from '../data/thoughts';

interface ThoughtsListProps {
  thoughts: Thought[];
}

export default function ThoughtsList({ thoughts }: ThoughtsListProps) {
  return (
    <ul className="flex flex-col gap-2">
      {thoughts.map((thought) => (
        <li key={thought.id} className="group">
          <Link 
            to={`/thoughts/${thought.slug}`}
            className="flex items-center gap-2 w-full text-foreground hover:pl-1 transition-all duration-200"
          >
            <span className="font-medium text-foreground group-hover:text-foreground whitespace-nowrap shrink-1 overflow-hidden text-ellipsis">
              {thought.title}
            </span>
            
            <div className="grow min-w-[20px] border-b border-dashed border-neutral-800 group-hover:border-neutral-600 transition-colors duration-200 h-[1px] translate-y-[1px]" />
            
            <span className="text-xs font-mono text-neutral-500 uppercase tabular-nums whitespace-nowrap shrink-0 group-hover:text-neutral-400 transition-colors duration-200">
              {new Date(thought.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

