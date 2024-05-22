import { BottomButton } from '@components/common';
import { useSelectedCartItems } from '@hooks/shoppingCart';
import useOrderCosts from '@hooks/shoppingCart/useOrderCosts';
import { formatKoreanCurrency } from '@utils/index';

import * as Styled from './PaymentConfirmPage.styled';

const PaymentConfirmPage: React.FC = () => {
  const { totalPrice } = useOrderCosts();

  const { totalSelectedItemLength, selectedTotalQuantity } = useSelectedCartItems();

  return (
    <Styled.OrderConfirmPageContainer>
      <Styled.Title>주문 확인</Styled.Title>
      <Styled.GuidText>
        총 {totalSelectedItemLength}종류의 상품 {selectedTotalQuantity}개를 주문합니다.
      </Styled.GuidText>
      <Styled.GuidText>최종 결제 금액을 확인해 주세요.</Styled.GuidText>
      <Styled.TotalPriceTitle>총 결제 금액 </Styled.TotalPriceTitle>
      <Styled.TotalPrice>{formatKoreanCurrency(totalPrice)}</Styled.TotalPrice>
      <BottomButton disabled={true}>결제하기</BottomButton>
    </Styled.OrderConfirmPageContainer>
  );
};

export default PaymentConfirmPage;
