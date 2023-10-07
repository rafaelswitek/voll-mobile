import { useState, useEffect } from 'react'
import { Box, Image, Link, Text, VStack, useToast } from 'native-base'
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Botao } from './componentes/Botao';
import { fazerLogin } from './servicos/AutenticacaoServico';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';


export default function Login({ navigation }) {
  const [email, setEmail] = useState('andre@email.com')
  const [senha, setSenha] = useState('1234')
  const [carregando, setCarregando] = useState(true)
  const toast = useToast()

  useEffect(() => {
    async function verificarLogin() {
      const token = await AsyncStorage.getItem('token')
      if (token) {
        navigation.replace('Tabs')
      }
      setCarregando(false)
    }
    verificarLogin()
  }, [])

  async function login() {
    const resultado = await fazerLogin(email, senha)
    if (resultado) {
      const { token } = resultado
      AsyncStorage.setItem('token', token)

      const tokenDecodificado = jwtDecode(token) as any
      const pacienteId = tokenDecodificado.id
      AsyncStorage.setItem('pacienteId', pacienteId)
      navigation.replace('Tabs')
    } else {
      toast.show({
        title: "Erro no login",
        description: "O email ou senha não conferem",
        backgroundColor: "red.500"
      })
    }
  }

  if (carregando) {
    return null
  }

  return (
    <VStack flex={1} alignItems="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Titulo>
        Faça login em sua conta
      </Titulo>
      <Box>
        <EntradaTexto
          label="Email"
          placeholder="Insira seu endereço de e-mail"
          value={email}
          onChangeText={setEmail}
        />

        <EntradaTexto
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
      </Box>

      <Botao onPress={() => login()}>
        Entrar
      </Botao>

      <Link href='https://www.alura.com.br' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text>Ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color="blue.500">
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}