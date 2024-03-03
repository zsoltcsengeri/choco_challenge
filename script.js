fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    const filteredData = data
      .filter((post) => {
        if (post.id === 5) {
          return true;
        } else if (post.id === 7) {
          return true;
        } else if (post.id === 9) {
          return true;
        } else {
          return false;
        }
      })

      .map((post) => [post.id, `${post.title}: ${post.body}`]);

      exportCSV(filteredData);
  })
  .catch((error) => console.error("Something went wrong:", error));

// save as a *.csv

/*function exportCSV(arrayOfData) {
  let CSV = "id;titleAndBody;" + "\n "; // data headers, the column headers in the csv file
  for (let i = 0; i < arrayOfData.length; i++ ){
    let row = `${arrayOfData[i][0]};${arrayOfData[i][1]};\n`
    CSV+=row
    console.log(CSV)
  }
  const fileName = "my_data";
let csv = "\ufeff" + CSV;
let url = "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csv);
let link = document.createElement("a")
link.href = url
link.download= fileName + ".csv"
link.textContent = "Click to downoad the csv"
document.body.appendChild(link)

}*/

function exportCSV(arrayOfData) {
  let CSV = '"id";"titleAndBody"\n'; // Column headers with quotes
  for (let i = 0; i < arrayOfData.length; i++) {
    // Enclose each field in quotes and replace internal quotes with two quotes
    let row = `"${arrayOfData[i][0]}";"${arrayOfData[i][1].replace(/"/g, '""')}"\n`;
    CSV += row;
  }

  // The rest of your original code to create the download link remains the same
  const fileName = "my_data";
  let csv = "\ufeff" + CSV;
  let url = "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csv);
  let link = document.createElement("a");
  link.href = url;
  link.download = fileName + ".csv";
  link.textContent = "Click to download the csv";
  document.body.appendChild(link);
}


