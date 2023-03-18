const getProductsObj = () => {
  const products = [
    {
      type: "simple",
      id: 1,
      sku: "s1",
      title: "Product 1",
      regular_price: {
        currency: "USD",
        value: 27.12,
      },
      image: "/images/1.png",
      brand: 9,
    },
    {
      type: "simple",
      id: 2,
      sku: "s2",
      title: "Product 2",
      regular_price: {
        currency: "USD",
        value: 36.87,
      },
      image: "/images/2.png",
      brand: 8,
    },
    {
      type: "simple",
      id: 3,
      sku: "s3",
      title: "Product 3",
      regular_price: {
        currency: "USD",
        value: 28.91,
      },
      image: "/images/3.png",
      brand: 2,
    },
    {
      type: "simple",
      id: 4,
      sku: "s4",
      title: "Product 4",
      regular_price: {
        currency: "USD",
        value: 41.23,
      },
      image: "/images/4.png",
      brand: 7,
    },
    {
      type: "simple",
      id: 5,
      sku: "s5",
      title: "Product 5",
      regular_price: {
        currency: "USD",
        value: 88.0,
      },
      image: "/images/5.png",
      brand: 3,
    },
    {
      type: "simple",
      id: 6,
      sku: "s6",
      title: "Product 6",
      regular_price: {
        currency: "USD",
        value: 127.41,
      },
      image: "/images/6.png",
      brand: 6,
    },
    {
      type: "simple",
      id: 7,
      sku: "s7",
      title: "Product 7",
      regular_price: {
        currency: "USD",
        value: 123.4,
      },
      image: "/images/7.png",
      brand: 5,
    },
    {
      type: "simple",
      id: 8,
      sku: "s8",
      title: "Product 8",
      regular_price: {
        currency: "USD",
        value: 92.32,
      },
      image: "/images/8.png",
      brand: 1,
    },
    {
      type: "simple",
      id: 9,
      sku: "s9",
      title: "Product 9",
      regular_price: {
        currency: "USD",
        value: 53.4,
      },
      image: "/images/9.png",
      brand: 2,
    },
  ];

  const filterItem = (offset, filterQuery) => {
    let filteredProducts = [];
    if (filterQuery.brands.length !== 0) {
      filterQuery.brands.forEach((brand) => {
        filteredProducts = [
          ...filteredProducts,
          ...products.filter((x) => x.brand === brand),
        ];
      });
    } else {
      filteredProducts = products;
    }

    if (filterQuery.price.length !== 0) {
      filteredProducts = filteredProducts.filter(
        (x) => x.regular_price.value > filterQuery.price[0]
      );
      console.log(filterQuery.price);
      filteredProducts = filteredProducts.filter(
        (x) => x.regular_price.value < filterQuery.price[1]
      );
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filteredProducts.slice(offset, offset + 6));
      }, 500);
    });
  };

  const get = (offset) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.slice(offset, offset + 6));
      }, 500);
    });

  const getMax = () => {
    return Math.max(...products.map((x) => x.regular_price.value));
  };

  return { get, filterItem, getMax };
};

export default getProductsObj;
