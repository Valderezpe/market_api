const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSW;

export default{
    port: 8000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.eyod1mf.mongodb.net/`,
    env: "development",
}