import type { Metadata } from "next";
import { fonts } from '@/app/ui/fonts';
import "@/app/ui/globals.css";
import NavGlobal from "@/app/ui/nav-global";
import FlexContainer from "@/app/ui/flex-container";

export const metadata: Metadata = {
  title: {
    template: '%s - bjerke.dev',
    default: 'bjerke.dev',
  },
  description: "Odin Bjerke - Personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.inter.className} antialiased bg-stone-600`}>
        <NavGlobal className="shadow-md bg-neutral-50 py-2" />
        <FlexContainer
          center={
            <div className="bg-neutral-50 p-2">
              {children}
            </div>
          }
        />
      </body>
    </html>
  );
}
