import { Header } from '../../../components/Header/index'
import { Footer } from '../../../components/Footer'
import HeadingImg from '../../../assets/headingImgMobile.jfif'
import Img0 from '../../../assets/FacilImgMobile0.jfif'
import Img1 from '../../../assets/FacilImgMobile1.jfif'
import Img2 from '../../../assets/FacilImgMobile2.jpg'
import Img3 from '../../../assets/FacilImgMobile3.jfif'
import Img4 from '../../../assets/FacilImgMobile4.jfif'
import Img5 from '../../../assets/FacilImgMobile5.jfif'
import Img6 from '../../../assets/FacilImgMobile6.jfif'
import Img7 from '../../../assets/FacilImgMobile7.jfif'

import { Container, Heading, MainContent, Section, MainContentDesktop } from "./styles";

export function FacialTreatments() {
  return (
    <Container>
      <Header />
      <Heading>
        <img src={HeadingImg} alt="Imagem de uma mulher realizando um procedimento facial" />
        <h1>TRATAMENTOS</h1>
      </Heading>

      <MainContent>
        <Section>
          <h1>PÓS-OPERATÓRIO</h1>
          <img src={Img0} alt="Foto de uma mulher realizando um prodecimento facial" />
          <p>A fisioterapia especializada no pós-operatório de cirurgia plástica desempenha um papel crucial na recuperação dos pacientes, que visa acelerar o processo de cicatrização, minimizar inchaços e hematomas, e prevenir complicações como fibroses e aderências. 
          Técnicas de drenagem linfática manual, exercícios específicos e recursos como laser, ultrassom terapêutico, taping e radiofrequência são empregados para melhorar a circulação sanguínea e linfática, promover a reabsorção de líquidos, reduzir a dor e o edema, além de prevenir e tratar complicações. A intervenção precoce do fisioterapeuta ajuda a garantir resultados estéticos mais satisfatórios e uma recuperação mais rápida e confortável para o paciente. 
          </p>
        </Section>

        <Section>
          <h1>TOXINA BOTULÍNICA</h1>
          <img src={Img1} alt="Foto de uma mulher realizando um prodecimento facial" />
          <p>Ideal para quem busca rejuvenescimento. A toxina botulínica relaxa a musculatura, trata rugas dinâmicas em áreas como testa, glabela e orbicular dos olhos (pés de galinha), além de suavizar as linhas de expressão. 
          Também pode agir no pescoço, promovendo efeito "nefertiti", melhorando os contornos e evitando a queda da face. Pode agir também para DTM e bruxismo, sorriso triste, sorriso gengival, arqueamento de sobrancelha e correção de assimetrias. 
          </p>
        </Section>

        <Section>
          <h1>PREENCIMENTO LABIAL</h1>
          <img src={Img2} alt="Foto de uma mulher realizando um prodecimento facial" />
          <p>Realizado com ácido hialurônico aqui no consultório, é o procedimento seguro e ideal para quem busca realçar os lábios. É possível melhorar o contorno, proporcionar hidratação, corrigir assimetrias e volumizar os lábios.</p>
        </Section>

        <Section>
          <h1>BIOESTIMULADOR DE COLÁGENO</h1>
          <img src={Img3} alt="Foto de uma mulher realizando um prodecimento facial" />
          <p>Os bioestimuladores são substâncias injetáveis que estimulam a produção de colágeno. Com o envelhecimento, a produção de colágeno diminui, levando ao aparecimento de rugas, flacidez e perda de volume.
          O resultado é uma pele mais firme, com menos rugas e linhas finas, e um aspecto mais jovem e saudável. Os resultados tendem a ser graduais e duradouros, uma vez que o colágeno produzido continua a melhorar a qualidade da pele ao longo do tempo e pode ser feito no rosto e pescoço.</p>
        </Section>

        <Section>
          <h1>MICROAGULHAMENTO</h1>
          <img src={Img4} alt="Foto de uma mulher realizando um prodecimento facial" />
          <p>O microagulhamento é um procedimento estético que utiliza um dispositivo com pequenas agulhas para perfurar a pele de forma controlada. Essas microlesões estimulam o processo de cicatrização da pele, promovendo a produção de colágeno e elastina. 
          Algumas das principais finalidades do microagulhamento incluem rejuvenescimento da pele, textura mais suave, melhora de cicatrizes de acne, suavização de manchas e melasma.</p>
        </Section>

        <Section>
          <h1>ULTRAFORMER</h1>
          <img src={Img5} alt="Foto de uma mulher realizando um prodecimento facial" />
          <p>O Ultraformer é um equipamento não invasivos de rejuvenescimento da pele.  Ele utiliza a tecnologia de ultrassom micro e macrofocado para atingir diferentes camadas da pele e do tecido subcutâneo, visando lifing facial, melhorar a firmeza e a elasticidade da pele, suavizar rugas e linhas de expressão, estimulando a produção de colágeno na pele e melhorando sua textura. Além disso, diminui a papada e melhora o contorno da mandíbula. 
          O Laser Lavieen é um tipo de tratamento estético que utiliza uma tecnologia de laser específica para oferecer diversos benefícios para a pele, como melhorar a textura, reduzir a aparência de rugas finas e poros dilatados, estimular a produção de colágeno e elastina, e promover um tom de pele mais uniforme, clareando manchas. </p>
        </Section>

        <Section>
          <h1>PREENCHIMENTOS FACIAIS</h1>
          <img src={Img6} alt="Foto de uma mulher realizando um prodecimento facial" />
          <p>Ideal para rejuvenescimento e harmonização, os preenchedores de ácido hialurônico são utilizados principalmente para restaurar ou aumentar o volume em áreas específicas do rosto, como os lábios, bochechas, queixo, nariz e sulcos nasolabiais (bigode chinês). Eles são injetados na pele para preencher áreas que perderam volume devido ao envelhecimento, perda de gordura ou outras condições.
          Além de restaurar o volume, os preenchedores de ácido hialurônico também podem ser usados para suavizar rugas e linhas de expressão, melhorar a hidratação da pele e proporcionar um aspecto mais jovem e rejuvenescido. Como o ácido hialurônico é uma substância naturalmente presente na pele, os preenchedores desse tipo são seguros e oferecem resultados naturais e de longa duração. </p>
        </Section>

        <Section>
          <h1>LIMPEZA DE PELE</h1>
          <img src={Img7} alt="Foto de uma mulher realizando um prodecimento facial" />
          <p>A limpeza de pele profunda realizada aqui no consultório é um tratamento completo da pele visando a limpeza, controle de oleosidade, melhora e controle da acne, remoção das sujidades e miliuns, melhora da hidratação e nutrição da pele. 
          Como nossa limpeza é totalmente personalizada, utilizamos ativos que são amigáveis com a pele, além de entregar exatamente o que ela está precisando. Pode ser combinado com protocolos de peeling, controle de acne e oleosidade, hidratação, nutrição ou booster de vitamina C. 
          Além disso, é  fotobiomodulada, ou seja, está incluso aplicação de Laser vermelho para estímulo de colágeno e redução da inflamação e LED azul que é hidratante e bactericida. </p>
        </Section> 
      </MainContent>

      <MainContentDesktop>
        <Section className='desktopSection'>
          <div className='textContentReverse'>
            <h1>PÓS-OPERATÓRIO</h1>
            <p>A fisioterapia especializada no pós-operatório de cirurgia plástica desempenha um papel crucial na recuperação dos pacientes, que visa acelerar o processo de cicatrização, minimizar inchaços e hematomas, e prevenir complicações como fibroses e aderências. 
            Técnicas de drenagem linfática manual, exercícios específicos e recursos como laser, ultrassom terapêutico, taping e radiofrequência são empregados para melhorar a circulação sanguínea e linfática, promover a reabsorção de líquidos, reduzir a dor e o edema, além de prevenir e tratar complicações. A intervenção precoce do fisioterapeuta ajuda a garantir resultados estéticos mais satisfatórios e uma recuperação mais rápida e confortável para o paciente. 
            </p>
          </div>

          <img className='imgContentReverse' src={Img0} alt="Foto de uma mulher realizando um prodecimento facial" />
        </Section>

        <Section className='desktopSection'>
          <div className='textContent'>
            <h1>TOXINA BOTULÍNICA</h1>
            <p>Ideal para quem busca rejuvenescimento. A toxina botulínica relaxa a musculatura, trata rugas dinâmicas em áreas como testa, glabela e orbicular dos olhos (pés de galinha), além de suavizar as linhas de expressão. 
            Também pode agir no pescoço, promovendo efeito "nefertiti", melhorando os contornos e evitando a queda da face. Pode agir também para DTM e bruxismo, sorriso triste, sorriso gengival, arqueamento de sobrancelha e correção de assimetrias. 
            </p>
          </div>

          <img className='imgContent' src={Img1} alt="Foto de uma mulher realizando um prodecimento facial" />
        </Section>

        <Section className='desktopSection'>
          <div className='textContentReverse'>
            <h1>PREENCIMENTO LABIAL</h1>
            <p>Realizado com ácido hialurônico aqui no consultório, é o procedimento seguro e ideal para quem busca realçar os lábios. É possível melhorar o contorno, proporcionar hidratação, corrigir assimetrias e volumizar os lábios. 
            </p>
          </div>

          <img className='imgContentReverse' src={Img2} alt="Foto de uma mulher realizando um prodecimento facial" />
        </Section>

        <Section className='desktopSection'>
          <div className='textContent'>
            <h1>BIOESTIMULADOR DE COLÁGENO</h1>
            <p>Os bioestimuladores são substâncias injetáveis que estimulam a produção de colágeno. Com o envelhecimento, a produção de colágeno diminui, levando ao aparecimento de rugas, flacidez e perda de volume.
            O resultado é uma pele mais firme, com menos rugas e linhas finas, e um aspecto mais jovem e saudável. Os resultados tendem a ser graduais e duradouros, uma vez que o colágeno produzido continua a melhorar a qualidade da pele ao longo do tempo e pode ser feito no rosto e pescoço. 
            </p>
          </div>

          <img className='imgContent' src={Img3} alt="Foto de uma mulher realizando um prodecimento facial" />
        </Section>

        <Section className='desktopSection'>
          <div className='textContentReverse'>
            <h1>MICROAGULHAMENTO</h1>
            <p>O microagulhamento é um procedimento estético que utiliza um dispositivo com pequenas agulhas para perfurar a pele de forma controlada. Essas microlesões estimulam o processo de cicatrização da pele, promovendo a produção de colágeno e elastina. 
            Algumas das principais finalidades do microagulhamento incluem rejuvenescimento da pele, textura mais suave, melhora de cicatrizes de acne, suavização de manchas e melasma. 
            </p>
          </div>

          <img className='imgContentReverse' src={Img4} alt="Foto de uma mulher realizando um prodecimento facial" />
        </Section>

        <Section className='desktopSection'>
          <div className='textContent'>
            <h1>ULTRAFORMER</h1>
            <p>O Ultraformer é um equipamento não invasivos de rejuvenescimento da pele.  Ele utiliza a tecnologia de ultrassom micro e macrofocado para atingir diferentes camadas da pele e do tecido subcutâneo, visando lifing facial, melhorar a firmeza e a elasticidade da pele, suavizar rugas e linhas de expressão, estimulando a produção de colágeno na pele e melhorando sua textura. Além disso, diminui a papada e melhora o contorno da mandíbula. 
            O Laser Lavieen é um tipo de tratamento estético que utiliza uma tecnologia de laser específica para oferecer diversos benefícios para a pele, como melhorar a textura, reduzir a aparência de rugas finas e poros dilatados, estimular a produção de colágeno e elastina, e promover um tom de pele mais uniforme, clareando manchas. 
            </p>
          </div>

          <img className='imgContent' src={Img5} alt="Foto de uma mulher realizando um prodecimento facial" />
        </Section>

        <Section className='desktopSection'>
          <div className='textContentReverse'>
            <h1>PREENCHIMENTOS FACIAIS</h1>
            <p>Ideal para rejuvenescimento e harmonização, os preenchedores de ácido hialurônico são utilizados principalmente para restaurar ou aumentar o volume em áreas específicas do rosto, como os lábios, bochechas, queixo, nariz e sulcos nasolabiais (bigode chinês). Eles são injetados na pele para preencher áreas que perderam volume devido ao envelhecimento, perda de gordura ou outras condições.
            Além de restaurar o volume, os preenchedores de ácido hialurônico também podem ser usados para suavizar rugas e linhas de expressão, melhorar a hidratação da pele e proporcionar um aspecto mais jovem e rejuvenescido. Como o ácido hialurônico é uma substância naturalmente presente na pele, os preenchedores desse tipo são seguros e oferecem resultados naturais e de longa duração. 
            </p>
          </div>

          <img className='imgContentReverse' src={Img6} alt="Foto de uma mulher realizando um prodecimento facial" />
        </Section>

        <Section className='desktopSection'>
          <div className='textContent'>
            <h1>LIMPEZA DE PELE</h1>
            <p>A limpeza de pele profunda realizada aqui no consultório é um tratamento completo da pele visando a limpeza, controle de oleosidade, melhora e controle da acne, remoção das sujidades e miliuns, melhora da hidratação e nutrição da pele. 
            Como nossa limpeza é totalmente personalizada, utilizamos ativos que são amigáveis com a pele, além de entregar exatamente o que ela está precisando. Pode ser combinado com protocolos de peeling, controle de acne e oleosidade, hidratação, nutrição ou booster de vitamina C. 
            Além disso, é  fotobiomodulada, ou seja, está incluso aplicação de Laser vermelho para estímulo de colágeno e redução da inflamação e LED azul que é hidratante e bactericida. 
            </p>
          </div>

          <img className='imgContent' src={Img7} alt="Foto de uma mulher realizando um prodecimento facial" />
        </Section>
      </MainContentDesktop>

      <Footer />
    </Container>
  )
}