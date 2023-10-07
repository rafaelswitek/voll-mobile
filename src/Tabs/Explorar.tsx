import { useState, useEffect } from 'react'
import { ScrollView, VStack } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import { AreaBusca } from "../componentes/AreaBusca";
import { Especialista } from '../interfaces/Especialista';

export default function Explorar({ navigation }) {
  const [estado, setEstado] = useState('')
  const [especialidade, setEspecialidade] = useState('')
  const [resultadoBusca, setResultadoBusca] = useState([])
  return (
    <ScrollView p={5}>
      <AreaBusca
        especialidade={especialidade}
        setEspecialidade={setEspecialidade}
        estado={estado}
        setEstado={setEstado}
        resultadoBusca={resultadoBusca}
        setResultadoBusca={setResultadoBusca}
      />

      <Titulo color='blue.500' mt={5} mb={5}>Resultados da busca</Titulo>

      {resultadoBusca?.map((especialista: Especialista, index) => (
        <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
          <CardConsulta
            especialidade={especialista.especialidade}
            foto={especialista.imagem}
            nome={especialista.nome}
            onPress={() => navigation.navigate('Agendamento', {especialistaId: especialista.id})}
          />
        </VStack>
      ))}
    </ScrollView>
  );
}