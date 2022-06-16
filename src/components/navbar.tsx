import Link from 'next/link';
import ButtonTheme from './buttonTheme';

export default function Navbar() {
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
          <Link href={'/experience'}>
            <a className='py-2 px-3 text-neutral-500 transition-colors ease-in hover:text-black dark:hover:text-neutral-100 '>
              Experiences
            </a>
          </Link>
          <ButtonTheme />
        </div>
      </nav>
    </div>
  );
}
