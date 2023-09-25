import { WelcomeAnimationHoriz } from './WelcomeAnimationHoriz';
import styles from './welcomePage.module.scss';

export const WelcomeTitle = () => {
  return (
    <div className={styles.title}>
      <h1 className={styles.title__text}> house of<br/>
        <span className={styles.title__text_blue}>gambling</span> <br/>
      </h1>
      <h3 className={styles.subtitle}>Raise your ROI with direct advertiser</h3>  
      <button className='filled-item welcome-btn'>become a partner</button>
      <WelcomeAnimationHoriz />
    </div>
  )
}