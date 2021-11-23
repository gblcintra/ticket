import './index.scss'


const Ticket = ({ ticket }) => {
    console.log("💚🚀  ~ file: index.js ~ line 5 ~ Ticket ~ ticket", ticket)

    return (
        <div className='ticket'>
            <div className='ticket__content-left'>
                <h1 className='ticket__content-left__title-cine'>Start <span>Cinema</span></h1>
                <div className='ticket__content-left__box'>
                    <div className='ticket__content-left__box__movie'>
                        <h2>
                            {ticket.category}
                        </h2>
                        <span>Categoria</span>
                    </div>
                    <div className='ticket__content-left__box__name'>
                        <h2>
                            {ticket.name} {ticket.lastname}
                        </h2>
                        <span>Nome</span>
                    </div>
                    <div className='ticket__content-left__box__section'>
                        <div className='ticket__content-left__box__section__name'>
                            <h2>
                                {ticket.section}
                            </h2>
                            <span>Sessão</span>
                        </div>
                        <hr />
                        <div className='ticket__content-left__box__section__hours'>
                            <h2>
                                {ticket.hours}
                            </h2>
                            <span>Horário</span>
                        </div>
                    </div>

                </div>
            </div>
            <hr className="ticket__divider" />
            <div className='ticket__content-right'>
                <div className='ticket__content-right__box'>
                    <h2>
                        {ticket.code}
                    </h2>
                    <span>Código</span>

                </div>
            </div>
        </div>
    )
}

export default Ticket;