import React, { useState } from 'react'
import axios from 'axios'
import Nav from './NavCalc'
import './calculator.css'

const Calculator = () => {

    const [inN, setInN] = useState('')
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [asnwer, setAnswer] = useState('')

    function handleInN(event) {
        setInN(event.target.value)
    }

    function handleNum1(event) {
        setNum1(event.target.value)
    }

    function handleNum2(event) {
        setNum2(event.target.value)
    }

    async function onPressBtn(event) {
        if(inN && num1 && num2){
            try{
                await axios({
                    method: 'post',
                    url: '/api/calculator',
                    data: {
                        inN: parseInt(inN), num1, num2
                    }
                }).then(data => {
                    setAnswer(data.data.result)
                })
            } catch(e){
                setAnswer(e.response.data.message || 'Ошибка сервера, повторите попытку')
            }
        }
    }

    return(
        <div className="calculator">
            <div className="calc_div">
                <div className="convert_title_div">
                    <h1 className="convert_title">Calculator</h1>
                </div>
                <div className="calc_main">
                    <div className="calc_plus">
                        <div className="plus">+</div>
                    </div>
                    <div className="calc_inputs">
                        <input type="text" className="calc_system" placeholder="с/с" maxLength={2} value={inN} onChange={handleInN}/>
                        <input style={{marginBottom: '10%'}} type="text" className="calc_number_input" maxLength={8} placeholder="1-ое число" value={num1} onChange={handleNum1}/>
                        <input type="text" className="calc_number_input" maxLength={8} placeholder="2-ое число" value={num2} onChange={handleNum2}/>
                    </div>
                    <div className="calc_result">
                        <div className="calc_equals" onClick={onPressBtn}>=</div>
                        <input type="text" className="calc_result_input" readOnly placeholder="ответ" disabled value={asnwer}/>
                    </div>
                </div>
            </div>
            <Nav/>
        </div>
    )
}

export default Calculator