import { ethers } from "ethers";
import {
	AvaxMainRpcUrl,
	EvmPrivateKey,
} from "../constants/Config";
import ERC20ABI from "../constants/json-files/erc20-abi.json";

export default async function CheckEvmBalance(): Promise<void> {
	// Initializing the provider and wallet
	const provider = new ethers.providers.JsonRpcProvider(AvaxMainRpcUrl);
	const wallet = new ethers.Wallet(EvmPrivateKey);
	const connectedWallet = wallet.connect(provider);

	// Checking of AVAX balance
	const balance = await connectedWallet.getBalance();
	console.log(`${ Number(ethers.utils.formatUnits(balance, 18)).toFixed(8) } AVAX`); // Displays native balance up to 8 decimals

	// Checking of USDC balance
	
}