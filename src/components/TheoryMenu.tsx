import OptionCard from "./OptionCard";

const TheoryMenu = () => {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-lg">Staff Identification</h1>
            <hr className="text-text-secondary rounded-2xl" />
			<OptionCard
				title="Note Identification"
				description="Identify the displayed note."
			/>
			<OptionCard
				title="Key Signature Identification"
				description="Identify the displayed key signature."
			/>
			<OptionCard
				title="Interval Identification"
				description="Identify the displayed interval."
			/>
			<OptionCard
				title="Scale Identification"
				description="Identify the displayed scale."
			/>
			<OptionCard
				title="Chord Identification"
				description="Identify the displayed chord."
			/>
			<h1 className="text-lg">Staff Construction</h1>
			<OptionCard
				title="Note Construction"
				description="Construct the requested note."
			/>
			<OptionCard
				title="Key Signature Construction"
				description="Construct the requested key signature."
			/>
			<OptionCard
				title="Interval Construction"
				description="Construct the requested interval."
			/>
			<OptionCard
				title="Scale Construction"
				description="Construct the requested scale."
			/>
			<OptionCard
				title="Chord Construction"
				description="Construct the requested chord."
			/>
			<h1 className="text-lg">Keyboard Identification</h1>
            <hr className="text-text-secondary rounded-2xl" />
			<OptionCard
				title="Keyboard Note Identification"
				description="Identify the highlighted piano key."
			/>
			<OptionCard
				title="Keyboard Reverse Identification"
				description="Identify the note by pressing a piano key."
			/>
			<OptionCard
				title="Keyboard Interval Identification"
				description="Identify the interval of the highlighted piano keys."
			/>
			<OptionCard
				title="Keyboard Scale Identification"
				description="Identify the scale of the highlighted piano keys."
			/>
			<OptionCard
				title="Keyboard Chord Identification"
				description="Identify the chord of the highlighted piano keys."
			/>
            <h1 className="text-lg">Fretboard Identification</h1>
            <hr className="text-text-secondary rounded-2xl" />
			<OptionCard
				title="Fretboard Note Identification"
				description="Identify the note of the marked fretboard position."
			/>
			<OptionCard
				title="Fretboard Interval Identification"
				description="Identify the interval of the marked fretboard positions."
			/>
            <OptionCard
				title="Fretboard Scale Identification"
				description="Identify the scale of the marked fretboard positions."
			/>
            <OptionCard
				title="Fretboard Chord Identification"
				description="Identify the chord of the marked fretboard positions."
			/>
			<h1 className="text-lg">Ear Training</h1>
            <hr className="text-text-secondary rounded-2xl" />
			<OptionCard
				title="Keyboard Ear Training"
				description="Listen and press the piano key of the played note."
			/>
			<OptionCard
				title="Note Ear Training"
				description="Listen and identify the played note."
			/>
			<OptionCard
				title="Interval Ear Training"
				description="Listen and identify the played interval."
			/>
			<OptionCard
				title="Scale Ear Training"
				description="Listen and identify the played scale."
			/>
			<OptionCard
				title="Chord Ear Training"
				description="Listen and identify the played chord."
			/>
		</div>
	);
};
export default TheoryMenu;
