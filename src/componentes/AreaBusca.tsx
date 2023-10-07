import { VStack } from "native-base";
import { EntradaTexto } from "./EntradaTexto";
import { Botao } from "./Botao";
import { buscarEspecialistaPorEstado } from "../servicos/EspecialistaServico";

export function AreaBusca({ especialidade, setEspecialidade, estado, setEstado, resultadoBusca, setResultadoBusca }) {

    async function buscar() {
        if (!estado || !especialidade) return null
        const resultado = await buscarEspecialistaPorEstado(estado, especialidade)
        if (resultado) {
            setResultadoBusca(resultado)
            console.log(resultado)
        }
    }

    return (
        <VStack w='100%' bg='white' p='5' borderRadius='lg' shadow={2}>
            <EntradaTexto placeholder="Digite a especialidade"
                value={especialidade}
                onChangeText={setEspecialidade} />
            <EntradaTexto placeholder="Digite sua localização"
                value={estado}
                onChangeText={setEstado} />
            <Botao mt={5} mb={5} onPress={buscar}>Buscar</Botao>
        </VStack>
    )
}