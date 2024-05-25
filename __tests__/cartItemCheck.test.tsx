import { useCheckCartItem } from '@hooks/shoppingCart';
<<<<<<< HEAD
import { cartItemsSelector, selectedIdsAtom } from '@recoil/shoppingCart';
import { renderHook, waitFor } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { INITIAL_ITEMS } from './constants/cartItems';
=======
import { act } from 'react';

import { INITIAL_ITEMS } from './constants/cartItems';
import executeCartItemRenderHook from './utils/executeRenderHook';
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320

describe('상품 선택 테스트', () => {
  beforeEach(() => {
    localStorage.clear();
  });
<<<<<<< HEAD
  it('초기 상품들은 모두 체크 되지 않은 상태다.', async () => {
    const { result } = renderHook(
      () => {
        return useCheckCartItem();
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

    expect(result.current.isAllChecked).toBe(false);
  });
  it('장바구니 목록 속 특정 상품의 체크 박스를 선택하면 해당 상품은 주문 목록에 추가된다.', async () => {
    const ID = INITIAL_ITEMS[0].id;

    const { result } = renderHook(
      () => {
        return useCheckCartItem();
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
      result.current.onCheckCartItem(ID);
    });

    expect(result.current.isChecked(ID)).toBeTruthy();
  });

  it('상품을 전체 선택 할 경우, 모든 상품 들이 선택 된다.', async () => {
    const { result } = renderHook(
      () => {
        return useCheckCartItem();
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
      result.current.onCheckAllCartItems();
    });

    expect(result.current.isAllChecked).toBeTruthy();
  });

  it('전체 선택을 해제하면, 장바구니 모든 상품의 선택이 해제된다.', async () => {
    const { result } = renderHook(
      () => {
        return useCheckCartItem();
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
      result.current.onCheckAllCartItems();
    });

    await waitFor(() => {
      result.current.onCheckAllCartItems();
    });

    expect(result.current.isAllChecked).toBeFalsy();
  });
  it('전체 선택된 상태에서 특정 상품의 선택을 해제하면, 전체 선택이 해제된다.', async () => {
    const { result } = renderHook(
      () => {
        return useCheckCartItem();
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
      result.current.onCheckAllCartItems();
    });

    console.log(result.current.isAllChecked);

    await waitFor(() => {
      result.current.onCheckCartItem(INITIAL_ITEMS[0].id);
    });

=======
  it('초기 상품들은 모두 체크 되지 않은 상태다.', () => {
    // when
    const { result } = executeCartItemRenderHook(() => useCheckCartItem());

    // then
    expect(result.current.isAllChecked).toBe(false);
  });
  it('장바구니 목록 속 특정 상품의 체크 박스를 선택하면 해당 상품은 주문 목록에 추가된다.', () => {
    // given
    const ID = INITIAL_ITEMS[0].id;

    // when
    const { result } = executeCartItemRenderHook(() => useCheckCartItem());

    act(() => {
      result.current.onCheckCartItem(ID);
    });

    // then
    expect(result.current.isChecked(ID)).toBeTruthy();
  });

  it('상품을 전체 선택 할 경우, 모든 상품 들이 선택 된다.', () => {
    // when
    const { result } = executeCartItemRenderHook(() => useCheckCartItem());

    act(() => {
      result.current.onCheckAllCartItems();
    });

    // then
    expect(result.current.isAllChecked).toBeTruthy();
  });

  it('전체 선택을 해제하면, 장바구니 모든 상품의 선택이 해제된다.', () => {
    // when
    const { result } = executeCartItemRenderHook(() => useCheckCartItem());

    act(() => {
      result.current.onCheckAllCartItems();
    });

    act(() => {
      result.current.onCheckAllCartItems();
    });

    // then
    expect(result.current.isAllChecked).toBeFalsy();
  });
  it('전체 선택된 상태에서 특정 상품의 선택을 해제하면, 전체 선택이 해제된다.', () => {
    // when
    const { result } = executeCartItemRenderHook(() => useCheckCartItem());

    act(() => {
      result.current.onCheckAllCartItems();
    });

    act(() => {
      result.current.onCheckCartItem(INITIAL_ITEMS[0].id);
    });

    // then
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
    expect(result.current.isAllChecked).toBeFalsy();
  });
});
