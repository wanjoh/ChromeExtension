chrome.action.onClicked.addListener((tab) => {
    window.alert('clcik'); 
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ["scripts/content.js"]
    });

});