import { useState, useEffect } from 'react'
import { Text, VStack, ScrollView, Avatar, Divider } from "native-base";

import { Titulo } from "../componentes/Titulo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { pegarDadosPaciente } from "../servicos/PacienteServico";
import { Paciente } from '../interfaces/Paciente';
import { Botao } from '../componentes/Botao';

export default function Perfil({ navigation }) {
  const [dadosPaciente, setDadosPaciente] = useState({} as Paciente)

  useEffect(() => {
    async function dadosPaciente() {
      const pacienteId = await AsyncStorage.getItem('pacienteId')
      if (!pacienteId) return null

      const resultado = await pegarDadosPaciente(pacienteId)
      if (resultado) {
        setDadosPaciente(resultado)
      }
    }
    dadosPaciente()
  }, [])

  function deslogar() {
    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('pacienteId')
    navigation.replace('Login')
  }

  return (
    <ScrollView flex={1}>
      <VStack alignItems='center' p={5}>
        <Titulo color='blue.500'>Meu Perfil</Titulo>

        <Avatar size='xl' source={{ uri: dadosPaciente.imagem }} mt={5} />
        <Titulo>Informações Pessoais</Titulo>
        <Titulo fontSize='lg' mb={1}>{dadosPaciente?.nome}</Titulo>
        <Text>{dadosPaciente?.email}</Text>
        <Text>{dadosPaciente?.endereco?.estado}</Text>

        <Divider mt={5} />

        <Titulo color='blue.500' mb={1}>Planos de saúde</Titulo>
        {
          dadosPaciente?.planosSaude?.map((plano, index) => (
            <Text key={index}>{plano}</Text>
          ))
        }

        <Botao onPress={deslogar}>
          Deslogar
        </Botao>
      </VStack>

    </ScrollView>
  );
}