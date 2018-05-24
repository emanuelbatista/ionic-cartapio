export class GenerateUtil{
    
    public static getUUID(): string{
       return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

}