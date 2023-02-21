import Link from 'next/link';
import ButtonTheme from '@/components/buttonTheme';

export default function Navbar() {
  return (
    <div className='bg-white/30 px-4 dark:bg-neutral-900/30'>
      <nav className='mx-auto flex w-full max-w-3xl items-center justify-between py-4'>
        <Link
          href={'/'}
          className='font-semibold decoration-sky-500 decoration-2 hover:underline'
        >
          Ramaakbar.
        </Link>

        <div className=' flex items-center '>
          <Link
            href={'/projects'}
            className='py-2 px-3 text-neutral-500 transition-colors ease-in hover:text-black dark:hover:text-neutral-100'
          >
            Projects
          </Link>
          <Link
            href={'/experience'}
            className='py-2 px-3 text-neutral-500 transition-colors ease-in hover:text-black dark:hover:text-neutral-100'
          >
            Experiences
          </Link>
          <ButtonTheme />
        </div>
      </nav>
    </div>
  );
}
