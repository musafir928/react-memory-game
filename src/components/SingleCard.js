import './SingleCard.css'

const SingleCard = ({ card, handleClick }) => {
    return (
        <div className='card'>
            <div>
                <img src={card.src} alt='card-front' className='front' />
                <img 
                src='/img/cover.png' 
                alt='card-back' 
                className='back' 
                onClick={()=>handleClick(card)}/>
            </div>
        </div>
    )
}

export default SingleCard
