export async function getPurchasesByUser(user_id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/purchases/${user_id}`);
  const data = await res.json();
  return data.payload;
}
