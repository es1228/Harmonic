import { renderAbc } from "abcjs";
import { useEffect, useRef, useState } from "react";

type StaffProps = {
	music: string;
};

const Staff = ({ music }: StaffProps) => {
	const [width, setWidth] = useState(window.innerWidth);
	const sheetRef = useRef(null);

	useEffect(() => {
		window.addEventListener("resize", () => setWidth(window.innerWidth));
		return () =>
			window.removeEventListener("resize", () =>
				setWidth(window.innerWidth),
			);
	}, [width]);

	useEffect(() => {
		sheetRef.current &&
			(width < 500
				? renderAbc(sheetRef.current, music)
				: renderAbc(sheetRef.current, music, { responsive: "resize" }));
	}, [music, width]);

	return <div ref={sheetRef} />;
};
export default Staff;
