import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rakke SRAD FC",
};

export default function Page() {
  return (
    <div className="w-full">
      <iframe
        src="https://personal-viewer.365.altium.com/client/index.html?feature=embed&source=8ECF87D9-120B-4B4A-B6A4-414B1936D0B0&activeView=PCB"
        width="1280"
        height="720"
        // style="overflow:hidden;border:none;width:100%;height:720px;"
        className="overflow-hidden border-none w-full h-full"
        scrolling="no"
        allowFullScreen={true}
        // onLoad={() => { window.top.scrollTo(0,0)}}
      ></iframe>
    </div>
  );
}
