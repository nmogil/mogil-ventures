import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Briefcase, FolderKanban, BookOpen, Calendar } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCalApi } from '@calcom/embed-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navItems = [
  { label: 'What We Do', href: '#what-we-do', icon: Briefcase },
  { label: 'Projects', href: '#projects', icon: FolderKanban },
  { label: 'Thoughts', href: '#thoughts', icon: BookOpen },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'intro' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');

    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.5 }}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50"
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.button
            className="
              group relative flex items-center justify-center
              w-12 h-12
              rounded-full
              bg-white/5 backdrop-blur-md
              border border-white/10
              hover:border-white/30 hover:bg-white/10
              transition-all duration-300
              touch-manipulation
              focus:outline-none focus:ring-2 focus:ring-white/40
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Navigation menu"
          >
            <Menu className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
          </motion.button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="min-w-[180px]">
          {navItems.map((item) => (
            <DropdownMenuItem
              key={item.href}
              onSelect={() => handleNavClick(item.href)}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            data-cal-namespace="intro"
            data-cal-link="mogil-ventures/intro"
            data-cal-config='{"layout":"month_view"}'
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Call</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.nav>
  );
}
