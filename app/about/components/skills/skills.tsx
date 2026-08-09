"use client";
import { Icon } from "@iconify/react/offline";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CodepenIcon, WebhookIcon, ActivityIcon, MobileIcon } from "./icons"
import html5Icon from "@iconify/icons-logos/html-5";
import css3Icon from "@iconify/icons-logos/css-3";
import javascriptIcon from "@iconify/icons-logos/javascript";
import typescriptIcon from "@iconify/icons-logos/typescript-icon";
import phpIcon from "@iconify/icons-logos/php";
import pythonIcon from "@iconify/icons-logos/python";
import reactIcon from "@iconify/icons-logos/react";
import nextjsIcon from "@iconify/icons-logos/nextjs-icon";
import vueIcon from "@iconify/icons-logos/vue";
import nuxtIcon from "@iconify/icons-logos/nuxt-icon";
import reduxIcon from "@iconify/icons-logos/redux";
import tailwindcssIcon from "@iconify/icons-logos/tailwindcss-icon";
import bootstrapIcon from "@iconify/icons-logos/bootstrap";
import storybookIcon from "@iconify/icons-logos/storybook-icon";
import webpackIcon from "@iconify/icons-logos/webpack";
import nodejsIcon from "@iconify/icons-logos/nodejs-icon";
import expressIcon from "@iconify/icons-simple-icons/express";
import hapiIcon from "@iconify/icons-logos/hapi";
import nestjsIcon from "@iconify/icons-logos/nestjs";
import moleculerIcon from "@iconify/icons-simple-icons/moleculer";
import goIcon from "@iconify/icons-logos/go";
import ginIcon from "@iconify/icons-logos/gin";
import laravelIcon from "@iconify/icons-logos/laravel";
import flaskIcon from "@iconify/icons-simple-icons/flask";
import djangoIcon from "@iconify/icons-logos/django-icon";
import firebaseIcon from "@iconify/icons-logos/firebase";
import fastapiIcon from "@iconify/icons-simple-icons/fastapi";
import graphqlIcon from "@iconify/icons-logos/graphql";
import websocketIcon from "@iconify/icons-logos/websocket";
import kafkaIcon from "@iconify/icons-logos/kafka";
import rabbitmqIcon from "@iconify/icons-logos/rabbitmq";
import mysqlIcon from "@iconify/icons-logos/mysql-icon";
import postgresqlIcon from "@iconify/icons-logos/postgresql";
import mongodbIcon from "@iconify/icons-logos/mongodb-icon";
import mariadbIcon from "@iconify/icons-logos/mariadb";
import redisIcon from "@iconify/icons-logos/redis";
import elasticsearchIcon from "@iconify/icons-logos/elasticsearch";
import dynamodbIcon from "@iconify/icons-logos/aws-dynamodb";
import pineconeIcon from "@iconify/icons-logos/pinecone";
import supabaseIcon from "@iconify/icons-logos/supabase";
import tensorflowIcon from "@iconify/icons-logos/tensorflow";
import pytorchIcon from "@iconify/icons-logos/pytorch-icon";
import scikitlearnIcon from "@iconify/icons-devicon/scikitlearn";
import pandasIcon from "@iconify/icons-simple-icons/pandas";
import numpyIcon from "@iconify/icons-logos/numpy";
import jupyterIcon from "@iconify/icons-logos/jupyter";
import openaiIcon from "@iconify/icons-simple-icons/openai";
import googleBardIcon from "@iconify/icons-logos/google-bard-icon";
import vscodeIcon from "@iconify/icons-logos/visual-studio-code";
import gitIcon from "@iconify/icons-logos/git-icon";
import githubIcon from "@iconify/icons-mdi/github";
import githubActionsIcon from "@iconify/icons-logos/github-actions";
import githubCopilotIcon from "@iconify/icons-logos/github-copilot";
import gitlabIcon from "@iconify/icons-logos/gitlab";
import figmaIcon from "@iconify/icons-logos/figma";
import viteIcon from "@iconify/icons-logos/vitejs";
import dockerIcon from "@iconify/icons-logos/docker-icon";
import kubernetesIcon from "@iconify/icons-logos/kubernetes";
import googleCloudIcon from "@iconify/icons-logos/google-cloud";
import naverIcon from "@iconify/icons-simple-icons/naver";
import postmanIcon from "@iconify/icons-logos/postman-icon";
import swaggerIcon from "@iconify/icons-logos/swagger";
import ibmCloudIcon from "@iconify/icons-simple-icons/ibmcloud";
import googleColabIcon from "@iconify/icons-simple-icons/googlecolab";
import awsIcon from "@iconify/icons-logos/aws";
import ibmWatsonIcon from "@iconify/icons-simple-icons/ibmwatson";
import dartIcon from "@iconify/icons-logos/dart";
import flutterIcon from "@iconify/icons-logos/flutter";
import androidIcon from "@iconify/icons-logos/android-icon";
import linkVariantIcon from "@iconify/icons-mdi/link-variant";
import codeTagsIcon from "@iconify/icons-mdi/code-tags";
import apiIcon from "@iconify/icons-mdi/api";
import boltIcon from "@iconify/icons-mdi/bolt";
import cloudSyncIcon from "@iconify/icons-mdi/cloud-sync";
import heartIcon from "@iconify/icons-mdi/heart";
import argoIcon from "@iconify/icons-logos/argo";
import awsEc2Icon from "@iconify/icons-logos/aws-ec2";
import awsLambdaIcon from "@iconify/icons-logos/aws-lambda";
import awsS3Icon from "@iconify/icons-logos/aws-s3";
import awsRdsIcon from "@iconify/icons-logos/aws-rds";
import awsSqsIcon from "@iconify/icons-logos/aws-sqs";
import awsSnsIcon from "@iconify/icons-logos/aws-sns";
import awsEventbridgeIcon from "@iconify/icons-logos/aws-eventbridge";
import awsEksIcon from "@iconify/icons-logos/aws-eks";
import awsEcsIcon from "@iconify/icons-logos/aws-ecs";
import awsEcrIcon from "@iconify/icons-logos/aws-ecs";
import vercelIcon from "@iconify/icons-logos/vercel";

const claudeIcon = {
	width: 24,
	height: 24,
	body: '<path fill="currentColor" d="m4.714 15.956l4.718-2.648l.079-.23l-.08-.128h-.23l-.79-.048l-2.695-.073l-2.337-.097l-2.265-.122l-.57-.121l-.535-.704l.055-.353l.48-.321l.685.06l1.518.104l2.277.157l1.651.098l2.447.255h.389l.054-.158l-.133-.097l-.103-.098l-2.356-1.596l-2.55-1.688l-1.336-.972l-.722-.491L2 6.223l-.158-1.008l.656-.722l.88.06l.224.061l.893.686l1.906 1.476l2.49 1.833l.364.304l.146-.104l.018-.072l-.164-.274l-1.354-2.446l-1.445-2.49l-.644-1.032l-.17-.619a3 3 0 0 1-.103-.729L6.287.133L6.7 0l.995.134l.42.364l.619 1.415L9.735 4.14l1.555 3.03l.455.898l.243.832l.09.255h.159V9.01l.127-1.706l.237-2.095l.23-2.695l.08-.76l.376-.91l.747-.492l.583.28l.48.685l-.067.444l-.286 1.851l-.558 2.903l-.365 1.942h.213l.243-.242l.983-1.306l1.652-2.064l.728-.82l.85-.904l.547-.431h1.032l.759 1.129l-.34 1.166l-1.063 1.347l-.88 1.142l-1.263 1.7l-.79 1.36l.074.11l.188-.02l2.853-.606l1.542-.28l1.84-.315l.832.388l.09.395l-.327.807l-1.967.486l-2.307.462l-3.436.813l-.043.03l.049.061l1.548.146l.662.036h1.62l3.018.225l.79.522l.473.638l-.08.485l-1.213.62l-1.64-.389l-3.825-.91l-1.31-.329h-.183v.11l1.093 1.068l2.003 1.81l2.508 2.33l.127.578l-.321.455l-.34-.049l-2.204-1.657l-.85-.747l-1.925-1.62h-.127v.17l.443.649l2.343 3.521l.122 1.08l-.17.353l-.607.213l-.668-.122l-1.372-1.924l-1.415-2.168l-1.141-1.943l-.14.08l-.674 7.254l-.316.37l-.728.28l-.607-.461l-.322-.747l.322-1.476l.388-1.924l.316-1.53l.285-1.9l.17-.632l-.012-.042l-.14.018l-1.432 1.967l-2.18 2.945l-1.724 1.845l-.413.164l-.716-.37l.066-.662l.401-.589l2.386-3.036l1.439-1.882l.929-1.086l-.006-.158h-.055L4.138 18.56l-1.13.146l-.485-.456l.06-.746l.231-.243l1.907-1.312Z"/>',
};

const cursorIcon = {
	width: 24,
	height: 24,
	body: '<path fill="currentColor" d="M11.503.131L1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23"/>',
};

const technologyIcons = {
	"HTML": html5Icon,
	"CSS": css3Icon,
	"JavaScript": javascriptIcon,
	"TypeScript": typescriptIcon,
	"PHP": phpIcon,
	"Python": pythonIcon,
	"React": reactIcon,
	"React.js": reactIcon,
	"NextJS": nextjsIcon,
	"Next.js": nextjsIcon,
	"Vue": vueIcon,
	"Nuxt": nuxtIcon,
	"Redux": reduxIcon,
	"TailwindCSS": tailwindcssIcon,
	"Tailwind CSS": tailwindcssIcon,
	"Bootstrap": bootstrapIcon,
	"Storybook": storybookIcon,
	"StoryBoard": storybookIcon,
	"Zustand": reactIcon,
	"Webpack": webpackIcon,
	"NodeJS": nodejsIcon,
	"Node.js": nodejsIcon,
	"ExpressJS": expressIcon,
	"Express": expressIcon,
	"HapiJS": hapiIcon,
	"NestJS": nestjsIcon,
	"MoleculerJS": moleculerIcon,
	"Go": goIcon,
	"Gin": ginIcon,
	"Fiber": goIcon,
	"Laravel": laravelIcon,
	"Flask": flaskIcon,
	"Django": djangoIcon,
	"Firebase": firebaseIcon,
	"FastAPI": fastapiIcon,
	"GraphQL": graphqlIcon,
	"REST API": apiIcon,
	"WebSocket": websocketIcon,
	"Kafka": kafkaIcon,
	"RabbitMQ": rabbitmqIcon,
	"MySQL": mysqlIcon,
	"PostgreSQL": postgresqlIcon,
	"MongoDB": mongodbIcon,
	"MariaDB": mariadbIcon,
	"Redis": redisIcon,
	"Elasticsearch": elasticsearchIcon,
	"DynamoDB": dynamodbIcon,
	"Pinecone": pineconeIcon,
	"pgVector": postgresqlIcon,
	"Supabase": supabaseIcon,
	"TensorFlow": tensorflowIcon,
	"PyTorch": pytorchIcon,
	"Scikit-learn": scikitlearnIcon,
	"Pandas": pandasIcon,
	"NumPy": numpyIcon,
	"Jupyter": jupyterIcon,
	"OpenAI API": openaiIcon,
	"Gemini API": googleBardIcon,
	"LangChain": linkVariantIcon,
	"Visual Studio Code": vscodeIcon,
	"Git": gitIcon,
	"Github": githubIcon,
	"GitHub Actions": githubActionsIcon,
	"GitLab CI/CD": gitlabIcon,
	"ArgoCD": argoIcon,
	"Figma": figmaIcon,
	"Vite": viteIcon,
	"Docker": dockerIcon,
	"Kubernetes": kubernetesIcon,
	"Google Cloud": googleCloudIcon,
	"GCP": googleCloudIcon,
	"NaverCloud": naverIcon,
	"AWS": awsIcon,
	"EC2": awsEc2Icon,
	"Lambda": awsLambdaIcon,
	"S3": awsS3Icon,
	"RDS": awsRdsIcon,
	"SQS": awsSqsIcon,
	"SNS": awsSnsIcon,
	"EventBridge": awsEventbridgeIcon,
	"EKS": awsEksIcon,
	"ECS": awsEcsIcon,
	"ECR": awsEcrIcon,
	"CI/CD": cloudSyncIcon,
	"Postman": postmanIcon,
	"Swagger": swaggerIcon,
	"IBM Cloud": ibmCloudIcon,
	"Jupyter Notebook": jupyterIcon,
	"Google Colab": googleColabIcon,
	"Google Cloud AI": googleCloudIcon,
	"AWS SageMaker": awsIcon,
	"IBM Watson": ibmWatsonIcon,
	"React Native": reactIcon,
	"Dart": dartIcon,
	"Flutter": flutterIcon,
	"Android Studio": androidIcon,
	"React Native CLI": reactIcon,
	"Claude Code": claudeIcon,
	"Codex": openaiIcon,
	"Cursor": cursorIcon,
	"GitHub Copilot": githubCopilotIcon,
	"Lovable": heartIcon,
	"v0": vercelIcon,
	"Bolt.new": boltIcon,
};

const skillCategories = {
	frontend: {
		title: "Front-End",
		icon: CodepenIcon,
		description: "Interfaces, state, build tooling, and responsive UI systems",
		items: [
			"React",
			"Next.js",
			"Vue",
			"Nuxt",
			"Redux",
			"TypeScript",
			"Tailwind CSS",
			"HTML",
			"CSS",
			"Storybook",
			"Zustand",
			"Webpack",
			"Vite",
		],
	},
	backend: {
		title: "Backend",
		icon: WebhookIcon,
		description: "APIs, services, databases, messaging, and distributed systems",
		groups: [
			{
				title: "Backend",
				items: [
					"Node.js",
					"Express",
					"HapiJS",
					"NestJS",
					"MoleculerJS",
					"Go",
					"Gin",
					"Fiber",
					"Python",
					"FastAPI",
					"GraphQL",
					"REST API",
					"WebSocket",
					"Kafka",
					"RabbitMQ",
				],
			},
			{
				title: "Database",
				items: [
					"PostgreSQL",
					"MySQL",
					"MongoDB",
					"MariaDB",
					"Redis",
					"Elasticsearch",
					"DynamoDB",
					"Pinecone",
					"pgVector",
					"Supabase",
				],
			},
		],
	},
	devops: {
		title: "DevOps",
		icon: ActivityIcon,
		iconData: cloudSyncIcon,
		iconClassName: "text-gray-500",
		description: "Cloud infrastructure, containers, and delivery pipelines",
		items: [
			"NaverCloud",
			"GCP",
			"AWS",
			"EC2",
			"Lambda",
			"S3",
			"RDS",
			"SQS",
			"SNS",
			"EventBridge",
			"EKS",
			"ECS",
			"ECR",
			"Docker",
			"Kubernetes",
			"CI/CD",
			"GitHub Actions",
			"GitLab CI/CD",
			"ArgoCD",
		],
	},
	ai: {
		title: "AI",
		icon: MobileIcon,
		iconData: openaiIcon,
		description: "AI coding assistants and rapid product-building tools",
		items: [
			"Claude Code",
			"Codex",
			"Cursor",
			"GitHub Copilot",
			"Lovable",
			"v0",
			"Bolt.new",
		],
	},
};

function SkillCard({ skill, isSelected, onClick }) {
	const CategoryIcon = skill.icon;
	const iconClassName = `w-8 h-8 ${
		skill.iconClassName ?? "text-black"
	} `;

	return (
		<motion.div
			onClick={onClick}
			className={`relative cursor-pointer group p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
				isSelected
					? "bg-white/20 border-black border-2 shadow-lg   "
					: "bg-white/10 border-gray-300/20 hover:bg-white/20 hover:border-gray-300/30    "
			}`}
			whileHover={{
				scale: 1.05,
				rotateY: 5,
			}}
			whileTap={{ scale: 0.95 }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 20,
			}}>
			{/* Glow effect - removed for selected state */}
			{!isSelected && (
				<div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-gradient-to-r from-gray-400/20 to-gray-600/20 blur-xl  " />
			)}

			<div className="relative z-10 flex flex-col items-center text-center space-y-4">
				<div
					className={`p-4 rounded-xl transition-all duration-300 ${
						isSelected
							? "bg-white/30 "
							: "bg-white/10 group-hover:bg-white/20  "
					}`}>
					{skill.iconData ? (
						<Icon icon={skill.iconData} className={iconClassName} />
					) : (
						<CategoryIcon className={iconClassName} />
					)}
				</div>
				<div>
					<h3 className="font-semibold text-black  text-lg mb-2">
						{skill.title}
					</h3>
					<p className="text-gray-600  text-sm leading-relaxed">
						{skill.description}
					</p>
				</div>
			</div>
		</motion.div>
	);
}

function TechnologyIconBadge({ name, index }) {
	const icon = technologyIcons[name] ?? codeTagsIcon;
	const animationDelay = Math.min(index * 0.015, 0.12);

	return (
		<motion.span
			key={name}
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				type: "spring",
				stiffness: 360,
				damping: 24,
				delay: animationDelay,
			}}
			title={name}
			role="img"
			aria-label={name}
			className="group flex w-20 cursor-default flex-col items-center gap-2 text-center transition-transform hover:scale-105">
			<span
				className="flex h-14 w-14 items-center justify-center rounded-full border
				 border-gray-400/40 bg-gradient-to-r from-gray-200/60 to-white/40
				 backdrop-blur-sm transition-colors group-hover:from-gray-300/60
				 group-hover:to-white/50  
				  
				  sm:h-16 sm:w-16">
				<Icon
					icon={icon}
					className="h-8 w-8 text-black  sm:h-9 sm:w-9"
				/>
			</span>
			<span className="min-h-8 text-xs font-medium leading-tight text-gray-700 ">
				{name}
			</span>
		</motion.span>
	);
}

function TechnologyGroup({ title, items, groupIndex = 0 }) {
	return (
		<div className={groupIndex === 0 ? "" : "mt-8"}>
			{title && (
				<h4 className="mb-4 text-center text-lg font-semibold text-gray-700 ">
					{title}
				</h4>
			)}
			<div className="flex flex-wrap justify-center gap-x-4 gap-y-5">
				{items.map((item, index) => (
					<TechnologyIconBadge
						key={item}
						name={item}
						index={index}
					/>
				))}
			</div>
		</div>
	);
}

function SkillDetails({ selectedSkill }) {
	if (!selectedSkill) return null;
	const groups =
		selectedSkill.groups ?? [
			{
				title: null,
				items: selectedSkill.items,
			},
		];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.5 }}
			className="mt-12">
			<motion.div
				className="backdrop-blur-lg bg-white/20 border border-gray-300/30 rounded-2xl p-8   "
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2 }}>
				<h3 className="text-2xl font-semibold text-black  mb-6 text-center">
					{selectedSkill.title} Technologies
				</h3>
				{groups.map((group, index) => (
					<TechnologyGroup
						key={group.title ?? selectedSkill.title}
						title={group.title}
						items={group.items}
						groupIndex={index}
					/>
				))}
			</motion.div>
		</motion.div>
	);
}

export default function Skills() {
	const [selectedCategory, setSelectedCategory] = useState("frontend");
	return (
		<div className="relative">
			<div className="mx-auto container px-6 py-20">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center space-y-4 mb-16">
					<h2 className="text-5xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent  ">
						Skills & Expertise
					</h2>
					<p className="text-gray-600  max-w-2xl mx-auto text-lg leading-relaxed">
						Explore my technical skills across different domains. Click on any
						category to see the specific technologies and tools I work with.
					</p>
				</motion.div>

				{/* Skill Categories Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					{Object.entries(skillCategories).map(([key, skill], index) => (
						<motion.div
							key={key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.04 }}>
							<SkillCard
								skill={skill}
								isSelected={selectedCategory === key}
								onClick={() => setSelectedCategory(key)}
							/>
						</motion.div>
					))}
				</div>

				{/* Skill Details */}
				<AnimatePresence mode="wait">
					<SkillDetails selectedSkill={skillCategories[selectedCategory]} />
				</AnimatePresence>
			</div>
		</div>
	);
}
