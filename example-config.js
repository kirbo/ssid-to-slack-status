const config = {
  token: 'slack-token-here',    // Get your token here: https://ssid-to-slack-status.tunkkaus.com/
  forceUpdate: false,           // Should this script force update the status based on the SSID (overwrites manually set custom statuses)
  iface: null,                  // Network interface. Chooses a random WiFi interface if set to null
};

const ssids = [
  {
    ssid: 'ssid of home',       // Name of the WiFi SSID, case-insensitive
    status: 'Working remotely', // Status text you want to set
    icon: ':house_with_garden:' // Emoji you want to set
  },
  {
    ssid: 'ssid of work',
    status: 'At the office',
    icon: ':office:'
  },
  {
    ssid: 'metro',
    status: "In metro",
    icon: ':metro:'
  },
];

module.exports = {
  config,
  ssids,
};