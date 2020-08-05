import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/47211806?s=460&u=38f26b994d8a53b35eeb226ed16893d1a9b659f2&v=4" alt="Pablo Gomes"/>
             <div>
                 <strong>Pablo Gomes</strong>
                 <span>Quimica</span>
             </div>
        </header>

        <p>
            Estusiasta das melhhores tecnologias de quimica avançada.
             <br/><br/>
             Apaixonado por explodir coias em laboratórios e por mudar a vida das pessoas atráves de experiencias.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;