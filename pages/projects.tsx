import Image from 'next/image';
import Link from 'next/link';
import Bottombar from 'src/components/bottombar';
import Navbar from 'src/components/navbar';

export default function Projects() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='mt-10 flex-1 px-4'>
        <section className=' mx-auto mt-8 mb-4 flex w-full max-w-3xl flex-col gap-6'>
          <h2 className='text-2xl font-semibold'>Projects</h2>
          <div className='relative'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                className='absolute h-5 w-5 text-neutral-400'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <input
              type='text'
              className='w-full rounded-lg bg-neutral-100 px-4 py-2 pl-10 dark:bg-neutral-800'
              placeholder='Search'
            />
          </div>

          <div className='grid grid-cols-1  gap-3 sm:grid-cols-2'>
            <Link href={'https://ramaakbar-rts-fnapp.netlify.app/'}>
              <a className='flex flex-col  gap-3 rounded-lg'>
                <div className='peer relative h-72 w-full  sm:h-60'>
                  <Image
                    src={'/images/project2.png'}
                    layout='fill'
                    alt='test'
                    className='rounded-lg'
                  />
                </div>

                <a className='text-lg font-bold decoration-sky-500 decoration-2 peer-hover:underline'>
                  Rts site
                </a>
                <div className='flex gap-2'>
                  <div className='semi-bold inline rounded-full bg-neutral-700 px-2 py-1 text-neutral-400'>
                    React Js
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </section>
      </main>
      <Bottombar />
    </div>
  );
}
