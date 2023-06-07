// chrome.tabs.onUpdated.addListener(
//   function(tabId, changeInfo, tab) {
//     // read changeInfo data and do something with it
//     // like send the new url to contentscripts.js
//     console.log("render")

//     if (changeInfo.url) {
//       // chrome.tabs.sendMessage( tabId, {
//       //   message: 'hello!',
//       //   url: changeInfo.url
//       // })
//       console.log(changeInfo.url)
//     }
//   }
// );

// chrome.tabs.onUpdated.addListener(
//   function(tabId, changeInfo, tab) {
//     // read changeInfo data and do something with it
//     // like send the new url to contentscripts.js
//     console.log("render")

//     if (changeInfo.url) {
//       chrome.tabs.sendMessage( tabId, {
//         message: 'hello!',
//         url: changeInfo.url
//       })
//       console.log(changeInfo.url)
//     }
//   }
// );

chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    // changeInfo object: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated#changeInfo
    // status is more reliable (in my case)
    // use "alert(JSON.stringify(changeInfo))" to check what's available and works in your case
    if (changeInfo.status === 'complete') {
      console.log(changeInfo)
      chrome.tabs.sendMessage(tabId, {
        message: 'TabUpdated'
      });
    }
  })
});