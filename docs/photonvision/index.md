---
sidebar_position: 2
---

# Dependencies

Install libraries for the Qualcomm Neural Network (QNN)

```
sudo add-apt-repository ppa:ubuntu-qcom-iot/qcom-noble-ppa
sudo apt-get install libqnn1
```
# Installing PhotonVision

```
wget -q https://raw.githubusercontent.com/PhotonVision/photon-image-modifier/main/install.sh -O ./real_install.sh
chmod +x ./real_install.sh
sudo ./real_install.sh
rm ./real_install.sh
systemctl restart photonvision.service
```

# Updating PhotonVision

Download [this jar](https://github.com/PhotonVision/photonvision/actions/runs/16791541485/artifacts/3706020580) and upload it using the `Offline Update` feature in PhotonVision settings.

# Additional Resources

[PhotonVision Discord](https://discord.gg/wYxTwym)
[PhotonVision Docs](https://docs.photonvision.org)
