let data = fetchData();
let result;

if (data) {
  result = processData(data);
} else {
  result = 'No data';
}

// ===================================================

let datas = fetchData();
let results = data ? processData(data) : 'No data';

