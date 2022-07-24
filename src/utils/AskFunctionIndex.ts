import { createInterface } from "readline";
import { stdin as input, stdout as output } from "process";
import { InfoMsg } from "../helpers/ChalkMsg";
import { FunctionList } from "../constants/FunctionList";

const readLine = createInterface({ input, output });

export default async function AskFunctionIndex(): Promise<number> {
	FunctionList.forEach(element => console.log(InfoMsg(element))); // Logs the list of available functions

	return await new Promise((resolve, reject) => {
		readLine.question(`Enter the number of the function that you want to invoke: `, userInput => {
			readLine.close(); // Closes the interface constructor

			// Only allows input of whole numbers i.e., 1 or 42
			const regex = /^[1-9]*$/;
			if (!regex.test(userInput)) reject(new Error("Input must only be a whole number greater than or equal to 1."));

			const input = Number(userInput); // Input is converted to number

			// Check if the input exceeds the number of functions available
			// Subtracts 2 to the length of the array due to the placeholder elements
			if (FunctionList.length - 2 < input) reject(new Error("That's way too high!"));

			resolve(input);
		});
	});
}