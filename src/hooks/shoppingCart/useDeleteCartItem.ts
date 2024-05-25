<<<<<<< HEAD
import { fetchDeleteCartItem } from '@apis/shoppingCart';
import { cartItemsSelector, selectedIdsAtom } from '@recoil/shoppingCart';
import { useSetRecoilState } from 'recoil';

const useDeleteCartItem = (id: number) => {
  const setCartItems = useSetRecoilState(cartItemsSelector);
=======
import ShoppingCartFetcher from '@apis/shoppingCart';
import { cartItemsAtom, selectedIdsAtom } from '@recoil/shoppingCart';
import { useSetRecoilState } from 'recoil';

const useDeleteCartItem = (id: number) => {
  const setCartItems = useSetRecoilState(cartItemsAtom);
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
  const setSelectedCartItemIds = useSetRecoilState(selectedIdsAtom);

  const updateCartItems = () => {
    setCartItems((prevCartItems) => prevCartItems.filter((prevCartItem) => prevCartItem.id !== id));
  };

  const updateSelectedCartItemIds = () => {
    setSelectedCartItemIds((prevSelectedIds) => {
      prevSelectedIds.delete(id);

      return prevSelectedIds;
    });
  };

  const onDeleteItem = async () => {
<<<<<<< HEAD
    await fetchDeleteCartItem(id);
=======
    await ShoppingCartFetcher.deleteCartItem(id);
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320

    updateCartItems();
    updateSelectedCartItemIds();
  };

  return { updateCartItems, updateSelectedCartItemIds, onDeleteItem };
};

export default useDeleteCartItem;
