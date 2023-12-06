import { ChildrenProp } from "../types";

export interface TextProps {
    className?: string;
    secondary?: boolean;
}

export default (props: TextProps & ChildrenProp) => {
    const { children, className, secondary } = props;

    return (
        <span
            className={`font-guest-check text-primary ${!secondary ? '' : 'opacity-50'} p-1 ${className ?? ''}`}
        >{children}</span>
    )
}