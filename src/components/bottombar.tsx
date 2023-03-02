import ButtonTheme from "./buttonTheme";

export default function Bottombar() {
  return (
    <footer className="mt-6 border-t border-neutral-100 px-5 py-7 text-center text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-3xl justify-between ">
        <div>©2022. Made by Ramaakbar</div>
        <ButtonTheme />
      </div>
    </footer>
  );
}
