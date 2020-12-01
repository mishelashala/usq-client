export const MemberService = () => {
  const getAll = () => {
    return new Promise((resolve, reject) => {
      fetch("http://127.0.0.1:3000/api/v1/members", {
        method: "GET",
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          resolve(data ? JSON.parse(data) : {});
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return { getAll };
};
