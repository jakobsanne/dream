import styles from './app.module.scss';
import { UiCheckbox } from '@schwiftyconsulting/checkbox';

export function App() {
  return (
    <div className={styles['container']}>
      <h3>Playground app</h3>
      <div>
        content goes here
        <UiCheckbox onCheckedChange={(v) => console.log(v)}></UiCheckbox>
      </div>

    </div>
  );
}

export default App;
