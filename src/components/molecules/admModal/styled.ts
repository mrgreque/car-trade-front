import { Modal } from "@mui/material";
import styled from "styled-components";

const StyledAdmModal = styled(Modal)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledModal = styled.div`
  width: 90%;
  max-width: 400px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
`
const StyledModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledAdmText = styled.p`
  font-size: 1.1em;
  font-weight: 350;
  text-align: left;
  margin: 10px 0;
  padding: 0;
`

export {
  StyledAdmModal,
  StyledModal,
  StyledModalContent,
  StyledAdmText
}
