var nameList = [
  "Ayush",
  "Snehil",
  "Sachin",
  "Dev",
  "Kriti",
  "Shikher",
  "Kartik",
  "Pranjal",
  "Akshat",
  "Tanu",
  "Manu",
  "Ananya",
  "Utkarsh",
  "Ram",
  "Gita",
  "Subodh",
  "Shreya",
  "Shankardayal",
  "Renu",
  "Shakshi",
  "Anurag",
  "Bablu",
  "Kanhiya",
  "Gungun",
  "Vipul",
  "Ashish",
];
export function generateRandomNames() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
