let user = {
  name: "Debayan",
  address: {
    personal: {
      city: "Agartala",
      area: "Indranagar",
    },
    office: {
      city: "WFH",
      area: "Ghar",
    },
  },
};

let finalObj = {};
const magicFunc = (obj, parent) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      magicFunc(obj[key], parent + '_' + key);
    } else {
      finalObj[parent + "_" + key] = obj[key];
    }
  }
};

magicFunc(user, 'user')

console.log(finalObj)
