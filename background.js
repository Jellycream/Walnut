chrome.runtime.onInstalled.addListener(function () {
    // save state to local storage
    chrome.storage.sync.set({
        'walnut-state': true
    }, function () {
        // Notify that we saved.
        console.log('state saved');
    });

    // save accent colour to local storage
    chrome.storage.sync.set({
        'walnut-accent': 'rgb(187, 134, 252)'
    }, function () {
        // Notify that we saved.
        console.log('accent colour saved');
    });

    // save btn colour to local storage
    chrome.storage.sync.set({
        'walnut-btn': 'rgb(55, 0, 179)'
    }, function () {
        // Notify that we saved.
        console.log('btn colour saved');
    });

    // save btn-hover colour to local storage
    chrome.storage.sync.set({
        'walnut-btn-hover': 'rgb(90, 96, 231)'
    }, function () {
        // Notify that we saved.
        console.log('btn-hover colour saved');
    });
});