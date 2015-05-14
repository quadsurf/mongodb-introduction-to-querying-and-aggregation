# Setup

Add the requisite data set to your local MongoDB instance with the following command (run from the directory you cloned this repository to):

```
mongo localhost:27017/exploring_mongodb data_import.js
```

After running this command you have two options for querying the data set:

1. Open a MongoDB console with `mongo`, then, use `show databases` to see the list of databases. Next `use exploring_mongodb` to use the appropriate database for this exercise.

1. Use Robomongo and interpret the console approach in the GUI.

# Exercise

Write a query or use the aggregation pipeline to answer each of the following questions:

1. Write a query to find every document in the `products` collection.
  <!-- _Solution:_ `db.products.find({});` -->
1. Write a query to find out how many `products` belong to the company "Schoen-Emard".
  <!-- _Solution:_ `db.products.find({company: "Schoen-Emard"}).count();` -->
1. Write a query to find all `products` that belong to the company "Schoen-Emard" in the "Games, Health & Home" department.
  <!-- _Solution:_ `db.products.find({company: "Schoen-Emard", department: "Games, Health & Home"});` -->
1. Write a query to find all `products` that belong to the company "Schoen-Emard" in the "Games, Health & Home" department with a price over $90.00.
  <!-- _Solution:_ `db.products.find({company: "Schoen-Emard", department: "Games, Health & Home", price: {$gt: 90}});` -->
1. Write a query to find all `products` that belong to either company of "Schaden Group" and "Fay, Ryan and Deckow", but only return the product itself, not the company, department or price.
  <!-- _Solution:_ `db.products.find({company: {$in: ["Schaden Group", "Fay, Ryan and Deckow"]}}, {_id: 0, product: 1})` -->
1. Use the aggregation pipeline to return all `products` that belong to the company "Kub-Hansen".
  <!-- _Solution:_ 
  ```
  db.products.aggregate([
    {
        $match: {
            company: "Kub-Hansen"
        }
    }
  ]);
  ```
  -->
1. Use the aggregation pipeline to return all `products` with a price greater than $10.00 and less than $60.00.
  <!-- Solution:
  ```
  db.products.aggregate([
    {
        $match: {
            price: {$gt: 10, $lt: 60}
        }
    }
  ]);
  ```
  -->
1. Use the aggregation pipeline to return a count of the number of `products` with a price greater than $10.00 and less than $60.00.
  <!-- Solution: 50,117
  ```
  db.products.aggregate([
    {
        $match: {
            price: {$gt: 10, $lt: 60}
        }
    },
    {
        $group: {
            _id: {},
            count: {$sum: 1}
        }
    }
  ]);
  ```
  -->
1. Use the aggregation pipeline to compute the sum of all products sold by the company "Kub-Hansen"?
  <!-- _Solution: $164,395.6600000002072193 (approx)
  ```
  db.products.aggregate([
    {
        $match: {
            company: "Kub-Hansen"
        }
    },
    {
        $group: {
            _id: { company: "$company" },
            total: {$sum: "$price"}
        }
    }
  ]);
  ```
  -->

# Some help

* You may find [this guide](http://docs.mongodb.org/manual/tutorial/query-documents/) helpful
* [Introduction to the Aggregation Pipeline](http://docs.mongodb.org/manual/core/aggregation-introduction/)

# Some more details

In case you are interested in how the data set was constructed, the Ruby script used to generate the `data_set.js` file is included (`data_set_generator.rb`). Whoa, meta. Yeah sometimes Ruby is great for just busting out little scripts that end up being code in some other langauge.

Additionally, the import script, `data_import.js` is annotated with what is going on. Try reading it without reading the annotations and just guessing what the methods might do, then use the annotations to see if you are correct. Everything uses the language MongoDB defines for interacting with it.