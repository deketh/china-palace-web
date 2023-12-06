import Link from 'next/link';

import Button from './_components/Button'
import Text from './_components/Text'
import Divider from './_components/Divider'
import Map from './_components/Map'

import UilPhone from '@iconscout/react-unicons/icons/uil-phone'
import UilLocationPinAlt from '@iconscout/react-unicons/icons/uil-location-pin-alt'

export default function Home() {
  return (
    <div className="flex flex-col bg-chinapalace md:bg-none md:bg-dark bg-cover bg-center items-center flex-1 pt-32 max-w-xl w-full h-full">
      {/* <Divider /> */}

      <div className='flex flex-col flex-1 justify-between gap-32 w-full max-h-[50rem] md:bg-chinapalace md:bg-cover md:bg-center'>
        <div className='flex flex-col items-center w-full'>
          <div className='h-36 w-full bg-dark flex justify-center opacity-95 md:opacity-100'>
            <div className='flex items-center justify-around p-4 gap-4 w-full max-w-xl'>
              <Text secondary chinese className='text-5xl'>
                中国
                <br />
                宫殿
              </Text>

              <Divider vertical/>

              <Text className='text-lg text-center flex-1'>Tu restaurante <br/> para cualquier ocasión.</Text>
            </div>
          </div>

          
        </div>

        <div className='flex flex-col items-center'>        
          <Link href='/menu'>
            <Button className='text-xl'>Ver la carta</Button>
          </Link>

          <Divider className='max-w-[7rem]' />

          <a href="https://goo.gl/maps/EWXzwjaTv9ovzwNH8" target='_blank'>
            <Text className='flex gap-2 items-center'>
              <UilLocationPinAlt size="20" />
              C/Biarritz, 2, Rekalde, Bilbao
            </Text>
          </a>
        </div>

        <div className='flex items-center gap-4 w-full justify-center p-4'>
          <div className='flex flex-col items-center gap-1'>
            {/* <Text>
              <UilClock size="15" />
            </Text> */}
            <Text>
              <Text secondary>de</Text>12:00
              <Text secondary>a</Text>16:00
            </Text>
            <Text>
              <Text secondary>de</Text>19:30
              <Text secondary>a</Text>23:30
            </Text>
          </div>

          <Divider vertical/>

          <div>
            <a href="tel:9444219925">
              <Text className='flex gap-2 items-center'>
                <UilPhone size="15" />
                944 421 99 25
              </Text>
            </a>
          </div>
        </div>
      </div>
      
      <Divider className='hidden md:flex justify-center' />
    </div>
  )
}
