const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("install");

  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedAppData = getStoredApp();

  if (storedAppData.includes(id)) {
    alert("Id all ready exist");
  } else {
    storedAppData.push(id);

    const data = JSON.stringify(storedAppData);
    localStorage.setItem("install", data);
  }
};

const removeFromStoredDB = (id) => {
  const storedAppData = getStoredApp();

  const updatedData = storedAppData.filter(
    (storedId) => parseInt(storedId) !== parseInt(id),
  );

  localStorage.setItem("install", JSON.stringify(updatedData));
};

export { addToStoredDB, getStoredApp, removeFromStoredDB };
