import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import minhaFoto from './components/minha-foto.png';
import CardPequeno from './components/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhaFoto} 
          nome="Laís Petra" 
          descricao="Oi, eu sou o Laís. 
            Sou advogada e aluna Labenu.  
            Acredito que conhecimento nunca é demais."  
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="email-e-endereco">
        <CardPequeno
        tipoDeInfo="Email:"
        descricaoDaInfo="laispetrav@gmail.com"
        />
        <CardPequeno
        tipoDeInfo="Endereço:"
        descricaoDaInfo="Rua Nascimento Silva, 107, Ipanema - RJ/RJ"
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Aos 25 anos deixei o escritório e suspendi minha OAB pra ouvir um chamado meu e do mundo: 
          aprender desenvolvimento web e trabalhar com tecnologia.
          Hoje sou aluna Labenu. " 
        />
        
        <CardGrande 
          imagem="https://i.pinimg.com/originals/29/12/77/291277b6ae36375489c8125916b55fac.jpg" 
          nome="CAP Advocacia" 
          descricao="Aos 24 anos abri meu próprio escritório com duas colegas.
          Lá realizava todas as tarefas inerentes ao exercício da advocacia e gestão de escritório, incluindo marketing jurídico.
          Atendi clientes, propus e criei estratégias, apliquei-as em peças jurídicas e realizei audiencias.
          Também fui responsável por diversas transações extra-judiciais."  
        />
      </div>
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
