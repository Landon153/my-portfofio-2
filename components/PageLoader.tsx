"use client";

import { motion } from "framer-motion";

const bars = [0, 1, 2, 3, 4];

export default function PageLoader() {
	return (
		<div className="fixed inset-0 z-[999] flex min-h-screen w-screen items-center justify-center overflow-hidden bg-[#e7e8e3] text-neutral-950">
			<div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.82),rgba(231,232,227,0.52)_42%,rgba(210,218,214,0.68))]" />
			<div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(17,24,39,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.28)_1px,transparent_1px)] [background-size:46px_46px]" />
			<motion.div
				className="absolute left-[-10%] top-[18%] h-px w-[120%] bg-neutral-950/10"
				animate={{ x: ["-8%", "8%", "-8%"] }}
				transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.div
				className="absolute bottom-[22%] left-[-10%] h-px w-[120%] bg-white/70"
				animate={{ x: ["8%", "-8%", "8%"] }}
				transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
			/>

			<motion.div
				className="relative flex flex-col items-center gap-7 px-8"
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.55, ease: "easeOut" }}>
				<div className="relative h-32 w-32">
					<motion.div
						className="absolute inset-0 rounded-full border border-neutral-950/15"
						animate={{ rotate: 360 }}
						transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
					/>
					<motion.div
						className="absolute inset-3 rounded-full border border-transparent border-t-neutral-950 border-r-cyan-500"
						animate={{ rotate: -360 }}
						transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
					/>
					<motion.div
						className="absolute inset-7 rounded-[1.6rem] bg-neutral-950 shadow-[0_24px_60px_rgba(0,0,0,0.22)]"
						animate={{
							borderRadius: ["1.6rem", "999px", "1.6rem"],
							scale: [1, 1.04, 1],
						}}
						transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}>
						<div className="flex h-full w-full items-center justify-center">
							<motion.span
								className="text-3xl font-bold text-white"
								animate={{ opacity: [0.72, 1, 0.72] }}
								transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
								L
							</motion.span>
						</div>
					</motion.div>
					<motion.span
						className="absolute left-4 top-6 h-3 w-3 rounded-full bg-cyan-500"
						animate={{ scale: [0.8, 1.25, 0.8], opacity: [0.45, 1, 0.45] }}
						transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
					/>
					<motion.span
						className="absolute bottom-7 right-3 h-3 w-3 rounded-full bg-amber-400"
						animate={{ scale: [1.2, 0.75, 1.2], opacity: [1, 0.5, 1] }}
						transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
					/>
				</div>

				<div className="flex flex-col items-center gap-4">
					<motion.div
						className="text-2xl font-bold tracking-[0.28em]"
						animate={{ letterSpacing: ["0.22em", "0.34em", "0.22em"] }}
						transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}>
						LANDON
					</motion.div>
					<div className="flex h-8 items-end gap-1.5">
						{bars.map((bar) => (
							<motion.span
								key={bar}
								className="block w-1.5 rounded-full bg-neutral-950"
								animate={{ height: [10, 28, 14, 22, 10], opacity: [0.35, 1, 0.55] }}
								transition={{
									duration: 1.2,
									delay: bar * 0.11,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							/>
						))}
					</div>
					<div className="relative h-1.5 w-60 overflow-hidden rounded-full bg-white/80 shadow-inner">
						<motion.div
							className="absolute inset-y-0 left-0 w-24 rounded-full bg-gradient-to-r from-neutral-950 via-cyan-500 to-amber-400"
							animate={{ x: ["-100%", "280%"] }}
							transition={{ duration: 1.45, repeat: Infinity, ease: "easeInOut" }}
						/>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
