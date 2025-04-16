import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate request body against schema
      const validatedData = contactSchema.parse(req.body);
      
      // In a real implementation, you would save this to a database or send an email
      console.log('Contact form submission:', validatedData);
      
      // Return success response
      res.status(200).json({ success: true, message: 'Message received successfully!' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, message: 'Invalid form data', errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: 'Failed to process your message' });
      }
    }
  });

  // API endpoint for resume download
  app.get('/api/download-resume', (req, res) => {
    const resumePath = path.resolve(process.cwd(), 'attached_assets', 'Anurag_Patki_Resume.pdf');
    
    if (fs.existsSync(resumePath)) {
      res.download(resumePath, 'Anurag_Patki_Resume.pdf', (err) => {
        if (err) {
          console.error('Error downloading resume:', err);
          res.status(500).send('Error downloading resume');
        }
      });
    } else {
      res.status(404).send('Resume file not found');
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
