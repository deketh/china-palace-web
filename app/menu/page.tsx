import Divider from "../_components/Divider";
import Flag from "../_components/Flag";
import Title from "../_components/Title";
import Text from "../_components/Text";
import Menu from "./_components/Menu";

export default function Home() {
  return (
    // bg-dotted-red bg-[length:600px_600px]
    <div className="flex flex-col items-center flex-1 px-6 h-full pt-24 w-full">
      <Title>Carta</Title>
      <Divider />
      <Menu>
        <Menu.Apartado titulo='Entremeses'>
            <Menu.Apartado.Plato codigo='1' nombre="Ensalada china." valor={4.7} />
            <Menu.Apartado.Plato codigo='2' nombre="Ensalada con gambas." comentario='picante' valor={5.7} />
            <Menu.Apartado.Plato codigo='3' nombre="Ensalada de la casa." valor={6.7} />
            <Menu.Apartado.Plato codigo='5' nombre="Ensalada de algas y pepino japonés." valor={5.7} />
            <Menu.Apartado.Plato codigo='5A' nombre="Rollos de primavera." valor={2.05} />
            <Menu.Apartado.Plato codigo='6' nombre="Pan de gambas." valor={3.5} />
            <Menu.Apartado.Plato codigo='7' nombre="Triángulos rellenos." comentario='12 unidades' valor={5.5} />
            <Menu.Apartado.Plato codigo='8' nombre="Wan-Tun frito." valor={4.4} />
            <Menu.Apartado.Plato codigo='8A' nombre="Rollos japoneses." valor={5.9} />
            <Menu.Apartado.Plato codigo='9' nombre="Entremeses variados." valor={9.8} />
        </Menu.Apartado>

        <Menu.Apartado titulo='Pintxos japoneses'>
            <Menu.Apartado.Plato codigo='5' nombre="Ensalada de algas y pepino japonés." valor={5.7} />
            <Menu.Apartado.Plato codigo='5A' nombre="Rollos de primavera." valor={2.05} />
        </Menu.Apartado>

        <Menu.Apartado titulo='Sopa'>
            <Menu.Apartado.Plato codigo='1' nombre="Ensalada china." valor={4.7} />
            <Menu.Apartado.Plato codigo='2' nombre="Ensalada con gambas." valor={5.7} />
            <Menu.Apartado.Plato codigo='3' nombre="Ensalada de la casa." valor={6.7} />
            <Menu.Apartado.Plato codigo='5' nombre="Ensalada de algas y pepino japonés." valor={5.7} />
            <Menu.Apartado.Plato codigo='5A' nombre="Rollos de primavera." valor={2.05} />
        </Menu.Apartado>

        <Menu.Apartado titulo='Verdura y huevo'>
            <Menu.Apartado.Plato codigo='1' nombre="Ensalada china." valor={4.7} />
            <Menu.Apartado.Plato codigo='2' nombre="Ensalada con gambas." valor={5.7} />
            <Menu.Apartado.Plato codigo='3' nombre="Ensalada de la casa." valor={6.7} />
            <Menu.Apartado.Plato codigo='5' nombre="Ensalada de algas y pepino japonés." valor={5.7} />
        </Menu.Apartado>

        <Menu.Apartado titulo='Arroz y tallarines'>
            <Menu.Apartado.Plato codigo='1' nombre="Ensalada china." valor={4.7} />
            <Menu.Apartado.Plato codigo='2' nombre="Ensalada con gambas." comentario='picante' valor={5.7} />
            <Menu.Apartado.Plato codigo='3' nombre="Ensalada de la casa." valor={6.7} />
            <Menu.Apartado.Plato codigo='5' nombre="Ensalada de algas y pepino japonés." valor={5.7} />
            <Menu.Apartado.Plato codigo='5A' nombre="Rollos de primavera." valor={2.05} />
            <Menu.Apartado.Plato codigo='6' nombre="Pan de gambas." valor={3.5} />
            <Menu.Apartado.Plato codigo='7' nombre="Triángulos rellenos." comentario='12 unidades' valor={5.5} />
            <Menu.Apartado.Plato codigo='8' nombre="Wan-Tun frito." valor={4.4} />
            <Menu.Apartado.Plato codigo='8A' nombre="Rollos japoneses." valor={5.9} />
            <Menu.Apartado.Plato codigo='9' nombre="Entremeses variados." valor={9.8} />
            <Menu.Apartado.Plato codigo='5A' nombre="Rollos de primavera." valor={2.05} />
            <Menu.Apartado.Plato codigo='6' nombre="Pan de gambas." valor={3.5} />
            <Menu.Apartado.Plato codigo='7' nombre="Triángulos rellenos." comentario='12 unidades' valor={5.5} />
            <Menu.Apartado.Plato codigo='8' nombre="Wan-Tun frito." valor={4.4} />
            <Menu.Apartado.Plato codigo='8A' nombre="Rollos japoneses." valor={5.9} />
            <Menu.Apartado.Plato codigo='9' nombre="Entremeses variados." valor={9.8} />
        </Menu.Apartado>
      </Menu>
    </div>
  )
}
