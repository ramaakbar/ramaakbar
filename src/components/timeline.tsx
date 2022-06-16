import { careers } from 'src/data/careers';

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
    // <ol classNameName='items-center sm:flex'>
    //   {careers.map((career) => (
    //     <li classNameName='relative mb-6 sm:mb-0' key={career.company}>
    //       <div classNameName='flex items-center'>
    //         <div classNameName='z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-200 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8'>
    //           <svg
    //             classNameName='h-3 w-3 text-blue-600 dark:text-blue-300'
    //             fill='currentColor'
    //             viewBox='0 0 20 20'
    //             xmlns='http://www.w3.org/2000/svg'
    //           >
    //             <path
    //               fillRule='evenodd'
    //               d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
    //               clipRule='evenodd'
    //             ></path>
    //           </svg>
    //         </div>
    //         <div classNameName='hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex'></div>
    //       </div>
    //       <div classNameName='mt-3 sm:pr-8'>
    //         <h3 classNameName='text-lg font-semibold text-gray-900 dark:text-white'>
    //           {career.title}
    //         </h3>
    //         <time classNameName='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
    //           {career.date}
    //         </time>
    //         <p classNameName='text-base font-normal text-gray-500 dark:text-gray-400'>
    //           {career.company}
    //         </p>
    //       </div>
    //     </li>
    //   ))}
    // </ol>
  );
}
