import { ReactNode } from "react";
import { Button, ITextProps } from "native-base";

interface BotaoProps extends ITextProps {
    children: ReactNode
}

export function Botao({ children, ...rest }: BotaoProps) {
    return (
        <Button
            w="100%"
            bg="blue.800"
            mt={10}
            borderRadius="lg"
            {...rest}
        >
            {children}
        </Button>
    )
}