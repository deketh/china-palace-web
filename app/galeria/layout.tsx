import { LayoutProps } from "@/.next/types/app/layout";
import Link from "next/link";

import Button from "../_components/Button";
import Title from "../_components/Title";

import UilImages from '@iconscout/react-unicons/icons/uil-images'

export default function RootLayout(props: LayoutProps) {
    const { children } = props;

    return (
        <div className='flex justify-center h-full w-full flex-1'>
            <div className='top-0 fixed flex-1 flex justify-center w-full h-16 bg-dark z-10 drop-shadow-xl' />

            <div className='top-0 fixed flex flex-1 justify-center w-full h-16 z-30'>
                <div className='w-full max-w-xl flex items-center justify-between p-4'>
                    <Link href='/'>
                        <Title>Inicio</Title>
                    </Link>

                    <Link href='/menu'>
                        <Title>Carta</Title>
                    </Link>
                </div>
            </div>
            {children}
        </div>
    )
}