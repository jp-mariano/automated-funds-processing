import { createInterface } from "readline";
import { stdin as input, stdout as output } from "process";

const readLine = createInterface({ input, output });

export default async function AskInputAmount(): Promise<number> {
	return await new Promise((resolve, reject) => {
		readLine.question(`Input Amount: `, userInput => {
			readLine.close(); // Closes the interface constructor

			// Only allows input of numbers i.e., 0.01 or 1.43 or 69
			const regex = /^[0-9.]*$/;
			if (!regex.test(userInput)) reject(new Error("Input must only be a number. For example, 0.01 or 1.43 or 69"));

			resolve(Number(userInput));
		});
	});
}