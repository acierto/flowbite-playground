import {component$, type PropsOf, Slot} from "@builder.io/qwik";
import {cn} from "@qwik-ui/utils";
import {cva, type VariantProps} from "class-variance-authority";

/**
 * nline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background
 * transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
 * disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
 * bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 button-donation
 */

export const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            look: {
                primary:
                    "border-base bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:shadow-base active:press",
                secondary:
                    "border-base bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90 active:shadow-base active:press",
                alert:
                    "border-base bg-alert text-alert-foreground shadow-sm hover:bg-alert/90 active:shadow-base active:press",
                outline:
                    "border bg-background text-foreground shadow-sm hover:bg-accent active:shadow-base active:press",
                ghost: "text-accent-foreground hover:bg-accent",
                link: "text-foreground hover:bg-transparent hover:text-foreground/80 hover:underline hover:underline-offset-2",
            },
            size: {
                sm: "h-8 px-2 py-1.5 text-sm",
                md: "h-10 px-4 py-3 text-base",
                lg: " h-16 px-8 py-4 text-lg",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            look: "primary",
            size: "md",
        },
    },
);

type ButtonProps = PropsOf<"button"> & VariantProps<typeof buttonVariants>;

export const Button = component$<ButtonProps>(({size, look, ...props}) => {
    return (
        <button {...props} class={cn(buttonVariants({size, look}), props.class)}>
            <Slot/>
        </button>
    );
});
