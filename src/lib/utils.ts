import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// scroll to element
export function scrollTo(elementOrSelector: Element | string | null) {
  let element: Element | null = null;
  
  if (typeof elementOrSelector === 'string') {
    element = document.querySelector(elementOrSelector);
  } else {
    element = elementOrSelector;
  }
  
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
