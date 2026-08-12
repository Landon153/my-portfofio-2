import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";
import type { ReactNode } from "react";

export const metadata = {
    metadataBase: new URL("https://landon-portfolio-eta.vercel.app/"),
    title: "Landon | Portofolio",

    description:
		"My name is Landon, I'm a web developer and I'm passionate about it. I'm currently working as Software Engineer.",

    author: "Landon",
    siteUrl: "https://landon-portfolio-eta.vercel.app/",
    applicationName: "Landon",

    keywords: [
		"landon"
	],

	openGraph: {
		type: "website",
		url: "https://landon-portfolio-eta.vercel.app/",
		title: "Landon | Portofolio",
		site_name: "Landon | Portofolio",
		description: "My name is Landon, This is my portfolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Landon",
			},
		],
	}
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
					<ClientTopProgressBar />
					<Navbar />
					{children}
					<Analytics />
				</body>
			</html>
	);
}
