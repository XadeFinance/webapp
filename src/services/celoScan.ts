export async function getNormalTransactionsByAddress(address: string) {
    try{
        const response = await fetch(`https://explorer.celo.org/alfajores/api?module=account&action=tokentx&address=${address}&contractaddress=0x874069fa1eb16d44d622f2e0ca25eea172369bc1`);
        return await response.json();
    } catch(error) {
        return [];
    }
} 
