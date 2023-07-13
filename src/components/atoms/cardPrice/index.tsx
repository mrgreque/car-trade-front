import { StyledCardPrice } from "./styled";
import { CardPriceProps } from "./type";

const CardPrice = (props: CardPriceProps) => {
  return (
    <StyledCardPrice $old={props.old}>
      {props.text}
    </StyledCardPrice>
  )
}

CardPrice.defaultProps = {
  text: '',
  old: false,
}

export default CardPrice;
