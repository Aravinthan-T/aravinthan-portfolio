const BASE_URL = "https://api.mfapi.in";

export const searchMF = async (query) => {
  const res = await fetch(`${BASE_URL}/mf/search?q=${query}`);
  if (!res.ok) throw new Error("Search failed");
  return res.json();
};

export const getAllMF = async () => {
  const res = await fetch(`${BASE_URL}/mf`);
  if (!res.ok) throw new Error("Failed to fetch mutual funds");
  return res.json();
};

export const navHistory = async (schemeCode) => {
  const res = await fetch(`${BASE_URL}/mf/${schemeCode}`);
  if (!res.ok) throw new Error("Failed to fetch NAV history");
  return res.json();
};

export const getLatestNav = async (schemeCode) => {
  const res = await fetch(`${BASE_URL}/mf/${schemeCode}/latest`);
  if (!res.ok) throw new Error("Failed to fetch latest NAV");
  return res.json();
};
