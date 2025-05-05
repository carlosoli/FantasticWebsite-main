import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  
  // Get all news
  app.get('/api/news', async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      const newsItems = await storage.getNews(category);
      res.json(newsItems);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch news' });
    }
  });

  // Get featured news
  app.get('/api/news/featured', async (req, res) => {
    try {
      const featuredNews = await storage.getFeaturedNews();
      res.json(featuredNews);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch featured news' });
    }
  });

  // Get single news item
  app.get('/api/news/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const newsItem = await storage.getNewsById(id);
      
      if (!newsItem) {
        return res.status(404).json({ message: 'News item not found' });
      }
      
      res.json(newsItem);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch news item' });
    }
  });

  // Get all interviews
  app.get('/api/interviews', async (req, res) => {
    try {
      const interviews = await storage.getInterviews();
      res.json(interviews);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch interviews' });
    }
  });

  // Get single interview
  app.get('/api/interviews/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const interview = await storage.getInterviewById(id);
      
      if (!interview) {
        return res.status(404).json({ message: 'Interview not found' });
      }
      
      res.json(interview);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch interview' });
    }
  });

  // Get gallery items
  app.get('/api/gallery', async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      const galleryItems = await storage.getGalleryItems(category);
      res.json(galleryItems);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch gallery items' });
    }
  });

  // Get social media posts
  app.get('/api/social-media', async (req, res) => {
    try {
      const platform = req.query.platform as string | undefined;
      const socialMediaPosts = await storage.getSocialMediaPosts(platform);
      res.json(socialMediaPosts);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch social media posts' });
    }
  });

  // Submit contact form
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const contactMessage = await storage.createContactMessage(validatedData);
      res.status(201).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: 'Invalid form data', errors: error.errors });
      }
      res.status(500).json({ message: 'Failed to send message' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
