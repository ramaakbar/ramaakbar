import { TRepo } from "@/types";
import { Star } from "lucide-react";
import Link from "next/link";

type Props = {
  repo: TRepo;
};

export default function Project({ repo }: Props) {
  return (
    <Link
      href={repo.link}
      className="flex flex-col space-y-1 rounded-md border border-neutral-100 p-3 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-800"
    >
      <h4 className="font-bold">{repo.repo}</h4>
      <p className="flex-1 text-sm dark:text-neutral-200">{repo.description}</p>
      <div className="flex items-center space-x-3 text-sm">
        <span
          className={`font-medium`}
          style={{ color: `${repo.languageColor}` }}
        >
          {repo.language}
        </span>
        {!!repo.stars && (
          <span className="flex space-x-1">
            <Star className="h-5 w-5 fill-yellow-500 stroke-none" />
            <span className="dark:text-neutral-200">{repo.stars}</span>
          </span>
        )}
      </div>
    </Link>
  );
}
