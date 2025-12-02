import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getCalApi } from "@calcom/embed-react";
import { thoughts } from '../data/thoughts';
import { loadThoughtContent } from '../utils/loadThought';
import Footer from '../sections/Footer';

export default function BlogPost() {
  const { slug } = useParams();
  const thought = thoughts.find(t => t.slug === slug);
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize Cal.com
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "intro" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  useEffect(() => {
    if (slug) {
      loadThoughtContent(slug).then((markdown) => {
        setContent(markdown);
        setLoading(false);
      });
    }
  }, [slug]);

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

          <div className="flex items-center gap-3 text-sm text-neutral-500">
            {thought.author && (
              <>
                <span className="font-medium text-neutral-300">{thought.author}</span>
                {thought.authorTitle && (
                  <span className="text-neutral-600">{thought.authorTitle}</span>
                )}
                <span className="text-neutral-700">·</span>
              </>
            )}
            <time dateTime={thought.date} className="font-mono text-neutral-600">
              {new Date(thought.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>

        <article className="prose prose-invert prose-neutral max-w-none prose-headings:font-medium prose-a:text-[#c0eb75] prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-200 prose-hr:border-neutral-800">
          {loading ? (
            <div className="text-neutral-500">Loading...</div>
          ) : content ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                a: ({ href, children }) => {
                  if (href?.includes('/contact') || href === '#book-call') {
                    return (
                      <button
                        data-cal-namespace="intro"
                        data-cal-link="mogil-ventures/intro"
                        data-cal-config='{"layout":"month_view"}'
                        className="text-[#c0eb75] hover:underline cursor-pointer"
                      >
                        {children}
                      </button>
                    );
                  }
                  return <a href={href}>{children}</a>;
                }
              }}
            >
              {content}
            </ReactMarkdown>
          ) : (
            <div className="text-neutral-500">Content not found</div>
          )}
        </article>

        <div className="mt-24 pt-8 border-t border-neutral-900">
            <Footer />
        </div>
      </div>
    </div>
  );
}
