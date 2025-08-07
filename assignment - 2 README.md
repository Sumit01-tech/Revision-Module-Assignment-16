Assignment 2: Mongoose vs. Native MongoDB Driver
1. Define Mongoose and the MongoDB Driver
Native MongoDB Driver:
The native MongoDB driver is the official low-level library provided by MongoDB for Node.js. It allows direct interaction with the MongoDB database using JavaScript/Node.js without any abstraction layer. Developers manually handle connections, queries, and data formatting.

Mongoose:
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level abstraction on top of the native driver, allowing developers to define schemas, models, validations, middleware, and more — making MongoDB usage more structured and consistent.

Relationship:
Mongoose is built on top of the native MongoDB driver. It internally uses the native driver to perform database operations but adds features like schema definition, model abstraction, validation, hooks, and query helpers to make development easier and less error-prone.

2. Schema vs. Schema-less
MongoDB's Schema-less Nature:
MongoDB allows documents within the same collection to have different structures (fields, data types, etc.). This gives it flexibility, especially useful for rapidly evolving applications.

Mongoose and Schemas:
Mongoose introduces the concept of schemas, which enforce a specific structure on documents within a collection. Each document must conform to the defined schema — including field types, default values, required fields, etc.

Why Enforce a Schema with Mongoose?
Data consistency: Prevents accidental insertion of malformed or inconsistent data.

Validation: Ensures that documents meet certain conditions before they are saved.

Developer experience: Schemas serve as self-documentation for the data model.

Debugging: Easier to identify data issues due to strict schema enforcement.

3. Validation and Data Integrity
Native MongoDB Driver:
Validation must be manually implemented in application logic before inserting or updating documents. This increases boilerplate and risk of inconsistent validation across different parts of the app.