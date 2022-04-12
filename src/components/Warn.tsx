import React from "react";
import { useDetectGPU } from "@react-three/drei";

export const Warn: React.FC = () => {
  const { tier, isMobile } = useDetectGPU();
  return (
    <>
      {tier === 3 || !isMobile ? (
        <div className="absolute bottom-2 right-4 text-center text-xs sm:text-base">
          {tier === 0 && (
            <p>
              <span className="text-red-400">Warning: </span>You have a low tier
              GPU and may experience low fps
            </p>
          )}
          {isMobile && (
            <p>
              <span className="text-red-400">Warning: </span> You are currently
              using a mobile device and may experience low fps
            </p>
          )}
        </div>
      ) : null}
    </>
  );
};
