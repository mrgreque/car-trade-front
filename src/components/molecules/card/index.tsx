import realFormatter from "../../../helpers/RealFormatter";
import CardPrice from "../../atoms/cardPrice";
import CardText from "../../atoms/cardText";
import CardTitle from "../../atoms/cardTitle";
import { Row } from "../../global/styled";
import { CarProps } from "../../pages/carList/types";
import { StyledCard, StyledDescription } from "./styled";

const Card = (props: CarProps) => {
  return (
    <StyledCard>
      <img src={props.image} alt={props.name} style={{
        objectFit: 'cover',
        height: '200px',
        width: '100%',
      }} />
      <StyledDescription>
        <CardTitle text={`${props.name} ${props.model}`} />
        <Row>
          <CardText text={props.year} />
          <CardText text="•" />
          <CardText text={`${props.km} km`} />
        </Row>
        <Row>
          <CardPrice text={realFormatter(props.price)} />
          {
            props.oldPrice && <CardPrice text={realFormatter(props.oldPrice)} old />
          }
        </Row>
      </StyledDescription>

    </StyledCard>
  )
};

export default Card;
