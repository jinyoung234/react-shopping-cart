<<<<<<< HEAD
import { fetchCartItems } from '@apis/shoppingCart';
import { CartItem } from '@appTypes/shoppingCart';
import { PRICE } from '@constants/shippingCart';
import { cartItemsAtom, selectedIdsAtom } from '@recoil/shoppingCart/atoms';
import { selector } from 'recoil';

export const cartItemsSelector = selector<CartItem[]>({
  key: 'cartItemsSelector',
  get: async ({ get }) => {
    const prevCartItems = get(cartItemsAtom);

    if (prevCartItems.length > 0) return prevCartItems;

    const cartItems = await fetchCartItems();

    return cartItems;
  },

  set: ({ set }, newValue) => {
    set(cartItemsAtom, newValue);
  },
});

export const orderCostsSelector = selector({
  key: 'orderCostsSelector',
  get: ({ get }) => {
    const cartItems = get(cartItemsSelector);
    const selectedIds = get(selectedIdsAtom);

    const selectedCartItems = cartItems.filter(({ id }) => selectedIds.has(id));

    const orderPrice = selectedCartItems.reduce((acc, { product, quantity }) => acc + product.price * quantity, 0);
=======
import ShoppingCartFetcher from '@apis/shoppingCart';
import { CartItem } from '@appTypes/shoppingCart';
import { PRICE } from '@constants/shippingCart';
import { isInaccessibleAreaAtom, totalDiscountPriceSelector } from '@recoil/orderConfirm';
import { cartItemsAtom, quantityAtomFamily, selectedIdsAtom } from '@recoil/shoppingCart/atoms';
import { selector, selectorFamily } from 'recoil';

export const cartItemsSelector = selector<CartItem[]>({
  key: 'cartItemsSelector',
  get: async () => {
    const cartItems = await ShoppingCartFetcher.getCartItems();
    return cartItems;
  },
});

export const quantitySelectorFamily = selectorFamily<number, number>({
  key: 'quantitySelectorFamily',
  get:
    (id) =>
    ({ get }) => {
      const cartItems = get(cartItemsAtom);
      return cartItems.find((item) => item.id === id)?.quantity ?? 1;
    },
});

export const orderPriceSelector = selector({
  key: 'orderPriceSelector',
  get: ({ get }) => {
    const selectedCartItems = get(selectedItemsSelector);

    return selectedCartItems.reduce((acc, { id, product }) => {
      const quantity = get(quantityAtomFamily(id));
      return acc + product.price * quantity;
    }, 0);
  },
});

export const shippingPriceSelector = selector({
  key: 'shippingPriceSelector',
  get: ({ get }) => {
    const orderPrice = get(orderPriceSelector);
    const isInaccessibleArea = get(isInaccessibleAreaAtom);
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320

    const { freeShippingMinAmount, shippingFee } = PRICE;

    const shippingPrice =
      orderPrice === 0 || orderPrice >= freeShippingMinAmount ? shippingFee.free : shippingFee.basic;

<<<<<<< HEAD
    const totalPrice = orderPrice + shippingPrice;

    return { orderPrice, shippingPrice, totalPrice };
=======
    if (orderPrice < freeShippingMinAmount && isInaccessibleArea)
      return shippingPrice + PRICE.shippingFee.inaccessibleAreas;

    return shippingPrice;
  },
});

export const selectedItemsSelector = selector({
  key: 'selectedItemsSelector',
  get: ({ get }) => {
    const cartItems = get(cartItemsAtom);

    const selectedItems = cartItems
      .filter((cartItem) => get(selectedIdsAtom).has(cartItem.id))
      .map((item) => ({ ...item, quantity: get(quantityAtomFamily(item.id)) }));

    return selectedItems;
  },
});

export const beforeDiscountTotalPriceSelector = selector({
  key: 'beforeDiscountTotalPriceSelector',
  get: ({ get }) => {
    const orderPrice = get(orderPriceSelector);
    const shippingPrice = get(shippingPriceSelector);

    return orderPrice + shippingPrice;
  },
});

export const afterDiscountTotalPriceSelector = selector({
  key: 'afterDiscountTotalPriceSelector',
  get: ({ get }) => {
    const beforeDiscountTotalPrice = get(beforeDiscountTotalPriceSelector);
    const totalDiscountPrice = get(totalDiscountPriceSelector);

    return beforeDiscountTotalPrice - totalDiscountPrice;
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
  },
});
