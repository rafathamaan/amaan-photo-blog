// 'use client';

// import { useState, useEffect } from 'react';
// import { useTheme } from 'next-themes';
// import Switcher from '@/components/Switcher';
// import SwitcherItem from '@/components/SwitcherItem';
// import { BiDesktop, BiMoon, BiSun } from 'react-icons/bi';

// export default function ThemeSwitcher () {
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   // useEffect only runs on the client, so now we can safely show the UI
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <Switcher>
//       <SwitcherItem
//         title="System"
//         icon={<BiDesktop size={16} />}
//         onClick={() => setTheme('system')}
//         active={theme === 'system'}
//       />
//       <SwitcherItem
//         title="Light"
//         icon={<BiSun size={18} />}
//         onClick={() => setTheme('light')}
//         active={theme === 'light'}
//       />
//       <SwitcherItem
//         title="Dark"
//         icon={<BiMoon size={16} />}
//         onClick={() => setTheme('dark')}
//         active={theme === 'dark'}
//       />
//     </Switcher>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Switcher from '@/components/Switcher';
import SwitcherItem from '@/components/SwitcherItem';
import { BiDesktop, BiMoon, BiSun } from 'react-icons/bi';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Switcher
      style={{
        background: theme === 'light'
          ? 'rgba(255, 255, 255, 0.5)' // Light theme background with transparency
          : theme === 'dark'
          ? 'rgba(51, 51, 51, 0.5)'   // Dark theme background with transparency
          : 'rgba(240, 240, 240, 0.5)', // Default background with transparency
        backdropFilter: 'blur(10px)',   // Apply blur effect
        WebkitBackdropFilter: 'blur(10px)', // For Safari support
        borderRadius: '10px',           // Rounded corners for a smoother look
        border: '1px solid rgba(255, 255, 255, 0.3)', // Light border to enhance the glass effect
        padding: '1rem',                // Add some padding inside the Switcher
      }}
    >
      <SwitcherItem
        title="System"
        icon={<BiDesktop size={16} />}
        onClick={() => setTheme('system')}
        active={theme === 'system'}
      />
      <SwitcherItem
        title="Light"
        icon={<BiSun size={18} />}
        onClick={() => setTheme('light')}
        active={theme === 'light'}
      />
      <SwitcherItem
        title="Dark"
        icon={<BiMoon size={16} />}
        onClick={() => setTheme('dark')}
        active={theme === 'dark')}
      />
    </Switcher>
  );
}
