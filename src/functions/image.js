export const sourceBuffer = (data, contentType = "image/png") => {
  return `data:${contentType};base64,${Buffer.from(data).toString("base64")}`;
};
