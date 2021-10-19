let voteArray = [0, 0, 0, 0];

// functions/hello.js
const v = event.queryStringParameters.vote;

if (v.value === "a") {
  voteArray[0] += 1;
} else if (v.value === "b") {
  voteArray[1] += 1;
} else if (v.value === "c") {
  voteArray[2] += 1;
} else if (v.value === "d") {
  voteArray[3] += 1;
} else if (v.value === "r") {
  voteArray = [0, 0, 0, 0];
}
console.log(JSON.stringify(voteArray));
return JSON.stringify(voteArray);

return {
  statusCode: 200,
  header: { "Access-Control-Allow-Origin": "*" },
  body: JSON.stringify(voteArray),
};
