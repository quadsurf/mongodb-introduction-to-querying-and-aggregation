# Introduction to Querying and Aggregation with MongoDB

Please read through this entire document first, then return to the beginning to complete the exercise.

## Setting the stage (What and Why)

Storing data is an important function of the database, but another important function is querying the database.

## Educational Objectives

- Use the MongoDB console and documentation to query data.

### Key terms:

- Database query
- Aggregation

## Educational Activities

Recall that a database query is just the process of requesting information that was previously stored in the database. Luckily with MongoDB, most things are well documented, so this exercise relies heavily on the official documentation:

* [querying MongoDB](http://docs.mongodb.org/manual/tutorial/query-documents/)
* [The Aggregation Pipeline](http://docs.mongodb.org/manual/core/aggregation-introduction/)

Before diving into those guides it may be helpful to work through the following two coding problems (_hint:_ Each correlates to the manuals above).

1. Write a function named `find` which takes an `array` and an `element` as parameters, and returns the `element` if it exists in `array`, otherwise it returns `null`. Do not use `Array.prototype.indexOf` in your implementation. Solution [here](find_in_array_solution.js).
1. Write a function named `sumBy` which takes an `array` of Objects, each of which has `totalPrice` and `department` properties. The function should return an Object containing the sum of `totalPrice` by `department`. Here is sample usage:

  ```
  var data = [
    {department: 'Food', totalPrice: 10},
    {department: 'Food', totalPrice: 14},
    {department: 'Not Food', totalPrice: 2},
    {department: 'Not Food', totalPrice: 682}
  ];
  console.log(sumBy(data));
  // { Food: 24, 'Not Food' : 684 }
  ```

  Solution [here](sum_by_solution.js)

To provide a bit more detail, the second example was one of _aggregation_. The process of aggregation involves taking data from one "grain" to another. That is, data that exists at one level of detail (or "resolution") is transcribed to another. One common example of this is taking statistics that are recorded by day and aggregating them into statistics by week (or month, quarter, etc.). The aggregation pipeline provided by MongoDB is a convenient way to compute aggregate values.

The [Coding Tasks](coding_tasks.md) should help establish the essential skills required for querying MongoDB with `db.collection.find()` and via the aggregation pipeline.

#### Some unnecessary details

In case you are interested in how the data set was constructed, the Ruby script used to generate the `data_set.js` file is included (`data_set_generator.rb`). Whoa, meta. Yeah sometimes Ruby is great for just busting out little scripts that end up being code in some other langauge.

Additionally, the import script, `data_import.js` is annotated with what is going on. Try reading it without reading the annotations and just guessing what the methods might do, then use the annotations to see if you are correct. Everything uses the language MongoDB defines for interacting with it.

## Reflect: Self-asses

Go to the "Objectives" section of this README. Go through each one and ask yourself:

- Have I completed this objective?
- What concrete evidence do I have that I've completed the objective?

Go to the "Key Terms" section of this README. For each word, ask yourself:

- What is my explanation for this term?

If you haven't completed an objective, or you can't define a term, take a few minutes to try to fill in any gaps.

## Reflect: Ask new questions

What new questions do you have now that you've gone through this exercise?

List at least 4 here:

1. 
1. 
1. 
1. 
