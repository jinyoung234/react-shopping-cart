import { CartItem } from '@appTypes/shoppingCart';
import { Checkbox } from '@components/common';
import { CartListItem } from '@components/shoppingCart';
import { useCheckCartItem } from '@hooks/shoppingCart';
<<<<<<< HEAD
import { cartItemsSelector } from '@recoil/shoppingCart';
=======
import { cartItemsAtom } from '@recoil/shoppingCart';
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
import { useRecoilValue } from 'recoil';

import * as Styled from './CartList.styled';

interface CartListProps {
  cartItems: CartItem[];
}

const CartList: React.FC<CartListProps> = () => {
  const { isAllChecked, onCheckAllCartItems } = useCheckCartItem();
<<<<<<< HEAD
  const cartItems = useRecoilValue(cartItemsSelector);

  return (
    <div>
=======
  const cartItems = useRecoilValue(cartItemsAtom);

  return (
    <>
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
      <Styled.CartListButtonGroup>
        <Checkbox checked={isAllChecked} onChange={onCheckAllCartItems} />
        <Styled.CartItemSelectionText>전체 선택</Styled.CartItemSelectionText>
      </Styled.CartListButtonGroup>
      <Styled.CartItemContainer>
        {cartItems.map((cartItem) => (
          <CartListItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </Styled.CartItemContainer>
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
  );
};

export default CartList;
