import { useState } from "react";
import { StyledHeader, StyledNav } from "./styled";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ButtonWithIcon from "../../atoms/buttonWithIcon";
import AdmModal from "../../molecules/admModal";
import { HeaderProps } from "./types";
import { useNavigate } from "react-router-dom";

const Header = (props: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  window.onscroll = () => {
    window.pageYOffset > 0 ?
      setScrolled(true) : setScrolled(false);
  }

  return (
    <StyledHeader scrolled={scrolled}>
      <StyledNav>
        <img src="/logo.png" alt="Logo" style={{
          width: '200px',
        }} />
        {
          props.painelAdmin ?
          <ButtonWithIcon
          icon={<AccountCircleIcon />}
          onClick={() => {
            localStorage.removeItem('token')
            navigate('/')
          }}
          disabled={false}
          color="primary"
        >
          Sair
        </ButtonWithIcon>
        :
        <ButtonWithIcon
        icon={<AccountCircleIcon />}
        onClick={() => {
          setOpen(true)
          console.log('teste')
        }}
        disabled={false}
        color="primary"
      >
        Painel Administrativo
      </ButtonWithIcon>
        }
      </StyledNav>

      <AdmModal
        open={open}
        setOpen={setOpen}
      />
    </StyledHeader>
  );
};

export default Header;
