import styles from './app.module.scss';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@dream/ui';

export function App() {
  return (
    <div className={styles['container']}>
      <h3>Playground app</h3>
      <div>
        <Select onValueChange={(val) => console.log(val)} onOpenChange={(val) => console.log(val)}>
          <SelectTrigger>
            <SelectValue placeholder="Säg ett datum" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Ett</SelectItem>
            <SelectItem value="2">Två</SelectItem>
            <SelectItem value="3">Tre</SelectItem>
            <SelectItem value="4">Fyra</SelectItem>
          </SelectContent>
        </Select>
        ⬅ This is a Select component
      </div>

    </div>
  );
}

export default App;
