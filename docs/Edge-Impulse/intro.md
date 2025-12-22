---
sidebar_position: 1
---

# Why Train Your Own Models?

Using pre-trained AI models might seem convenient, but training custom models gives your FIRST team a competitive edge.

## The Problem with Generic Models

Every robot is unique. A model trained on someone else's robot won't work optimally on yours because:

### 🎥 Camera Differences
- **Mounting Position**: Your camera's height and angle are unique
- **Hardware Variations**: Different sensors capture images differently (color, exposure, distortion)
- **Lens Characteristics**: Each camera sees the world slightly differently

### ⚡ Performance Benefits
- **Fewer False Positives**: Waste less autonomous time on incorrect detections
- **Faster Inference**: Optimized for exactly what you need to detect
- **Tunable Confidence**: Adjust thresholds for your strategy

## Optional: Lighting Calibration

:::tip Advanced Technique
While you *can* capture training images in specific competition venue which can help with variations in backgrounds, carpet colors, and lighting  **this is usually overkill**. YOLO-Pro handles typical lighting variations well. Focus on diverse angles and distances instead—only worry about lighting if you're experiencing actual detection failures. 
:::

## The Bottom Line

**Your robot → Your camera → Your model**

Custom training means your robot sees the world the way it actually experiences it. This is what separates good vision systems from great ones.

---

**Ready to get started?** Continue to learn about AI basics and follow our step-by-step tutorial.
