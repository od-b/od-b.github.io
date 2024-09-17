import clsx from "clsx"
import Separator from "@/app/ui/separator";
import NavAnchor from "@/app/ui/nav-link";
import FlexContainer from "@/app/ui/flex-container";


export default function NavGlobal({className}: {className?: string}) {
  const separator = <Separator symbol="/" className="text-stone-400 text-opacity-80 pl-4" />

  return (
    <FlexContainer
      className={clsx(className)}
      left={
        <NavAnchor innerText="bjerke.dev" href="/" />
      }
      center={
        <div className="flex flex-row mr-auto space-x-0 px-10">
          {separator}
          <NavAnchor innerText="projects" href="/projects" />
          {separator}
          <NavAnchor innerText="notes" href="/notes" />
          {separator}
          <NavAnchor innerText="meta" href="/meta" />
        </div>
      }
      right={
        <NavAnchor innerText="right" href="/meta" />
      }
    />
  );
}
