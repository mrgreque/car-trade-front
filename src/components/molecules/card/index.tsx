import realFormatter from "../../../helpers/RealFormatter";
import CardPrice from "../../atoms/cardPrice";
import CardText from "../../atoms/cardText";
import CardTitle from "../../atoms/cardTitle";
import { Column, Row, SpacedRow, Spacer } from "../../global/styled";
import { StyledCard, StyledDescription } from "./styled";
import { CardProps } from "./types";

const Card = (props: CardProps) => {
  return (
    <StyledCard>
      <img src={props.car.principalImage} alt={props.car.name} style={{
          objectFit: 'cover',
          height: '200px',
          width: '100%',
        }} />
        <StyledDescription>
          <CardTitle text={`${props.car.name} ${props.car.brand}`} />
          <Row>
            <CardText text={props.car.motorPower} />
            <CardText text={props.car.model} />
            <CardText text={props.car.fuel} />
            <CardText text={`${props.car.ports}P`} />
            <CardText text={props.car.transmission} />
          </Row>
          <Spacer width="100%" height="30px"/>
          <Column>
            {
              props.car.oldPrice ? <CardPrice text={realFormatter(props.car.oldPrice)} old /> : <Spacer width="100%" height="20px"/>
            }
            <CardPrice text={realFormatter(props.car.price)} />
          </Column>
          <SpacedRow>
            <CardText text={`${props.car.year}/${props.car.modelYear}`} small />
            <CardText text={`${props.car.km} km`} small />
          </SpacedRow>
        </StyledDescription>
    </StyledCard>
  )
};

export default Card;
