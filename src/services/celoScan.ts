export async function getNormalTransactionsByAddress(address: string) {
    try{
        const response = await fetch(`https://explorer.celo.org/mainnet/api?module=account&action=tokentx&address=${address}&contractaddress=0x765de816845861e75a25fca122bb6898b8b1282a`);
        return await response.json();
    } catch(error) {
        return [];
    }
} 
