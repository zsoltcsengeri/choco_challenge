# choco_challenge
Assignment Title: API Data Manipulation and CSV Creation with Error Handling

Objective:
The objective of this assignment is to assess the interviewee's ability to work with APIs, manipulate data, implement error handling, filter data based on specific criteria, and save the results as a CSV file using either JavaScript or Python. You will be required to fetch data from a public API, filter posts by specific users, concatenate specific fields from the retrieved data, and handle potential errors gracefully.

Instructions:
Choose either JavaScript or Python for this assignment.
Use the "JSONPlaceholder" API as a data source (https://jsonplaceholder.typicode.com), specifically the "posts" endpoint.
Write a script that accomplishes the following tasks:

Fetch data from the API endpoint and retrieve the results.
Implement error handling to handle scenarios where the API request fails or returns an error response.
Filter the posts to include only those created by users with IDs 5, 7, and 9.
For each filtered post entry, concatenate the "title" and "body" fields into a single string in the format "Title: Body".
Store the concatenated strings in an array or a data structure of your choice.
Save the concatenated data as a CSV file locally, where each row of the CSV contains 2 columns. First column being the id and the second to include the concatenated string of title and body

Ensure your script is well-documented, including comments explaining the purpose of each section of code, how error handling is implemented, and how the CSV file is generated.

The script should be designed to be clear, concise, and efficient.

Evaluation Criteria:
Correctness: The script should successfully call the API, filter posts by specific users, concatenate the specified fields, handle errors gracefully, and save the data as a CSV file.
Efficiency: The code should be efficient in terms of data retrieval, processing, and CSV file generation.
Clarity and Documentation: The code should be well-documented with clear explanations of each step, including error-handling mechanisms and CSV generation.
Code Style: Follow best practices for code style and readability.

Submission:
Please submit your script as a single file (either .js for JavaScript or .py for Python) via email beforehand and execute the script during the interview to produce the desired output file.

Note: Be sure to test your script with different API endpoints or data sources to ensure its robustness, and verify that it correctly filters and saves the data for users 5, 7, and 9 as a CSV file.


