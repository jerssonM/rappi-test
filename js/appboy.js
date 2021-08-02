const idsButtons = ["button-next", "button-want", "button-not-want"];

window.addEventListener(
  "ab.BridgeReady",
  () => {
    idsButtons.forEach((id) => {
      document.getElementById(id).addEventListener(
        "click",
        () => {
          appboyBridge.logCustomEvent("Event: " + id);
          appboyBridge.logClick("Click: " + id);
          appboyBridge.closeMessage();
        },
        false
      );
    });
  },
  false
);
