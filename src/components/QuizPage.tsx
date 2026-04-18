import { useEffect, useState } from "react";
import AnswerOption from "./AnswerOption";
import Staff from "./Staff";
import { AbcNotation, Range, Note, Interval, Scale } from "tonal";
import {
	mainIntervals,
	mainKeys,
	mainNotes,
	type ClefType,
	type KeySigType,
} from "./Constants";

type QuizPageProps = {
	title: string;
	section: string;
	topic: string;
	onReload: () => void;
	onExit: () => void;
};

const QuizPage = ({
	title,
	section,
	topic,
	onReload,
	onExit,
}: QuizPageProps) => {
	const [options, setOptions] = useState<string[]>([]);
	const [answer, setAnswer] = useState<string>("");
	const [clef, setClef] = useState<ClefType>("treble");
	const [keyType, setKeyType] = useState<KeySigType>("major");
	const [keySignature, setKeySignature] = useState<string>();
	const [timeSignature, setTimeSignature] = useState<string>("4/4");
	const [music, setMusic] = useState<string>("");

	useEffect(() => {
		// randomize clef
		const clefType = Math.round(Math.random());
		clefType === 1 ? setClef("treble") : setClef("bass");

		// set ranges for treble and bass
		let range;
		clefType === 1 ? (range = ["C4", "B5"]) : (range = ["C2", "B3"]);

		// create a list of notes and remove the duplicated
		const allNotes = Range.chromatic(range, { sharps: true });
		const allEnharmonics = allNotes.map((note) => Note.enharmonic(note));
		const allCombinedNotesRaw = [...allNotes, ...allEnharmonics];
		const allCombinedNotes = [
			...new Map(
				allCombinedNotesRaw.map((note) => [note, note]),
			).values(),
		];

		// random note
		const getRandomNote = () => {
			return allCombinedNotes[
				Math.floor(Math.random() * allCombinedNotes.length)
			];
		};

		if (topic.includes("Note")) {
			// note exercise
			const note = getRandomNote();

			setMusic(AbcNotation.scientificToAbcNotation(note));
			setOptions(mainNotes);
			setAnswer(Note.pitchClass(note));
		} else if (topic.includes("Key Signature")) {
			// key signature exercise

			// randomize key signature
			const keyValue = Math.round(Math.random());
			let keySuffix: KeySigType;
			keyValue === 0 ? (keySuffix = "minor") : (keySuffix = "major");
			setKeyType(keySuffix);
			const note = getRandomNote();

			setMusic("x")
			setKeySignature(
				`
				${Note.pitchClass(note)} ${keySuffix}`.trim(),
			);
			setOptions(
				mainNotes.map((note) => `${note} ${keySuffix.slice(0, -2)}`),
			);
			setAnswer(`${Note.pitchClass(note)} ${keySuffix}`);
		} else if (topic.includes("Interval")) {
			// get a random interval in treble or bass
			let octave;
			clefType === 1 ? (octave = "4") : (octave = "2");

			const note1 = `${getRandomNote().toString().slice(0, -1)}${octave}`;
			const note2 =
				allCombinedNotes[
					allCombinedNotes.indexOf(note1) +
						Math.floor(Math.random() * 9)
				];

			// abc formatting
			const formattedInterval =
				`[${AbcNotation.scientificToAbcNotation(note1)}${AbcNotation.scientificToAbcNotation(note2)}]`.replaceAll(
					",",
					"",
				);

			setMusic(formattedInterval);
			setOptions(mainIntervals);
			setAnswer(Interval.simplify(Interval.distance(note1, note2)));
		} else if (topic.includes("Scale")) {
			// scale exercise

			// get a random scale
			const note = getRandomNote();

			const keyValue = Math.round(Math.random());
			let keySuffix: KeySigType;
			keyValue === 0 ? (keySuffix = "minor") : (keySuffix = "major");

			const scale = `${note} ${keySuffix}`;
			const notesRaw = Scale.get(scale).notes;
			const notes = notesRaw.map((note) =>
				AbcNotation.scientificToAbcNotation(note),
			);

			const formattedNotes = notes.join(" ");
			setMusic(formattedNotes);
			setOptions([`${Note.pitchClass(note)} major`, `${Note.pitchClass(note)} minor`]);
			setAnswer(`${Note.pitchClass(note)} ${keySuffix}`);
		}
	}, []);

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
			<Staff
				music={`X:1\n%%stretchlast\nM:${timeSignature}\nL:1/1\nK:${keySignature} clef=${clef}\n${music}|`}
			/>
			<div className="flex flex-wrap gap-2">
				{options.map((opt) => (
					<AnswerOption
						key={opt}
						text={opt}
						isAnswer={opt === answer ? true : false}
						onClick={opt === answer ? onReload : () => {}}
					/>
				))}
			</div>
		</>
	);
};
export default QuizPage;
