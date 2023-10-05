import { Text, VStack, ScrollView, Avatar, Divider } from "native-base";

import { Titulo } from "../componentes/Titulo";

export default function Perfil({ navigation }) {
  return (
    <ScrollView flex={1}>
      <VStack alignItems='center' p={5}>
        <Titulo color='blue.500'>Meu Perfil</Titulo>

        <Avatar size='xl' source={{ uri: 'https://avatars.githubusercontent.com/u/6961415?v=4' }} mt={5} />
        <Titulo>Informações Pessoais</Titulo>
        <Titulo fontSize='lg' mb={1}>Rafael Gonçalves</Titulo>
        <Text>11/12/1995</Text>
        <Text>Anápolis-GO</Text>

        <Divider mt={5} />

        <Titulo color='blue.500' mb={1}>Histórico Medico</Titulo>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>
      </VStack>

    </ScrollView>
  );
}