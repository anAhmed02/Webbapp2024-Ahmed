import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

app.get("/projects", (res) => {
    return res.json({
      data: [
        {
          id: 1,
          navn: "Webutviklingsprosjekt",
          description: "Utvikle en responsiv nettside for lokal bedrift.",
          status: "ikke startet"
        },
        {
          id: 2,
          navn: "Mobilapp",
          description: "Bygging av en app for sporingssystem.",
          status: "Pågående"
        },
        {
          id: 3,
          navn: "videospill",
          description: "bygger et drømme videospill.",
          status: "Pågående"
        }
      ]
    });
  });

export default app;