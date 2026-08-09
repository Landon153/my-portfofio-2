"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faFolderOpen,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

type FullpageApi = {
	moveTo: (index: number) => void;
	getActiveSection: () => { index: number };
};

const getFullpageApi = () =>
	typeof window === "undefined"
		? undefined
		: (window as Window & { fullpage_api?: FullpageApi }).fullpage_api;

const Sidebar = () => {
	const handleMoveToSection = (index: number) => {
		const fullpageApi = getFullpageApi();

		fullpageApi?.moveTo(index);
		fullpageApi?.getActiveSection();
	};

	const containIsActive = (index: number) => {
		const fullpageApi = getFullpageApi();

		if (fullpageApi?.getActiveSection().index === index) {
			return "bg-gray-500 ";
		}
		return "";
	};
	return (
		<div className="hidden md:flex fixed z-40 bg-gray-700    h-[50vh] w-14  flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
			<ul
				id="sidebar"
				className="flex flex-col justify-evenly items-center h-full text-gray-50 ">
				<li data-menuanchor="home" className="active">
					<button onClick={() => handleMoveToSection(1)}>
						<FontAwesomeIcon icon={faHome} className="text-xl" />
					</button>
				</li>
				<li data-menuanchor="about">
					<button onClick={() => handleMoveToSection(2)}>
						<FontAwesomeIcon icon={faUser} className="text-xl" />
					</button>
				</li>
				<li data-menuanchor="projects">
					<button onClick={() => handleMoveToSection(3)}>
						<FontAwesomeIcon
							icon={faFolderOpen}
							className="text-xl"
						/>
					</button>
				</li>
				<li data-menuanchor="contact">
					<button onClick={() => handleMoveToSection(4)}>
						<FontAwesomeIcon
							icon={faEnvelope}
							className="text-xl"
						/>
					</button>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
