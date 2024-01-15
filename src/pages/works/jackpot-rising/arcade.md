---
layout: "@layouts/LayoutWork.astro"
# ---
group_id: 2
group: Jackpot Rising
title: Arcade
website: ""
accent: "#dc334a"
thumbnail: /works/jr-arcade.png
videos: [{ src: https://www.youtube.com/embed/MsQ7q6vdTOo }]
screenshots:
  [
    {
      src: /screenshots/jackpot-rising/arcade/001.png,
      caption: The skeeball device,
    },
    {
      src: /screenshots/jackpot-rising/arcade/002.png,
      caption: The puttskee device,
    },
  ]
---

One of the key efforts at Jackpot Rising included integrating our tournament platform with physical game cabinets, including skeeball, basketball, and mini-golf. I designed and implemented the on-screen UI and connection mechanisms, powered by Android Things running on a Raspberry Pi. Players could walk up to the device, sign into a web-based client, scan a QR code, and then immediately start playing the game. The web client featured a WebGL-based camera and utilized websockets to sync to the device. These arcade devices were featured at Dreamhack Dallas 2019 and the Dallas Cattle Baron’s Ball.
