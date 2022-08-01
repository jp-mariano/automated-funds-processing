import "dotenv/config";

const AvaxMainRpcUrl = process.env.AVAX_MAIN_RPC_URL;
const EvmPrivateKey: string = process.env.EVM_PRIVATE_KEY!;

export {
	AvaxMainRpcUrl,
	EvmPrivateKey,
};