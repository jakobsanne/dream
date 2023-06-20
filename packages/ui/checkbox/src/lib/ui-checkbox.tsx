import styles from './ui-checkbox.module.scss';
import * as React from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import * as Checkbox from '@radix-ui/react-checkbox';

const UiCheckbox = React.forwardRef<
  React.ElementRef<typeof Checkbox.Root>,
  React.ComponentPropsWithoutRef<typeof Checkbox.Root>
>(({ className,...props }, ref) => (
  <Checkbox.Root
    ref={ref}
    className={className}
    {...props}
  >
    <Checkbox.Indicator
      className={''}
    >
      <CheckIcon />
    </Checkbox.Indicator>
  </Checkbox.Root>
))
UiCheckbox.displayName = Checkbox.Root.displayName

export { UiCheckbox }
