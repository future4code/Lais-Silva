import { v4 } from 'uuid';

export default class GenerateId {
    public execute() : any {
        return v4();
    }
}
