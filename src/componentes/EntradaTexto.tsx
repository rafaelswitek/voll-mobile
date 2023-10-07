import { FormControl, ITextProps, Input } from "native-base";

interface EntradaTextoProps extends ITextProps {
    label?: string
    placeholder?: string
    secureTextEntry?: boolean;
    value?: string;
    onChangeText?: (text: string) => void;
}

export function EntradaTexto({ label, placeholder, secureTextEntry = false, value, onChangeText }: EntradaTextoProps) {
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
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </FormControl>
    )
}