import { ScrollView } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import { AreaBusca } from "../componentes/AreaBusca";

export default function Explorar() {
  return (
    <ScrollView p={5}>
      <AreaBusca />

      <Titulo color='blue.500' mt={5} mb={5}>Resultados da busca</Titulo>

      <CardConsulta nome="Dr. Who" especialidade="Geral" foto="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Jodie_Whittaker_by_Gage_Skidmore.jpg/1200px-Jodie_Whittaker_by_Gage_Skidmore.jpg" />
      <CardConsulta nome="Dr. Who" especialidade="Geral" foto="https://br.web.img3.acsta.net/pictures/18/01/22/11/15/3775793.jpg" />
      <CardConsulta nome="Dr. Who" especialidade="Geral" foto="https://br.web.img3.acsta.net/pictures/19/03/14/21/05/3188295.jpg" />
    </ScrollView>
  );
}