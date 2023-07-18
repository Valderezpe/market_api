const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSW;

export default{
    port: 8000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.eyod1mf.mongodb.net/`,
    // dbUri: "mongodb+srv://valderez:e6tK3vgToYkgFhBG@cluster0.eyod1mf.mongodb.net/"
}