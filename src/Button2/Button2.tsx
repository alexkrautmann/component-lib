import * as React from 'react';
import './Button2.css';
export interface Props {
  /** this dictates what the button will say  */
  label: string;
  /** this dictates what the button will do  */
  onClick: () => void;
  /**
   * Disables onclick
   *
   * @default false
   **/
  disabled?: boolean;
}
const noop = () => {}; // tslint:disable-line
export const Button2 = (props: Props) => {
  const { label, onClick, disabled = false } = props;
  const disabledclass = disabled ? 'Button_disabled' : '';
  console.log('FOOO');
  return (
    <div
      className={`Button ${disabledclass}`}
      onClick={!disabled ? onClick : noop}
    >
      <span>{label}</span>
    </div>
  );
};
