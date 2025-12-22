---
sidebar_position: 2
---

# AI & Object Detection Basics

A quick primer on the technology powering your robot's vision system.

## What is Machine Learning?

**Traditional Programming:**
```
IF red AND circular THEN game_piece
```
You define every rule. Struggles with variations.

**Machine Learning:**
```
Here are 100 images of game pieces...
Model learns: "These patterns = game piece"
```
The model learns from examples and generalizes to new situations.

## What is YOLO?

**YOLO (You Only Look Once)** is a real-time object detection algorithm perfect for robotics.

### How It Works
1. **Single Pass**: Processes entire image at once (hence "You Only Look Once")
2. **Simultaneous Detection**: Finds objects and classifies them in one step

### Why YOLO for Robotics?
- ⚡ **Fast**: No lag between detection and action
- 🎯 **Accurate**: Detects multiple objects with high precision
- 💻 **Efficient**: Optimized for embedded systems like RUBIK Pi
