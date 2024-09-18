import type { Metadata } from "next";
import { fonts } from '@/app/ui/fonts';

import "@/app/ui/globals.css";
import NavGlobal from "@/app/ui/nav-global";

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
      <body className={`${fonts.inter.className} bg-stone-600`}>
        {/* outer header */}
        <header className="flex sticky items-start -top-4 h-14">
          <NavGlobal 
            className={`${fonts.jetbrainsmono.className} sticky py-2 top-0 w-screen h-10 max-h-10 bg-neutral-50 shadow-md`}
            decoSeparator={
              <span className="cursor-default select-none text-stone-400 text-opacity-80">
                {'/'}
              </span>
            }
          />
        </header>
        <div className="flex flex-row md:container md:mx-auto max-w-screen-lg min-h-[calc(100vh-4.5rem)] mb-4 scroll-smooth antialiased bg-neutral-50">
          {children}
        </div>
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${fonts.inter.className} bg-stone-600`}>
//         {/* outer header */}
//         <header className="flex sticky items-start -top-4 h-14">
//           <NavGlobal 
//             className={`${fonts.jetbrainsmono.className} sticky py-2 top-0 w-screen h-10 max-h-10 bg-neutral-50 shadow-md`}
//             decoSeparator={
//               <span className="cursor-default select-none text-stone-400 text-opacity-80">
//                 {'/'}
//               </span>
//             }
//           />
//         </header>
//         <div className="flex flex-row md:container md:mx-auto max-w-screen-lg p-2 min-h-[calc(100vh-4.5rem)] mb-4 scroll-smooth antialiased bg-neutral-50">
//           {children}
//         </div>
//       </body>
//     </html>
//   );
// }

/* rgb(245, 245, 247) */
