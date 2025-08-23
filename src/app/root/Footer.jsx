import { full_logo } from "./../../assets/images/Images";
import Download_App from "../sections/Download_App";

export default function Footer() {
    const cols = [
  {
    title: "About us",
    children: ["Investors", "Features", "Book a demo", "Security"]
  },
  {
    title: "Products",
    children: ["Credits Cards", "Gift Cards", "Savings accounts", "NFT"]
  },
  {
    title: "Useful Links",
    children: ["Free rewards", "Documentation", "Affiliate program"]
  },
  {
    title: "Social",
    children: ["Changelog", "License", "Site Maps", "News"]
  }
];
    return (
        <div>
            <Download_App />
            <footer className=" backdrop-blur-xs bg-[#283430]/10 py-[60px_35px]">
                <div className="container">
                    <div className="grid gap_70">
                        <div className="flex flex-wrap  gap-[32px]">
                            <div className="grid sm:min-w-[392px] h-fit gap-[10px] ">
                                <img src={full_logo} className="h-[24px]" alt="logo" />

                                <p className="text-muted-foreground text-sm max-w-[287px]">
                                    Discover the power of our secure and rewarding credit cards
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-[32px]">
                              {cols?.map((col,index)=>(
                                  <div key={index} className="grid gap-4">
                                    <h2 className="font-bold">{col.title}</h2>
                                    <div className="grid gap-2">

                                    {col.children?.map((item,itemIndex)=>(
                                        <span key={`${item}${itemIndex}`} className=" text-muted-foreground">
                                            {item}
                                        </span>
                                    ))}
                                    </div>
                                </div>
                              ))}
                            </div>
                        </div>
                     
                        <div className="flex items-center flex-wrap justify-between">
                            <p className="text-muted-foreground text-sm">
                                copyright 2023 DoraDesign All Rights Reserved
                            </p>
                            <p className="text-muted-foreground text-sm">
                                This page uses cookies. See cookies details here
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
