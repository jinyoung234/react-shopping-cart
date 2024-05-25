import { CartItem } from '@appTypes/shoppingCart';
import { Checkbox, DeleteButton } from '@components/common';
<<<<<<< HEAD
import { CartListDescription } from '@components/shoppingCart';
=======
import Item from '@components/common/Item/Item';
import { CartListItemCounter } from '@components/shoppingCart';
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
import { useCheckCartItem, useDeleteCartItem } from '@hooks/shoppingCart';

import * as Styled from './CartListItem.styled';

interface CartListItemProps {
  cartItem: CartItem;
}

const CartListItem: React.FC<CartListItemProps> = ({ cartItem }) => {
  const { onDeleteItem } = useDeleteCartItem(cartItem.id);
  const { isChecked, onCheckCartItem } = useCheckCartItem();

  return (
<<<<<<< HEAD
    <Styled.CartListContainer>
      <Styled.CartItemSelectionGroup>
        <Checkbox checked={isChecked(cartItem.id)} onChange={() => onCheckCartItem(cartItem.id)} />
        <DeleteButton onClick={onDeleteItem}>삭제</DeleteButton>
      </Styled.CartItemSelectionGroup>
      <Styled.CartItemDetailContainer>
        <Styled.CartItemImage src={cartItem.product.imageUrl} />
        <CartListDescription cartItem={cartItem} />
      </Styled.CartItemDetailContainer>
    </Styled.CartListContainer>
=======
    <Item direction="column">
      <Item.ItemSelection>
        <Checkbox checked={isChecked(cartItem.id)} onChange={() => onCheckCartItem(cartItem.id)} />
        <DeleteButton onClick={onDeleteItem}>삭제</DeleteButton>
      </Item.ItemSelection>
      <Styled.CartItemContentWrapper>
        <Item.ItemImage url={cartItem.product.imageUrl} />
        <Item.ItemDescription name={cartItem.product.name} price={cartItem.product.price}>
          <CartListItemCounter cartItem={cartItem} />
        </Item.ItemDescription>
      </Styled.CartItemContentWrapper>
    </Item>
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
  );
};

export default CartListItem;
