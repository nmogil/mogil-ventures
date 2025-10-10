import ProfileCard from '@/components/ProfileCard';
import { profileData } from '@/data/profileData';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const handleContact = () => {
    window.open('https://www.noahmogil.com/contact', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-fit p-0 border-0 bg-transparent max-sm:flex max-sm:items-center max-sm:justify-center max-sm:p-4 max-sm:bg-black/95"
        hideCloseButton={true}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        {/* Mobile-only close button */}
        <button
          onClick={onClose}
          className="sm:hidden absolute top-4 right-4 z-50 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all touch-manipulation"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <ProfileCard
          {...profileData}
          onContactClick={handleContact}
          enableTilt={true}
          enableMobileTilt={false}
          showUserInfo={true}
        />
      </DialogContent>
    </Dialog>
  );
}
