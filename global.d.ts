// Type definitions for ProductList Test Automation Framework

declare namespace myLib {

    // Our global 'Product' type/interface
    //Enforces the format of our test data
    //Can make optional by adding '?' to the end. Eg - 'name?:'
    interface Product {
        name: string;
        description: string;
        price: string;
    }
}
