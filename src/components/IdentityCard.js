import classes from './IdentityCard.module.css'
import PP from '../assets/image-jeremy.png'
import { useEffect, useState } from 'react'

const IdentityCard = props => {
    const [isActive, setIsActive] = useState('weekly')

    const dailyClick = () =>{
        setIsActive('daily')
    }
    const weeklyClick = () =>{
        setIsActive('weekly')
    }
    const monthlyClick = () =>{
        setIsActive('monthly')
    }

    useEffect(()=>{
        props.onTimeframeChange(isActive)
    }, [props, isActive])

    return (
        <section className={classes.card} id={props.id}>
            <div className={classes.identity}>
                <img src={PP} alt='profile' />
                <div>
                    <p>Report for</p>
                    <h3>Jeremy Robson</h3>
                </div>
            </div>
            <div className={classes.categories}>
                <button type='button' onClick={dailyClick} className={isActive === 'daily' ? classes.selected : ''}>Daily</button>
                <button type='button' onClick={weeklyClick} className={isActive === 'weekly' ? classes.selected : ''}>Weekly</button>
                <button type='button' onClick={monthlyClick} className={isActive === 'monthly' ? classes.selected : ''}>Monthly</button>
            </div>
        </section>
    )
}

export default IdentityCard