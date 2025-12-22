---
sidebar_position: 5
---

# Best Practices & Troubleshooting

Essential tips for creating effective models and solving common issues.

---

## 📊 Data Collection

### Diversity is Key

Capture images representing the full range of conditions:

| Priority | What to Capture | Why |
|----------|----------------|-----|
| 🎯 **High** | Various angles (high, low, side) | Different robot viewpoints |
| 🎯 **High** | Multiple distances (near, medium, far) | Detection at all ranges |
| 🎯 **High** | Different orientations | Objects appear rotated |
| 🎯 **High** | Partial occlusions | Real-world scenarios |
| 🎯 **High** | Background variations | Different field locations |
| ⚠️ **Low** | Lighting conditions | YOLO-Pro handles this well* |

*Only capture specific lighting if experiencing actual detection failures.

:::tip Quality Over Quantity
**100 diverse images > 500 similar images**
:::

### Dataset Structure

```
✅ Good Dataset:
├── Training (80%)
│   ├── Multiple angles & distances
│   ├── Various orientations
│   └── Different conditions
└── Testing (20%)
    └── Never seen during training

❌ Bad Dataset:
├── Training (80%)
│   └── All similar images
└── Testing (20%)
    └── Images from training set
```

---

## 🎓 Model Training

### Start Simple

1. Use **default parameters**
2. Train for **100 epochs** first
3. Only increase complexity if needed

**Why?** Simple models train faster and are easier to debug.

### Monitor Overfitting

| Metric | Training | Testing | Status |
|--------|----------|---------|--------|
| Accuracy | 95%+ | &lt;70% | ❌ Overfitting |
| Accuracy | 85% | 82% | ✅ Good |

**Solutions:**
- Add more diverse data
- Enable data augmentation
- Reduce training epochs

### Data Augmentation Guide

| Augmentation | Setting | Use When |
|--------------|---------|----------|
| **Brightness** | ±20% | Always recommended |
| **Rotation** | ±15° | Objects can tilt |
| **Zoom** | 90-110% | Distance varies |
| **Flip** | Horizontal/Vertical | Objects can flip |

:::warning Don't Over-Augment
Keep variations realistic. A cone won't appear upside down! (you may not want to pick it up anyways if it is ;))
:::

### Training Parameters

```
Epochs:
├── Start: 100
├── Good performance: Stop
├── Underfitting: 200-300
└── Overfitting: 50-75

Learning Rate:
├── Default: 0.001 (usually optimal)
├── Unstable: 0.0001
└── Too slow: 0.005 (careful!)
```

---


## 🔧 Troubleshooting

| Issue | Symptoms | Solutions |
|-------|----------|-----------|
| **Low Accuracy (&lt;70%)** | Many missed detections, poor test performance | • Add diverse training images (focus on failures)<br/>• Check label quality and consistency<br/>• Increase training epochs (200-300)<br/>• Check image quality (blur, focus, lighting) |
| **False Positives** | Detections where no objects exist | • Increase confidence threshold (0.5 → 0.6)<br/>• Add negative examples (images without objects)<br/>• Tighten bounding boxes in training<br/>• Check for labeling inconsistencies |
| **Missing Objects** | Objects clearly visible but not detected | • Lower confidence threshold (0.5 → 0.3)<br/>• Check if objects are too small<br/>• Verify camera settings (focus, exposure)<br/>• Add more examples of missed object types |

---

## 📚 Resources

### Official Documentation
- [Edge Impulse Docs](https://docs.edgeimpulse.com/)

### Tools
- [Netron](https://netron.app/) - Visualize models

---

## 💡 Final Thoughts

**Success in FIRST Robotics AI:**

1. 🎯 **Systematic Approach** - Follow best practices consistently
2. 🔄 **Continuous Iteration** - Each competition improves your model

:::tip Remember
**The goal isn't perfection—it's continuous improvement.**

Each iteration makes your system better. Each competition provides valuable data for the next version.

Good luck, and may your detections be accurate and your inference be fast! 🤖
:::
