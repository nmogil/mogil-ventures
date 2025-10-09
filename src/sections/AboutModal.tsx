import ProfileCard from '@/components/ProfileCard';
import { profileData } from '@/data/profileData';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const handleContact = () => {
    // Option 1: Email
    window.location.href = `mailto:${profileData.contactEmail}`;

    // Option 2: Calendar (uncomment and update URL)
    // window.open('https://calendly.com/mogilventures', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-fit p-0 border-0 bg-transparent">
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
