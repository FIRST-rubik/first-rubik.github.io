---
sidebar_position: 2
---

# Requirements

### Required Active Fan Cooler

The Rubik Pi takes the same active fan cooler as the Raspberry Pi.

:::warning
Without this you risk a chance of frying the Rubik Pi [Amazon Link](https://a.co/d/aFozNPB)
:::


![RPI_Cooler](./img/rpi_cooler.png)


When using RUBIK Pi 3 in high-load or high-performance scenarios, use cooling measures to ensure stable performance of the device. Otherwise, performance may fluctuate due to high CPU temperatures.
:::

### Install the fan

1. Paste the two thermal pads to the corresponding positions on RUBIK Pi 3.

   ![](./img/20250220-095205.jpg)


2. Connect the fan cable.

  :::warning
  Make sure you orient the fan closest to the fan port correctly. 
  The orientation is shown in the image below.
  :::

   ![](./img/20250314-155449.jpg)

3. Install the fan onto the RUBIK Pi 3 and secure it in place.
   
   ![](./img/20250824-223947.jpg)

   ![](./img/20250824-223955.jpg)

  :::warning
  
  We recommend that you do not remove the fan after installing it on your RUBIK Pi 3. Removal will cause the fan's push pins and thermal pads to degrade and may result in product damage. If the push pins are damaged, deformed, or not clipping securely, stop using the fan.
  :::

### Notes about connecting the camera to the USB 3.0 ports

The stacked USB 3.0 ports share a single PCIe Gen 2 x1 link through the Renesas UPD720201, so they cannot both sustain full USB 3.0 bandwidth at the same time. Those two stacked USB 3.0 ports sit on the same USB bus. Two high resolution cameras plugged into both ports will contend for the same bus, and one camera can fail to enumerate or drop out under load.

### Caution about the vertical USB-A port

The vertical USB-A port can cause camera flip flopping during enumeration, where the device appears as one of the two cameras and then switches. Unless you are willing to do additional device mapping or other workarounds, it is not worth the time to rely on that port for camera setups.
