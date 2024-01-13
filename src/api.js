export const getUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: 'Hoang Trung Hoa',
          age: 20,
          address: 'Nam Dinh',
        },
        status: 200,
      });
    }, 2000);
  });
};
