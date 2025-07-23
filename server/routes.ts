import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  /**
   * DEMO ENDPOINT #1: Log a Symptom
   * This simulates the user logging a symptom. It just saves the symptom name in memory.
   */
  app.post("/api/log-symptom", async (req, res) => {
    const { symptom } = req.body;

    if (!symptom) {
      return res.status(400).json({ error: "Symptom is required" });
    }

    // We use the new method we added to storage
    await storage.setLastSymptom(symptom);

    console.log(`Logged symptom: ${symptom}`);
    res.status(200).json({ success: true, logged: symptom });
  });


  /**
   * DEMO ENDPOINT #2: Get the Insight
   * This is the "magic moment". It checks the last logged symptom and returns
   * a specific, hardcoded insight.
   */
  app.get("/api/insight", async (_req, res) => {
    const lastSymptom = await storage.getLastSymptom();

    let insight = "Stay hydrated and aim for 8 hours of sleep tonight."; // This is our default insight

    // This is the core demo logic!
    if (lastSymptom === 'hot flashes') {
      insight = "Increasing your intake of leafy greens may help to reduce hot flashes.";
    } else if (lastSymptom === 'fatigue') {
      insight = "A short walk after lunch can help boost your afternoon energy levels."
    }

    console.log(`Returning insight: ${insight}`);
    res.status(200).json({ insight });
  });


  const httpServer = createServer(app);
  return httpServer;
}