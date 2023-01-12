export async function getNormalTransactionsByAddress(address: string) {
    try{
        const response = await fetch(`https://explorer-liberty20.shardeum.org/api/transaction?address={address}&contractaddress=0xB5C8619EE3505bB83e985d8234cbd9c28f8B89d1`);
        return await response.json();
    } catch(error) {
        return [];
    }
} 
