// useIntersectionObserver.ts
import { useEffect, useState, useRef, type RefObject } from "react";

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(): [
	RefObject<T | null>,
	boolean,
] {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef<T | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			}
		);

		const currentRef = ref.current; // Store the ref value in a variable

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	return [ref, isIntersecting];
}
