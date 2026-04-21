import { type MouseEvent } from "react";

type AnswerOptionProps = {
	text: string;
	isAnswer: boolean;
	onClick: (isAnswer: boolean) => void;
};

const AnswerOption = ({ text, isAnswer, onClick }: AnswerOptionProps) => {
	return (
		<button
			className="bg-on-bg dark:bg-on-bg-dark hover:bg-primary flex-1 rounded-2xl p-4 text-wrap outline-0 transition duration-100 ease-in-out hover:scale-105 hover:cursor-pointer text-sm"
			onClick={(e: MouseEvent<HTMLButtonElement>) => {
				isAnswer
					? (e.currentTarget.style.backgroundColor = "green")
					: (e.currentTarget.style.backgroundColor = "red");
				onClick(isAnswer);
			}}
		>
			{text}
		</button>
	);
};
export default AnswerOption;
