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
  
  if (!element) {
    console.warn('scrollTo: element not found', elementOrSelector);
    return;
  }

  // Calculate offset for navbar (assuming navbar height is ~80px)
  const navHeight = 80;

  // If locomotive instance exists, use its scrollTo for correct offset and smooth behavior
  // @ts-ignore
  if (typeof window !== 'undefined' && (window as any).locomotive) {
    try {
      const locomotive = (window as any).locomotive;
      const elementTop = (element as HTMLElement).offsetTop;
      const scrollPosition = Math.max(0, elementTop - navHeight);
      
      // Try using locomotive's scrollTo method - different APIs for different versions
      if (typeof locomotive.scrollTo === 'function') {
        // Try with element first
        try {
          locomotive.scrollTo(element, {
            offset: -navHeight,
          });
          return;
        } catch (e) {
          // If that fails, try with position
          try {
            locomotive.scrollTo(scrollPosition);
            return;
          } catch (e2) {
            console.warn('Locomotive scrollTo failed, using fallback');
          }
        }
      }
      
      // Fallback: calculate position and scroll
      if (locomotive.scroll && locomotive.scroll.instance) {
        locomotive.scroll.instance.scrollTo(scrollPosition, {
          duration: 1000,
          easing: [0.25, 0.0, 0.35, 1.0],
        });
        return;
      }
    } catch (error) {
      console.warn('Error using locomotive scroll:', error);
    }
  }

  // Fallback to native scrollIntoView with offset
  const elementRect = element.getBoundingClientRect();
  const offsetPosition = elementRect.top + window.pageYOffset - navHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}
