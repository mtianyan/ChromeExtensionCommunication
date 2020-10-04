chrome.runtime.sendMessage({ type: "getOneCookie", value: "oschina"}, function (response) {
  console.log(response)
                  
    return response === 'csv';
});