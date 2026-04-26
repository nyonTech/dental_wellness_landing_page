import services from "@/data/services";
import { DOCTORS } from "@/data/doctors";
import articles from "@/data/articles";

const BASE_URL = "https://www.dentalwellnessbangalore.com";

export default function sitemap() {
  const now = new Date().toISOString();

  // Static pages
  const staticPages = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/service`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/doctor_listing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  // Dynamic service pages
  const servicePages = services.map((service) => ({
    url: `${BASE_URL}/service/${service.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic doctor pages
  const doctorPages = DOCTORS.map((doctor) => ({
    url: `${BASE_URL}/doctor_listing/${doctor.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Dynamic learning/article pages
  const articlePages = articles.map((article) => ({
    url: `${BASE_URL}/learning/${article.id}`,
    lastModified: article.date || now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...doctorPages, ...articlePages];
}
