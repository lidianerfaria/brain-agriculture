export interface IHeader {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>> | void;
  openModal?: () => void;
  closeModal?: () => void | undefined;
  handleCloseModal?: () => void;
}

export interface IHeaderLayout extends IHeader {}
