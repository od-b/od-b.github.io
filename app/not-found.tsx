import { Metadata } from "next";
import { fonts } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: '404',
};

export default function NotFound() {
  return (
    <div className="content-center text-center w-screen">
      <p className={`${fonts.jetbrainsmono.className} text-5xl mb-5`}>404</p>
      <p className="text-2xl italic">Not Found</p>
    </div>
  );
}
