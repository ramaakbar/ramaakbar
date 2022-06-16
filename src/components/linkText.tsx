import Link from 'next/link';

type LinkTypeProp = {
  link: string;
  text: string;
  color?: string;
  type?: 'bg' | 'underline';
};

export default function LinkText({
  link,
  text,
  color = 'text-sky-500',
  type = 'underline',
}: LinkTypeProp) {
  if (type === 'bg') {
    return (
      <Link href={link}>
        <a
          className={`rounded-lg py-2 px-3 font-bold ${color}  no-underline transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-800`}
        >
          {text} {'->'}
        </a>
      </Link>
    );
  } else {
    return (
      <Link href={link}>
        <a
          className={`rounded-lg py-2 px-3 font-bold text-sky-500  no-underline transition-all duration-300 hover:text-sky-600 dark:hover:text-sky-400  `}
        >
          {text} {'->'}
        </a>
      </Link>
    );
  }
}
