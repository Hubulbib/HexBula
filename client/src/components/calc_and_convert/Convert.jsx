import React, { useState } from 'react'
import axios from 'axios'
import './convert.css'
import Nav from './NavConv'

const Convert = () => {

    const [inN, setInN] = useState('')
    const [outN, setOutN] = useState('')
    const [count_person, setCountPerson] = useState('')
    const [answer, setAnswer] = useState('')

    function handleInN(event){
        setInN(event.target.value)
    }

    function handleOutN(event){
        setOutN(event.target.value)
    }

    function handleCount(event){
        setCountPerson(event.target.value)
    }

    async function onPressBtn(){
        try{
            if(inN && outN && count_person){
                await axios({
                    method: 'post',
                    url: '/api/converter',
                    data: {
                        inN: parseInt(inN), outN: parseInt(outN), number: count_person
                    }
                }).then(data => {
                    setAnswer(data.data.result)
                })
            }
        } catch(e){
            setAnswer(e.response.data.message || 'Ошибка сервера, повторите попытку')
        }
    }

    return(
        <div className="convert">
            <div className="convert_div">
                <div className="convert_title_div">
                    <h1 className="convert_title">Converter</h1>
                </div>
                <div className="in_out_system">
                    <input type="text" className="system" maxLength={2} placeholder={"из n-ой с/c"} value={inN} onChange={handleInN}/>
                    <input type="text" className="system" maxLength={2} placeholder={"в n-ую с/c"} value={outN} onChange={handleOutN}/>
                </div>
                <div className="numbers">
                    <input type="text" className="converter_number_input" placeholder={"введите число"} maxLength={8} value={count_person} onChange={handleCount}/>
                    <div className="equals" onClick={onPressBtn}>=</div>
                    <input disabled type="text" className="converter_number_input" placeholder={"ответ"} readOnly style={{cursor: 'default'}} value={answer}/>
                </div>
            </div>
            <Nav/>
        </div>
    )
}

export default Convert