import classes from './ActivityCard.module.css'
import Picture from '../assets/icon-ellipsis.svg'

const ActivityCard = ({activity, time, className}) => {

    const myA =  activity
    const myTime = myA.timeframes[time]
    const lastTime = {weekly:'Last week', daily:'Yesterday', monthly:'Last month'}

return (
    <article className={`${classes.card} ${className}`}>
        <div className={classes.header}>
        </div>
        <div className={classes.infos}>
            <h2 className={classes.row}>
                <span>{activity.title}</span>
                <span><img src={Picture} alt='ellipsis'/></span>
            </h2>
            <div  className={classes.row}>
                <div  className={classes.hours}>{myTime.current}hrs</div>
                <div>{lastTime[time]} - {myTime.previous}hrs</div>
            </div>
        </div>
    </article>
)
}

export default ActivityCard