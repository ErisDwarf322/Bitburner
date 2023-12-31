/** @param {NS} ns */
//Algorithmic Stock Trader I (max rofit one transaction)
export async function main(ns) {
    const host = 'home';
    const filename = "contract-306822.cct";
    const contractType = ns.codingcontract.getContractType(filename, host);
    const contractData = ns.codingcontract.getData(filename, host);

    ns.tprint("ContractType: " + contractType);
    ns.tprint("contractData: " + contractData);

      if (contractType == "Algorithmic Stock Trader I") {
      
      let stock_prices = ns.codingcontract.getData(filename,host);
      let profit = 0;
 for (let i = 0; stock_prices.length > i; i++) {
      let workingData = stock_prices.slice(i);
 for (let j = 0; workingData.length > j; j++) {

           profit = Math.max(profit,Math.max(...workingData.slice(j)) - workingData[j])
            }
        }
        ns.tprint("profit: ",profit);
        ns.tprint(ns.codingcontract.attempt(profit,filename,host));
    }
    }