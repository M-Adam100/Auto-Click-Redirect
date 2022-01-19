chrome.runtime.onInstalled.addListener(() => {
	console.log("Extension Installed")
});

chrome.action.onClicked.addListener(function (tab) { 
    chrome.tabs.create({
        url: 'https://www.autoclicker.website'
    })
});
