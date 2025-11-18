import { Flex, Heading, Text, Image } from "@chakra-ui/react";


export default function Home() {
 
  return (
    <Flex
      w='100%'
      h='100%'
      bg="linear-gradient(180deg, #FA9F42, #8B4513)" // Sintaxe do Chakra para gradiente
      direction="column"
      gap="4"
      minH="100vh"
      p="60px" // Padding aplicado ao container
      
    >
      {/* Usamos o componente <Heading> ao invés de <h1> com style.
        As props (fontSize, color, mb) substituem o objeto style.
      */}
      <Flex
      w='100%'
      bg="linear-gradient(180deg, #ec9f05,#bf3100)" // Sintaxe do Chakra para gradiente
      gap="4"
      minH="100vh"
      p="60px"
      >
      <Flex
      direction="column"
      >
      <Heading
        as="h1"
        fontSize="50px"
        color="white"
        mb="0.5%"
        mt="30%"
      >
        Olá, sou a Paula.
      </Heading>

      {/* Usamos o componente <Text> ao invés de <p> com style.
        Props (fontSize, w, mb) substituem o objeto style.
        Adicionada a cor branca para consistência.
      */}
      <Text
        fontSize="25px"
        color="white"
        mb="0.5%"
        w="60%" // `w` é o atalho para `width`
        mt="10%"
      >
        Disposta a aprender com o mundo da programação, me especializando para atuações em diversas áreas.
      </Text>

      <Text
        fontSize="30px"
        color="white"
        mb="0.5%"
        w="50%"
      >
        Seja bem-vinde!
      </Text>
      </Flex>
      <Flex
        w='80%'
        justify="center" // Centraliza a imagem horizontalmente
        align="center" // Centraliza a imagem verticalmente
        p={{ base: "40px", md: "20px" }} // Padding para a imagem
      >
        {/* 5. O componente de Imagem */}
        <Image
          src="/minha_foto.png"
          alt="Minha Foto"
          borderRadius="full" // Deixa a imagem redonda (opcional)
          boxSize={{ base: "300px", md: "500px" }} // Tamanho responsivo
          objectFit="cover" // Evita que a imagem distorça
          boxShadow="xl" // Adiciona uma sombra legal (opcional)
        />
      </Flex>
      </Flex>
    </Flex>
  );
}
