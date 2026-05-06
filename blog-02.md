 2. How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).
------------------------------------------------------------------------------------------------------------------

Instead of duplicating, TypeScript provides utility types that transform existing types. Pick and Omit allow you to treat your master interface as a buffet, selecting exactly what you need for a specific context.

1. Pick: The Opt-In Approach

Pick<Type, Keys> creates a new type by grabbing specific properties from an existing type. You use it when the slice you need represents a small subset of the master interface. Instead of writing a new interface for our public profile, we simply Pick what we want:


2. Omit: The Opt-Out Approach

Omit<Type, Keys> is the inverse. It creates a new type by taking all the properties of the master interface except for the ones you explicitly exclude. This is ideal when your slice needs almost everything from the master. Consider a payload for creating a new user. The client provides the data, but the database will generate the id and createdAt fields.

Why This Keeps Your Code DRY 
------------------------------

By leveraging Pick and Omit, you anchor your entire data flow to a single source of truth (the master interface).
Here is how this enforces the DRY principle:

 i) Centralized Updates

 ii) Compile-Time Confidence

 iii) Reduced Boilerplate