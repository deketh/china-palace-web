import { ChildrenProp } from "@/app/types";
import { Children } from "react";

import Text from "@/app/_components/Text";
import Title from "@/app/_components/Title";
import Divider from "@/app/_components/Divider";

const Menu = (props: ChildrenProp) => {
    const { children } = props;
    
    return (
        <div className='flex flex-col gap-4 w-screen md:max-w-xl'>
            {Children.map(children, c => (
                <div className="flex flex-col items-center gap-4 w-full bg-dark px-8 pt-8 pb-4 md:drop-shadow-xl">
                    <div className='flex flex-col w-full items-center'>{c}</div>
                    <Divider />
                </div>
            ))}
        </div>
    )
}

export interface MenuApartadoProps {
    titulo: string;
}

const Apartado = (props: MenuApartadoProps & ChildrenProp) => {
    const { titulo, children } = props;

    return (
        <div className='flex flex-col gap-1 max-w-xl w-full'>
            <Title className='text-xl'>{titulo}</Title>
            <ol>
                {Children.map(children, c => <li>{c}</li>)}
            </ol>
        </div>
    )
}

const ESEur = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
});

export interface MenuPlatoProps {
    codigo: string;
    nombre: string;
    valor: number;
    comentario?: string;
}

const Plato = (props: MenuPlatoProps)  => {
    const { nombre, valor, codigo, comentario } = props;

    return (
        <div className='flex gap-4'>
            <Text className='w-4' secondary>{codigo}.</Text>
            <Text className='flex-1'>
                {nombre}
                {comentario ? <Text secondary>({comentario}).</Text>: null}
            </Text>
            <Text>{ESEur.format(valor)}</Text>
        </div>
    )
}

Apartado.Plato = Plato;
Menu.Apartado = Apartado;

export default Menu;