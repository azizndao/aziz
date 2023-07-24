import * as ScrollArea from "@radix-ui/react-scroll-area"
import type { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"
import styles from "./CustomScrollArea.module.css"

type Props = PropsWithChildren<{
  className?: string
}>

export default function CustomScrollArea({ children, className }: Props) {
  return (
    <ScrollArea.Root
      className={twMerge(styles.ScrollAreaRoot, className)}
      scrollHideDelay={2000}
    >
      <ScrollArea.Viewport className={styles.ScrollAreaViewport}>
        {children}
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar
        className={styles.ScrollAreaScrollbar}
        orientation="vertical"
      >
        <ScrollArea.Thumb className={styles.ScrollAreaThumb} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className={styles.ScrollAreaScrollbar}
        orientation="horizontal"
      >
        <ScrollArea.Thumb className={styles.ScrollAreaThumb} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className={styles.ScrollAreaCorner} />
    </ScrollArea.Root>
  )
}
