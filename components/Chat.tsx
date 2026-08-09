// components/Intelliticks.tsx
"use client"
import { useEffect } from "react";

type IntelliticksWindow = Window &
	typeof globalThis & {
		iticks?: {
			host: string;
			settings: Record<string, unknown>;
			clientId: string;
			cdn: string;
			queue: unknown[][];
			call?: (a: unknown, b: unknown) => void;
		};
	};

// Component for Intelliticks chat widget
const Chat = () => {
	useEffect(() => {
		// Paste the Intelliticks script here
		(function (
			I: IntelliticksWindow,
			L: string,
			T: Document,
			i: "script",
			c: string,
			k: string,
			s: Record<string, unknown>
		) {
			if (I.iticks) return;
			const iticks: NonNullable<IntelliticksWindow["iticks"]> = {
				host: c,
				settings: s,
				clientId: k,
				cdn: L,
				queue: [],
			};
			I.iticks = iticks;
			const h = T.head || T.documentElement;
			const e = T.createElement(i) as HTMLScriptElement;
			e.async = true;
			e.src = (L || c) + "/client/inject-v2.min.js";
			h.insertBefore(e, h.firstChild);
			iticks.call = function (a, b) {
				iticks.queue.push([a, b]);
			};
		})(
			window,
			"https://cdn-v1.intelliticks.com/prod/common",
			document,
			"script",
			"https://app.intelliticks.com",
			"u3cWw3sDpdKexqXCY_c",
			{}
		);
	}, []);

	return null;
};

export default Chat;
