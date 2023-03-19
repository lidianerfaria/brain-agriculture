export interface IHeader {
  open?: boolean;
  setOpen?: any;
  openModal?: () => void;
  closeModal?: () => void | undefined;
  handleCloseModal?: () => void;
}

export interface IHeaderLayout extends IHeader {}
