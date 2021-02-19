export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/workouts?sort%5B0%5D%5Bfield%5D=workout&sort%5B0%5D%5Bdirection%5D=asc&sort%5B1%5D%5Bfield%5D=date&sort%5B1%5D%5Bdirection%5D=desc`;
export const queryURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/workouts`;
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};
