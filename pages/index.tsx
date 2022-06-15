import type { NextPage } from 'next';
import Image from 'next/image';
import Navbar from '../src/components/navbar';
import me from '../public/images/Ghn.jpg';
import Link from 'next/link';
import Bottombar from '../src/components/bottombar';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='mt-12 flex-1 px-4'>
        <section className='prose mx-auto mt-8 mb-4 flex w-full max-w-3xl flex-col-reverse items-center dark:prose-invert sm:flex-row sm:gap-10'>
          <div className=''>
            <h2 className='mb-4 text-center sm:text-start'>
              Akbar Ramadhan Yusri
            </h2>

            <div>
              I{"'"}m a software engineer, computer science student. Focusing on
              website development, Frontend and Backend. Currently building
              websites using react/nextjs.
            </div>
            <div className='flex'>
              <Link href={'https://github.com/ramaakbar'}>
                <div className='text-stone-200'>Github {'->'}</div>
              </Link>
              <Link href={'linkedin.com/in/akbar-ramadhan-yusri-48a422170'}>
                <div className='text-blue-900'>Linkedin</div>
              </Link>
            </div>
          </div>
          <div className='flex h-40 w-40 items-center sm:h-40 sm:w-72'>
            <Image
              src={me}
              alt='Me'
              // width={100}
              // height={100}
              className='  rounded-full'
              placeholder='blur'
            />
          </div>
        </section>
      </main>
      <Bottombar />
    </div>
  );
};

export default Home;
