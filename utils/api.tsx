import { API_URL, STRAPI_API_TOKEN } from './utils';

/*** fetch data sample ***
const [data, setData] = useState(null);
useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = async () => {
  const { data } = await fetchDataFromApi('/api/products?populate=* ');
  console.log(data);
};
*/
type SignInRequestBody = {
  email: string;
  password: string;
};

type SignUpRequestBody = {
  email: string;
  password: string;
  userName: string;
};

export const signUp = async (body: SignUpRequestBody) => {
  console.log(body);
  try {
    const headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
    };

    const value = {
      email: body.email,
      password: body.password,
      username: body.userName,
    };

    const options = {
      method: 'POST',
      headers: headersList,
      body: JSON.stringify(value),
    };

    const res = await fetch(`${API_URL}/api/auth/local/register`, options);
    const session = await res.json();
    if (res.ok === true) {
      return session;
    } else {
      throw new Error(session.error.message);
    }
  } catch (error) {
    return error;
  }
};

export const signIn = async (body: SignInRequestBody) => {
  console.log(body);
  try {
    const headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
    };

    const value = {
      identifier: body.email,
      password: body.password,
    };

    const options = {
      method: 'POST',
      headers: headersList,
      body: JSON.stringify(value),
    };

    const res = await fetch(`${API_URL}/api/auth/local`, options);
    const session = await res.json();
    if (res.ok === true) {
      return session;
    } else {
      throw new Error(session.error.message);
    }
  } catch (error) {
    return error;
  }
};

export const fetchDataFromApi = async (endpoint: string) => {
  const options = {
    method: 'GET',
  };
  try {
    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();
    console.log('success');
    return data;
  } catch (error) {
    return error;
  }
};

// type of body need to change
export const postDataFromApi = async (endpoint: string, body: any) => {
  // need to jwt token
  const token = process.env.NEXT_PUBLIC_SAMPLE_JWT;
  console.log(body);

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: body,
  };

  try {
    const res = await fetch(`${API_URL}${endpoint}`, options);
    console.log(res);
    if (res.ok === true) {
      console.log('success');
    }

    return res.ok;
  } catch (error) {
    console.log(error);
    return error;
  }
};


type AddToCartRequestBody = {
  itemId: string;
  quantity: number;
};

type UpdateCartItemRequestBody = {
  itemId: string;
  quantity: number;
};

type DeleteCartItemRequestBody = {
  itemId: string;
};


// Add Item to Cart API
export const addToCart = async (body: AddToCartRequestBody) => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify(body),
  };

  try {
    const res = await fetch(`${API_URL}/api/cart`, options);
    return res.json();
  } catch (error) {
    return error;
  }
};

// Get Items in Cart API
export const getCartItems = async () => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(`${API_URL}/api/cart`, options);
    
    if (!res.ok) {
      const errorData = await res.json(); 
      throw new Error(`An error occurred: ${errorData.message || res.statusText}`);
    }

    return res.json();
  } catch (error: any) { 
    console.error(error);
    return { error: error.message || 'An unknown error occurred' };
  }
};


// Update the quantity of Item
export const updateCartItem = async (body: UpdateCartItemRequestBody) => {
  const options = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify(body),
  };

  try {
    const res = await fetch(`${API_URL}/api/cart`, options);
    return res.json();
  } catch (error) {
    return error;
  }
};

// Delete specific Item from Cart API
export const deleteCartItem = async (body: DeleteCartItemRequestBody) => {
  const options = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify(body),
  };

  try {
    const res = await fetch(`${API_URL}/api/cart`, options);
    return res.json();
  } catch (error) {
    return error;
  }
};

// Delete all items from cart API
export const clearCart = async () => {
  const options = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(`${API_URL}/api/cart/clear`, options);
    return res.json();
  } catch (error) {
    return error;
  }
};
