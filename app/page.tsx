import LoremIpsum from "@/app/lib/lorem-ipsum";
import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex flex-row">
      <div className="p-6 w-7/12 border-r">
        <LoremIpsum />
      </div>
      <div className="p-6 w-5/12">
        <LoremIpsum />
      </div>
    </div>
  );
}
