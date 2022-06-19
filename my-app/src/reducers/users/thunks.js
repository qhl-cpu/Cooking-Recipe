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
  async ({id}) => {
    return await UserService.deleteUsers({id});
  }
);

export const deleteAllUserAsync = createAsyncThunk(
  actionTypes.DELETE_ALL_USER,
  async () => {
    return await UserService.deleteAllUsers();
  }
);

export const editUserAsync = createAsyncThunk(
  actionTypes.EDIT_USER,
  async ({id,title,ingredient,instruction,cookingTime}) => {
    return await UserService.editUsers(
      {id,title,ingredient,instruction,cookingTime});
  }
);