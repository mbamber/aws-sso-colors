
window.onload = function () {
    let pageConfig = document.getElementById('configArea');
    let saveBtn = document.getElementById('saveBtn');

    chrome.storage.local.get('config', (c) => {
        pageConfig.value = JSON.stringify(c.config, null, 2);
    })

    saveBtn.onclick = function () {
        try {
            cfg = JSON.parse(pageConfig.value)
        } catch (e) {
            alert("Provided input is not valid JSON")
            return
        }
        console.log('saving config:', cfg);
        chrome.storage.local.set({ 'config': cfg })
    }
}
