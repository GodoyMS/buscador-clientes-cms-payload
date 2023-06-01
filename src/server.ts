import express from "express";
import payload from "payload";
import cors from "cors";

require("dotenv").config();
const app = express();


// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  app.use(
    cors({
      origin:'https://buscador-de-clientes.vercel.app',
      credentials: true,
      //optionSuccessStatus: 200,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    })
  );

  // Add your own express routes here
  const PORT=process.env.PORT
  app.listen(PORT);
};

start();

{
  /*import { useState, useEffect } from "react";
import axios from "axios";

import { backendURL } from "../config/config";

const useFetchJobById = (idJob) => {
  
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData =  () => {
    setIsLoading(true);
    axios.get(`${backendURL}api/jobs/${idJob}`)
    .then(({data})=>setData(data))
    .then(()=>setIsLoading(false))
    .catch((error)=>setError(error))
    .finally(()=>setIsLoading(false))
  };

  useEffect(() => {
    fetchData();  
  }, []); */
}
