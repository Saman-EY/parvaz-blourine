import React, { Fragment } from "react";
import { cn } from "@/lib/utils";
import { IconSelect } from "@/components/ui/icon-select";
import { NavbarDropdown } from "@/components/layout/navbar/navbar-dropdown";
import Link from "next/link";
import { getMenuItems } from "@/api/get-menu-items";
import { NavbarDropdownLang } from "@/components/layout/navbar/navbar-dropdown-lang";
import { NavbarSearchButton } from "@/components/layout/navbar/navbar-search-button";
import { NavbarDrawer } from "@/components/layout/navbar/navbar-drawer";
import { NavbarLink } from "@/components/layout/navbar/navbar-link";
import { AuthModal } from "@/components/ui/auth/auth-modal";
import { NavbarDropMenu } from "@/components/layout/navbar/navbar-drop-menu";
import Image from "next/image";
import { BookmarkButton } from "@/components/ui/bookmark-button";
import Flag from "react-world-flags";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Props {
  absolute?: boolean;
}

export const Navbar: React.FC<Props> = async ({ absolute = false }) => {
  const continents = await getMenuItems();
  return (
    <Fragment>
      <nav
        className={cn([
          "hidden lg:flex w-full mx-auto max-w-screen-2xl items-center justify-around py-5",
          absolute ? "text-white absolute z-50 !right-1/2 translate-x-1/2" : "text-darkGray",
        ])}
        
      >
        <NavbarDropdownLang title={"FA"} />
        <div className={"flex items-center gap-x-8"}>
          <NavbarDropdown title={"تور ها"} link={"/tours"}>
            <div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-5 text-right text-14">
                {continents.map((continent: any) => (
                  <div key={continent.name}>
                    <h3 className="font-medium mb-2 text-20">{continent.name}</h3>
                    <ul className="space-y-1 grid grid-cols-2 text-14">
                      {continent.countries.map((country: any, index: number) => {
                        if (index < 11) {
                          return (
                            <li key={country}>
                              <Link href="/tours" className="hover:underline">
                                {country}
                              </Link>
                            </li>
                          );
                        } else return null;
                      })}
                      <li>
                        <Link href="/tours" className="hover:underline text-secondary">
                          مشاهده همه
                        </Link>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
              <div className={"w-full mt-5 flex justify-start items-center gap-7"}>
                <AspectRatio className="w-[300px] h-[190px] rounded-10 group" ratio={1}>
                  <Image
                    fill={true}
                    src={"/assets/images/dynamic/china.png"}
                    alt={"tour card image alt text"}
                    className="w-full h-full object-cover relative z-0"
                    sizes="50vw"
                    priority
                  />
                  <div
                    className={
                      "absolute transition-all duration-300 opacity-0 group-hover:opacity-100 bg-black/60 left-0 top-0 w-full h-full flex-center z-10 flex-col"
                    }
                  >
                    <h4 className={"text-white text-20 font-medium"}>تورهای ترکیبی اروپا</h4>
                    <span className={"h-[3px] w-[80px] bg-white"} />
                  </div>
                </AspectRatio>
                <AspectRatio className="w-[300px] h-[190px] rounded-10 group" ratio={1}>
                  <Image
                    fill={true}
                    src={"/assets/images/dynamic/china.png"}
                    alt={"tour card image alt text"}
                    className="w-full h-full object-cover relative z-0"
                    sizes="50vw"
                    priority
                  />
                  <div
                    className={
                      "absolute transition-all duration-300 opacity-0 group-hover:opacity-100 bg-black/60 left-0 top-0 w-full h-full flex-center z-10 flex-col"
                    }
                  >
                    <h4 className={"text-white text-20 font-medium"}>تورهای بهار و تابستان</h4>
                    <span className={"h-[3px] w-[80px] bg-white"} />
                  </div>
                </AspectRatio>
              </div>
            </div>
          </NavbarDropdown>

          <NavbarDropdown title={"هتل ها"} link={"/hotel"}>
            <div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-5 text-right text-14">
                {continents.map((continent: any) => (
                  <div key={continent.name}>
                    <h3 className="font-medium mb-2 text-20">{continent.name}</h3>
                    <ul className="space-y-1 grid grid-cols-2 text-14">
                      {continent.countries.map((country: any, index: number) => {
                        if (index < 11) {
                          return (
                            <li key={country}>
                              <Link href="/hotel" className="hover:underline">
                                {country}
                              </Link>
                            </li>
                          );
                        } else return null;
                      })}
                      <li>
                        <Link href="/hotel" className="hover:underline text-secondary">
                          مشاهده همه
                        </Link>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
              <div className={"w-full mt-5 flex justify-start items-center gap-7"}>
                <AspectRatio className="w-[300px] h-[190px] rounded-10 group" ratio={1}>
                  <Image
                    fill={true}
                    src={"/assets/images/dynamic/china.png"}
                    alt={"tour card image alt text"}
                    className="w-full h-full object-cover relative z-0"
                    sizes="50vw"
                    priority
                  />
                  <div
                    className={
                      "absolute transition-all duration-300 opacity-0 group-hover:opacity-100 bg-black/60 left-0 top-0 w-full h-full flex-center z-10 flex-col"
                    }
                  >
                    <h4 className={"text-white text-20 font-medium"}>تورهای ترکیبی اروپا</h4>
                    <span className={"h-[3px] w-[80px] bg-white"} />
                  </div>
                </AspectRatio>
                <AspectRatio className="w-[300px] h-[190px] rounded-10 group" ratio={1}>
                  <Image
                    fill={true}
                    src={"/assets/images/dynamic/china.png"}
                    alt={"tour card image alt text"}
                    className="w-full h-full object-cover relative z-0"
                    sizes="50vw"
                    priority
                  />
                  <div
                    className={
                      "absolute transition-all duration-300 opacity-0 group-hover:opacity-100 bg-black/60 left-0 top-0 w-full h-full flex-center z-10 flex-col"
                    }
                  >
                    <h4 className={"text-white text-20 font-medium"}>تورهای بهار و تابستان</h4>
                    <span className={"h-[3px] w-[80px] bg-white"} />
                  </div>
                </AspectRatio>
              </div>
            </div>
          </NavbarDropdown>
          <div className={"mx-4"}>
            <Link href={"/"}>
              <IconSelect classes={"w-full max-w-[120px]"} name={"logo-dark"} />
            </Link>
          </div>

          <NavbarDropMenu />

          <NavbarLink href={"/about-contact"}>درباره ما</NavbarLink>
        </div>
        <div className={"flex gap-5"}>
          <NavbarSearchButton />
          <AuthModal absolute={absolute} />
        </div>
      </nav>
      <nav className={cn(["flex lg:hidden w-full items-center justify-between py-5 z-50 px-10 shadow-lg"])}>
        <NavbarDrawer />
        <div className={"mx-4"}>
          <Link href={"/"}>
            <IconSelect classes={"w-full max-w-[100px]"} name={"logo-dark"} />
          </Link>
        </div>
        <NavbarDropdownLang title={"FA"} />
      </nav>
    </Fragment>
  );
};
