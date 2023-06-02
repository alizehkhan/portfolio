import { IconMenu2, IconX } from '@tabler/icons-react';
import { KeyboardEvent, useRef, useState } from 'react';

import MobileNav from './MobileNav';

const MobileHeader = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const MobileNavRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (isMobileNavOpen && event.key === 'Tab') {
      const focusableEls = MobileNavRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      const firstFocusableEl = focusableEls?.[0] as HTMLElement | undefined;
      const lastFocusableEl = focusableEls?.[focusableEls.length - 1] as
        | HTMLElement
        | undefined;

      if (event.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl?.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl?.focus();
          event.preventDefault();
        }
      }
    }
  };

  return (
    <header
      className={`container ${isMobileNavOpen ? 'mobile-header' : ''}`}
      ref={MobileNavRef}
      onKeyDown={handleKeyDown}
    >
      <button
        className="mobile-menu-button"
        aria-expanded={isMobileNavOpen}
        aria-controls="primary-menu"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      >
        {isMobileNavOpen ? 'Close' : 'Menu'}
        {isMobileNavOpen ? (
          <IconX color="#4e4d49" size={24} aria-hidden={true} />
        ) : (
          <IconMenu2 color="#4e4d49" size={24} aria-hidden={true} />
        )}
      </button>
      {isMobileNavOpen && (
        <MobileNav
          setIsMobileNavOpen={setIsMobileNavOpen}
          isMobileNavOpen={isMobileNavOpen}
        />
      )}
    </header>
  );
};

export default MobileHeader;
