import { useEffect, useState } from "react";
import {
	clefs,
	keyTypes,
	mainChords,
	mainIntervals,
	mainKeys,
	mainNotes,
	type ClefType,
	type KeySigType,
} from "../components/Constants";
import { AbcNotation, Chord, Interval, Note, Range, Scale } from "tonal";

const useQuizLogic = (topic: string) => {
	// common quiz options
	const [quiz, setQuiz] = useState({
		allOptions: [] as string[],
		enabledSettings: [] as boolean[][],
		settings: [] as string[][],
		answer: "",
		music: "",
		clef: "treble" as ClefType,
		keySignature: "C",
	});

	// get a random note in clef
	const getRandomNote = (clefType: ClefType) => {
		// set ranges for treble and bass
		let range;
		clefType === "treble" ? (range = ["C4", "B5"]) : (range = ["C2", "B3"]);

		// create a list of notes and remove the duplicated
		const allNotes = Range.chromatic(range, { sharps: true });
		const allEnharmonics = allNotes.map((note) => Note.enharmonic(note));
		const allCombinedNotesRaw = [...allNotes, ...allEnharmonics];
		const allCombinedNotes = [
			...new Map(
				allCombinedNotesRaw.map((note) => [note, note]),
			).values(),
		];
		const note =
			allCombinedNotes[
				Math.floor(Math.random() * allCombinedNotes.length)
			];
		return note;
	};

	// get options
	const getOptionsForTopic = (topic: string) => {
		if (topic.includes("Note")) return mainNotes;
		else if (topic.includes("Key Signature") || topic.includes("Scale"))
			return mainKeys;
		else if (topic.includes("Interval")) return mainIntervals;
		else if (topic.includes("Chord")) return mainChords;
		return [];
	};

	let music = "";
	let answer = "";
	let keySig = "C";

	// refresh
	const refresh = (delay = 0) => {
		setTimeout(() => {
			setQuiz((prev) => {
				const enabled = [...prev.enabledSettings];
				return {
					...prev,
					answer: "",
					music: "",
					enabledSettings: enabled,
				};
			});
		}, delay);
	};

	// toggling options
	const toggleOption = (row: number, index: number) => {
		setQuiz((prev) => {
			const enabled = [...prev.enabledSettings];
			enabled[row] = enabled[row].map((opt, i) =>
				i === index ? !opt : opt,
			);
			return { ...prev, enabledSettings: enabled, answer: "", music: "" };
		});
	};

	// main logic
	useEffect(() => {
		// initially set the options
		if (quiz.allOptions.length === 0) {
			const options = getOptionsForTopic(topic);
			setQuiz((prev) => ({
				...prev,
				allOptions: options,
				settings: [clefs, keyTypes, options],
				enabledSettings: [
					new Array(clefs.length).fill(true),
					new Array(keyTypes.length).fill(true),
					new Array(options.length).fill(true),
				],
			}));
			return;
		}

		if (quiz.answer !== "") return;

		// pick a clef
		const enabledClefIndicies = quiz.enabledSettings[0]
			.map((val, index) => (val ? index : -1))
			.filter((val) => val !== -1);
		const selectedClefIndex =
			enabledClefIndicies[
				Math.floor(Math.random() * enabledClefIndicies.length)
			];
		const currentClef = (clefs[selectedClefIndex] || "treble") as ClefType;

		// pick a key type
		const enabledKeyTypeIndicies = quiz.enabledSettings[1]
			.map((val, index) => (val ? index : -1))
			.filter((val) => val !== -1);
		const selectedKeyTypeIndex =
			enabledKeyTypeIndicies[
				Math.floor(Math.random() * enabledKeyTypeIndicies.length)
			];
		const currentKeyType = (keyTypes[selectedKeyTypeIndex] ||
			"major") as KeySigType;

		// note topic
		if (topic.includes("Note")) {
			let isEnabled = false;
			let note = "C";

			// check if enabled
			while (!isEnabled && quiz.enabledSettings.some((val) => val)) {
				note = getRandomNote(currentClef);
				const pc = Note.pitchClass(note);
				const index = quiz.allOptions.indexOf(pc);

				if (index !== -1 && quiz.enabledSettings[2][index]) {
					music = AbcNotation.scientificToAbcNotation(note);
					answer = pc;
					isEnabled = true;
				}
			}
		} else if (topic.includes("Key Signature")) {
			let isEnabled = false;
			let note = "C";

			// check if enabled
			while (!isEnabled && quiz.enabledSettings.some((val) => val)) {
				note = getRandomNote(currentClef);
				const pc = Note.pitchClass(note);
				const index = quiz.allOptions.indexOf(
					`${pc} ${currentKeyType.toLowerCase()}`,
				);

				if (index !== -1 && quiz.enabledSettings[2][index]) {
					music = "x";
					answer = `${pc} ${currentKeyType.toLowerCase()}`;
					keySig = answer;
					isEnabled = true;
				}
			}
		} else if (topic.includes("Interval")) {
			// get a random interval in treble or bass
			let isEnabled = false;
			while (!isEnabled && quiz.enabledSettings.some((val) => val)) {
				const note1 = `${getRandomNote(currentClef)}`;
				const note2 = Note.transpose(
					note1,
					Interval.fromSemitones(Math.floor(Math.random() * 9)),
				);

				const interval = Interval.simplify(
					Interval.distance(note1, note2),
				);
				const index = quiz.allOptions.indexOf(interval);

				if (index !== -1 && quiz.enabledSettings[2][index]) {
					music =
						`[${AbcNotation.scientificToAbcNotation(note1)}${AbcNotation.scientificToAbcNotation(note2)}]`.replaceAll(
							",",
							"",
						);
					answer = interval;
					isEnabled = true;
				}
			}
		} else if (topic.includes("Scale")) {
			// scale exercise
			const allowedTypes = [];
			if (quiz.enabledSettings[2][0]) allowedTypes.push("major");
			if (quiz.enabledSettings[2][1]) allowedTypes.push("minor");

			if (allowedTypes.length > 0) {
				const octave = currentClef === "treble" ? "4" : "2";
				const note = Note.pitchClass(getRandomNote(currentClef));
				const notes = Scale.get(
					`${note}${octave} ${currentKeyType}`,
				).notes.map((note) =>
					AbcNotation.scientificToAbcNotation(note),
				);
				music = notes.join(" ");
				answer = `${note} ${currentKeyType.toLowerCase()}`;
				console.log(answer);
			}
		} else if (topic.includes("Chord")) {
			let isEnabled = false;

			// check if enabled
			while (!isEnabled && quiz.enabledSettings.some((val) => val)) {
				const note = Note.pitchClass(getRandomNote(currentClef));
				const chordType =
					mainChords[Math.floor(Math.random() * mainChords.length)];
				const index = quiz.allOptions.indexOf(chordType);

				if (index !== -1 && quiz.enabledSettings[2][index]) {
					const notes = Chord.get(`${note}${chordType}`).notes;
					console.log(`${note}${chordType}`);
					music = `[${notes.join("")}]`;
					answer = chordType;
					isEnabled = true;
				}
			}
		}
		// update quiz
		setQuiz((prev) => ({
			...prev,
			music: music,
			answer: answer,
			clef: currentClef,
			keySignature: keySig,
		}));
	}, [topic, quiz.enabledSettings]);

	return {
		...quiz,
		toggleOption,
		refresh,
		allOptions: quiz.allOptions,
	};
};
export default useQuizLogic;
