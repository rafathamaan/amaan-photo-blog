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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const switcherStyle = {
    background: theme === 'light'
      ? 'linear-gradient(to bottom, #f7f7f7, #ffffff)'
      : theme === 'dark'
        ? 'linear-gradient(to bottom, #333, #444)'
        : 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)',
  };

  return (
    <Switcher style={switcherStyle}>
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
        active={theme === 'dark'}
      />
    </Switcher>
  );
}
