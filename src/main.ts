import CheckEvmBalance from "./components/CheckEvmBalance";
import AskFunctionIndex from "./utils/AskFunctionIndex";
import { FunctionNames } from "./constants/FunctionList";

const InvokeFunction: { [key: string]: () => void } = {
	CheckEvmBalance
};

async function main(): Promise<void> {
	try {
		const functionIndex: number = await AskFunctionIndex(); // Asks which function to run
		await InvokeFunction[`${ FunctionNames[functionIndex - 1] }`](); // Invokes the function

		console.log("Thanks for using this application!");

	} catch (err) {
		console.log(err);
	}
}

main(); // Trigger