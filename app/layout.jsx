import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    title: "Landon | Portofolio",

    description:
		"My name is Landon, I'm a web developer and I'm passionate about it. I'm currently working as Software Engineer.",

    author: "Landon",
    siteUrl: "https://www.alvalens.my.id",
    applicationName: "Landon",

    keywords: [
		"landon"
	],

    openGraph: {
		type: "website",
		url: "https://www.alvalens.my.id",
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
		site_name: "Landon | Portofolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
