import { useEffect, useState } from "react";
import { twJoin } from "tailwind-merge";

export default function VideoDescription({
    description,
}: {
    description: string;
}) {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        setOpen(true);
    }, [description]);

    return (
        <article
            className={twJoin(
                "bg-surface-variant p-4 rounded-xl mb-6 mx-4 lg:mx-0",
                !open && "cursor-pointer"
            )}
            onClick={() => {
                if (!open) setOpen(true);
            }}
        >
            <h3 className="text-2xl font-bold">Description</h3>
            <section
                className={twJoin(open ? "" : "line-clamp-1")}
                onClick={() => setOpen(true)}
            >
                {description.split("\n").map((paragraph, index) => (
                    <p className="py-2" key={index}>
                        {paragraph}
                    </p>
                ))}
            </section>

            {open && (
                <button
                    className="px-4 py-2 font-medium text-sm bg-neutral-300 dark:bg-neutral-900 mt-4 rounded-full"
                    onClick={() => setOpen(false)}
                >
                    Close
                </button>
            )}
        </article>
    );
}
