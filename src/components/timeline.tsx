import { careers } from '@/data/careers';

export default function Timeline() {
  return (
    <ol className='relative border-l border-neutral-200 dark:border-neutral-700'>
      {careers
        .slice()
        .reverse()
        .map((career) => (
          <li className='mb-10 ml-4' key={career.company}>
            <div className='absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-neutral-200 dark:border-neutral-900 dark:bg-neutral-700'></div>
            <time className='mb-1 text-sm font-normal leading-none text-neutral-400 dark:text-neutral-500'>
              {career.date}
            </time>
            <h3 className='text-lg font-semibold text-neutral-900 dark:text-white'>
              {career.title}
            </h3>
            <p className='mb-4 text-base font-normal text-neutral-500 dark:text-neutral-400'>
              {career.company}
            </p>
          </li>
        ))}
    </ol>
  );
}
