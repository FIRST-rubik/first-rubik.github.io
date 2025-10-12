# Troubleshooting

## Flashing Ubuntu then manually Github

1. [Flash The Device](https://www.thundercomm.com/rubik-pi-3/en/docs/rubik-pi-3-user-manual/1.0.0-u/Update-Software/3.2.Flash-using-Qualcomm-Launcher)
   
### Install
:::note
This installation requires an internet connection
:::

### Dependencies

Install libraries for the Qualcomm Neural Network (QNN)

```
sudo add-apt-repository ppa:ubuntu-qcom-iot/qcom-noble-ppa
sudo apt-get install libqnn1
```
### Installing PhotonVision

```
wget -q https://raw.githubusercontent.com/PhotonVision/photon-image-modifier/main/install.sh -O ./real_install.sh
chmod +x ./real_install.sh
sudo ./real_install.sh
rm ./real_install.sh
systemctl restart photonvision.service
```

### Updating PhotonVision

Go to the [most recent dev release](https://github.com/PhotonVision/photonvision/releases/tag/Dev) and download the jar ending in linuxarm64. Upload it using the `Offline Update` feature in PhotonVision settings.

### Additional Resources

[PhotonVision Discord](https://discord.gg/wYxTwym)
[PhotonVision Docs](https://docs.photonvision.org)

## Keyboard and Mouse aren't working:
1. Power Supply not providing enough power to power the board + peripherals.