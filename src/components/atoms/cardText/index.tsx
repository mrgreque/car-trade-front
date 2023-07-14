import { StyledCardText } from "./styled";
import { CardTextProps } from "./type";

const CardText = (props: CardTextProps) => {
  return (
    <StyledCardText $small={props.small}>
      {props.text}
    </StyledCardText>
  )
}

CardText.defaultProps = {
  small: false,
}

export default CardText;
