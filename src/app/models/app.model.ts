import { Subscription } from "./subscription.model";

export class App {
   id: string;
   name: string;
   description: string;
   categories: string[];
   subscriptions: Subscription[];
}
