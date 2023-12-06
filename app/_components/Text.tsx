import { ChildrenProp } from "../types";

export interface TextProps {
    chinese?: boolean;
    className?: string;
    secondary?: boolean;
}

export default (props: TextProps & ChildrenProp) => {
    const { children, chinese, className, secondary } = props;

    return (
        <span
            className={`${chinese ? 'font-liujian' : 'font-galliard'} text-primary ${!secondary ? 'opacity-[.86]' : 'opacity-60'} px-1 ${className ?? ''}`}
        >{children}</span>
    )
}