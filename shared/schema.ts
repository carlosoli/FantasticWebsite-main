import { pgTable, text, serial, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Base user schema (kept from original)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// News schema
export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(),
  date: timestamp("date").notNull().defaultNow(),
  featured: boolean("featured").default(false),
});

export const insertNewsSchema = createInsertSchema(news).omit({
  id: true,
});

export type InsertNews = z.infer<typeof insertNewsSchema>;
export type News = typeof news.$inferSelect;

// Interviews schema
export const interviews = pgTable("interviews", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  source: text("source").notNull(),
  program: text("program"),
  sourceLogoUrl: text("source_logo_url").notNull(),
  imageUrl: text("image_url").notNull(),
  videoUrl: text("video_url"),
  audioUrl: text("audio_url"),
  textUrl: text("text_url"),
  type: text("type").notNull(), // 'video', 'podcast', 'texto'
  date: timestamp("date").notNull().defaultNow(),
  duration: text("duration"),
  featured: boolean("featured").default(false),
});

export const insertInterviewSchema = createInsertSchema(interviews).omit({
  id: true,
});

export type InsertInterview = z.infer<typeof insertInterviewSchema>;
export type Interview = typeof interviews.$inferSelect;

// Gallery schema
export const gallery = pgTable("gallery", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(), // 'eventos', 'visitas', 'reunioes', etc.
  date: timestamp("date").notNull().defaultNow(),
  isVideo: boolean("is_video").default(false),
  videoUrl: text("video_url"),
});

export const insertGallerySchema = createInsertSchema(gallery).omit({
  id: true,
});

export type InsertGallery = z.infer<typeof insertGallerySchema>;
export type Gallery = typeof gallery.$inferSelect;

// SocialMedia schema
export const socialMedia = pgTable("social_media", {
  id: serial("id").primaryKey(),
  platform: text("platform").notNull(), // 'instagram', 'facebook', 'twitter'
  postId: text("post_id").notNull(),
  content: text("content"),
  imageUrl: text("image_url"),
  videoUrl: text("video_url"),
  postUrl: text("post_url").notNull(),
  date: timestamp("date").notNull().defaultNow(),
  likes: integer("likes").default(0),
  comments: integer("comments").default(0),
  featured: boolean("featured").default(false),
});

export const insertSocialMediaSchema = createInsertSchema(socialMedia).omit({
  id: true,
});

export type InsertSocialMedia = z.infer<typeof insertSocialMediaSchema>;
export type SocialMedia = typeof socialMedia.$inferSelect;

// ContactMessage schema
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  date: timestamp("date").notNull().defaultNow(),
  read: boolean("read").default(false),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  date: true,
  read: true,
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
