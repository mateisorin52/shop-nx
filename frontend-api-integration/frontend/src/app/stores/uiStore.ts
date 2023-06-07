import { observable, action, makeAutoObservable, toJS } from 'mobx';
import { Product } from '../types/types';

export class UiStore {
  @observable cart: Product[] = [];
  @observable searchTerm: string = '';
  constructor() {
    makeAutoObservable(this);
  }
  @action setSearchTerm = (value: string) => {
    this.searchTerm = value;
  };
  @action addItemToCart = (value: Product) => {
    const indexOfExistingProduct = this.cart.findIndex((item) => item.id === value.id);
    if (indexOfExistingProduct !== -1) {
      (this.cart[indexOfExistingProduct].quantity as number) += 1;
    } else this.cart.push({ ...value, quantity: 1 });
  };
  @action removeItemFromCart = (id: string) => {
    this.cart = this.cart.filter((item) => item.id !== id);
  };
  @action removeOneQItemFromCart = (id: string) => {
    const numberOfExistingProducts = this.cart.find((item) => item.id === id)?.quantity;
    const indexOfExistingProduct = this.cart.findIndex((item) => item.id === id);
    if (numberOfExistingProducts && numberOfExistingProducts > 1) {
      (this.cart[indexOfExistingProduct].quantity as number) -= 1;
    } else this.cart = this.cart.filter((item) => item.id !== id);
  };
  @action clearCart = () => {
    this.cart = [];
  };
}
export const uiStore = new UiStore();
