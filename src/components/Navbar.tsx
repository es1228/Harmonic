import type { Pages } from "../App";
import NavbarItem from "./NavbarItem";

type NavbarProps = {
	onClick: (page: Pages) => void;
	page: Pages;
};

const Navbar = ({ onClick, page }: NavbarProps) => {
	return (
		<div className="bg-on-bg/70 dark:bg-on-bg-dark/70 md:rounded-out-tr-2xl fixed right-0 bottom-0 left-0 z-100000 p-2 backdrop-blur-2xl md:top-18 md:w-fit">
			<ul className="flex h-full justify-center gap-2 text-lg md:flex-col">
				<NavbarItem
					icon="music_note_2"
					text="Maker"
					onClick={onClick}
					page={page}
				/>
				<NavbarItem
					icon="play_lesson"
					text="Theory"
					onClick={onClick}
					page={page}
				/>
				<NavbarItem
					icon="function"
					text="Functions"
					onClick={onClick}
					page={page}
				/>
				<div className="md:mt-auto">
					<NavbarItem
						icon="music_history"
						text="Library"
						onClick={onClick}
						page={page}
					/>
				</div>
			</ul>
		</div>
	);
};
export default Navbar;
