import styles from './select.module.scss';

/* eslint-disable-next-line */
export interface SelectProps {}

export function Select(props: SelectProps) {
  return (
    <div className={styles['container']}>
      <h1>[this could be a select or other component]</h1>
    </div>
  );
}

export default Select;
