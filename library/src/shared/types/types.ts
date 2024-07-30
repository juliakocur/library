type TypeBook = {
    name: string;
    author: string;
    description: string;
    img: string;
  };

export type TypeBooks = TypeBook[];

export type TypeMenu = {
  name: string;
  price: number;
};
export interface IMenu {
  'Coffee & Tea': TypeMenu[];
  'Desserts & Cakes': TypeMenu[];
}
