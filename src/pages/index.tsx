import type { NextPage } from 'next';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import me from 'public/images/Ghn.jpg';
import Bottombar from '@/components/bottombar';
import LinkText from '@/components/linkText';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='mt-12 flex-1 px-4'>
        <section className='prose mx-auto mt-8 mb-4 flex w-full max-w-3xl flex-col-reverse items-center gap-8 dark:prose-invert sm:flex-row sm:gap-10'>
          <article className=''>
            <h1 className='mb-4 text-center sm:text-start'>
              Akbar Ramadhan Yusri
            </h1>

            <p>
              Hello! I{"'"}m Rama, a passionate software engineer, computer
              science student. Focusing on web development, both Frontend and
              Backend.
            </p>
            <p>
              On my free time, i love to play games, code, and watch series.
            </p>
            <div className='mt-5 flex gap-4'>
              <LinkText
                link='https://github.com/ramaakbar'
                text='Github'
                type='bg'
                color='text-neutral-500'
              />
              <LinkText
                link='https://www.linkedin.com/in/akbar-ramadhan-yusri-48a422170'
                text='Linkedin'
                type='bg'
                color='text-blue-500'
              />
            </div>
          </article>
          <div className='flex h-40 w-40 items-center sm:h-40 sm:w-80'>
            <Image
              src={me}
              alt='Me'
              // width={100}
              // height={100}
              className='rounded-full'
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
