import React, { useState, useRef, useCallback, useEffect } from "react";
import { SlidersHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = "Illustrative concept before transformation",
  afterAlt = "Finished interior execution design",
  beforeLabel = "Bare Shell (Illustrative Concept)",
  afterLabel = "Finished Space (Design Vision)",
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <div
      ref={containerRef}
      className="slider-container"
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        if (e.touches.length > 0) handleMove(e.touches[0].clientX);
      }}
      role="slider"
      tabIndex={0}
      aria-label="Interactive before and after comparison slider. Use left and right arrow keys to adjust."
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      onKeyDown={handleKeyDown}
      style={{ outlineOffset: "4px" }}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="slider-img"
        loading="lazy"
      />

      {/* Before Image (Clipped) */}
      <div
        className="slider-before-wrap"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="slider-img"
          loading="lazy"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
        />
      </div>

      {/* Divider Bar & Handle */}
      <div
        className="slider-divider-line"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="slider-handle-btn" aria-hidden="true">
          <SlidersHorizontal size={18} />
        </div>
      </div>

      {/* Labels */}
      <div className="slider-badge-label label-before">
        {beforeLabel}
      </div>
      <div className="slider-badge-label label-after">
        {afterLabel}
      </div>
    </div>
  );
};
