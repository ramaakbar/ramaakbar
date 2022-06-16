import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdOutlineWbSunny } from 'react-icons/md';
import { TbMoon } from 'react-icons/tb';

export default function ButtonTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className='flex items-center rounded-lg  py-2 px-3  transition-all ease-in hover:bg-gray-200 dark:hover:bg-neutral-700'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'dark' ? <TbMoon /> : <MdOutlineWbSunny />}
    </button>
  );
}
