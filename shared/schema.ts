import { pgTable, text, serial, integer, boolean, decimal, date, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  // Profile information
  age: integer("age"),
  height: decimal("height", { precision: 5, scale: 2 }), // in cm
  weight: decimal("weight", { precision: 5, scale: 2 }), // in kg
  gender: text("gender"),
  onboardingCompleted: boolean("onboarding_completed").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const medicalSummaries = pgTable("medical_summaries", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  title: text("title").notNull(),
  description: text("description").notNull(),
  dateRecorded: date("date_recorded").notNull(),
  source: text("source").notNull(), // "GP", "Lab", "Specialist", etc.
  createdAt: timestamp("created_at").defaultNow(),
});

export const symptoms = pgTable("symptoms", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  symptomName: text("symptom_name").notNull(),
  severity: integer("severity").notNull(), // 1-10 scale
  notes: text("notes"),
  dateRecorded: date("date_recorded").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertUserProfileSchema = createInsertSchema(users).pick({
  age: true,
  height: true,
  weight: true,
  gender: true,
});

export const insertMedicalSummarySchema = createInsertSchema(medicalSummaries).pick({
  title: true,
  description: true,
  dateRecorded: true,
  source: true,
});

export const insertSymptomSchema = createInsertSchema(symptoms).pick({
  symptomName: true,
  severity: true,
  notes: true,
  dateRecorded: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertUserProfile = z.infer<typeof insertUserProfileSchema>;
export type InsertMedicalSummary = z.infer<typeof insertMedicalSummarySchema>;
export type InsertSymptom = z.infer<typeof insertSymptomSchema>;
export type User = typeof users.$inferSelect;
export type MedicalSummary = typeof medicalSummaries.$inferSelect;
export type Symptom = typeof symptoms.$inferSelect;
