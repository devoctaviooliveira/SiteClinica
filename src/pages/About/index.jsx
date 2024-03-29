import { Header } from "../../components/Header";
import { Footer } from '../../components/Footer/index'
import AboutImg from '../../assets/AboutImg.png'
import AboutImgDesktop from '../../assets/AboutImgDesktop.png'

import { Container, MobileContent, FirstHalf, SecondHalf, DesktopContent } from "./styles";

export function About() {
  return (
    <Container>
      <Header></Header>
      <MobileContent>
        <h1 className="firstTitle">Dra Marcella Dias</h1>
        <img className="MobileImg" src={AboutImg} alt="Foto da Dra Marcella Dias" />
        <p>Sou fisioterapeuta especialista em Dermatofuncional e Cosmetologia, com um profundo compromisso em proporcionar os melhores cuidados estéticos e de harmonização para meus pacientes. Meu foco é utilizar minha experiência e conhecimento para ajudar as pessoas a alcançarem sua melhor versão.<br/><br/>
        Também atuo com pós-operatório de cirurgias plásticas, proporcionando uma reabilitação completa e rápida, minimizando as intercorrências e fornecendo suporte e segurança para meus pacientes nessa fase.<br/><br/> 
        Além da minha atuação clínica, estou atualmente embarcada em uma jornada acadêmica, buscando aprimorar meus conhecimentos através do mestrado em engenharia biomédica. Esta combinação entre prática clínica e pesquisa me permite estar na vanguarda das últimas descobertas e tecnologias, garantindo que meus pacientes recebam os tratamentos mais inovadores e eficazes.<br/><br/>
        Com uma abordagem centrada no paciente, valorizo a individualidade de cada pessoa e busco criar um ambiente acolhedor e de confiança em minha clínica. Meu objetivo é não apenas melhorar a aparência física de meus pacientes, mas também promover seu bem-estar geral e autoestima.</p>
        <h1>Missão e valores</h1>
        <p>Meus valores incluem integridade, empatia e excelência. Estou comprometido em fornecer um serviço de alta qualidade, com produtos seguros e aprovados pela ANVISA, baseado em evidências científicas e em um cuidado personalizado que atenda às necessidades únicas de cada indivíduo.<br/><br/> 
        Seja bem-vindo(a) à minha jornada de transformação e bem-estar. Estou aqui para ajudá-lo a alcançar seus objetivos estéticos e de saúde, e estou ansiosa para acompanhá-lo em cada passo do caminho.<br/><br/> 
        Eu desperto a sua melhor versão, valorizando sua beleza natural, elegante e sem exageros.</p>
      </MobileContent>

      <DesktopContent>
        <FirstHalf>
          <img className="DesktopImg" src={AboutImgDesktop} alt="Foto da Dra Marcella Dias" />
        </FirstHalf>

        <SecondHalf>
          <h1 className="firstTitle">Dra Marcella Dias</h1>
          <p>Sou fisioterapeuta especialista em Dermatofuncional e Cosmetologia, com um profundo compromisso em proporcionar os melhores cuidados estéticos e de harmonização para meus pacientes. Meu foco é utilizar minha experiência e conhecimento para ajudar as pessoas a alcançarem sua melhor versão.<br/><br/>
          Também atuo com pós-operatório de cirurgias plásticas, proporcionando uma reabilitação completa e rápida, minimizando as intercorrências e fornecendo suporte e segurança para meus pacientes nessa fase.<br/><br/> 
          Além da minha atuação clínica, estou atualmente embarcada em uma jornada acadêmica, buscando aprimorar meus conhecimentos através do mestrado em engenharia biomédica. Esta combinação entre prática clínica e pesquisa me permite estar na vanguarda das últimas descobertas e tecnologias, garantindo que meus pacientes recebam os tratamentos mais inovadores e eficazes.<br/><br/>
          Com uma abordagem centrada no paciente, valorizo a individualidade de cada pessoa e busco criar um ambiente acolhedor e de confiança em minha clínica. Meu objetivo é não apenas melhorar a aparência física de meus pacientes, mas também promover seu bem-estar geral e autoestima.</p>
          <h1>Missão e valores</h1>
          <p>Meus valores incluem integridade, empatia e excelência. Estou comprometido em fornecer um serviço de alta qualidade, com produtos seguros e aprovados pela ANVISA, baseado em evidências científicas e em um cuidado personalizado que atenda às necessidades únicas de cada indivíduo.<br/><br/> 
          Seja bem-vindo(a) à minha jornada de transformação e bem-estar. Estou aqui para ajudá-lo a alcançar seus objetivos estéticos e de saúde, e estou ansiosa para acompanhá-lo em cada passo do caminho.<br/><br/> 
          Eu desperto a sua melhor versão, valorizando sua beleza natural, elegante e sem exageros.</p>
        </SecondHalf>
      </DesktopContent>

      <Footer className={Footer}/>
    </Container>
  )
}