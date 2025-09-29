import React from "react";
import { TemplateTopFilter } from "@/components/ui/template/template-top-filter";

interface Props {
  SideBarComponent?: React.ComponentType;
  showGrid?: boolean;
  initial?: boolean;
  children?: React.ReactNode;
  placeholder?: string;
}

export const TemplateProduct = ({ initial, showGrid = true, placeholder, SideBarComponent, children }: Props) => {
  return (
    <section className={"container-main flex justify-center gap-3 mt-5"}>
      <aside className={"hidden lg:block w-[276px] h-fit bg-[#F5F5F5] rounded-15 p-5"}>
        {SideBarComponent && <SideBarComponent />}
      </aside>
      <section className={"w-full max-w-[780px]"}>
        <TemplateTopFilter
          className={"mb-3.5"}
          showGridView={showGrid}
          FilterSidebar={SideBarComponent}
          placeholder={placeholder}
        />
        {children}
      </section>
    </section>
  );
};
