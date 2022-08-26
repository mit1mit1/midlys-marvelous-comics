export const maxComicNumber = 2;

export const getComicNumber = () => {
  const comicParam = new URLSearchParams(window.location.search).get("comic");
  let comic = maxComicNumber;
  if (
    comicParam?.toLowerCase() === "intro" ||
    parseInt(comicParam) === 1 ||
    !comicParam
  ) {
    comic = 1;
  }
  if (
    comicParam?.toLowerCase() === "sydneyEvangelical" ||
    parseInt(comicParam) === 2
  ) {
    comic = 2;
  }
  return comic;
};

export const setComicNumber = (comic) => {
  if (comic < 1) {
    comic = 1;
  }
  if (comic > maxComicNumber) {
    comic = maxComicNumber;
  }
  if ("URLSearchParams" in window) {
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set("comic", comic);
    window.location.search = searchParams.toString();
  }
};
