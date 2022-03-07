export async function getPurchasesByUser(user_id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/purchases/${user_id}`);
  const data = await res.json();
  return data.payload;
}

export async function getUserBeans(username) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${username}`);
  const data = await res.json();
  return data.payload[0].beans;
}

export function playSound(sound, delay) {
  const audio = document.querySelector(`#${sound}`);
  if (audio) {
    audio.currentTime = 0;
    setTimeout(() => {
      audio.play();
    }, delay);
  }
}
