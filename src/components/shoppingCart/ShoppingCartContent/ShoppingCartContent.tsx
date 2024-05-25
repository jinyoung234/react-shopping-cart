import { UpsideDownExclamation } from '@assets/index';
import { CartItemCount, CartList, OrderPrice } from '@components/shoppingCart';
import { PRICE } from '@constants/shippingCart';
<<<<<<< HEAD
import { cartItemsSelector } from '@recoil/shoppingCart';
=======
import useOrderCosts from '@hooks/shoppingCart/useOrderCosts';
import { cartItemsAtom } from '@recoil/shoppingCart';
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
import { formatKoreanCurrency } from '@utils/currency';
import { useRecoilValue } from 'recoil';

import * as Styled from './ShoppingCardContent.styled';

const ShoppingCartContent = () => {
<<<<<<< HEAD
  const cartItems = useRecoilValue(cartItemsSelector);
=======
  const cartItems = useRecoilValue(cartItemsAtom);
  const { orderPrice, shippingPrice, beforeDiscountTotalPrice } = useOrderCosts();
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320

  return (
    <>
      {cartItems.length === 0 ? (
        <Styled.Fallback>장바구니에 담은 상품이 없습니다.</Styled.Fallback>
      ) : (
        <>
          <CartItemCount count={cartItems.length} />
          <div>
            <Styled.CartItemContainer>
              <CartList cartItems={cartItems} />
            </Styled.CartItemContainer>
          </div>
          <Styled.CartInfoBanner>
            <UpsideDownExclamation />
            <Styled.CartInfoBannerText>
              총 주문 금액이 {formatKoreanCurrency(PRICE.freeShippingMinAmount)} 이상일 경우 무료 배송됩니다.
            </Styled.CartInfoBannerText>
          </Styled.CartInfoBanner>
<<<<<<< HEAD
          <OrderPrice />
=======
          <OrderPrice orderPrice={orderPrice} shippingPrice={shippingPrice} totalPrice={beforeDiscountTotalPrice} />
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
        </>
      )}
    </>
  );
};

export default ShoppingCartContent;
