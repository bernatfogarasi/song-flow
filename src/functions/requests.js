const serverRequest = async (directory, options = {}) => {
  options.credentials = "include";
  options.redirect = "follow";
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_ORIGIN}${directory}`,
    options
  );
  try {
    const json = await response.json();
    return json;
  } catch (error) {
    return { error: "response not json" };
  }
};

export { serverRequest };
