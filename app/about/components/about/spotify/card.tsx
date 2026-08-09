import React, { useEffect, useState } from "react";
import getNowPlayingItem, { type NowPlayingItem } from "./fetch";
import PlayingAnimation from "./animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Card = () => {
	const [loading, setLoading] = useState(true);
	const [result, setResult] = useState<NowPlayingItem | false>(false);
	const nowPlaying = result && result.isPlaying ? result : null;

useEffect(() => {
	const fetchData = async () => {
		const results = await Promise.all([getNowPlayingItem()]);
		console.log(results);
		setResult(results[0]);
		setLoading(false);
	};
	fetchData(); // Fetch data immediately on component mount

	const intervalId = setInterval(fetchData, 60 * 1000); // ! Fetch data every minute: temporary 

	return () => clearInterval(intervalId); 
}, []);

	return (
		<div className="mt-3 flex justify-center w-full">
			{loading ? (
				<div className="flex justify-center mb-8">
					{/* Replace this with your own loading spinner */}
					<div className="loader ease-linear rounded-full border-4 border-t-4 border-black   h-12 w-12 mb-4"></div>
				</div>
			) : (
				<div className="relative w-full mb-8 grid grid-cols-2  gap-2 border-2 border-gray-500 p-4 rounded-lg backdrop-filter backdrop-blur-lg bg-white bg-opacity-30   ">
					{nowPlaying && (
					<Image
						src={nowPlaying.albumImageUrl}
						alt="backgroundImage"
						layout="fill"
						objectFit="cover"
						className="z-0 opacity-20 absolute"
					/>
					)}
					<div className="z-10  flex items-center">
						<FontAwesomeIcon
							icon={faSpotify}
							className="text-black  text-5xl me-5 md:me-1 xl:me-8"
						/>
						<p className="font-semibold me-5 md:me-1 xl:me-7">
							{nowPlaying
								? "Now playing"
								: "Currently offline"}
						</p>
						{nowPlaying && <PlayingAnimation />}
					</div>
					{nowPlaying && (
						<div className="z-10 rounded-lg ms-5">
							<div className="flex items-center space-x-4">
								<div className="overflow-hidden">
									<a
										href={nowPlaying.songUrl ? encodeURI(nowPlaying.songUrl) : "#"}
										target="_blank"
										className="block font-semibold w-full truncate text-blue-500">
										{nowPlaying.title}
									</a>
									<p className="truncate text-gray-500 ">
										{nowPlaying.artist}
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Card;
