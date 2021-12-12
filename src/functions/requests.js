const serverHost =
  window.location.hostname === "localhost"
    ? "http://localhost:4000"
    : "http://api.teamlistener.com";

const serverRequest = async (
  directory,
  options = { credentials: "include" }
) => {
  const response = await fetch(`${serverHost}${directory}`, options);
  const json = await response.json();
  return json;
};

export { serverHost, serverRequest };
