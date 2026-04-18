export const sectionTitles = [
	"Staff Identification",
	"Staff Construction",
	"Keyboard Identification",
	"Fretboard Identification",
	"Ear Training",
];
export const pageTitles = [
	[
		"Note Identification",
		"Key Signature Identification",
		"Interval Identification",
		"Scale Identification",
		"Chord Identification",
	],
	[
		"Note Construction",
		"Key Signature Construction",
		"Interval Construction",
		"Scale Construction",
		"Chord Construction",
	],
	[
		"Keyboard Note Identification",
		"Keyboard Reverse Identification",
		"Keyboard Interval Identification",
		"Keyboard Scale Identification",
		"Keyboard Chord Identification",
	],
	[
		"Fretboard Note Identification",
		"Fretboard Interval Identification",
		"Fretboard Scale Identification",
		"Fretboard Chord Identification",
	],
	[
		"Keyboard Ear Training",
		"Note Ear Training",
		"Interval Ear Training",
		"Scale Ear Training",
		"Chord Ear Training",
	],
];

export const pageDescriptions = [
	[
		"Identify the displayed note.",
		"Identify the displayed key signature.",
		"Identify the displayed interval.",
		"Identify the displayed scale.",
		"Identify the displayed chord.",
	],
	[
		"Construct the requested note.",
		"Construct the requested key signature.",
		"Construct the requested interval.",
		"Construct the requested scale.",
		"Construct the requested chord.",
	],
	[
		"Identify the highlighted piano key.",
		"Identify the note by pressing a piano key.",
		"Identify the interval of the highlighted piano keys.",
		"Identify the scale of the highlighted piano keys.",
		"Identify the chord of the highlighted piano keys.",
	],
	[
		"Identify the note of the marked fretboard position.",
		"Identify the interval of the marked fretboard positions.",
		"Identify the scale of the marked fretboard positions.",
		"Identify the chord of the marked fretboard positions.",
	],
	[
		"Listen and press the piano key of the played note",
		"Listen and identify the played note",
		"Listen and identify the played interval",
		"Listen and identify the played scale",
		"Listen and identify the played chord",
	],
];

export type ClefType = "treble" | "bass";
export type KeySigType = "maj" | "min";

export const mainNotes = ["C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "B", "Bb"]
export const mainKeys = ["C major", "C# major", "Db major", "D major", "D# major", "Eb major", "E major", "F major", "F# major", "Gb major", "G major", "G# major", "Ab major", "A major", "A# major", "B major", "Bb major" , "C minor", "C# minor", "Db minor", "D minor", "D# minor", "Eb minor", "E minor", "F minor", "F# minor", "Gb minor", "G minor", "G# minor", "Ab minor", "A minor", "A# minor", "B minor", "Bb minor"]
export const mainIntervals = ["1P", "1A", "1d", "2M", "2m", "2A", "2d", "3M", "3m", "3A", "3d", "4P", "4A", "4d", "5P", "5A", "5d", "6M", "6m", "6A", "6d", "7M", "7m", "7A", "7d", "8P","8A", "8d"]