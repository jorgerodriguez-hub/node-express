import { RequestHandler } from "express";
const Client = require("../database");

export const createClient: RequestHandler = async (req, res) => {
  try {
    const data = req.body;
    await Client.add(data);
    res.send({ msg: "Client added!" });
  } catch (error) {
    res.json(error);
  }
};

export const listClients: RequestHandler = async (req, res) => {
  try {
    const snapshot = await Client.get();
    const list = snapshot.docs.map((doc: { id: any; data: () => any }) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.send(list);
  } catch (error) {
    res.json(error);
  }
};
