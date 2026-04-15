import type { Pages } from "../App";
import NavbarItem from "./NavbarItem";

type NavbarProps = {
	onClick: (page: Pages) => void;
	page: Pages;
};

const Navbar = ({ onClick, page }: NavbarProps) => {
	return (
		<div className="bg-primary dark:bg-primary-dark md:rounded-out-tr-2xl fixed right-2 bottom-2 left-2 rounded-2xl p-2 md:top-20 md:w-fit md:rounded-t-none">
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
