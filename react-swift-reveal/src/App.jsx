import { useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import "./App.css";
// animation library react-swift-reveal
import BounceAnimation from "./BounceAnimation/BounceAnimation";
import FadeAnimation from "./FadeAnimation/FadeAnimation";
import FlipAnimation from "./FlipAnimation/FlipAnimation";
import LightSpeedAnimation from "./LightSpeedAnimation/LightSpeedAnimation";
import RollAnimation from "./RollAnimation/RollAnimation";
import RotateAnimation from "./RotateAnimation/RotateAnimation";
import SlideAnimation from "./SlideAnimation/SlideAnimation";
import ZoomAnimation from "./ZoomAnimation/ZoomAnimation";
import FlashAnimation from "./FlashAnimation/FlashAnimation";
import HeadShakeAnimation from "./HeadShakeAnimation/HeadShakeAnimation";
import JelloAnimation from "./JelloAnimation/JelloAnimation";
import JumpAnimation from "./JumpAnimation/JumpAnimation";
import PopAnimation from "./PopAnimation/PopAnimation";
import PulseAnimation from "./PulseAnimation/PulseAnimation";
import RubberBandAnimation from './RubberBandAnimation/RubberBandAnimation';
import SpinAnimation from './SpinAnimation/SpinAnimation';
import SwingAnimation from './SwingAnimation/SwingAnimation';
import TadaAnimation from './TadaAnimation/TadaAnimation';
import WobbleAnimation from "./WobbleAnimation/WobbleAnimation";

function App() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Adjust as needed for when the animation should start
  });

  const handleAnimation = useCallback(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  handleAnimation();

  return (
    <>
      <div ref={ref} className={`box ${hasAnimated ? "animated" : ""}`}>
        <div className="grid gap-[200px]">
          <WobbleAnimation/>
          <TadaAnimation/>
          <SwingAnimation/>
          <SpinAnimation/>
          <RubberBandAnimation/>
          <PulseAnimation/>
          <PopAnimation />
          <JumpAnimation />
          <JelloAnimation />
          <HeadShakeAnimation />
          <FlashAnimation />
          <ZoomAnimation />
          <SlideAnimation />
          <RotateAnimation />
          <RollAnimation />
          <LightSpeedAnimation />
          <FlipAnimation />
          <FadeAnimation />
          <BounceAnimation />
        </div>
      </div>
    </>
  );
}

export default App;
