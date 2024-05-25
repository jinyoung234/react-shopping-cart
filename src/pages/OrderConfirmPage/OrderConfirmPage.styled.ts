import styled from 'styled-components';

<<<<<<< HEAD
export const OrderConfirmPageContainer = styled.section`
  margin-top: 20px;
  width: 100%;
  height: calc(100vh - 64px * 2 - 48px - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 24px;
  line-height: 34.7px;
`;

export const GuidText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const TotalPriceTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 24px;
  line-height: 16px;
`;

export const TotalPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 34.7px;
=======
export const OrderConfirmTitle = styled.h1`
  color: rgba(0, 0, 0, 1);
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
`;

export const OrderConfirmSubTitle = styled.p`
  padding-top: 2px;
  color: rgba(10, 13, 19, 1);
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
`;

export const CartInfoBanner = styled.p`
  padding: 32px 0px 12px 0px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CartInfoBannerText = styled.span`
  padding-top: 2px;
  color: rgba(10, 13, 19, 1);
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`;

export const LabelText = styled.span<{ $isDisabled?: boolean }>`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  color: ${({ $isDisabled }) => ($isDisabled ? 'lightgray' : 'rgba(10, 13, 19, 1)')};
`;

export const HeadingText = styled.h1`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  color: rgba(10, 13, 19, 1);
`;

export const OrderDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 20px;
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
`;
