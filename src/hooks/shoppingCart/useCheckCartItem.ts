<<<<<<< HEAD
import { cartItemsSelector, selectedIdsAtom } from '@recoil/shoppingCart';
import { useRecoilState, useRecoilValue } from 'recoil';

const useCheckCartItem = () => {
  const cartItems = useRecoilValue(cartItemsSelector);
=======
import { cartItemsAtom, selectedIdsAtom } from '@recoil/shoppingCart';
import { useRecoilState, useRecoilValue } from 'recoil';

const useCheckCartItem = () => {
  const cartItems = useRecoilValue(cartItemsAtom);
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320

  const [selectedCartItemIds, setSelectedCartItemIds] = useRecoilState(selectedIdsAtom);

  const isChecked = (id: number) => selectedCartItemIds.has(id);

  const isAllChecked = selectedCartItemIds.size === cartItems.length;

  const onCheckAllCartItems = () => {
    const newCheckState = !isAllChecked ? new Set(cartItems.map((item) => item.id)) : new Set();

<<<<<<< HEAD
    setSelectedCartItemIds(newCheckState);
=======
    setSelectedCartItemIds(newCheckState as Set<number>);
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
  };

  const onCheckCartItem = (id: number) => {
    const newSelectedCartItemIds = new Set(selectedCartItemIds);

    if (!isChecked(id)) {
      newSelectedCartItemIds.add(id);
    } else {
      newSelectedCartItemIds.delete(id);
    }

    setSelectedCartItemIds(newSelectedCartItemIds);
  };

  return { isChecked, isAllChecked, onCheckCartItem, onCheckAllCartItems };
};

export default useCheckCartItem;
