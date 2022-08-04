const convertUrlToId: (url: string) => number = (url) => {
  const arr = url.split("/");
  return parseInt(arr[arr.length - 1]);
};

export { convertUrlToId };
