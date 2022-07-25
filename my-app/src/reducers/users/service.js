const basicUrl = 'https://recipe-assignment5.herokuapp.com/';
// const basicUrl = 'http://localhost:3001/';

const addUser = async (recipeCard) => {
  const response = await fetch(basicUrl+'users', {
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
  const response = await fetch(basicUrl+'users', {
    method: 'GET'
  });
  return response.json();
};

const deleteUsers = async (id) => {
  const response = await fetch(basicUrl+'users/'+JSON.stringify(id).replaceAll("\"", ""), {
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

const deleteAllUsers = async () => {
  const response = await fetch(basicUrl+'users/', {
    method: 'DELETE'
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }

  return data;
};

const editUsers = async (recipeCard) => {
  const id = {id: recipeCard.id}
  const response = await fetch(basicUrl+'users/'+JSON.stringify(id).replaceAll("\"", ""), {
    method: 'PATCH',
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

const getInitialReviews = async () => {
  const response = await fetch(basicUrl+'reviews', {
    method: 'GET'
  });
  return response.json();
};

const getReviews = async (id) => {
  const response = await fetch(basicUrl+'reviews/'+JSON.stringify(id).replaceAll("\"", ""), {
    method: 'GET',
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

const addReview = async (recipeCard) => {
  const response = await fetch(basicUrl+'reviews', {
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

const updateReviews = async (recipeCard) => {
  const id = {id: recipeCard.id}
  const response = await fetch(basicUrl+'reviews/'+JSON.stringify(id).replaceAll("\"", ""), {
    method: 'PATCH',
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

export default {
  addUser,
  getUsers,
  deleteUsers,
  deleteAllUsers,
  editUsers,
  getInitialReviews,
  getReviews,
  addReview,
  updateReviews
};
