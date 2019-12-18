const path=require('path');
const solc=require('solc');
const fs=require('fs-extra');

const buildPath=path.resolve(__dirname,'build');
fs.removeSync(buildPath);
const contractPath=path.resolve(__dirname,'contracts','Campaign.sol');
fs.ensureDirSync(buildPath);
const source=fs.readFileSync(contractPath,'utf8');
const contracts=solc.compile(source,1).contracts;
// console.log(contracts)
for(let contract in contracts){
    fs.outputJSONSync(
        path.resolve(buildPath,contract.replace(':','')+'.json'),
        contracts[contract]
    )
}