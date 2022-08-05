import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { createComment, getAllComments, getAllUsers } from "../redux/actions/index.js";

function Comments({airline, details, allAirlines, detailsID}) {
  // console.log(detailsID)

  const dispatch = useDispatch()
  const user = useSelector(state => state.currentUser)

  const allComments = useSelector(state => state.comments)

  const [ comments, updateComments ] = useState([allComments])

  const getData = async () => {
    updateComments(allComments);
  }

  useEffect(() => {
    localStorage.getItem("comments") !== null
      ? updateComments(JSON.parse(localStorage.getItem("comments")))
      : getData();
  }, []);


  const airlineComments = comments.filter(e => detailsID === e.airlineId)

  // console.log(allComments)
  // console.log(airlineComments)

  function validate(input) {
    let error = {}

    if(input.name === '') {
      error.name = 'Enter a name'
    } else {
      error.name = ''
    }

    if(input.rating === '') {
      error.rating = 'Enter a rating value'
    } else if(input.rating !== '' && (input.rating < 1 || input.rating > 5)) {
      error.rating = 'Rating value must be between 0 and 5'
    } else {
      error.rating = ''
    }

    if(input.comment === '') {
      error.comment = 'Enter a comment'
    } else {
      error.comment = ''
    }

    return error;
  }

  const [ error, setError ] = useState({
    rating: '',
    comment: '',
    name: '' 
  })

  const [ input, setInput ] = useState({
      rating: '',
      comment: '',
      name: user[0]?.name,
      moreInfo: [
        {
        flightName: '',
        origin: '',
        destination: ''        
      }
      ],
    airlineId: detailsID,
  })

  function handleInputChange(e) {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
    setError(validate({
      ...input,
      [e.target.name] : e.target.value
    }))
  }

  function handleSubmitComment(e) {
    e.preventDefault()

    console.log(input.rating ,input.comment ,input.name)
    if(input.rating && input.comment && input.name) {

      dispatch(createComment(input))
      let updatedComments = [...comments, input]

      updateComments(updatedComments)

      setInput({
        rating: '',
        comment: '',
        name: user[0]?.name,
        moreInfo: [
          {
            flightName: '',
            origin: '',
            destination: ''     
          } 
        ],
        airlineId: detailsID,    
      })
    } else {
        console.log('formulario incorrecto')
    }
  }

  useEffect(() => {
    dispatch(getAllComments())
    dispatch(getAllUsers())
  }, [comments])

  return (
    <div>
        <div style={{ "margin": 10 + 'rem'}}>

        <h3>COMENTARIOS PREVIOS</h3>
          {airlineComments.length ? airlineComments.map(e => {
                 return (<div key={e.id}>
                  <p>{e.comment}</p>
                     <p>{e.rating}</p>
                     <p>{e.name}</p>
                   </div>) 
            }) 
            : <h5>No hay nada</h5>}

            <br />
            <h3>Este vuelo fue publicado por: {airline} </h3>
            <h3>RATING DE LA AEROLINEA</h3>
            <h3>Publicar comentario y rating</h3>
            <form onSubmit={handleSubmitComment}>
            <h3>INPUT DE RATING</h3>

            <Box sx={{'& > legend': { mt: 2 },}}>
                <Rating
                    type="number"
                    name='rating'
                    value={input.rating}
                    onChange={handleInputChange}
                />
            </Box>
            {input.rating}
            {error.rating && <span>{error.rating}</span>}

            <h5>Input nombre de la persona que quiere hacer comentario</h5>
            <input
            type="text"
            value={input.name}
            name='name'
            onChange={handleInputChange}
            />
            {input.name}
            {error.name && <span>{error.name}</span>}

            <h5>Input nombre del vuelo de donde lo conocen</h5>
            <input 
            type="text" 
            name="flightName"
            value={input.flightName}
            onChange={handleInputChange}
            />
            {input.flightName}

            <h3>INPUT DE COMENTARIO</h3>
            <input 
            type="text" 
            name='comment'
            value={input.comment}
            onChange={handleInputChange}
            />
            {input.comment}
            {error.comment && <span>{error.comment}</span>}

            <br />
            <button type="submit">Publicar</button>
            <br />
            <span>Su comentario puede ser eleminado si es conciderado inapropiado o se demuestra que no tiene relacion con la aerolinea</span>                    
            </form> 
            <br />
            <br />

        </div>   
    </div>
  )
}

export default Comments