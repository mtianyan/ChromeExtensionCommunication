var ResMsg = function(event) {
    if (event.source != window) {
        return;
    }
    if (event.data.type && (event.data.type == "GET_VERSION")) {
        // var version = chrome.app.getDetails().version
        window.postMessage({ type: "Give_Your_Version", value: chrome.runtime.getManifest().version }, "*");
        console.log(chrome.runtime.getManifest().version)
    }
    if (event.data.type && (event.data.type == "GET_ONE_COOKIE")) {
        chrome.runtime.sendMessage({ type: "getOneCookie", value: event.data.value}, function (response) {
  console.log(response)
  window.postMessage({ type: "Give_Your_ONE_COOKIE", value: response }, "*");
                  
    return response === 'csv';
});
        console.log(event.data.value+"_cookie")
    }
}
window.addEventListener("message", ResMsg, false);