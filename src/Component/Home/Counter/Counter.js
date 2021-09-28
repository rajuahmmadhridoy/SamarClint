import React from 'react';
import style from '../../Styles/Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {counter} from '../../Data/Counter'
import CounterDis from '../CounterDis/CounterDis';
const Counter = () => {
    return (
        <div className={`${style.counter}  d-flex align-items-center marginTop100`}>
            <div className="container">
                <div className="row">
                    {
                        counter.map(data => <CounterDis data={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Counter;