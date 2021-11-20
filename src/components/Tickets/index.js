import './index.scss'

const ticket = {
    name: 'Gabriel',
    lastname: 'Cintra',
    section: 'Sessão 1',
    movie: 'Matrix',
    hours: '18:00'
}

const Ticket = () => {

    return (
        <div className='ticket'>
            <div className='ticket__content-left'>
                <h1 className='ticket__content-left__title-cine'>Start <span>Cinema</span></h1>
                <div className='ticket__content-left__box'>
                    <div className='ticket__content-left__box__movie'>
                        <h2>
                            {ticket.movie}
                        </h2>
                        <span>Filme</span>
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
                            <span>Nome</span>
                        </div>
                        <hr/>
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

            </div>
        </div>
    )
}

export default Ticket;