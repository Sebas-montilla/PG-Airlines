import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFlightByID, cleanDetails } from "../redux/actions/index.js";
import s from "./styles/Details.module.css";
import { Link } from "react-router-dom";
// import logo from './styles/logo.png'
import NavBar from "./NavBar.jsx";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.flight);
  console.log(details)

  useEffect(() => {
      dispatch(getFlightByID(id))
    return () => {
      dispatch(cleanDetails())
    }
  }, [])

  // const flightA = (item) => {
  //   return item.flight === id;
  // };

  // const a = details.find(flightA);
  // console.log(a);

  // const detail = a.map(e => {
  //   return e 
  // })
  // console.log(detail)
  return (
    <div>
      <div className={s.container}>
      <Link className={s.links} to="/">
            <button className={s.btnHome}>Go to Home</button>
          </Link>
        { details ? details.map(d => {
            return (
          <div key={d.flight} className={s.detail}>
            <div className={s.detail}>
              <div className={s.divA}>
                <img className={s.logo} src={d.logo} alt="Img" />
                <div className={s.airline}>{d.airline}</div>
                <div className={s.departureDate}>{d.departureDate}</div>

                <div className={s.durationEstimated}>{d.durationEstimated}</div>
                <button className={s.btnDrop}>˅</button>
              </div>
              <div className={s.info}>
                <div className={s.arrivalHour}>{d.arrivalHour}</div>
                <div className={s.arrivalDate}>{d.arrivalDate}</div>
                <div className={s.departureHour}>{d.departureHour}</div>
                <div className={s.description}>{d.description}</div>
                <div className={s.destination}>{d.destination}</div>
                <div className={s.origin}>{d.origin}</div>
              </div> 

              <div className={s.divPrices}>
                <img className={s.logoPrice} src={details.logo} alt="Img" />
                <div className={s.airlinePrice}>{details.airline}</div>
                <div className={s.priceP}>{details.price}</div>
                <button className={s.btn}>Reservar</button>
              </div> 
            </div>
            </div>
          ) 
        }) 
        : (
          <h1>NADA</h1>
        )}
        </div>
    </div>  
  );
}

export default Details;
