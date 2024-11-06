if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("test ", reg))
    .catch((err) => console.error("testaaa ", err));
} else {
  console.log("no hay serviceWorker");
}
