import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick , pointer, cursor}: IButtonProps) => {
  return <ButtonContainer pointer={pointer} cursor={cursor} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
