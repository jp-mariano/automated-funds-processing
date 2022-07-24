import chalk from "chalk";

export function InfoMsg(text: string): string {
	return chalk.cyan(text);
}