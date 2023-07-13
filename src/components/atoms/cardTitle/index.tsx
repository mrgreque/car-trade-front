import { StyledCardTitle } from "./styled";
import { CardTitleProps } from "./types";

const CardTitle = (props: CardTitleProps) => {
  return (
    <>
      <StyledCardTitle>{props.text}</StyledCardTitle>
    </>
  );
};

CardTitle.defaultProps = {
  text: '',
}

export default CardTitle;
