import * as Rui from "@radix-ui/react-scroll-area";
import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const CustomScrollArea = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <Rui.Root
    className={twMerge("overflow-hidden", className)}
    scrollHideDelay={2000}
  >
    <Rui.Viewport className="w-full h-full">{children}</Rui.Viewport>
    <Rui.Scrollbar
      className="flex z-20 select-none touch-none bg-black/10 transition-colors duration-[260ms] ease-out hover:bg-black/20 data-[orientation=vertical]:w-1 lg:data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-1.5 md:data-[orientation=horizontal]:h-2.5"
      orientation="vertical"
    >
      <Rui.Thumb className="flex-1 bg-neutral-400 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
    </Rui.Scrollbar>

    <Rui.Scrollbar
      className="flex z-20 select-none touch-none bg-black/10 transition-colors duration-[260ms] ease-out hover:bg-black/20 data-[orientation=vertical]:w-1 lg:data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-1.5 md:data-[orientation=horizontal]:h-2.5"
      orientation="horizontal"
    >
      <Rui.Thumb className="flex-1 bg-neutral-400 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
    </Rui.Scrollbar>

    <Rui.Corner className="bg-black/50" />
  </Rui.Root>
);

export default CustomScrollArea;
