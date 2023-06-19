import styles from './ui-checkbox.module.scss';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { CheckboxProps } from '@radix-ui/react-checkbox';

/* eslint-disable-next-line */
export interface UiCheckboxProps extends CheckboxProps{
  label: string
}

export function UiCheckbox(props: UiCheckboxProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
        <Checkbox.Indicator className="CheckboxIndicator">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="Label" htmlFor="c1">
        {props.label}
      </label>
    </div>
  );
}

export default UiCheckbox;
