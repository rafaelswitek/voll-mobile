import { Image, ScrollView, Text, VStack } from "native-base";

import { AreaBusca } from "../componentes/AreaBusca";
import { Titulo } from "../componentes/Titulo";
import Logo from '../assets/Logo.png'
import { Depoimento } from "../componentes/Depoimento";

export default function Principal() {
  return (
    <ScrollView p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="flex-start" mt={5} />
      <Titulo color='blue.500' alignSelf='flex-start' mt={5} mb={5}>Boas-vindas!</Titulo>
      <AreaBusca />

      <Titulo color='blue.800' alignSelf='center' mt={5} mb={5}>Depoimentos</Titulo>

      <Depoimento texto="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio." autor="Júlio, 40 anos, São Paulo/SP." />

      <Depoimento texto="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio." autor="Júlio, 40 anos, São Paulo/SP." />

      <Depoimento texto="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio." autor="Júlio, 40 anos, São Paulo/SP." />

    </ScrollView>
  );
}