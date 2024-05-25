import { STORAGE_KEY } from '@constants/storage';
import { useDeleteCartItem } from '@hooks/shoppingCart';
<<<<<<< HEAD
import { cartItemsAtom, cartItemsSelector, selectedIdsAtom } from '@recoil/shoppingCart';
import { renderHook, waitFor } from '@testing-library/react';
import { RecoilRoot, useRecoilValue } from 'recoil';

import { INITIAL_ITEMS } from './constants/cartItems';
=======
import { cartItemsAtom, selectedIdsAtom } from '@recoil/shoppingCart';
import { act } from 'react';
import { useRecoilValue } from 'recoil';

import { INITIAL_ITEMS } from './constants/cartItems';
import executeCartItemRenderHook from './utils/executeRenderHook';
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320

describe('상품 삭제 테스트', () => {
  beforeEach(() => {
    localStorage.clear();
  });
<<<<<<< HEAD
  it('상품을 삭제하면, 장바구니 목록 데이터에서 해당 상품이 삭제된다.', async () => {
    const ID = INITIAL_ITEMS[0].id;
    const { result } = renderHook(
      () => {
        const { updateCartItems } = useDeleteCartItem(ID);
        const cartItems = useRecoilValue(cartItemsAtom);

        return { cartItems, updateCartItems };
      },
      {
        wrapper: ({ children }) => (
          <RecoilRoot
            initializeState={({ set }) => {
              set(cartItemsSelector, INITIAL_ITEMS);
              set(selectedIdsAtom, new Set());
            }}
          >
            {children}
          </RecoilRoot>
        ),
      },
    );

    await waitFor(() => {
      return result.current !== undefined;
    });

    await waitFor(() => {
      result.current.updateCartItems();
    });

    expect(result.current.cartItems.every((item) => item.id !== ID)).toBeTruthy();
  });

  it('체크 박스를 선택한 상품을 삭제하면, 로컬 스토리지에서 해당 상품 아이디가 삭제된다.', async () => {
    const ID = INITIAL_ITEMS[0].id;
    const { result } = renderHook(
=======
  it('상품을 삭제하면, 장바구니 목록 데이터에서 해당 상품이 삭제된다.', () => {
    // given
    const ID = INITIAL_ITEMS[0].id;

    // when
    const { result } = executeCartItemRenderHook(() => {
      const { updateCartItems } = useDeleteCartItem(ID);
      const cartItems = useRecoilValue(cartItemsAtom);

      return { cartItems, updateCartItems };
    });

    act(() => {
      result.current.updateCartItems();
    });

    // then
    expect(result.current.cartItems.every((item) => item.id !== ID)).toBeTruthy();
  });

  it('체크 박스를 선택한 상품을 삭제하면, 로컬 스토리지에서 해당 상품 아이디가 삭제된다.', () => {
    // given
    const ID = INITIAL_ITEMS[0].id;

    // when
    const { result } = executeCartItemRenderHook(
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
      () => {
        const { updateSelectedCartItemIds } = useDeleteCartItem(ID);
        const selectedIds = useRecoilValue(selectedIdsAtom);

        return { selectedIds, updateSelectedCartItemIds };
      },
<<<<<<< HEAD
      {
        wrapper: ({ children }) => (
          <RecoilRoot
            initializeState={({ set }) => {
              set(cartItemsSelector, INITIAL_ITEMS);
              set(selectedIdsAtom, new Set([ID]));
            }}
          >
            {children}
          </RecoilRoot>
        ),
      },
    );

    await waitFor(() => {
      return result.current !== undefined;
    });

    await waitFor(() => {
      result.current.updateSelectedCartItemIds();
    });

    expect(result.current.selectedIds.has(ID)).toBeFalsy();

    const storage = JSON.parse(localStorage.getItem(STORAGE_KEY.selectedItems) ?? '[]');

=======
      INITIAL_ITEMS,
      new Set([ID]),
    );

    act(() => {
      result.current.updateSelectedCartItemIds();
    });

    const storage = JSON.parse(localStorage.getItem(STORAGE_KEY.selectedItems) ?? '[]');

    // then
    expect(result.current.selectedIds.has(ID)).toBeFalsy();

>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
    expect(storage).toStrictEqual([]);
  });
});
