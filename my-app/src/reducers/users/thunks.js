import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UserService from './service';

export const getUsersAsync = createAsyncThunk(
  actionTypes.GET_USERS,
  async () => {
    return await UserService.getUsers();
  }
);

export const addUserAsync = createAsyncThunk(
  actionTypes.ADD_USER,
  async ({title,ingredient,instruction,cookingTime}) => {
    return await UserService.addUser(
      {title,ingredient,instruction,cookingTime});
  }
);

export const deleteUserAsync = createAsyncThunk(
  actionTypes.DELETE_USER,
  // async (id) => {
  //   return await fetch(
  //     'localhost:3001/users/' + JSON.stringify(id.id).replaceAll("\"", ""));
  // }
  async ({id}) => {
    return await UserService.deleteUsers(
      {id});
  }
);