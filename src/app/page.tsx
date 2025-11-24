'use client';
// Avisa ao Next.js que este arquivo deve ser renderizado no Navegador (Cliente) e não no Servidor.
// Necessário pois O Chakra UI usa interatividade (como passar o mouse em botões, animações, onClick), 
// e essas coisas só funcionam no navegador. Sem isso, o código daria erro.

import { Flex, Heading, Text, Image, Button, HStack, Box, Container, SimpleGrid, Icon, Link, VStack } from "@chakra-ui/react";
import { FaPython, FaPhp, FaJava, FaJs, FaLaravel, FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";

// @chakra-ui/react: Importa os "blocos de construção" visuais. Em vez de escrever 
//<div> ou <h1> e estilizar com CSS, usamos componentes prontos como <Box> (caixa), <Text> (texto), <Button> (botão). 
//react-icons/fa: Importa os ícones (símbolos) da biblioteca FontAwesome (ex: o pinguim do Linux, o logo do Python, etc.).

export default function Home() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
// Para criar navegação ("smooth scroll").
// Recebe o id da seção (ex: "projetos").
// Busca esse elemento na tela (document.getElementById).
// Se achar, rola a tela suavemente até ele (scrollIntoView).

  const linguagens = [
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "PHP", icon: FaPhp, color: "#777BB4" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  ];

  const frameworks = [
    { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
    { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
  ];

  const projetos = [
    { name: "PWI - Ana Rodrigues", url: "https://github.com/APaula-26/pwi-AnaRodrigues" },
    { name: "PWIII - Paula Rodrigues", url: "https://github.com/APaula-26/pwiii-Paula-Rodrigues" },
    { name: "DSII - Paula Rodrigues", url: "https://github.com/APaula-26/DSII-Paula-Rodrigues" },
  ];

  // Em vez de repetir o código HTML várias vezes para cada ícone ou projeto, 
  // guardamos as informações em listas (arrays). Depois, usamos o comando 
  // .map() para gerar o visual automaticamente

  // Estilo dos Cartões
  const glassCardStyle = {
    bg: "white",
    borderRadius: "2xl",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    boxShadow: "lg",
    p: "20px",
    transition: "all 0.3s ease",
    _hover: { transform: "translateY(-5px)", boxShadow: "2xl" }
  };
  // glasscardstyle : objeto JavaScript que guarda regras de estilo CSS.Cria o visual dos cartões brancos

  return (
    <Box
      w='100%'
      minH="100vh"
      color="black" 
      fontFamily="sans-serif"
      
  
      // Isso ignora a checagem estrita de tipos do Chakra para backgrounds complexos
      style={{
        backgroundImage: "url('/fundo_.jpg')", //Define a imagem do fundo 
        backgroundPosition: "top left", // define o posicionamento da imagem
        backgroundRepeat: "repeat", // Faz a imagem repetir lado a lado
        backgroundSize: "120px", // Define o tamanho das imagens 
        backgroundAttachment: "fixed" //O "truque" do Parallax. Quando você rola o mouse para baixo, o texto se move, mas o fundo fica parado.
      }}
      // -----------------------------------------------
    >
      
      {/* --- MENU FLUTUANTE --- */}
      <Flex
        as="nav"
        position="fixed" //Fixa o menu, fica congelado
        top="20px"
        left="50%"
        transform="translateX(-50%)"
        zIndex="999" //Garante que o menu fique por cima de todo o resto do site (camada superior).
        bg="rgba(255,255,255,0.95)"
        backdropFilter="blur(15px)"
        borderRadius="full"
        px="30px"
        py="15px"
        boxShadow="dark-lg"
        w={{ base: "95%", md: "auto" }} 
        justify="center"
      >
        <HStack gap={{ base: 1, md: 6 }}>
        {/* "Horizontal Stack". Organiza os botões um ao lado do outro automaticamente. */}
          {["sobre", "linguagens", "frameworks", "projetos", "contatos"].map((section) => (
             <Button
               key={section}
               onClick={() => scrollToSection(section)}
               variant="ghost"
               color="black"
               fontSize={{ base: "10px", md: "sm" }} 
               _hover={{ bg: "#2B6CB0", color: "white" }}
               textTransform="uppercase"
               letterSpacing="wide"
               px={{ base: 2, md: 4 }}
             >
               {section === "sobre" ? "Quem sou" : section}
             </Button>
          ))}
        </HStack>
      </Flex>

      <Container maxW="container.xl" pt="120px" pb="50px">

        {/* --- SEÇÃO 1: QUEM SOU --- */}
        <Flex
          id="sobre"
          direction={{ base: "column-reverse", md: "row" }} // Responsividade.
          // md: O texto fica na esquerda e a imagem na direita (linha).
          // base: A imagem fica em cima e o texto embaixo (coluna invertida).
          align="center"
          justify="space-between"
          minH="70vh"
          mb="80px"
        >
          <Flex direction="column" w={{ base: "100%", md: "55%" }} gap={6}>
            
            <Box p={6} borderRadius="xl" bg="white" boxShadow="lg">
                <Heading as="h1" size="3xl" fontWeight="extrabold">
                Olá, sou a <Text as="span" color="#f07109ff">Paula</Text>! 
                {/* O comando as serve para mudar a "etiqueta" HTML do componente, mantendo o visual do Chakra. */}
                </Heading>

                <VStack gap={4} align="stretch" mt={4}>
                    <Text fontSize="xl" lineHeight="tall" textAlign="justify">
                        Tenho 25 anos, sou formada em Desenvolvimento de Sistemas, na Etec Professor Carmargo Aranha. Durante o curso foram trabalhadas algumas linguagens como: Python, Java Script, Java e PhP.
                    </Text>
                    <Text fontSize="xl" lineHeight="tall" textAlign="justify">
                        Além disso durante minha formação trabalhei com biblioteca e frameworks como Chakra UI, que inclusive foi utilizada para construção deste portfólio, Laravel, React e outros.
                    </Text>
                    <Text fontSize="xl" lineHeight="tall" textAlign="justify">
                        Disposta a aprender com o mundo da programação, me especializando para atuação na área educacional.
                    </Text>
                </VStack>
            </Box>

            <Button 
                size="lg" 
                bg="#2B6CB0" 
                color="white" 
                w="fit-content"
                _hover={{ bg: "white", color: "#2B6CB0", border: "1px solid #2B6CB0" }} //_hover) para interatividade
                onClick={() => scrollToSection('projetos')}
            >
                Ver meus projetos
            </Button>
          </Flex>

          <Box position="relative" w={{ base: "280px", md: "400px" }} h={{ base: "280px", md: "400px" }}>
             <Image
              src="/minha_foto.png"
              alt="Paula"
              borderRadius="full"
              boxSize="100%"
              objectFit="cover"
              border="4px solid white"
              boxShadow="2xl"
            />
          </Box>
        </Flex>

        {/* --- SEÇÃO 2: LINGUAGENS --- */}
        <Flex id="linguagens" direction="column" mb="80px" gap={8}>
          <Heading borderLeft="4px solid #2B6CB0" pl={4} fontSize="3xl" bg="white" w="fit-content" pr={4} borderRadius="md" py={1}>
            Linguagens
          </Heading>
          
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={6}>
            {linguagens.map((tech) => (
              <Flex 
                key={tech.name} 
                {...glassCardStyle} 
                direction="column" 
                align="center" 
                justify="center"
                h="180px"
                role="group"
              >
                <Icon as={tech.icon} w={16} h={16} mb={4} color="black" _groupHover={{ color: tech.color }} transition="all 0.3s"/>
                <Text fontSize="lg" fontWeight="bold">{tech.name}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Flex>

        {/* --- SEÇÃO 3: FRAMEWORKS & BIBLIOTECAS --- */}
        <Flex id="frameworks" direction="column" mb="80px" gap={8}>
            <Heading borderLeft="4px solid #2B6CB0" pl={4} fontSize="3xl" bg="white" w="fit-content" pr={4} borderRadius="md" py={1}>
              Frameworks e Bibliotecas
            </Heading>
            
            <SimpleGrid columns={{ base: 2, md: 4 }} gap={6}>
            {frameworks.map((tech) => (
              <Flex 
                key={tech.name} 
                {...glassCardStyle} 
                direction="column" 
                align="center" 
                justify="center"
                h="180px"
                role="group"
              >
                <Icon as={tech.icon} w={16} h={16} mb={4} color="black" _groupHover={{ color: tech.color }} transition="all 0.3s"/>
                <Text fontSize="lg" fontWeight="bold">{tech.name}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Flex>

        {/* --- SEÇÃO 4: PROJETOS --- */}
        <Flex id="projetos" direction="column" mb="80px" gap={6}>
            <Heading borderLeft="4px solid #2B6CB0" pl={4} fontSize="3xl" bg="white" w="fit-content" pr={4} borderRadius="md" py={1}>
              Meus Projetos
            </Heading>
            
            <Flex {...glassCardStyle} direction="column" p={8}>
              <VStack gap={4} align="center" w="100%"> 
                {projetos.map((proj, index) => (
                    <Link 
                    key={index} 
                    href={proj.url} 
                    target="_blank" //Obriga o navegador a abrir o link em uma nova aba, para o usuário não sair do portfólio.
                    rel="noopener noreferrer" // É uma medida de segurança padrão na web para evitar que o site novo tenha acesso indevido à página original.
                    _hover={{ textDecoration: 'none' }}
                    w="100%" 
                    maxW="600px" 
                    color="black"
                    >
                    <HStack 
                        bg="gray.100" 
                        p={4} 
                        borderRadius="md" 
                        _hover={{ bg: "gray.200", transform: "scale(1.02)" }}
                        transition="all 0.2s"
                        borderLeft="4px solid #2B6CB0"
                        w="100%"
                        justify="space-between" 
                    >
                        <HStack>
                        <Icon as={FaGithub} w={6} h={6} mr={2} color="black" />
                        <Text fontWeight="bold" fontSize="lg">{proj.name}</Text>
                        </HStack>
                        <Icon as={FaExternalLinkAlt} w={3} h={3} opacity={0.6} color="black" />
                    </HStack>
                    </Link>
                ))}
              </VStack>
            </Flex>
        </Flex>

        {/* --- SEÇÃO 5: CONTATOS --- */}
        <Flex id="contatos" direction="column" mb="50px" gap={6}>
            <Heading borderLeft="4px solid #2B6CB0" pl={4} fontSize="3xl" bg="white" w="fit-content" pr={4} borderRadius="md" py={1}>
              Contatos
            </Heading>

            <Flex 
              {...glassCardStyle} 
              direction={{ base: "column", md: "row" }}
              justify="space-evenly" 
              align="center" 
              gap={8}
              py={10}
            >
                {/* Email */}
                <Link href="mailto:ana.rodrigues490@etec.sp.gov.br" _hover={{ textDecoration: 'none' }}>
                    <VStack role="group" gap={3}>
                        <Flex 
                            w="60px" h="60px" 
                            borderRadius="full" 
                            bg="gray.100"
                            align="center" justify="center"
                            _groupHover={{ bg: "#2B6CB0", color: "black", transform: "scale(1.1)" }}
                            transition="all 0.3s"
                        >
                            <Icon as={FaEnvelope} w={6} h={6} color="black" _groupHover={{ color: "black" }} />
                        </Flex>
                        <Text fontWeight="bold" color="black">Email</Text>
                        <Text fontSize="sm" opacity={0.8} color="black">ana.rodrigues490@etec.sp.gov.br</Text>
                    </VStack>
                </Link>

                {/* Telefone */}
                <VStack gap={3}>
                    <Flex 
                        w="60px" h="60px" 
                        borderRadius="full" 
                        bg="gray.100" 
                        align="center" justify="center"
                        _hover={{ bg: "#2B6CB0", color: "white", transform: "scale(1.1)" }}
                        transition="all 0.3s"
                    >
                        <Icon as={FaPhone} w={6} h={6} color="black" _hover={{ color: "black" }} />
                    </Flex>
                    <Text fontWeight="bold">Telefone</Text>
                    <Text fontSize="sm" opacity={0.8}>(11) 99999-9999</Text>
                </VStack>

                {/* LinkedIn */}
                <Link 
                    href="https://www.linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    _hover={{ textDecoration: 'none' }}
                >
                    <VStack role="group" gap={3}>
                        <Flex 
                            w="60px" h="60px" 
                            borderRadius="full" 
                            bg="gray.100" 
                            align="center" justify="center"
                            _groupHover={{ bg: "#0077B5", color: "white", transform: "scale(1.1)" }} 
                            transition="all 0.3s"
                        >
                            <Icon as={FaLinkedin} w={6} h={6} color="black" _groupHover={{ color: "white" }} />
                        </Flex>
                        <Text fontWeight="bold" color="black">Linkedin</Text>
                        <Text fontSize="sm" opacity={0.8} color="black">Ana Paula</Text>
                    </VStack>
                </Link>

            </Flex>
        </Flex>

      </Container>
    </Box>
  );
}