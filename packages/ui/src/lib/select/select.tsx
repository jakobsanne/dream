/*
* https://www.radix-ui.com/docs/primitives/components/select
* */

import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import './select.styles.css';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group // implement ?

const SelectValue = SelectPrimitive.Value;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={'SelectItem'}
    {...props}
  >
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({children, ...props}, ref) => (
  <SelectPrimitive.Trigger className={'SelectTrigger'} ref={ref} {...props}>
    {children}
    <SelectPrimitive.Icon>
      <ChevronDownIcon />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({children,...props}, ref) => (
    <SelectPrimitive.Content className={'SelectContent'} ref={ref} {...props}>
      <SelectPrimitive.Viewport className={'SelectViewport'}>{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
));


export { Select, SelectGroup, SelectTrigger, SelectContent, SelectValue, SelectItem };


