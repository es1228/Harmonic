type OptionCardProps = {
	title: string;
	description: string;
};

const OptionCard = ({ title, description }: OptionCardProps) => {
	return (
		<div className="bg-on-bg dark:bg-on-bg-dark rounded-2xl p-4 transition duration-300 ease-in-out hover:scale-101 hover:cursor-pointer">
			<h1 className="text-2xl">{title}</h1>
			<p className="text-text-secondary">{description}</p>
		</div>
	);
};
export default OptionCard;
