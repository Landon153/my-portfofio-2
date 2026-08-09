"use client";
import { useState, useEffect, use } from "react";
import { motion } from "framer-motion";
import jsonData from "@/json/data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import NotFound from "@/app/not-found";
import Image from "next/image";
import { Icon, type IconifyIcon } from "@iconify/react/offline";
import html5Icon from "@iconify/icons-logos/html-5";
import css3Icon from "@iconify/icons-logos/css-3";
import javascriptIcon from "@iconify/icons-logos/javascript";
import typescriptIcon from "@iconify/icons-logos/typescript-icon";
import phpIcon from "@iconify/icons-logos/php";
import pythonIcon from "@iconify/icons-logos/python";
import angularIcon from "@iconify/icons-logos/angular-icon";
import androidIcon from "@iconify/icons-logos/android-icon";
import iosIcon from "@iconify/icons-logos/ios";
import vueIcon from "@iconify/icons-logos/vue";
import reactIcon from "@iconify/icons-logos/react";
import reactRouterIcon from "@iconify/icons-logos/react-router";
import nextjsIcon from "@iconify/icons-logos/nextjs-icon";
import pwaIcon from "@iconify/icons-logos/pwa";
import hapiIcon from "@iconify/icons-logos/hapi";
import nestjsIcon from "@iconify/icons-logos/nestjs";
import goIcon from "@iconify/icons-logos/go";
import solidityIcon from "@iconify/icons-logos/solidity";
import tailwindcssIcon from "@iconify/icons-logos/tailwindcss-icon";
import bootstrapIcon from "@iconify/icons-logos/bootstrap";
import daisyUiIcon from "@iconify/icons-logos/daisyui";
import laravelIcon from "@iconify/icons-logos/laravel";
import livewireIcon from "@iconify/icons-simple-icons/livewire";
import flaskIcon from "@iconify/icons-logos/flask";
import firebaseIcon from "@iconify/icons-logos/firebase";
import mysqlIcon from "@iconify/icons-logos/mysql-icon";
import postgresqlIcon from "@iconify/icons-logos/postgresql";
import mongodbIcon from "@iconify/icons-logos/mongodb-icon";
import redisIcon from "@iconify/icons-logos/redis";
import mariadbIcon from "@iconify/icons-logos/mariadb-icon";
import dynamodbIcon from "@iconify/icons-logos/aws-dynamodb";
import prismaIcon from "@iconify/icons-logos/prisma";
import typeormIcon from "@iconify/icons-logos/typeorm";
import jqueryIcon from "@iconify/icons-logos/jquery";
import tensorflowIcon from "@iconify/icons-logos/tensorflow";
import googleCloudIcon from "@iconify/icons-logos/google-cloud";
import awsIcon from "@iconify/icons-logos/aws";
import googleIcon from "@iconify/icons-logos/google-icon";
import naverIcon from "@iconify/icons-simple-icons/naver";
import moleculerIcon from "@iconify/icons-devicon/moleculer";
import kubernetesIcon from "@iconify/icons-logos/kubernetes";
import openglIcon from "@iconify/icons-logos/opengl";
import discordIcon from "@iconify/icons-logos/discord";
import tableIcon from "@iconify/icons-mdi/table";
import chartTreeIcon from "@iconify/icons-mdi/chart-tree";
import brainIcon from "@iconify/icons-mdi/brain";
import codeTagsIcon from "@iconify/icons-mdi/code-tags";
import apiIcon from "@iconify/icons-mdi/api";
import creditCardIcon from "@iconify/icons-mdi/credit-card-outline";
import blockchainIcon from "@iconify/icons-simple-icons/blockchaindotcom";
import BlurImage from "@/public/image/placeholder/blur.jpg";
import FixedButon from "@/components/FixedButton";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

type Project = {
	show: boolean;
	title: string;
	desc: string[];
	year: string;
	preview?: string;
	code?: string;
	thumbnail: string;
	images: string[];
	tech: string[];
	slug: string;
	category: number[];
};

type PageProps = {
	params: Promise<{
		slug: string;
	}>;
};

const projects = jsonData.Projects as Project[];

const technologyIcons: Record<string, IconifyIcon> = {
	HTML: html5Icon,
	CSS: css3Icon,
	JS: javascriptIcon,
	JavaScript: javascriptIcon,
	Javascript: javascriptIcon,
	Typescript: typescriptIcon,
	TypeScript: typescriptIcon,
	PHP: phpIcon,
	Python: pythonIcon,
	Android: androidIcon,
	Ios: iosIcon,
	iOS: iosIcon,
	IOS: iosIcon,
	Angular: angularIcon,
	Vue: vueIcon,
	VueJS: vueIcon,
	React: reactIcon,
	ReactJs: reactIcon,
	ReactJS: reactIcon,
	"React Native": reactIcon,
	"React Router": reactRouterIcon,
	NextJS: nextjsIcon,
	PWA: pwaIcon,
	Hapi: hapiIcon,
	HapiJs: hapiIcon,
	HapiJS: hapiIcon,
	NestJs: nestjsIcon,
	NestJS: nestjsIcon,
	MoculerJS: moleculerIcon,
	MoleculerJS: moleculerIcon,
	Moleculer: moleculerIcon,
	Golang: goIcon,
	Go: goIcon,
	Solidity: solidityIcon,
	TailwindCSS: tailwindcssIcon,
	"Tailwind CSS": tailwindcssIcon,
	Bootstrap: bootstrapIcon,
	"Daisy UI": daisyUiIcon,
	Laravel: laravelIcon,
	Livewire: livewireIcon,
	Flask: flaskIcon,
	Firebase: firebaseIcon,
	MySQL: mysqlIcon,
	Postgress: postgresqlIcon,
	PostgreSQL: postgresqlIcon,
	MongoDB: mongodbIcon,
	Redis: redisIcon,
	MariaDB: mariadbIcon,
	DynamoDB: dynamodbIcon,
	Prisma: prismaIcon,
	TypeOrm: typeormIcon,
	TypeORM: typeormIcon,
	jQuery: jqueryIcon,
	DataTables: tableIcon,
	Tensorflow: tensorflowIcon,
	Sklearn: chartTreeIcon,
	"Decision Tree": chartTreeIcon,
	Transformers: brainIcon,
	Blockchain: blockchainIcon,
	Microservices: apiIcon,
	RabbitMQ: apiIcon,
	"Shadcn UI": codeTagsIcon,
	Midtrans: creditCardIcon,
	"Gemini API": googleIcon,
	"Google Serp API": apiIcon,
	GCP: googleCloudIcon,
	AWS: awsIcon,
	K8s: kubernetesIcon,
	K8S: kubernetesIcon,
	Kubernetes: kubernetesIcon,
	"Naver Cloud": naverIcon,
	NaverCloud: naverIcon,
	"Discord.py": discordIcon,
	Pygame: pythonIcon,
	OpenGL: openglIcon,
};

function TechnologyBadge({ name, index }: { name: string; index: number }) {
	const icon = technologyIcons[name] ?? codeTagsIcon;
	const animationDelay = Math.min(index * 0.015, 0.12);

	return (
		<motion.span
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

function ScrollDownButton() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop < document.documentElement.scrollHeight - document.documentElement.clientHeight) {

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
				setIsAtBottom(true);
			
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
			setIsAtBottom(false);
    }
  };

  return (
    <div className="fixed bottom-5 left-0 right-0 flex justify-center items-center mb-10">
      <motion.div
        className="h-10 w-10 bg-neutral-900   rounded-full flex justify-center items-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleScroll}
      >
        <FontAwesomeIcon
          icon={isAtBottom ? faChevronUp : faChevronDown}
          className="text-white  text-2xl"
        />
      </motion.div>
    </div>
  );
}


function Page(props: PageProps) {
    const params = use(props.params);
    const [data, setData] = useState<Project | "404" | null>(null);
    useEffect(() => {
		const selectedData = projects.find(
			(item) => item.slug === params.slug
		);
		if (selectedData === undefined) {
			setData("404");
		} else {
			setData(selectedData);
		}
	}, [params.slug]);

    if (data === "404") {
		return (
			<>
				<NotFound />
			</>
		);
	} else if (!data) {
		return (
			<div className="relative min-h-screen w-full  gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
				<div className="min-h-screen flex justify-center items-center w-full">
					<div className="mx-auto grid grid-cols-1 md:grid-cols-2  w-full">
						<div className="flex justify-center items-start flex-col mb-5 space-y-10 w-ful p-4">
							<div className="animate-pulse bg-neutral-400  h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400  h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400  h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400  h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400  h-20 w-full rounded shadow-lg"></div>
						</div>
						<div className="flex justify-start items-start flex-col mb-5 w-full p-4">
							<div className="animate-pulse duration-500 shadow-lg bg-neutral-400  rounded  w-full h-full "></div>
						</div>
					</div>
				</div>
				{/* images */}
				<div className="mx-auto grid grid-cols-1 p-5 md:p-20  w-full h-auto">
					<div className="w-full h-auto aspect-video">
						<div className="animate-pulse duration-500 shadow-lg bg-neutral-400  h-full w-full rounded"></div>
					</div>
				</div>
			</div>
		);
	}
    return (
		<div className="relative min-h-screen w-full gap-4 px-6 py-10 md:px-10 flex justify-center items-center flex-col">
			<FixedButon href="/projects">
				<FontAwesomeIcon
					icon={faChevronLeft}
					className="text-black  pr-10"
				/>
			</FixedButon>
			<ScrollDownButton />
			<div className="mt-16 w-full max-w-7xl">
				<Image
					src={data.thumbnail}
					alt={`${data.title} thumbnail`}
					width={1920}
					height={1080}
					placeholder="blur"
					blurDataURL={BlurImage.src}
					className="h-auto w-full rounded-2xl border border-gray-300/30 object-cover shadow-xl  "
					priority
				/>
			</div>
			<div className="flex w-full max-w-7xl justify-center items-center py-10 md:py-14">
				<div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
					<div className="flex justify-center items-start flex-col space-y-8 mx-auto">
						<div>
							<h2 className="uppercase font-bold text-lg tracking-[8px] text-neutral-400 ">
								Project
							</h2>
							<h1 className="text-4xl font-medium text-neutral-900 ">
								{data.title}
							</h1>
						</div>
						<div>
							<h2 className="uppercase font-bold text-lg tracking-[8px] text-neutral-400 ">
								Technology
							</h2>
							<div className="mt-4 flex max-w-xl flex-wrap gap-x-4 gap-y-5">
								{data.tech.map((tech, index) => (
									<TechnologyBadge
										key={tech}
										name={tech}
										index={index}
									/>
								))}
							</div>
						</div>
						<div>
							<h2 className="uppercase font-bold text-lg tracking-[8px] text-neutral-400 ">
								Year
							</h2>
							<p className="text-2xl font-normal text-neutral-900 ">
								{data.year}
							</p>
						</div>
						{data.preview && (
							<div>
								<h2 className="uppercase font-bold text-lg tracking-[8px] text-neutral-400 ">
									Preview
								</h2>
								<p className="text-2xl font-normal text-neutral-900 ">
									<a
										href={data.preview}
										target="_blank"
										rel="noopener noreferrer">
										Preview{" "}
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
											className="ml-3"
										/>
									</a>
								</p>
							</div>
						)}
						{data.code && (
							<div>
								<h2 className="uppercase font-bold text-lg tracking-[8px] text-neutral-400 ">
									Source Code
								</h2>
								<p className="text-2xl font-normal text-neutral-900 ">
									<a
										href={data.code}
										target="_blank"
										rel="noopener noreferrer">
										Github{" "}
										<FontAwesomeIcon
											icon={faGithub}
											className="ml-3"
										/>
									</a>
								</p>
							</div>
						)}
					</div>
					<div className="flex justify-start items-start flex-col">
						<h2 className="uppercase font-bold text-lg tracking-[8px] text-neutral-400 ">
							Description
						</h2>
						{data.desc.map((desc, index) => (
							<p
								key={index}
								className="text-xl text-justify tracking-wide font-normal text-gray-500  mb-5">
								{desc}
							</p>
						))}
					</div>
				</div>
			</div>
			{/* images */}
			<div className="mx-auto grid grid-cols-1 px-0 pb-10 md:pb-14 w-full">
				<div className="w-full h-auto text-center flex flex-col justify-center ">
					{data.images.map((image, index) => (
						<Image
							key={index}
							src={image}
							alt={`Project Image ${index + 1}`}
							className="mb-5 h-auto max-h-screen max-w-7xl mx-auto"
							width={1920}
							height={1080}
							blurDataURL={BlurImage.src}
							layout="responsive"
							objectFit="contain"
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Page;
