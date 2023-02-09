import classes from './ActivityCard.module.css'
import Picture from '../assets/icon-ellipsis.svg'

const ActivityCard = props => {

    // console.log(props.activity)
// return (
//     <article className={`${classes.card} ${props.className}`}>
//         <div className={classes.header}>
//         </div>
//         <div className={classes.infos}>
//             <h2 className={classes.row}>
//                 <span>{props.title}</span>
//                 <span><img src={Picture} alt='ellipsis'/></span>
//             </h2>
//             <div  className={classes.row}>
//                 <div  className={classes.hours}>{props.time.current}hrs</div>
//                 <div>Last Week - {props.time.previous}hrs</div>
//             </div>
//         </div>
//     </article>
// )

    const myA =  props.activity
    const myTime = props.time === 'weekly' ? myA.timeframes.weekly : props.time === 'monthly' ? myA.timeframes.monthly : myA.timeframes.daily
    const lastTime = props.time === 'weekly' ? 'Last Week' : props.time === 'daily' ? 'Yesterday' : 'Last Month'

return (
    <article className={`${classes.card} ${props.className}`}>
        <div className={classes.header}>
        </div>
        <div className={classes.infos}>
            <h2 className={classes.row}>
                <span>{props.activity.title}</span>
                <span><img src={Picture} alt='ellipsis'/></span>
            </h2>
            <div  className={classes.row}>
                <div  className={classes.hours}>{myTime.current}hrs</div>
                <div>{lastTime} - {myTime.previous}hrs</div>
            </div>
        </div>
    </article>
)
}

export default ActivityCard