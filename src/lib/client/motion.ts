import type { Transition } from "motion/react";

//
// [SECTION] Functions
//

export function easeOutCirc(
  delay: number = 0,
  duration: number = 0.5,
): Transition {
  return { duration, delay, ease: [0, 0.55, 0.45, 1] };
}
