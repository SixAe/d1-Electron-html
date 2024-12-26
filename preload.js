console.log(process.versions);
window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };
  for (const i of ["chrome", "node", "electron"]) {
    replaceText(`${i}-version`, process.versions[i]);
  }
});
