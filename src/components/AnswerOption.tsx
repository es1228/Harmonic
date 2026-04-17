import { type MouseEvent } from "react";

type AnswerOptionProps = {
	text: string;
	isAnswer: boolean;
};

const AnswerOption = ({ text, isAnswer }: AnswerOptionProps) => {
	return (
		<button
			className="bg-on-bg dark:bg-on-bg-dark hover:bg-primary flex-1 rounded-2xl p-4 outline-0 transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
			onClick={(e: MouseEvent<HTMLButtonElement>) => {
				isAnswer
					? (e.currentTarget.style.backgroundColor = "green")
					: (e.currentTarget.style.backgroundColor = "red");
			}}
		>
			{text}
		</button>
	);
};
export default AnswerOption;
