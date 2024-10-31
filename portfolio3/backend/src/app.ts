import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

app.get("/projects", (res) => {
  return res.json({
    data: [
      {
        id: 1,
        name: "Webutviklingsprosjekt",
        description: "Utvikle en responsiv nettside for lokal bedrift.",
        startDate: "2024-01-01",
        endDate: "2024-04-01",
        status: "active",
        goals: [
          {
            id: 1,
            description: "Fullføre design og prototype innen februar."
          },
          {
            id: 2,
            description: "Levere en fungerende MVP innen utgangen av mars."
          }
        ]
      },
      {
        id: 2,
        name: "Mobilapp",
        description: "Bygging av en app for sporingssystem.",
        startDate: "2024-03-01",
        endDate: "2024-09-01",
        status: "planning",
        goals: [
          {
            id: 1,
            description: "Fullføre backend-integrasjon innen mai."
          },
          {
            id: 2,
            description: "Teste appen med betabrukere innen august."
          }
        ]
      },
      {
        id: 3,
        name: "Videospill",
        description: "Bygger et drømme videospill.",
        startDate: "2024-05-01",
        endDate: "2024-12-01",
        status: "active",
        goals: [
          {
            id: 1,
            description: "Fullføre spillmekanikker innen juli."
          },
          {
            id: 2,
            description: "Utvikle minst 5 spillnivåer innen september."
          }
        ]
      }
    ]
  });
});


export default app;