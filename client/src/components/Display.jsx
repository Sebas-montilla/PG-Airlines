import React, { useState } from 'react'
import Ticket from './Ticket'
import style from '../components/styles/Display.module.css'
import Paginate from './Paginate'

function Display() {

const details =
        [        
            {
                flight: "E23-13",
                airline: "Alaska Airlines",
                logo: "https://w7.pngwing.com/pngs/539/813/png-transparent-logo-alaska-airlines-boeing-737-brand-5th-may-blue-text-trademark.png",        
                price: 30000,
                stock: 30,
                origin: "Alaska",
                durationEstimated: "6:00",
                departureHour: "12:30",
                arrivalHour: "19:30",
                destinarion: "Canada",
                departureDate: "2022-09-23",
                arrivalDate: "2022-09-23",
                description: "Detail"
            }, 
            {
                "flight": "A27-07",
                "airline": "Air Europa",
                "logo": "https://logodownload.org/wp-content/uploads/2019/10/air-europa-logo-3.png",
                "price": 80000,
                "stock": 45,
                "origin": "France",
                "durationEstimated": "2:00",
                "departureHour": "16:30",
                "arrivalHour": "18:30",
                "destinarion": "Spain",
                "departureDate": "2022-08-03",
                "arrivalDate": "2022-08-03",
                "description": "Detail"
            }, 
            {
                "flight": "D19-08",
                "airline": "Shangai Airlines",
                "logo": "https://flightscustomerservice.com/wp-content/uploads/2020/03/Shanghai-Airlines-Logo.jpg",
                "price": 50000,
                "stock": 50,
                "origin": "China",
                "durationEstimated": "12:00",
                "departureHour": "09:00",
                "arrivalHour": "22:00",
                "destinarion": "Japan",
                "departureDate": "2022-09-10",
                "arrivalDate": "2022-09-10",
                "description": "Detail"
            }, 
            {
                "flight": "R06-05",
                "airline": "Aerolineas Argentinas",
                "logo": "https://seeklogo.com/images/A/aerolineas-argentinas-logo-33CD5F2C1E-seeklogo.com.png",
                "price": 32000,
                "stock": 90,
                "origin": "Argentina",
                "durationEstimated": "10:00",
                "departureHour": "23:00",
                "arrivalHour": "07:00",
                "destinarion": "Mexico",
                "departureDate": "2022-10-01",
                "arrivalDate": "2022-10-02",
                "description": "Detail"
            }, 
            {
                "flight": "C16-12",
                "airline": "LATAM Airlines",
                "logo": "https://logodownload.org/wp-content/uploads/2016/11/latam-logo_.png",
                "price": 45000,
                "stock": 60,
                "origin": "Mexico",
                "durationEstimated": "17:00",
                "departureHour": "21:30",
                "arrivalHour": "13:40",
                "destinarion": "Colombia",
                "departureDate": "2022-11-02",
                "arrivalDate": "2022-11-03",
                "description": "Detail"
            }
        ]

// console.log(details)

    // PAGINATE
    const [currentPage, setCurrentPage] = useState(1)
    const [cardPerPage, /*setCardPerPage*/] = useState(3)

    const indexOfLastCard = currentPage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const paginateCards = details.slice(indexOfFirstCard, indexOfLastCard)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
        <div className={style.container_ticket}>
            <div className={style.ticket_container} >
                {paginateCards
                .map(e => {
                    return (<Ticket 
                        key={e.flight}
                        id={e.flight}
                        airline={e.airline}
                        logo={e.logo}
                        price={e.price}
                        departureHour={e.departureHour}
                        arrivalHour={e.arrivalHour}
                    />)        
                })}             
            </div>
            <div className={style.filter_container}>
                <h3>Filtros</h3>
            </div>
        </div>   

        <Paginate
            cardPerPage={cardPerPage}
            paginate={paginate}
            total={details.length}
        />     
    </div>

  )
}

export default Display