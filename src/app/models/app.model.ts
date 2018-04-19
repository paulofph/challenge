import { Subscription } from "./subscription.model";

export class App {
    id: string;
    name: string;
    description: string;
    categories: string[];
    subscriptions: Subscription[];

    //UI
    sumOfSubsPrices: number;

    constructor(appFromFile:App){
        let sum = 0;

        Object.assign(this, appFromFile);
        appFromFile.subscriptions.forEach(subscription => {
            sum = sum + subscription.price;
        });

        this.sumOfSubsPrices = sum;
    }
}

