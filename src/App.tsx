import styles from './App.module.scss';
import { LoginBox } from './components/LoginBox';
import { Messagelist } from './components/MessageList';

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <Messagelist />
      <LoginBox />
    </main>
  )
}
    

