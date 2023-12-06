import { MouseEventHandler } from "react";
import { ChildrenProp } from "../types";

export interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    dark?: boolean;
    icon?: React.ReactNode;
    title?: boolean;
    text?: boolean;
}

export default (props: ButtonProps & ChildrenProp) => {
    const { children, onClick, className, dark, icon, title, text } = props;

    const lightColors = `text-dark ${!text ? 'bg-primary' : ''}`
    const darkColors = `text-primary ${!text ? 'bg-dark' : ''}`

    return (
        <button
            className={`
                flex gap-2
                opacity-[.86] hover:opacity-100 duration-300

                ${dark ? darkColors : lightColors}
                ${title ? 'font-guest-check' : 'font-galliard-bold'}
                ${children ? `py-4 ${!text ? 'px-16' : ''}` : 'p-2'}

                ${className ?? ''}
            `}
            onClick={onClick}
        >
            {icon}
            {children}
        </button>
    )
}