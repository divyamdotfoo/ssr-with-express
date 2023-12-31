import axios from "axios";
axios.defaults.baseURL = import.meta.env.DEV
  ? "http://localhost:3001/api"
  : "/api";

const getCount = async () => {
  const res = await axios.get("/getCount");
  return res.data;
};
const updateCount = async (count: number) => {
  const res = await axios.post("/updateCount", { count });
  console.log(res);
};
export default {
  getCount,
  updateCount,
};
