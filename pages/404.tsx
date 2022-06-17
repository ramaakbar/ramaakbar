import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <section className=' m-auto mt-10 mb-4 flex w-full  max-w-3xl flex-1 flex-col items-center justify-center gap-5'>
        <h1 className='text-2xl font-bold'>404 Error</h1>
        <Link href={'/'}>
          <a className='flex items-center rounded-lg py-2 px-3  transition-all ease-in hover:bg-gray-200 dark:hover:bg-neutral-700'>
            Click here to go back
          </a>
        </Link>
      </section>
    </div>
  );
}
