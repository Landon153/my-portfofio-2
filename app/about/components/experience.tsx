"use client";
import Hr from "@/components/Hr";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import StandageLogo from "@/public/image/companies/standage-logo.jpeg";
import DigitalUnicornLogo from "@/public/image/companies/digital-unicorn-logo.jpeg";
import BrickmateLogo from "@/public/image/companies/brickmate-group-vietnam-logo.jpeg";
import PaymeLogo from "@/public/image/companies/payme-technology-corporation-logo.jpeg";
import NashtechLogo from "@/public/image/companies/nashtech-global-logo.jpeg";

const experiences = [
	{
		id: 1,
		startDate: "Jan 2025",
		endDate: "Aug 2026",
		company: "株式会社STANDAGE / STANDAGE, Inc.",
		logo: StandageLogo,
		logoAlt: "STANDAGE logo",
		position: "Software Engineer",
		type: "Full-time",
		location: "Global · Remote",
		description: [
			"Designed and implemented scalable microservices with Node.js, Golang, Python, NestJS, and GraphQL, using CI/CD pipelines with GitHub Actions and deploying to AWS and GCP.",
			"Migrated databases from MySQL to PostgreSQL, integrated Supabase, and optimized queries for high performance.",
			"Built event-driven microservices with Kafka, ensured reliability via unit tests with Jest and E2E tests with Playwright, and applied performance optimization techniques.",
			"Delivered mobile-friendly, SEO-optimized applications using React.js and Next.js, improving usability and engagement.",
			"Developed Generative AI features by integrating LLMs including OpenAI, AWS Bedrock, and Google Vertex AI with RAG pipelines, leveraging Pinecone for vector search.",
			"Contributed to blockchain-based trading systems, ensuring secure, maintainable, and production-ready codebases.",
		],
		skills: [
			"Node.js",
			"Golang",
			"Python",
			"NestJS",
			"GraphQL",
			"AWS",
			"GCP",
			"Supabase",
			"PostgreSQL",
			"Kafka",
			"React.js",
			"Next.js",
			"OpenAI",
			"RAG",
			"Pinecone",
			"Blockchain",
		],
	},
	{
		id: 2,
		startDate: "2025",
		endDate: "Jan 2026",
		company: "Digital Unicorn - Agence développement informatique internationale",
		logo: DigitalUnicornLogo,
		logoAlt: "Digital Unicorn logo",
		position: "Senior Fullstack Engineer",
		type: "Contract",
		location: "France · Remote",
		description: [
			"Delivered end-to-end solutions as a Senior Fullstack Developer using Node.js, Golang, and React, ensuring scalable architecture and clean, maintainable code.",
			"Integrated APIs, implemented CI/CD pipelines, and deployed services to AWS for high availability and performance.",
			"Collaborated directly with clients to gather requirements, propose technical solutions, and deliver high-quality features on time.",
		],
		skills: ["Node.js", "Golang", "React", "AWS", "CI/CD", "API Integration"],
	},
	{
		id: 3,
		startDate: "Nov 2021",
		endDate: "Jan 2025",
		company: "BrickMate Group Vietnam",
		logo: BrickmateLogo,
		logoAlt: "BrickMate Group Vietnam logo",
		position: "Software Engineer",
		type: "Full-time",
		location: "Ho Chi Minh City, Vietnam · On-site",
		description: [
			"Crafted robust, maintainable, and scalable codebases using best practices and performance optimization techniques.",
			"Designed resilient low-latency and high-availability architecture to ensure uninterrupted service.",
			"Built source code bases for the NestJS framework and developed unit tests for all code components to ensure functionality and reliability.",
			"Configured AWS Load Balancing ELB to distribute traffic effectively and maintain high availability.",
			"Set up CI/CD and team rules for three environments: development, staging, and production.",
			"Collaborated with PMs and clients to provide business solutions, estimate tasks, create plans, and schedule project milestones.",
			"Reviewed code, optimized implementation, and assigned tasks for team members.",
		],
		skills: [
			"NestJS",
			"React.js",
			"AWS ELB",
			"CI/CD",
			"Unit Testing",
			"Architecture",
			"Code Review",
			"Team Leadership",
		],
	},
	{
		id: 4,
		startDate: "Sep 2020",
		endDate: "Sep 2021",
		company: "PAYME TECHNOLOGY CORPORATION",
		logo: PaymeLogo,
		logoAlt: "PAYME Technology Corporation logo",
		position: "Software Engineer",
		type: "Full-time",
		location: "District 9, Ho Chi Minh City, Vietnam",
		description: [
			"Designed and developed scalable payment systems using DDD, CQRS, Moleculer microservices, and Kafka message queues, ensuring high concurrency and zero downtime.",
			"Built SDKs and API Gateways with NATS transporter, and integrated APIs with partner banks including ACB, Wooribank, ShinhanBank, and Alipay for diverse payment options.",
			"Migrated services from REST to GraphQL, optimized MongoDB queries, and leveraged Redis caching to boost performance.",
			"Enhanced search and monitoring with the ELK stack, and implemented secure encryption and decryption for API communication.",
			"Delivered responsive web solutions by integrating APIs with React and managing seamless frontend-backend interactions.",
			"Produced clear API documentation with Swagger and Markdown, and collaborated with stakeholders to define timelines and deliver effective solutions.",
		],
		skills: [
			"Node.js",
			"Hapi",
			"Moleculer",
			"Kafka",
			"NATS",
			"GraphQL",
			"MongoDB",
			"Redis",
			"ELK Stack",
			"React",
			"Swagger",
		],
	},
	{
		id: 5,
		startDate: "May 2019",
		endDate: "Aug 2020",
		company: "NashTech",
		logo: NashtechLogo,
		logoAlt: "NashTech logo",
		position: "Software Engineer",
		type: "Full-time",
		location: "Tan Binh, Ho Chi Minh City, Vietnam · On-site",
		description: [
			"Successfully completed a four-month intensive training program in Node.js with Express.js and React.js with Redux, earning a promotion to full-time developer.",
			"Architected and developed modular components, API routes, and logical workflows to enable seamless integration between frontend and backend systems.",
			"Implemented and integrated APIs into fully responsive web applications.",
			"Provided regular progress updates to the team lead and project manager.",
			"Partnered closely with project managers and the team lead to design effective business solutions, estimate tasks, create project plans, and define milestone timelines.",
			"Optimized MongoDB queries for improved performance and data handling efficiency.",
			"Utilized testing frameworks and best practices to ensure components were functional, reliable, and consistent across the application.",
		],
		skills: [
			"Node.js",
			"Express.js",
			"React.js",
			"Redux",
			"MongoDB",
			"AWS",
			"API Integration",
			"Testing",
		],
	},
];

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3"
					initial={{
						opacity: 0,
						x: -200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.7,
						type: "spring",
					}}>
					Professional Experience
				</motion.h1>
			</div>
		</div>
	);
}

function TimelineCard({ experience, index, isEven }) {
	return (
		<motion.div
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: index * 0.15, duration: 0.5 }}
				className={`relative mb-3 md:mb-4 ${
					isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
				} md:w-1/2`}>
				<div className="ml-12 md:ml-0 bg-black text-white px-4 md:px-8 py-2.5 rounded-xl shadow-lg border border-black/80">
					<div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1.35fr] md:gap-5">
						<div className="min-w-0 text-center">
							<div className="text-sm font-bold">{experience.startDate}</div>
							<div className="text-xs text-gray-300 ">Start</div>
						</div>
						<div className="w-px h-8 bg-gray-500 "></div>
						<div className="min-w-0 text-center">
							<div className="text-sm font-bold">{experience.endDate}</div>
							<div className="text-xs text-gray-300 ">End</div>
						</div>
						<div className="hidden w-px h-8 bg-gray-500 md:block"></div>
						<div className="col-span-3 min-w-0 text-center md:col-span-1">
							<div className="text-sm font-medium text-gray-400">
								{experience.location}
							</div>
							<div className="text-xs text-gray-300 ">Location</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function ExperienceCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.2, duration: 0.6 }}
			className={`relative group ${
				isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
			} md:w-1/2`}>
			{" "}
				{/* Card */}
				<div
					className={`bg-white/20 backdrop-blur-sm border border-gray-300/30 rounded-2xl p-5 md:p-6 shadow-lg 
					hover:shadow-xl hover:bg-white/30 transition-all duration-300 ml-12 md:ml-0    `}>
				{/* Company & Position */}
				<div className="mb-4 flex items-start gap-4">
					<div className="flex h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-xl border border-gray-300/60 bg-white p-2 shadow-sm  ">
						<Image
							src={experience.logo}
							alt={experience.logoAlt}
							className="h-full w-full object-contain"
							placeholder="blur"
						/>
					</div>
					<div className="min-w-0">
						<h3 className="font-bold text-xl text-black  mb-1 break-words">
							{experience.company}
						</h3>
						<h4 className="font-medium text-lg text-gray-700  break-words">
							{experience.position}
							<span className="text-sm font-normal text-gray-500  ml-2">
								• {experience.type}
							</span>
						</h4>
					</div>
				</div>

				{/* Description */}
				{Array.isArray(experience.description) ? (
					<div className="text-gray-600  leading-relaxed mb-4 space-y-2">
						{experience.description.map((item, idx) => (
							<p key={idx} className="flex gap-2 text-left">
								<span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-500 " />
								<span>{item}</span>
							</p>
						))}
					</div>
				) : (
					<p className="text-gray-600  text-justify leading-relaxed mb-4">
						{experience.description}
					</p>
				)}

				{/* Skills */}
				<div className="flex flex-wrap gap-2">
					{experience.skills.map((skill, idx) => (
						<span
							key={idx}
							className="bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105    ">
							{skill}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container px-6 py-10">
			<div
				className="flex justify-center items-center flex-col">
				{children}
			</div>
		</div>
	);
}

export default function Experience() {
	const [showAll, setShowAll] = useState(false);
	const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

	return (
		<>
			<Title />
			<Wrapper>
				{" "}
				<div className="relative w-full max-w-6xl mx-auto">
					{" "}
					{/* Timeline line - hidden on mobile, visible on md+ */}
					<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full  "></div>
					{/* Mobile timeline line */}
					<div className="md:hidden absolute left-0 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full  "></div>{" "}
					{/* Experience cards */}
						<div className="space-y-10 md:space-y-14 relative">
						<AnimatePresence>
							{displayedExperiences.map((experience, index) => (
								<div key={experience.id} className="relative">
									{/* Timeline period card - flows naturally above content */}
									<TimelineCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>

									{/* Timeline dot - positioned at the start of the experience card */}
									<div
										className={`absolute w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-30
                      md:left-1/2 md:-translate-x-1/2 md:top-4
                      left-0 -translate-x-1/2 top-5  `}
									/>

									{/* Experience content card */}
									<ExperienceCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>
								</div>
							))}
						</AnimatePresence>
					</div>
					{/* Expand/Collapse button */}
					{experiences.length > 3 && (
						<motion.div
							className="flex justify-center mt-12"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.5 }}>
							<button
								onClick={() => setShowAll(!showAll)}
								className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium 
									transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2   ">
								{showAll ? (
									<>
										Show Less
										<svg
											className="w-4 h-4 transform rotate-180"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</>
								) : (
									<>
										View More Experience
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</>
								)}
							</button>
						</motion.div>
					)}{" "}
					{/* Gradient fade effect at bottom */}
					{!showAll && (
						<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stale-300 to-transparent pointer-events-none"></div>
					)}
				</div>
			</Wrapper>
		</>
	);
}
