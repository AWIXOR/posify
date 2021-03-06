export default {
  auth: {
    error: null,
    loading: false,
    verifyEmail: {
      error: null,
      loading: false,
    },
    recoverPassword: {
      error: null,
      loading: false,
    },
    profileEdit: {
      error: null,
      loading: false,
    },
    deleteUser: {
      loading: false,
      error: null,
    },
  },
  product: {
    items: [],
    error: null,
    loading: false,
    deleteProduct: {
      error: null,
      loading: false,
    },
    initialiseProducts: {
      error: null,
      loading: false,
    },
  },
  database: {
    error: null,
    loading: false,
  },
  category: {
    items: [],
    error: null,
    loading: false,
    deleteCategory: {
      error: null,
      loading: false,
    },
    initialiseCategories: {
      error: null,
      loading: false,
    },
  },
  sales: {
    items: [],
    error: null,
    loading: false,
  },
  cart: {
    items: [],
    itemsInCart: 0,
    totalToPay: 0,
  },
};
