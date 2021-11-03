import React from 'react'
import './result.css'

const Table = ({persons}) => {
    
    function Names(stroke){

        let persons_items = []

        if(stroke === 'time'){
            for(let i in persons){
                let time = persons[i]['time']
                let minutes = (Math.floor(time / 60)).toString()
                let seconds = (time%60).toString() 
                if(seconds === '0') seconds = '00'
                time = minutes + ' : ' + seconds
                persons_items.push(<h1 className="reg_places2" key={i}>{time}</h1>)
            }
        }

        else {
            for(let i in persons){
                persons_items.push(<h1 className="reg_places2" key={i}>{persons[i][`${stroke}`]}</h1>)
            }
        }

        return persons_items
    }

    return(
        <>
            <div><h1 className="your_result">Таблица результатов</h1></div>
            <div className="reg_info2">
                <div className="reg_name_div">
                    <h1 className="reg_places1">Имя</h1>
                    {Names('name')}
                </div>
                <div className="reg_name_div">
                    <h1 className="reg_places1">Время</h1>
                    {Names('time')}
                </div>
                <div className="reg_name_div">
                    <h1 className="reg_places1">Тест</h1>
                    {Names('test')}
                </div>
            </div>
        </>
    )
}

export default Table