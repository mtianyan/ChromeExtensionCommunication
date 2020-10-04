chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        switch (message.type) {
            case 'getOneCookie':
                var response = "getFormatOption" + message.value;
                chrome.cookies.getAllCookieStores(cookieStores => {
                    cookieStores.forEach(store => {chrome.cookies.getAll({storeId: store.id}, cookies => {
                    const data = cookies.filter(c => {
                        if (c.domain.match(message.value)) {
                return true
              }return false
                    })
                    response = data;
                    sendResponse(response)
                    })});

                })
                return true;
                // sendResponse(response)
                break;
            default:
                console.error('Unrecognised message: ', message);
                sendResponse("Unrecognised message:");
        }
    }
);