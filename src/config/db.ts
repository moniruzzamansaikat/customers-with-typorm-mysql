import { createConnection } from "typeorm";
import { Customer } from "../entities/Customer";

export const connectDB = async () => {
  try {
    await createConnection({
      type: "mysql",
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      entities: [Customer],
    });
    console.log("Mysql connected!");
  } catch (error: any) {
    console.error(error.message);
    console.log("mysql is not connected");
  }
};
