"use client";

import React from "react";
import { RangeSlider } from "@/components/ui/range-slider";

export interface MoneyRangeSliderProps {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChangeAction: (value: [number, number]) => void;
}

export function MoneyRangeSlider({ min, max, step = 1000, value, onChangeAction }: MoneyRangeSliderProps) {
  return (
    <div className="double-range-slider">
      <div className="value-display flex justify-between mb-2">
        <span className={"flex-center gap-0.5"}>
          <span>از</span>
          <span className={"text-green-600"}>{value[0].toLocaleString("fa-IR")} </span>
          <span>تومان</span>
        </span>
        <span className={"flex-center gap-0.5"}>
          <span>تا</span>
          <span className={"text-green-600"}>{value[1].toLocaleString("fa-IR")} </span>
          <span>تومان</span>
        </span>
      </div>

      <RangeSlider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChangeAction}
        trackClassName="slider-track bg-gray-300 h-2"
        thumbClassName="slider-thumb w-4 h-4 bg-white border border-gray-400 rounded-full"
        withTracks={true}
      />
    </div>
  );
}
