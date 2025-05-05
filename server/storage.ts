import { 
  users, type User, type InsertUser,
  news, type News, type InsertNews,
  interviews, type Interview, type InsertInterview,
  gallery, type Gallery, type InsertGallery,
  socialMedia, type SocialMedia, type InsertSocialMedia,
  contactMessages, type ContactMessage, type InsertContactMessage
} from "@shared/schema";

// Interface for all storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // News operations
  getNews(category?: string): Promise<News[]>;
  getFeaturedNews(): Promise<News[]>;
  getNewsById(id: number): Promise<News | undefined>;
  
  // Interview operations
  getInterviews(): Promise<Interview[]>;
  getInterviewById(id: number): Promise<Interview | undefined>;
  
  // Gallery operations
  getGalleryItems(category?: string): Promise<Gallery[]>;
  
  // Social Media operations
  getSocialMediaPosts(platform?: string): Promise<SocialMedia[]>;
  
  // Contact Message operations
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private newsItems: Map<number, News>;
  private interviewItems: Map<number, Interview>;
  private galleryItems: Map<number, Gallery>;
  private socialMediaPosts: Map<number, SocialMedia>;
  private contactMessages: Map<number, ContactMessage>;
  
  // Current IDs for auto-increment
  private currentUserId: number;
  private currentNewsId: number;
  private currentInterviewId: number;
  private currentGalleryId: number;
  private currentSocialMediaId: number;
  private currentContactMessageId: number;

  constructor() {
    this.users = new Map();
    this.newsItems = new Map();
    this.interviewItems = new Map();
    this.galleryItems = new Map();
    this.socialMediaPosts = new Map();
    this.contactMessages = new Map();
    
    this.currentUserId = 1;
    this.currentNewsId = 1;
    this.currentInterviewId = 1;
    this.currentGalleryId = 1;
    this.currentSocialMediaId = 1;
    this.currentContactMessageId = 1;
    
    // Initialize with some sample data
    this.initializeSampleData();
  }

  // User operations
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
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // News operations
  async getNews(category?: string): Promise<News[]> {
    const allNews = Array.from(this.newsItems.values());
    
    if (category) {
      return allNews.filter(news => news.category.toLowerCase() === category.toLowerCase());
    }
    
    return allNews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  
  async getFeaturedNews(): Promise<News[]> {
    return Array.from(this.newsItems.values())
      .filter(news => news.featured)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  
  async getNewsById(id: number): Promise<News | undefined> {
    return this.newsItems.get(id);
  }
  
  // Interview operations
  async getInterviews(): Promise<Interview[]> {
    return Array.from(this.interviewItems.values())
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  
  async getInterviewById(id: number): Promise<Interview | undefined> {
    return this.interviewItems.get(id);
  }
  
  // Gallery operations
  async getGalleryItems(category?: string): Promise<Gallery[]> {
    const allItems = Array.from(this.galleryItems.values());
    
    if (category) {
      return allItems.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }
    
    return allItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  
  // Social Media operations
  async getSocialMediaPosts(platform?: string): Promise<SocialMedia[]> {
    const allPosts = Array.from(this.socialMediaPosts.values());
    
    if (platform) {
      return allPosts
        .filter(post => post.platform.toLowerCase() === platform.toLowerCase())
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    
    return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  
  // Contact Message operations
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentContactMessageId++;
    const now = new Date();
    
    const contactMessage: ContactMessage = {
      ...message,
      id,
      date: now,
      read: false
    };
    
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
  
  // Helper method to initialize sample data
  private initializeSampleData() {
    // This would be replaced with actual data in a production environment
    // For now, we'll just leave this empty since the frontend is using mock data
  }
}

export const storage = new MemStorage();
