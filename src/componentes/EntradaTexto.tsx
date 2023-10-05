import { FormControl, ITextProps, Input } from "native-base";

interface EntradaTextoProps extends ITextProps {
    label?: string
    placeholder?: string
}

export function EntradaTexto({ label, placeholder }: EntradaTextoProps) {
    return (
        <FormControl mt={3}>
            {label && <FormControl.Label>{label}</FormControl.Label>}
            <Input
                placeholder={placeholder}
                size='lg'
                w="100%"
                borderRadius='lg'
                bgColor='gray.100'
                shadow={3}
            />
        </FormControl>
    )
}