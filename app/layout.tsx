import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={
  title:"TAPKO | Proof. Work. Progress.",
  description:"Africa's proof-backed workforce platform. Find work, hire verified talent, book trusted professionals and grow your skills.",
  openGraph:{title:"TAPKO",description:"Proof. Work. Progress.",images:["https://tapko-skills-jobs-hub.babsajnr.chatgpt.site/og.png"]},
  twitter:{card:"summary_large_image",title:"TAPKO",description:"Proof. Work. Progress.",images:["https://tapko-skills-jobs-hub.babsajnr.chatgpt.site/og.png"]}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
