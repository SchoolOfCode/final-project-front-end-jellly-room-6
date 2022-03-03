import { items } from "../data";

export async function getPurchasesByUser(user_id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/purchases/${user_id}`);
  const data = await res.json();
  return data.payload;
}

export function getEquippedItemImg(equippedItem) {
  const item = items.find(item => item.purchase_name === equippedItem.purchase_name);
  if (item) return item.src;
}

export async function getUserBeans(username) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${username}`);
  const data = await res.json();
  return data.payload[0].beans;
}

export function playSound(sound) {
  const audio = document.querySelector(`#${sound}`);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}
