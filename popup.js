const guitarCheckbox = document.getElementById("guitarCheck");
const bassCheckbox = document.getElementById("bassCheck");
const drumCheckbox = document.getElementById("drumCheck");

guitarCheckbox.addEventListener("change", function() {
    chrome.storage.sync.set({guitarChecked: this.checked});
});
bassCheckbox.addEventListener("change", function() {
    chrome.storage.sync.set({bassChecked: this.checked});
});
drumCheckbox.addEventListener("change", function() {
    chrome.storage.sync.set({drumChecked: this.checked});
});

chrome.storage.sync.get('guitarChecked', function(data) {
    if (typeof data.guitarChecked !== 'undefined') {
        guitarCheckbox.checked = data.guitarChecked;
    }
    else {
        guitarCheckbox.checked = true;
    }
});

chrome.storage.sync.get('bassChecked', function(data) {
    if (typeof data.bassChecked !== 'undefined') {
        bassCheckbox.checked = data.bassChecked;
    }
    else {
        bassCheckbox.checked = true;
    }
});

chrome.storage.sync.get('drumChecked', function(data) {
    if (typeof data.drumChecked !== 'undefined') {
        drumCheckbox.checked = data.drumChecked;
    }
    else {
        drumCheckbox.checked = true;
    }
});