export const comicList = ["intro"];

export const getComicNumber = () => {
  const comicParam = new URLSearchParams(window.location.search).get("comic");
  if (
    comicParam &&
    parseInt(comicParam) >= 0 &&
    parseInt(comicParam) < comicList.length
  ) {
    return comicParam;
  }
  if (comicList.includes(comicParam?.toLowerCase())) {
    return comicList.indexOf(comicParam.toLowerCase());
  }
  return comicList.length - 1;
};

export const setComic = (comicNumber) => {
  comicNumber = Math.floor(comicNumber);
  if (comicNumber < 0) {
    comicNumber = 0;
  }
  if (comicNumber > comicList.length - 1) {
    comicNumber = comicList.length - 1;
  }
  if ("URLSearchParams" in window) {
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set("comic", comicList[comicNumber]);
    window.location.search = searchParams.toString();
  }
};
