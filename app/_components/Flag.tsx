import { ChildrenProp } from "../types";

export default ({ children }: ChildrenProp) => {
    return (
        <div
            className='bg-lightflag bg-cover aspect-[430/510] h-20'
        >{children}</div>
    )
}