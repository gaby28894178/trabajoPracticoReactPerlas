import React from 'react'

const Phrase = ({phraseSelected}) => {

  return (
    <div>
        <p>{phraseSelected.phrase}</p><br/>
        <samp className='author'>Escrito en 🗒✍ {phraseSelected.author}</samp>
        {/* <span>{phraseSelected.}</span>
       */}

    </div>
  )
}

export default Phrase