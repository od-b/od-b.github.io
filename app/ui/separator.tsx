import clsx from 'clsx';

export default function Separator({ symbol, className }: { symbol: string, className?: string }) {
  return (
    <div className={clsx('cursor-default text-center', className)}>
      {symbol}
    </div>
  );
}
