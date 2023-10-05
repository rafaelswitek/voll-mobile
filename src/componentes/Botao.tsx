import { ReactNode } from "react";
import { Button, ITextProps } from "native-base";

interface BotaoProps extends ITextProps {
    children: ReactNode
}

export function Botao({ children }: BotaoProps) {
    return (
        <Button
            w="100%"
            bg="blue.800"
            mt={10}
            borderRadius="lg"
        >
            {children}
        </Button>
    )
}