# Global Conglomerate Merchandise Analyst

You are a Jr. Data Engineer for a large conglomerate. Part of your role is that you have to support a team of analysts who are incapable of writing database queries. The analysts are an okay crew to be around, but not your favorite team in general. As such they basically shipped a list of demands over the wall for the queries they need to be able to do their jobs well and wrap up the quarter.

Here is the demand list:

1. Write a query to find every document in the `products` collection.
1. Write a query to find out how many `products` belong to the company "Schoen-Emard".
1. Write a query to find all `products` that belong to the company "Schoen-Emard" in the "Games, Health & Home" department.
1. Write a query to find all `products` that belong to the company "Schoen-Emard" in the "Games, Health & Home" department with a price over $90.00.
1. Write a query to find all `products` that belong to either company of "Schaden Group" and "Fay, Ryan and Deckow", but only return the product itself, not the company, department or price.
1. Use the aggregation pipeline to return all `products` that belong to the company "Kub-Hansen".
1. Use the aggregation pipeline to return all `products` with a price greater than $10.00 and less than $60.00.
1. Use the aggregation pipeline to return a count of the number of `products` with a price greater than $10.00 and less than $60.00.
1. Use the aggregation pipeline to compute the sum of all products sold by the company "Kub-Hansen"?

You will need to write a query or use the aggregation pipeline to answer each of their demands.

### Setup

To add the requisite data set to your local MongoDB instance, use the following command (run from the directory you cloned this repository to):

```
mongo localhost:27017/exploring_mongodb data_import.js
```

After running this command you have two options for a client for querying the data set:

1. Open a MongoDB console with `mongo`, then, use `show databases` to see the list of databases. Next `use exploring_mongodb` to use the appropriate database for this exercise.

1. Use Robomongo and interpret the console approach in the GUI.

# Exercise



