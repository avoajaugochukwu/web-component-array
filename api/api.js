const readJson = async () => {
  return await fetch("/api/data.json")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .catch((error) => console.error(error));
};

export default readJson;
