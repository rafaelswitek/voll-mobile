import { Divider, ITextProps, Text, VStack } from "native-base";
import { EntradaTexto } from "./EntradaTexto";
import { Botao } from "./Botao";

interface DepoimentoProps extends ITextProps {
    texto: string
    autor: string
}

export function Depoimento({ texto, autor }: DepoimentoProps) {
    return (
        <VStack w='100%' p={4}>
            <Text>{texto}</Text>
            <Text fontSize="md" alignSelf='center' bold mt={2}>{autor}</Text>
            <Divider mt={2} mb={2} />
        </VStack>
    )
}