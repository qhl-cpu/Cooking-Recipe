const addUser = async (recipeCard) => {
  const response = await fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipeCard)
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }

  return data;
};

const getUsers = async () => {
  const response = await fetch('http://localhost:3001/users', {
    method: 'GET'
  });
  return response.json();
};

const deleteUsers = async (id) => {
  const response = await fetch('http://localhost:3001/users/'+JSON.stringify(id).replaceAll("\"", ""), {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(id)
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }

  return data;
};

export default {
  addUser,
  getUsers,
  deleteUsers
};
