import { users, type User, type InsertUser, type InsertUserProfile, type InsertMedicalSummary, type MedicalSummary, type InsertSymptom, type Symptom } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserProfile(id: number, profile: InsertUserProfile): Promise<User | undefined>;
  
  // Medical summaries
  createMedicalSummary(userId: number, summary: InsertMedicalSummary): Promise<MedicalSummary>;
  getMedicalSummaries(userId: number): Promise<MedicalSummary[]>;
  
  // Symptoms
  createSymptom(userId: number, symptom: InsertSymptom): Promise<Symptom>;
  getSymptoms(userId: number): Promise<Symptom[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private medicalSummaries: Map<number, MedicalSummary>;
  private symptoms: Map<number, Symptom>;
  private currentUserId: number;
  private currentMedicalId: number;
  private currentSymptomId: number;
  private lastLoggedSymptom: string | null = null;

  constructor() {
    this.users = new Map();
    this.medicalSummaries = new Map();
    this.symptoms = new Map();
    this.currentUserId = 1;
    this.currentMedicalId = 1;
    this.currentSymptomId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id,
      age: null,
      height: null,
      weight: null,
      gender: null,
      onboardingCompleted: false,
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  async updateUserProfile(id: number, profile: InsertUserProfile): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    
    const updatedUser = { 
      ...user, 
      ...profile,
      onboardingCompleted: true
    };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async createMedicalSummary(userId: number, summary: InsertMedicalSummary): Promise<MedicalSummary> {
    const id = this.currentMedicalId++;
    const medicalSummary: MedicalSummary = {
      ...summary,
      id,
      userId,
      createdAt: new Date()
    };
    this.medicalSummaries.set(id, medicalSummary);
    return medicalSummary;
  }

  async getMedicalSummaries(userId: number): Promise<MedicalSummary[]> {
    return Array.from(this.medicalSummaries.values()).filter(
      summary => summary.userId === userId
    );
  }

  async createSymptom(userId: number, symptom: InsertSymptom): Promise<Symptom> {
    const id = this.currentSymptomId++;
    const newSymptom: Symptom = {
      ...symptom,
      id,
      userId,
      createdAt: new Date()
    };
    this.symptoms.set(id, newSymptom);
    return newSymptom;
  }

  async getSymptoms(userId: number): Promise<Symptom[]> {
    return Array.from(this.symptoms.values()).filter(
      symptom => symptom.userId === userId
    );
  }

  async setLastSymptom(symptomName: string): Promise<void> {
    this.lastLoggedSymptom = symptomName;
  }

  async getLastSymptom(): Promise<string | null> {
    return this.lastLoggedSymptom;
  }
}

export const storage = new MemStorage();
