import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
	const [noOfWords, setNoOfWords] = useState();
	const [para, setPara] = useState();

	const generatePara = async (e) => {
		const res =
			await axios.get(`https://random-word-api.vercel.app/api?words=${noOfWords}
		`);
		// console.log(res);
		const para = res.data.join(" ");
		// console.log(para);
		setPara(para);
		setNoOfWords();
	};

	return (
		<>
			<input
				type="number"
				onChange={(e) => setNoOfWords(e.target.value)}
				placeholder="Enter number of words"
				value={noOfWords}
			/>
			<button onClick={generatePara}>Generate</button>
			{para && <GeneratedPara para={para} />}
		</>
	);
}

export default App;

function GeneratedPara({ para }) {
	return <p>{para}</p>;
}
