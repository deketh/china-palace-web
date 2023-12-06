import Divider from '@/app/_components/Divider';
import Image from 'next/image';
import Title from '@/app/_components/Title';

export default () => {
    return (
        <div className='pt-24 flex flex-col items-center max-w-xl bg-dark md:max-w-none w-full p-4 h-full'>
            <Title>Galeria</Title>
            <Divider />
            <div className='flex gap-2 justify-center overflow-auto'>
                <div className='flex flex-col gap-2'>
                    <Image
                        src='/img/plato-tallarines.jpg'
                        alt='Plato tallarines.'
                        width={265}
                        height={265}
                        className='brightness-[.85] drop-shadow-2xl'
                    />

                    <Image
                        src='/img/plato-huanggua.jpg'
                        alt='Plato calabacín con algas.'
                        width={265}
                        height={265}
                        className='brightness-[.85] drop-shadow-2xl'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <Image
                        src='/img/plato-tomate.jpg'
                        alt='Plato ensalda con tomate.'
                        width={265}
                        height={265}
                        className='brightness-[.85] drop-shadow-2xl'
                    />

                    <Image
                        src='/img/plato-pato.jpg'
                        alt='Plato carne de pato.'
                        width={265}
                        height={265}
                        className='brightness-[.85] drop-shadow-2xl'
                    />
                </div>
            </div>
            {/* <Divider /> */}
        </div>
    )
}