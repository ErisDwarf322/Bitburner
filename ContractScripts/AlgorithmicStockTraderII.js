/** @param {NS} ns */
//Algorithmic Stock Trader II (max profit multiple transactions)
export async function main(ns) {
    const host = 'microdyne';
    const filename = "contract-815696-NiteSec.cct";
    const contractType = ns.codingcontract.getContractType(filename, host);
    const contractData = ns.codingcontract.getData(filename, host);

    ns.tprint("ContractType: " + contractType);
    ns.tprint("contractData: " + contractData);

      if (contractType == "Algorithmic Stock Trader II") {
        let stock_prices = ns.codingcontract.getData(filename,host);
        let profit = stock_prices.reduce((acc, cur, i, arr) => {
        let diff = arr[i + 1] - cur;
  return diff > 0 ? acc + diff : acc;
}, 0);

ns.tprint(profit);
ns.tprint(ns.codingcontract.attempt(profit,filename,host));
}}
