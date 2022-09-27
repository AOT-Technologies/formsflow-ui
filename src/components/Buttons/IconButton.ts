import './button.css';
import { createButton, ButtonProps } from './Button';

export interface IconButtonProps extends ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  icon?: any;

}

/**
 * Primary UI component for user interaction
 */
export const IconButton = ({
 icon= "=",
 ...args
}: IconButtonProps) => {
    const div = document.createElement('span');
    div.innerHTML = `${icon}`
    div.appendChild(createButton(args))
  

  return  div;
};
