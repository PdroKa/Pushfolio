import { TextareaHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            {...props}
            className={cn(
                `w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl 
                border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary`,
                props.className)} />
    )
}