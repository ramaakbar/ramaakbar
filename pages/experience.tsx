import Bottombar from 'src/components/bottombar';
import Navbar from 'src/components/navbar';
import Timeline from 'src/components/timeline';

export default function Experience() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar />
      <main className='mt-10 flex-1 px-4'>
        <section className='mx-auto mt-10 mb-4 w-full max-w-3xl '>
          <h2 className='mb-6 text-2xl font-semibold'>Experiences</h2>
          <Timeline />
        </section>
      </main>
      <Bottombar />
    </div>
  );
}
