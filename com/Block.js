class Block{
    constructor(pData,pPreviousHash="default hash value"){
        console.log("Constructor de Block");
        this.guid = createGUID();
        this.timestamp = Date.now().toString();
        this.data = pData;
        this.PreviousHash = pPreviousHash;
        this.hash = this.CalculateHash();
    }
    
    printInfo() {
        console.log("___________BLOCK INFO___________");
        console.log("THIS DATA = " + this.data);
        console.log("THIS TIMESTAMP = " + this.timestamp);
        console.log("THIS GUID = " + this.guid);
        console.log("THIS PREVIOUS HASH = " + this.PreviousHash);
        console.log("THIS NEW HASH = " + this.hash);
    
    }

    CalculateHash() {
        var temp;
        //Esto te devuelve el hash
        temp = md5(this.guid + this.timestamp + this.PreviousHash + this.data);
        return temp;
    }

    

}