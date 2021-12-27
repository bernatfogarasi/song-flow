const serverHost =
  window.location.hostname === "localhost"
    ? "http://localhost:4000"
    : "http://api.teamlistener.com";

const serverHostSocket =
  window.location.hostname === "localhost"
    ? "ws://localhost:4000"
    : "ws://api.teamlistener.com";

const serverRequest = async (
  directory,
  options = { credentials: "include" }
) => {
  const response = await fetch(`${serverHost}${directory}`, options);
  try {
    const json = await response.json();
    return json;
  } catch (error) {
    return { error: "response not json" };
  }
};

export { serverHost, serverHostSocket, serverRequest };
