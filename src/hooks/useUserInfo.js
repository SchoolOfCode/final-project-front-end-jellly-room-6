import { useState, useEffect } from "react";
import getUserLevel from "./getUserLevel.js";
import { getPurchasesByUser } from "./helpers.js";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function useUserInfo(authenticatedUser) {
  const [userInfo, setUserInfo] = useState("");

  // UseEffect to get user info will run any time the authenticatedUser variable changes in value
  useEffect(() => {
    async function createNewUser(username) {
      // POST /users
      // Adds a new user to our database, using the username fetched from Auth0 (see get serverside props below for the Auth0 fetch)
      const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ username }),
      });
      const data = await res.json();
      if (!data.payload || data.payload.length === 0) return;
      await fetchUser();
    }

    async function getCategories(id) {
      // Get the categories associated with the user with id
      const res = await fetch(`${API_URL}/categories/${id}`);
      const data = await res.json();
      // Returns an array of category objects I.E. [{category_id: 1, category_name: 'Addition', user_id: 1}, {...anotherOne} etc]
      return data.payload;
    }

    async function fetchUser() {
      // If no authenticated user/authenticated user is Null, do not run the rest of funtion
      if (!authenticatedUser) return;
      // Get user info from our database (including XP/Beans etc)
      const res = await fetch(`${API_URL}/users/${authenticatedUser}`);
      const data = await res.json();
      // If no user found, create new user in our database
      if (!data.payload || data.payload.length === 0) {
        createNewUser(authenticatedUser);
        return;
      }
      // Storing user object
      const user = data.payload[0];
      // Get categories for the user by id
      let categories = await getCategories(user.user_id);
      // Mapping over the array of category objects, and replacing each object with just the string of the category name
      categories = categories.map(category => category.category_name);

      const playerLevel = getUserLevel(user.xp);

      let purchases = await getPurchasesByUser(user.user_id);
      if (!purchases) purchases = [];

      // Set userInfo state to user object with categories included
      setUserInfo({ ...user, categories, playerLevel, purchases });
    }

    fetchUser();
  }, [authenticatedUser]);

  return userInfo;
}
