import { useEffect, useState } from "react";
import AnswerOption from "./AnswerOption";
import Staff from "./Staff";
import QuizSettings from "./QuizSettings";
import useQuizLogic from "../hooks/useQuizLogic";

type QuizPageProps = {
	title: string;
	section: string;
	topic: string;
	onExit: () => void;
};

const QuizPage = ({
	title,
	section,
	topic,
	onExit,
}: QuizPageProps) => {
	const {
		music,
		answer,
		clef,
		keySignature,
		settings,
		enabledSettings,
		toggleOption,
		refresh,
		allOptions,
	} = useQuizLogic(topic);

	const availableOptions = allOptions.filter((_, index) => {
		const optionRow = enabledSettings[2];
		return optionRow ? optionRow[index] : false;
	});

	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-lg">{title}</h1>
				<button
					className="bg-on-bg dark:bg-on-bg-dark fixed top-25 right-5 w-10 rounded-full p-2 text-center transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
					onClick={onExit}
				>
					X
				</button>
			</div>
			<QuizSettings
				settings={settings}
				enabledOptions={enabledSettings}
				onCheckboxClick={toggleOption}
			/>
			<Staff
				music={`X:1\n%%stretchlast\nM:4/4\nL:1/1\nK:${keySignature} clef=${clef}\n${music}|`}
			/>
			<div className="mb-25 flex flex-wrap gap-2">
				{availableOptions.map((opt) => (
					<AnswerOption
						key={`${opt}-${answer}`}
						text={opt}
						isAnswer={opt === answer ? true : false}
						onClick={opt === answer ? () => refresh(300) : () => {}}
					/>
				))}
			</div>
		</>
	);
};
export default QuizPage;
