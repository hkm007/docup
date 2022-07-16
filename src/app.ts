import express, { Application } from "express";
import routes from './routes';

const app: Application = express();
const PORT = process.env.PORT || 5000;
const BASE_DIR = './'


app.use(express.static(BASE_DIR + 'public/')); 

// views
app.set('views', 'views');
app.set('view engine', 'ejs');

// routes
app.use(routes);


app.listen(PORT, (): void => {
  console.log(`Server running at 👉 http://localhost:${PORT}`);
});
