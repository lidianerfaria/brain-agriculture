export interface IHeader {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<number>>;
  openModal?: () => void;
  closeModal?: () => void | undefined;
  handleCloseModal?: () => void;
}

export interface IHeaderLayout extends IHeader {}
