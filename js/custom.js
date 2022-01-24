document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    document.querySelectorAll("img").forEach((img) => {
      img.dataset.oldSrc = img.src;
      const src = img.src.replace(window.location.origin, "");
      const renderedWidth = img.scrollWidth;
      const renderedHeight = img.scrollHeight;
      img.src = `https://ik.imagekit.io/puka/tr:w-${renderedWidth},h-${renderedHeight}${src}`;
      img.onerror = () => {
        img.src = img.dataset.oldSrc;
        img.dataset.oldSrc = "";
      };
    });
  }
});
