import { WelcomeAnimation } from './WelcomeAnimation';
import { WelcomeBlog } from './WelcomeBlog';
import { WelcomeTitle } from './WelcomeTitle';


export const WelcomePage: React.FC = () => {
  return (
    <div className="welcome">
      <div className="left-shine" />
      <WelcomeTitle/>
      <WelcomeAnimation/>
      <WelcomeBlog/>
      <div className="right-shine"></div>
    </div>
  )
}