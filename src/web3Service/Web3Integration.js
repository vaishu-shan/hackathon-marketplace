import Web3 from "web3";
import NFTAbi from "../contract/NFTContract.json"

export const mintTicket = async ( EthAddress, contractAddress) => {
  try {
    const web3 = new Web3(window.ethereum);
    let amountInWei = web3.utils.toWei("0.003", "ether");
    console.log("amountInWei",amountInWei)
    var myContract = new web3.eth.Contract(NFTAbi, contractAddress);
    let mintHash = await myContract.methods
      .mintTickets(1,1)
      .send({ from: EthAddress,value: amountInWei });
    console.log("mintHash", mintHash)
    return mintHash
  } catch (error) {
    console.log("error in mintTicket", error)
    return
  }

};

export const platinumTicketsOwned = async(  EthAddress,contractAddress) => {
  try{
    const web3 = new Web3(window.ethereum);
    var myContract = new web3.eth.Contract(NFTAbi, contractAddress);
    let platinumRes =  await myContract.methods.platinumTicketsOwned(EthAddress).call();
    console.log("platinumRes", platinumRes)
    return platinumRes;
  }catch(error){
    console.log("error in platinumTicketsOwned", error)
    return
  }
}
export const goldTicketsOwned = async(  EthAddress,contractAddress) => {
  try{
    const web3 = new Web3(window.ethereum);
    var myContract = new web3.eth.Contract(NFTAbi, contractAddress);
    let goldRes =  await myContract.methods.goldTicketsOwned(EthAddress).call();
    console.log("goldRes", goldRes)
    return goldRes;
  }catch(error){
    console.log("error in goldTicketsOwned", error)
    return
  }
}
export const silverTicketsOwned = async(  EthAddress,contractAddress) => {
  try{
    const web3 = new Web3(window.ethereum);
    var myContract = new web3.eth.Contract(NFTAbi, contractAddress);
    let silverRes =  await myContract.methods.silverTicketsOwned(EthAddress).call();
    console.log("silverRes", silverRes)
    return silverRes;
  }catch(error){
    console.log("error in silverTicketsOwned", error)
    return
  }
}