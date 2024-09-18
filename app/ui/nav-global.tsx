import clsx from "clsx"

const Separator = () => {
  return (
    <span className="cursor-default select-none text-stone-400 text-opacity-80">
      {'/'}
    </span>
  );
}

export default function NavGlobal({ className }: { className?: string }) {
  const anchor_style = "hover:opacity-70 hover:underline mr-5"

  return (
    <div className={clsx(className)}>
      <div className="flex flex-row md:container md:mx-auto">
        <div className="flex flex-row w-2/12 min-w-fit justify-end ml-auto">
          <a href="/" className={anchor_style}>
            {'bjerke.dev'}
          </a>
        </div>
        <div className="flex flex-row flex-initial w-8/12 min-w-fit mx-auto">
            <Separator />
            <a href="/projects" className={anchor_style}>
              {'projects'}
            </a>
            <Separator />
            <a href="/notes" className={anchor_style}>
              {'notes'}
            </a>
            <Separator />
            <a href="/meta" className={anchor_style}>
              {'meta'}
            </a>
        </div>
        <div className="flex flex-row w-1/12 min-w-fit justify-end">
          <a href="/badlink" className={anchor_style}>
            {'404'}
          </a>
        </div>
      </div>
    </div>
  );
}
