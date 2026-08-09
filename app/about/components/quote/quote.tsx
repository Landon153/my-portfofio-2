// Quote.tsx
import "./style.css";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

function Wrapper({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-[80vh] mx-auto container  p-10 grid grid-cols-1 mt-10 ">
			<motion.div
				className="flex justify-center items-center flex-col mb-5 "
				initial={{
					opacity: 0,
					scale: 0.9,
				}}
				whileInView={{
					opacity: 1,
					scale: 1,
				}}
				transition={{
					delay: 0.6,
					duration: 2,
					ease: [0.22, 1, 0.36, 1],
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Quote() {
	const text1 = '"The brighter the light,'.split(" ");
	const text2 = 'the darker the shadow."'.split(" ");
	const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>();

	return (
		<Wrapper>
			<div ref={ref} className="text-center">
				<h3 className="text-[2rem] ">
					{text1.map((word, index) => (
						<motion.span
							key={index}
							initial={{
								opacity: 0,
								filter: "blur(4px)",
								scale: 0.92,
							}}
							animate={{
								opacity: isIntersecting ? 1 : 0,
								filter: isIntersecting
									? "blur(0px)"
									: "blur(4px)",
								scale: isIntersecting ? 1 : 0.92,
							}}
							transition={{
								delay: isIntersecting ? index * 0.1 : 0,
								duration: 0.5,
							}}>
							{word}{" "}
						</motion.span>
					))}
				</h3>
				<h3 className="text-xl ">
					{text2.map((word, index) => (
						<motion.span
							key={index + text1.length}
							initial={{
								opacity: 0,
								filter: "blur(4px)",
								scale: 0.92,
							}}
							animate={{
								opacity: isIntersecting ? 1 : 0,
								filter: isIntersecting
									? "blur(0px)"
									: "blur(4px)",
								scale: isIntersecting ? 1 : 0.92,
							}}
							transition={{
								delay: isIntersecting
									? (text1.length + index) * 0.1
									: 0,
								duration: 0.5,
							}}>
							{word}{" "}
						</motion.span>
					))}
				</h3>
			</div>
		</Wrapper>
	);
}
