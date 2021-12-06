const serverRequest = async (
  directory,
  options = { credentials: "include" }
) => {
  const host =
    window.location.hostname === "localhost"
      ? "http://localhost:4000"
      : "http://api.teamlistener.com";
  const response = await fetch(`${host}${directory}`, options);
  const json = await response.json();
  return json;
};

export { serverRequest };
