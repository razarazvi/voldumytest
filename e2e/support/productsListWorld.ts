// The World is a place where we can store our test data.
// This can be accessed from libraries or other files in project structure

import { World } from "cucumber";

declare module "cucumber" {
    interface World {
        product: myLib.Product;
    }
}
