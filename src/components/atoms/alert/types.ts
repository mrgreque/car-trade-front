export type AlertSnackProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
};
