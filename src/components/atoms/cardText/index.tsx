import { StyledCardText } from "./styled";
import { CardTextProps } from "./type";

const CardText = (props: CardTextProps) => {
  return (
    <StyledCardText>
      {props.text}
    </StyledCardText>
  )
}

export default CardText;
