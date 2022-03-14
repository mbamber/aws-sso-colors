function getColor(data, account, role) {
    for (const a in data) {
        if (account === a) {
            for (const r in data[a]) {
                if (role === r) {
                    return data[a][r];
                }
            }
        }
    }
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function getTextColor(c) {
    const rgb = hexToRgb(c);
    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
    return (luminance > 0.5 ? '#000000' : '#FFFFFF');
}

chrome.storage.local.get('config', (c) => {
    const config = c.config;
    console.log('loaded config:', config);

    // Lookup the current role
    const navMenuButton = document.querySelector('span[data-testid=awsc-nav-account-menu-button]');
    const titleStr = navMenuButton.children[0].innerText;
    const role = titleStr.split('/')[0];
    console.log('currently using role:', role)

    // Lookup the current account ID
    const accountDetailMenu = document.querySelector('div[data-testid=account-detail-menu]');
    const accountID = accountDetailMenu.children[0].children[0].children[1].innerText.replaceAll('-', '');

    let navBar = document.querySelector('span[data-testid=awsc-nav-account-menu-button]');
    const bg = getColor(config, accountID, role);
    navBar.style.backgroundColor = bg;
    navBar.style.color = getTextColor(bg);
    navBar.style.borderRadius = '20px'
})
