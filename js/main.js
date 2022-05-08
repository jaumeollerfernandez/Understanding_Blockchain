
var myBlockChain = new BlockChain();

var block1, block2, block3;

block1 = new Block("Datos de Bloque 1");
myBlockChain.addBlock(block1);


previoushash = myBlockChain.latestBlock().hash;
block2 = new Block("Datos de Bloque 2", previoushash);
myBlockChain.addBlock(block2);

previoushash = myBlockChain.latestBlock().hash;
block3 = new Block("Datos de Bloque 3", previoushash);
myBlockChain.addBlock(block3);

myBlockChain.listBlocks();

myBlockChain.printlista();
// if (myBlockChain.Validate()){
//     console.log("Block chain unaltered");
//  }else{
//     console.log("Block chain CORRUPTED ");
//  };
  
//  block2.data= "Altered data";
  
//  if (myBlockChain.Validate()){
//     console.log("Block chain unaltered");
//  }else{
//     console.log("Block chain CORRUPTED ");
//  };
 
