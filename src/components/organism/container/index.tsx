import { StyledDivContainer, StyledSection } from "./styled";
import { ContainerProps } from "./types";

const InternalContainer = (props: ContainerProps) => {
  return (
    <StyledSection>
      <StyledDivContainer>
        {props.children}
      </StyledDivContainer>
    </StyledSection>
  );
};

export default InternalContainer;
