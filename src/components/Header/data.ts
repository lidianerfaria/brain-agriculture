export interface IHeader {
  open: boolean;
  setOpen: any;
  openModal?: () => void;
  closeModal?: () => void;
  handleCloseModal: () => void;
}

export interface IHeaderLayout extends IHeader {}
