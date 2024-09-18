import clsx from "clsx"

export default function NavGlobal({
  className,
  decoSeparator
}: {
  className?: string,
  decoSeparator?: JSX.Element
}) {
  return (
    <div className={clsx(className)}>
      <div className="flex flex-row md:container md:mx-auto">
        {/* the two spans function as fallback collapsable margins (mobile, etc) */}
        <span className="flex flex-initial w-8"></span>
        <div className="flex flex-row w-10/12 min-w-fit justify-start mr-auto">
          <a href="/" className="hover:opacity-70 hover:underline mr-6">
            {'bjerke.dev'}
          </a>
          {decoSeparator}
          <a href="/projects" className="hover:opacity-70 hover:underline mr-4">
            {'projects'}
          </a>
          {decoSeparator}
          <a href="/notes" className="hover:opacity-70 hover:underline mr-4">
            {'notes'}
          </a>
          {decoSeparator}
          <a href="/meta" className="hover:opacity-70 hover:underline mr-4">
            {'meta'}
          </a>
        </div>
        <div className="flex flex-row w-2/12 min-w-fit justify-end">
          <a href="/badlink" className="hover:opacity-70 hover:underline">
            {'404'}
          </a>
        </div>
        <span className="flex flex-initial w-8"></span>
      </div>
    </div>
  );
}
