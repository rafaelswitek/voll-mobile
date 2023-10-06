import { VStack } from "native-base";
import { EntradaTexto } from "./EntradaTexto";
import { Botao } from "./Botao";

export function AreaBusca() {
    return (
        <VStack w='100%' bg='white' p='5' borderRadius='lg' shadow={2}>
            <EntradaTexto placeholder="Digite a especialidade" />
            <EntradaTexto placeholder="Digite sua localização" />
            <Botao mt={5} mb={5}>Buscar</Botao>
        </VStack>
    )
}