import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MdOutlineWbSunny } from 'react-icons/md';
import { TbMoon } from 'react-icons/tb';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='border-b bg-white/30  px-4  backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-900/30'>
      <nav className='mx-auto flex w-full max-w-3xl items-center justify-between py-4'>
        <Link href={'/'}>
          <a className='font-semibold  decoration-sky-500 decoration-2 hover:underline'>
            Ramaakbar.
          </a>
        </Link>

        <div className=' flex items-center '>
          <Link href={'/projects'}>
            <a className='py-2 px-3 text-neutral-500 transition-colors ease-in hover:text-black dark:hover:text-neutral-100 '>
              Projects
            </a>
          </Link>

          <button
            className='flex items-center rounded-lg  py-2 px-3  transition-all ease-in hover:bg-gray-200 dark:hover:bg-neutral-700'
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'dark' ? <TbMoon /> : <MdOutlineWbSunny />}
          </button>
        </div>
      </nav>
    </div>
  );
}
