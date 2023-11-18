import { useState } from "react";
import { motion } from "framer-motion";
import { items } from "./items";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div className="flex items-center justify-center cursor-pointer">
      <div
        className="flip-card w-[300px] h-[60px] rounded-md"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border rounded-full text-primary p-4"
          >
            <h1 className="text-2xl font-bold/">{items.price}</h1>
          </div>
            
          <div
            className="flip-card-back  w-[100%] h-[100%] bg-cover border rounded-full text-primary p-4"
          >
            <h1 className="text-2xl font-bold/">yoki oyiga $435</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardFlip;
