import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllComments, getAllUsers } from "../redux/actions/index.js";
import css from './styles/Comments.module.css'

export default function FeedBack({ airlineId, airline }) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.currentUser)
    const allComments = useSelector(state => state.comments)
    console.log(allComments)
    const [ comments, updateComments ] = useState([allComments])

    const airlineComments = comments.filter(e => airlineId === e.airlineId)
  
    const getData = async () => {
      updateComments(allComments);
    }
  
    useEffect(() => {
      localStorage.getItem("comments") !== null
        ? updateComments(JSON.parse(localStorage.getItem("comments")))
        : getData();
    }, []);

    useEffect(() => {
        dispatch(getAllUsers())
        dispatch(getAllComments())
    }, [dispatch])

  return (
    <div>
        <h1 className={css.review_title}>Customers Review for: {airline}</h1>

        <div className={css.review_container}>
            { airlineComments.length ? airlineComments.map(e => {
                return console.log(e)
            }) 
            : 
            (<div>
                <h1 className={css.no_review}>This airline does not have any reviews</h1>
            </div>)}        
        </div>

    </div>
  )
}
