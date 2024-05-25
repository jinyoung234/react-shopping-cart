import { CartItem } from '@appTypes/shoppingCart';
import { STORAGE_KEY } from '@constants/storage';
import { localStorageEffect } from '@recoil/common/localStorageEffect';
<<<<<<< HEAD
import { atom } from 'recoil';

export const cartItemsAtom = atom<CartItem[]>({
  key: 'cartItemsAtom',
  default: [],
});

export const selectedIdsAtom = atom({
=======
import { cartItemsSelector, quantitySelectorFamily } from '@recoil/shoppingCart/selectors';
import { atom, atomFamily } from 'recoil';

export const cartItemsAtom = atom<CartItem[]>({
  key: 'cartItemsAtom',
  default: cartItemsSelector,
});

export const quantityAtomFamily = atomFamily<number, number>({
  key: 'quantityAtomFamily',
  default: quantitySelectorFamily,
});

export const selectedIdsAtom = atom<Set<number>>({
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
  key: 'selectedIdsAtom',
  default: new Set(JSON.parse(localStorage.getItem(STORAGE_KEY.selectedItems) ?? '[]')) ?? new Set(),
  effects: [localStorageEffect(STORAGE_KEY.selectedItems)],
});
