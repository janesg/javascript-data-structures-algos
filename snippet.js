let obj = {};

if (obj["bacon"]) {
    console.log(`bacon exists: ${obj["bacon"]}`);
} else {
    console.log("no bacon");
}

obj["bacon"] = "Danish";

if (obj["bacon"]) {
    console.log(`bacon exists: ${obj["bacon"]}`);
} else {
    console.log("no bacon");
}
