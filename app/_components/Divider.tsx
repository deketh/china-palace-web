import { ChildrenProp } from "../types";

export interface DividerProps {
    vertical?: boolean;
    className?: string;
}

export default (props: DividerProps & ChildrenProp) => {
    const { vertical, children, className } = props;

    const horizontalStyle = 'w-2/5 h-px min-h-[1px] my-4';
    const verticalStyle = 'h-2/5 w-px min-w-[1px] mx-4'

    if (!children) return (
        <div className={`bg-primary  ${vertical ? verticalStyle : horizontalStyle} ${className ?? ''}`} />
    )

    return (
        <div>
            AAA
        </div>
    )
}