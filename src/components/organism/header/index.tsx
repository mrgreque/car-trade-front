import { useState } from "react";
import { StyledHeader, StyledNav } from "./styled";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ButtonWithIcon from "../../atoms/buttonWithIcon";
import AdmModal from "../../molecules/admModal";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      </StyledNav>

      <AdmModal
        open={open}
        setOpen={setOpen}
      />
    </StyledHeader>
  );
};

export default Header;
