import { TextField } from "@mui/material";
import styled from "styled-components";

const StyledTextField = styled(TextField)<{flex: number}>`
    margin: 0 10em;
    flex: ${props => props.flex};
`;

export {
  StyledTextField
}
