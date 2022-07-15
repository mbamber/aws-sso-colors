# AWS SSO Colors

AWS SSO Colors is a Chrome extension that adds a colorful prompt depending on your SSO login profile.

## Setup as Unpacked Extension

* Download and unzip
* Go to `chrome://extensions/` and check the box for "Developer Mode"
* Click "Load Unpacked"
* Locate the plugin folder
* Once installed, go to the plugin settings and update the configuration file. An example format is given below (remember to adjust to your own needs):

```json
{
  "accountId1": {
    "roleA": "#000000",
    "roleB": "#111111",
  },
  "accountId2": {
    "roleA": "#222222",
    "roleB": "#333333",
  }
}
```
