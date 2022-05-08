class BlockChain{
    constructor (){
        console.log("Constructor de BlockChain");
        this.blocks = [];
        this.lasthash = this.latestBlock()
    }

    printlista(){
        console.log(this.blocks)
    }

    addBlock(pBlock){
        this.blocks.push(pBlock);
    }


    listBlocks() {
        for(var i=0;i<this.blocks.length; i++){
            var tObj = this.blocks[i];
            tObj.printInfo();
        }
    }

    latestBlock(){
        var tb;
        tb = this.blocks[this.blocks.length-1];
        return tb;
    }

    Validate(){
        /* 
        precondition: Detectar si el anterior hash es el mismo
        postcondition: Si lo es, ok. Sino, sacar corrupto
        */
        


    }

}