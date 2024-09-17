import clsx from "clsx"

export default function FlexContainer({
  left,
  center,
  right,
  className
}: {
  left?: React.ReactNode,
  center: React.ReactNode,
  right?: React.ReactNode,
  className?: string
}) {
  return (
    <div className={clsx(className)}>
      <div className="md:container md:mx-auto">
        <div className="flex flex-row">
          <div className="flex-initial w-1/12">
            {left}
          </div>
          <div className="flex-initial w-4/6">
            {center}
          </div>
          <div className="flex w-3/12">
            {right}
          </div>
        </div>
      </div>
    </div>
  )
}
