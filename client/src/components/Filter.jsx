import React from 'react'
import style from './styles/Display.module.css'
import { orderByPrice } from '../redux/actions/index'

function Filter() {
  return (
    <div className={style.main_container}>
        <h3>Filtros</h3>
        <label>Price</label>
            <input
                type="range"
                min='0'
                max='10000'
                step="0.01"
            />

        <label>Duration</label>
            <input
                type="range"
                min='0'
                max='10000'
                step="0.01"
            />

        <label>Airlines</label>
            <input
                type="checkbox"
            />

        <button>Lowest price</button>
        <button>The best option</button>
        <button>Faster</button>

    </div>
  )
}

export default Filter