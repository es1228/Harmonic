import { useEffect, useState } from "react";
import AnswerOption from "./AnswerOption";
import Staff from "./Staff";
import { AbcNotation, Range, Note } from "tonal";
import { mainNotes } from "./Constants";

type QuizPageProps = {
	title: string;
	onExit: () => void;
};

const QuizPage = ({ title, onExit }: QuizPageProps) => {
	// set notes from c4-b4 and combine all enharmonics
	const [options, setOptions] = useState<string[]>([]);
	const [answer, setAnswer] = useState<string>("");
	const [clef, setClef] = useState<"treble" | "bass">();

	// fetch possible notes and clef
	useEffect(() => {
		const clefType = Math.round(Math.random());
		clefType === 1 ? setClef("treble") : setClef("bass");

		let range;
		clefType === 1 ? range = ["C4", "B5"] : range = ["C2", "B3"]

		const allNotes = Range.chromatic(range, { sharps: true });
		const allEnharmonics = allNotes.map((note) => Note.enharmonic(note));
		const allCombinedNotes = [...allNotes, ...allEnharmonics];

		setAnswer(
			allCombinedNotes[
				Math.floor(Math.random() * allCombinedNotes.length)
			],
		);
		setOptions(mainNotes);
	}, []);

	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-lg">{title}</h1>
				<button
					className="bg-on-bg dark:bg-on-bg-dark absolute top-25 right-5 w-10 rounded-full p-2 text-center transition duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
					onClick={onExit}
				>
					X
				</button>
			</div>
			<Staff
				music={`X:1\n%%stretchlast\nM:C\nL:1/4\nK:C clef=${clef}\n${AbcNotation.scientificToAbcNotation(answer)}|`}
			/>
			<div className="flex flex-wrap gap-2">
				{options.map((note) => (
					<AnswerOption
						key={note}
						text={Note.pitchClass(note)}
						isAnswer={
							Note.pitchClass(note) === Note.pitchClass(answer)
								? true
								: false
						}
					/>
				))}
			</div>
		</>
	);
};
export default QuizPage;
