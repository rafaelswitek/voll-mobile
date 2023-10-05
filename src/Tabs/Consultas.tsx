import { Divider, ScrollView, VStack } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import { Botao } from "../componentes/Botao";

export default function Consultas({ navigation }) {
  return (
    <ScrollView p={5}>
      <Titulo color='blue.500'>Minhas Consultas</Titulo>
      <Botao mt={5} mb={5}>Agendar novo consulta</Botao>

      <Titulo color='blue.500' fontSize='lg' alignSelf='flex-start' mb={2}>Próximas Consultas</Titulo>
      <CardConsulta nome="Dr. Who" especialidade="Geral" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Jodie_Whittaker_by_Gage_Skidmore.jpg/1200px-Jodie_Whittaker_by_Gage_Skidmore.jpg" foiAgendado />

      <Divider mt={5} />

      <Titulo color='blue.500' fontSize='lg' alignSelf='flex-start' mb={2}>Consultas Passadas</Titulo>
      <CardConsulta nome="Dr. Who" especialidade="Geral" foto="https://br.web.img3.acsta.net/pictures/18/01/22/11/15/3775793.jpg" foiAtendido />
      <CardConsulta nome="Dr. Who" especialidade="Geral" foto="https://br.web.img3.acsta.net/pictures/19/03/14/21/05/3188295.jpg" foiAtendido />
    </ScrollView>
  );
}