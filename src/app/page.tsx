export default function Home() {
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, #FA9F42, #8B4513)', // Laranja → Marrom
        height: '100vh', // ocupa a altura total da janela
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width:"100%"
      }}
    >
      <h1 style={{ fontSize: '90px', color: 'white', textAlign: 'center', marginBottom:"100px"}}>
        Ana Paula de Souza da Silva Rodrigues
      </h1>

      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)', // leve transparência sobre o fundo
          color: 'white',
          padding: '30px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          maxWidth: '700px',
          textAlign: 'left',
          justifyContent: 'flex-start', // move o conteúdo para o lado esquerdo
          alignItems: 'center',          // centraliza verticalmente
          margin: "150px"
        }}
      >
        <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
          Olá, que bom te ter por aqui! O meu nome não preciso nem dizer —
          acredito que tenha acompanhado o texto acima.
        </p>

        <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
          Pois bem, conhecer o nome é essencial, mas talvez seja mais
          interessante saber minhas habilidades e um pouco sobre mim.
        </p>

        <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
          Sou formada no curso Técnico de Desenvolvimento de Sistemas, com
          duração de 18 meses e finalizado em 2025. Além disso, sou formada
          também nos cursos Técnico de Recursos Humanos e Técnico em
          Gastronomia, o que me qualifica para atuações mais amplas...
        </p>

        <h2 style={{ marginTop: '20px', color: '#FFD580' }}>Explore e saiba mais.</h2>
      </div>
    </div>
  );
}
