export class RestEmployee {
    public name: string
    public baseSalary: number
    public job: string 
    
    constructor(
        name: string,
        baseSalary: number,
        job: string 
        ) {
        this.name = name
        this.baseSalary = baseSalary
        this.job = job 
        
    }
    public getJob() : string {
         return this.job
    }
}