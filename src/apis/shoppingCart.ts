<<<<<<< HEAD
import { CartItem } from '@appTypes/shoppingCart';
import HTTPError from '@errors/HTTPError';
import { generateBasicToken } from '@utils/auth';

const API_URL = process.env.VITE_API_URL as string;
const USER_ID = process.env.VITE_USER_ID as string;
const USER_PASSWORD = process.env.VITE_USER_PASSWORD as string;

export async function fetchCartItems(): Promise<CartItem[]> {
  const token = generateBasicToken(USER_ID, USER_PASSWORD);

  const response = await fetch(`${API_URL}/cart-items`, {
    method: 'GET',
    headers: { Authorization: token },
  });

  if (!response.ok) {
    throw new HTTPError(response.status, 'Failed to fetch products');
  }

  const data = await response.json();
  return data.content;
}
/**
 * @param {number} productId : 상품 id
 * @param {number} quantity : 변경될 수량
 */
export async function fetchCartItemCount(productId: number, quantity: number) {
  const token = generateBasicToken(USER_ID, USER_PASSWORD);

  const response = await fetch(`${API_URL}/cart-items/${productId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({ quantity }),
  });

  if (!response.ok) {
    throw new HTTPError(response.status, 'Failed to add cart item');
  }
}

export async function fetchDeleteCartItem(productId: number) {
  const token = generateBasicToken(USER_ID, USER_PASSWORD);

  const response = await fetch(`${API_URL}/cart-items/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  if (!response.ok) {
    throw new HTTPError(response.status, 'Failed to delete cart item');
=======
import ApiClient from '@apis/ApiClient';
import HTTPError from '@errors/HTTPError';

export default class ShoppingCartFetcher {
  private static validateResponse(response: Response, errorMessage: string) {
    if (!response.ok) {
      throw new HTTPError(response.status, errorMessage);
    }
  }

  static async getCartItems() {
    const response = await ApiClient.get('cart-items');

    ShoppingCartFetcher.validateResponse(response, '장바구니 목록을 불러오는데 실패했습니다.');

    const data = await response.json();

    return data.content;
  }

  static async patchCartItemCount(productId: number, quantity: number) {
    const response = await ApiClient.patch(`cart-items/${productId}`, { quantity });

    ShoppingCartFetcher.validateResponse(response, '수량 변경을 실패했습니다.');
  }

  static async deleteCartItem(id: number) {
    const response = await ApiClient.delete(`cart-items/${id}`);

    ShoppingCartFetcher.validateResponse(response, '장바구니 아이템을 삭제하지 못했습니다.');
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
  }
}
