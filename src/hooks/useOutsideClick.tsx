import { useEffect, useRef, type RefObject } from "react";

const useOutsideClick = <T extends HTMLElement>(
	callback: () => void,
): RefObject<T | null> => {
	const ref = useRef<T>(null);
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback])

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node))
				callback();
		};

		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, []);

	return ref;
};

export default useOutsideClick;
