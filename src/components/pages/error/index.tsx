import { useNavigate } from "react-router-dom";
import DefaultButton from "../../atoms/defaultButton";
import InternalContainer from "../../organism/container";
import { Centered } from "./styled";

const ErrorPage = (props: {type: string}) => {
  const navigate = useNavigate();
  return (
    <main>
      <InternalContainer>
        <Centered>
          {props.type === 'notFound' ? <img src="/404.gif" alt="" /> : <img src="/401.png" alt="" />}
          <DefaultButton
            onClick={() => navigate('/')}
          >
            Voltar para a página inicial
          </DefaultButton>
        </Centered>
      </InternalContainer>
    </main>
  );
}

export default ErrorPage;
