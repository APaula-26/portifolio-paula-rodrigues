'use client';

import { Flex, Heading, Text, Image, Button, HStack, Box, Container, SimpleGrid, Icon, Link, VStack } from "@chakra-ui/react";
// 1. Adicionei os ícones de contato aqui no final da importação
import { FaPython, FaPhp, FaJava, FaJs, FaLaravel, FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";

export default function Home() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Dados das Linguagens
  const linguagens = [
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "PHP", icon: FaPhp, color: "#777BB4" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  ];

  // Dados dos Frameworks e Libs
  const frameworks = [
    { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
    { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
  ];

  // Dados dos Projetos
  const projetos = [
    { name: "PWI - Ana Rodrigues", url: "https://github.com/APaula-26/pwi-AnaRodrigues" },
    { name: "PWIII - Paula Rodrigues", url: "https://github.com/APaula-26/pwiii-Paula-Rodrigues" },
    { name: "DSII - Paula Rodrigues", url: "https://github.com/APaula-26/DSII-Paula-Rodrigues" },
  ];

  // Estilo dos Cartões (AGORA BRANCO SÓLIDO)
  const glassCardStyle = {
    bg: "white", // Fundo Branco
    borderRadius: "2xl",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    boxShadow: "lg", // Sombra mais forte para destacar do fundo estampado
    p: "20px",
    transition: "all 0.3s ease",
    _hover: { transform: "translateY(-5px)", boxShadow: "2xl" }
  };

  return (
    <Box
      w='100%'
      minH="100vh"
      
      // --- CONFIGURAÇÃO DA ESTAMPA (PADRÃO DE BOLINHAS) ---
      bgImage="url('/fundo_.jpg')" 
      bgPosition="0 0"       // Começa do canto superior
      bgRepeat="repeat"      // FUNDAMENTAL: Repete a imagem lado a lado
      bgSize="120px"         // Define o tamanho da "bolinha"
      bgAttachment="fixed"   // A estampa fica fixa enquanto você rola
      // ---------------------------------------------------

      color="black" // Mantendo texto preto
      fontFamily="sans-serif"
    >
      
      {/* --- MENU FLUTUANTE --- */}
      <Flex
        as="nav"
        position="fixed"
        top="20px"
        left="50%"
        transform="translateX(-50%)"
        zIndex="999"
        bg="rgba(255,255,255,0.95)" // Quase sólido
        backdropFilter="blur(15px)"
        borderRadius="full"
        px="30px"
        py="15px"
        boxShadow="dark-lg"
        w={{ base: "95%", md: "auto" }} 
        justify="center"
      >
        <HStack spacing={{ base: 1, md: 6 }}>
          {["sobre", "linguagens", "frameworks", "projetos", "contatos"].map((section) => (
             <Button
               key={section}
               onClick={() => scrollToSection(section)}
               variant="ghost"
               color="black"
               fontSize={{ base: "10px", md: "sm" }} 
               // AQUI ESTÁ A MUDANÇA DO HOVER (Azul com texto branco)
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
          direction={{ base: "column-reverse", md: "row" }}
          align="center"
          justify="space-between"
          minH="70vh"
          mb="80px"
        >
          <Flex direction="column" w={{ base: "100%", md: "55%" }} gap={6}>
            
            {/* Fundo branco no texto também */}
            <Box p={6} borderRadius="xl" bg="white" boxShadow="lg">
                <Heading as="h1" size="3xl" fontWeight="extrabold">
                Olá, sou a <Text as="span" color="#2B6CB0">Paula</Text>! 
                </Heading>

                <Text fontSize="xl" lineHeight="tall" textAlign="justify">
                  <br />
                {` Tenho 25 anos, sou formada em Desenvolvimento de Sistemas, na Etec Professor Carmargo Aranha. Durante o curso foram trabalhadas algumas linguagens como: Python, Java Script, Java e PhP. 

                Além disso durante minha formação trabalhei com biblioteca e frameworks como Chakra UI, que inclusive foi utilizada para construção deste portfólio, Laravel, React e outros.
                
                Disposta a aprender com o mundo da programação, me especializando para atuação na área educacional.`}
                </Text>
            </Box>

            <Button 
                size="lg" 
                bg="#2B6CB0" 
                color="white" 
                w="fit-content"
                _hover={{ bg: "white", color: "#2B6CB0", border: "1px solid #2B6CB0" }}
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
          
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
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
            
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
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
              <VStack spacing={4} align="center" w="100%"> 
                {projetos.map((proj, index) => (
                    <Link 
                    key={index} 
                    href={proj.url} 
                    isExternal 
                    _hover={{ textDecoration: 'none' }}
                    w="100%" 
                    maxW="600px" 
                    >
                    <HStack 
                        bg="gray.100" // Cinza claro para destacar dentro do cartão branco
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
                    <VStack role="group" spacing={3}>
                        <Flex 
                            w="60px" h="60px" 
                            borderRadius="full" 
                            bg="gray.100" // Cinza claro
                            align="center" justify="center"
                            _groupHover={{ bg: "#2B6CB0", color: "white", transform: "scale(1.1)" }}
                            transition="all 0.3s"
                        >
                            <Icon as={FaEnvelope} w={6} h={6} color="black" _groupHover={{ color: "white" }} />
                        </Flex>
                        <Text fontWeight="bold">Email</Text>
                        <Text fontSize="sm" opacity={0.8}>ana.rodrigues490@etec.sp.gov.br</Text>
                    </VStack>
                </Link>

                {/* Telefone */}
                <VStack spacing={3}>
                    <Flex 
                        w="60px" h="60px" 
                        borderRadius="full" 
                        bg="gray.100" 
                        align="center" justify="center"
                        _hover={{ bg: "#2B6CB0", color: "white", transform: "scale(1.1)" }}
                        transition="all 0.3s"
                    >
                        <Icon as={FaPhone} w={6} h={6} color="black" _hover={{ color: "white" }} />
                    </Flex>
                    <Text fontWeight="bold">Telefone</Text>
                    <Text fontSize="sm" opacity={0.8}>(11) 99999-9999</Text>
                </VStack>

                {/* LinkedIn */}
                <Link href="https://www.linkedin.com" isExternal _hover={{ textDecoration: 'none' }}>
                    <VStack role="group" spacing={3}>
                        <Flex 
                            w="60px" h="60px" 
                            borderRadius="full" 
                            bg="gray.100" 
                            align="center" justify="center"
                            _groupHover={{ bg: "#0077B5", color: "white", transform: "scale(1.1)" }} // Cor oficial do LinkedIn
                            transition="all 0.3s"
                        >
                            <Icon as={FaLinkedin} w={6} h={6} color="black" _groupHover={{ color: "white" }} />
                        </Flex>
                        <Text fontWeight="bold">Linkedin</Text>
                        <Text fontSize="sm" opacity={0.8}>Ana Paula</Text>
                    </VStack>
                </Link>

            </Flex>
        </Flex>

      </Container>
    </Box>
  );
}