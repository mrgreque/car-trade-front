import { Row, SpacedRow } from "../../global/styled";
import DefaultInput from "../../atoms/defaultInput";
import DefaultButton from "../../atoms/defaultButton";
import { AdmModalProps } from "./types";
import { StyledAdmModal, StyledAdmText, StyledModal, StyledModalContent } from "./styled";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomizedAlert from "../../atoms/alert";

const AdmModal = (props: AdmModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [emitAlert, setEmitAlert] = useState<boolean>(false)
  const [alertMessage, setAlertMessage] = useState<string>('')
  const [alertType, setAlertType] = useState<"success" | "error" | "warning" | "info">('success')

  const resetInputs = () => {
    setEmail('');
    setPassword('');
  }

  const handleEmitAlert = (message: string, type: "success" | "error" | "warning" | "info") => {
    setAlertMessage(message)
    setAlertType(type)
    setEmitAlert(true)
  };

  const handleAuthenticate = () => {
    if (!email || !password) return alert('Preencha todos os campos')
    axios.post('http://localhost:3000/authenticate', {
      email,
      password
    })
      .then((response: AxiosResponse<{accessToken: string}>) => {
        handleEmitAlert('Logado com sucesso', 'success')
        setTimeout(() => {
          resetInputs()
          navigate('admin')
        }, 1000)
        localStorage.setItem('token', response.data.accessToken)
      })
      .catch(() => {
        handleEmitAlert('Credenciais inválidas', 'error')
      })
  }

  return (
    <StyledAdmModal
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <StyledModal>
        <StyledModalContent>
          <SpacedRow>
            <AssignmentIndIcon style={{
              fontSize: '100px',
              color: '#5cabd8',
            }} />
            <StyledAdmText>Insira suas credenciais para acessar o sistema</StyledAdmText>
          </SpacedRow>
          <Row
            width="100%"
            margin="10px 0 0 0"
          >
            <DefaultInput
              label="E-mail"
              inputValue={email}
              setDefaultInput={setEmail}
            />
          </Row>
          <Row
            width="100%"
            margin="10px 0"
          >
            <DefaultInput
              label="Senha"
              inputValue={password}
              setDefaultInput={setPassword}
              type="password"
            />
          </Row>
            <SpacedRow>
              <DefaultButton
                onClick={() => props.setOpen(false)}
                width="49%"
                color="secondary"
              >
                Cancelar
              </DefaultButton>
              <DefaultButton
                onClick={handleAuthenticate}
                width="49%"
                color="primary"
              >
                Entrar
              </DefaultButton>
            </SpacedRow>
        </StyledModalContent>
        <CustomizedAlert
          open={emitAlert}
          setOpen={setEmitAlert}
          type={alertType}
          message={alertMessage}
        />
      </StyledModal>

    </StyledAdmModal>
  )
}

export default AdmModal;
