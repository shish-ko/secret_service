import { WelcomeAnimation } from './WelcomeAnimation';
import { WelcomeBlog } from './WelcomeBlog';
import styles from './welcomePage.module.scss';
import { WelcomeTitle } from './WelcomeTitle';


export const WelcomePage: React.FC = () => {
  return (
    <div className={styles.welcome}>
      <WelcomeTitle/>
      <WelcomeAnimation/>
      <WelcomeBlog/>
    </div>
  )
}