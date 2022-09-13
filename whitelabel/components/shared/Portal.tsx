import {
  ReactChild,
  ReactChildren,
  ReactElement,
  JSXElementConstructor,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface Props {
  children:
    | string
    | number
    | ReactElement<any, string | JSXElementConstructor<any>>;
  className?: string;
  el?: string;
}

export default function Portal({
  children,
  className = "root-portal",
  el = "div",
}: Props) {
  const [container, setContainer] = useState<Element>();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    const newContainer = document.createElement(el);
    newContainer.classList.add(className);
    document.body.appendChild(newContainer);

    setIsMounted(true);
    setContainer(newContainer);

    return () => {
      document.body.removeChild(newContainer);
    };
  }, []);

  return isMounted && container ? (
    // @ts-ignore
    createPortal(children, container)
  ) : (
    <div>{children}</div>
  );
}
