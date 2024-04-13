import { useEffect } from "react";
//This hook allows us to detect clicks outside of a specified element.
//We add ref and handler to effect dependencies.
//Also add and remove event listeners to indicate actions.
export const useOnClickOutside = (
  ref: React.RefObject<any>,
  handler: Function
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mouseup", listener);
    return () => {
      document.removeEventListener("mouseup", listener);
    };
  }, [ref, handler]);
};
