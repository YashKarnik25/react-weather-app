#!/bin/bash
echo "Enter Principal:"; read p
echo "Rate (%):"; read r
echo "Time (years):"; read t
si=$((p * r * t / 100))
echo "Simple Interest = $si"
