"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { use, useState, useEffect } from "react";
import articles from "@/data/articles";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function CategoryBadge({ category }) {
  const colorMap = {
    Restorative: "bg-blue-50 text-blue-700 border-blue-200",
    "Myths & Facts": "bg-purple-50 text-purple-700 border-purple-200",
    "Symptoms Guide": "bg-red-50 text-red-700 border-red-200",
    Cosmetic: "bg-pink-50 text-pink-700 border-pink-200",
    Prevention: "bg-green-50 text-green-700 border-green-200",
  };
  const colors =
    colorMap[category] || "bg-amber-50 text-amber-700 border-amber-200";
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${colors}`}
    >
      {category}
    </span>
  );
}

function TableOfContents({ items, activeId }) {
  return (
    <nav className="article-toc">
      <h3 className="article-toc__heading">In This Article</h3>
      <ul className="article-toc__list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`article-toc__link ${
                activeId === item.id ? "article-toc__link--active" : ""
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ComparisonTable({ data }) {
  return (
    <div className="article-comparison">
      <div className="article-comparison__header">
        <div className="article-comparison__col article-comparison__col--factor">
          Factor
        </div>
        <div className="article-comparison__col article-comparison__col--rc">
          <span className="article-comparison__icon">🦷</span> Root Canal
        </div>
        <div className="article-comparison__col article-comparison__col--ext">
          <span className="article-comparison__icon">⚡</span> Extraction
        </div>
      </div>
      {data.map((row, i) => (
        <div
          key={i}
          className={`article-comparison__row ${
            i % 2 === 0 ? "article-comparison__row--alt" : ""
          }`}
        >
          <div className="article-comparison__cell article-comparison__cell--factor">
            {row.factor}
          </div>
          <div className="article-comparison__cell">{row.rootCanal}</div>
          <div className="article-comparison__cell">{row.extraction}</div>
        </div>
      ))}
    </div>
  );
}

function KeyPointsList({ points, variant = "default" }) {
  return (
    <ul className={`article-keypoints article-keypoints--${variant}`}>
      {points.map((point, i) => (
        <li key={i} className="article-keypoints__item">
          <span className="article-keypoints__icon">
            {variant === "negative" ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#FEE2E2" />
                <path
                  d="M5 5L11 11M11 5L5 11"
                  stroke="#EF4444"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#FBBF24" />
                <path
                  d="M4.5 8.5L6.5 10.5L11.5 5.5"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

function HighlightBox({ text }) {
  return (
    <div className="article-highlight">
      <div className="article-highlight__bar" />
      <div className="article-highlight__content">
        <svg
          className="article-highlight__quote-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10 11H6C6 7.686 8.686 5 12 5V3C7.582 3 4 6.582 4 11V19H10V11ZM20 11H16C16 7.686 18.686 5 22 5V3C17.582 3 14 6.582 14 11V19H20V11Z"
            fill="#FBBF24"
            opacity="0.6"
          />
        </svg>
        <p>{text}</p>
      </div>
    </div>
  );
}

function RelatedArticleCard({ article }) {
  return (
    <Link
      href={`/learning/${article.id}`}
      className="article-related-card group"
    >
      <div className="article-related-card__image-wrap">
        <img
          src={article.heroImage}
          alt={article.title}
          className="article-related-card__image"
        />
        <div className="article-related-card__overlay" />
      </div>
      <div className="article-related-card__body">
        <CategoryBadge category={article.category} />
        <h3 className="article-related-card__title">{article.title}</h3>
        <p className="article-related-card__excerpt">{article.excerpt}</p>
        <div className="article-related-card__meta">
          <span>{article.readTime}</span>
          <span className="article-related-card__arrow group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function LearningArticlePage({ params }) {
  const { article_id } = use(params);
  const article = articles.find((a) => a.id === article_id);

  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Determine active section for ToC
      const sections = article?.tableOfContents?.map((item) =>
        document.getElementById(item.id)
      );
      if (!sections) return;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i]) {
          const rect = sections[i].getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(article.tableOfContents[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [article]);

  if (!article) notFound();

  const relatedArticleData = article.relatedArticles
    ?.map((id) => articles.find((a) => a.id === id))
    .filter(Boolean);

  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen">
      {/* Reading Progress Bar */}
      <div className="article-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Hero Section */}
      <section className="article-hero">
        <div className="article-hero__bg-wrap">
          <img
            src={article.heroImage}
            alt={article.title}
            className="article-hero__bg-image"
          />
          <div className="article-hero__gradient" />
        </div>

        <div className="article-hero__content">
          <div className="article-hero__breadcrumb">
            <Link href="/" className="article-hero__breadcrumb-link">
              Home
            </Link>
            <span className="article-hero__breadcrumb-sep">/</span>
            <span className="article-hero__breadcrumb-current">
              Learning Center
            </span>
            <span className="article-hero__breadcrumb-sep">/</span>
            <span className="article-hero__breadcrumb-current">
              {article.category}
            </span>
          </div>

          <CategoryBadge category={article.category} />

          <h1 className="article-hero__title">{article.title}</h1>
          <p className="article-hero__subtitle">{article.subtitle}</p>

          <div className="article-hero__meta">
            <div className="article-hero__author-info">
              <div className="article-hero__author-avatar">
                {article.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="article-hero__author-name">{article.author}</p>
                <p className="article-hero__author-role">
                  {article.authorRole}
                </p>
              </div>
            </div>
            <div className="article-hero__meta-divider" />
            <div className="article-hero__meta-details">
              <span className="article-hero__meta-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0"
                >
                  <path
                    d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M8 5V8L10 10"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                {article.readTime}
              </span>
              <span className="article-hero__meta-item">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0"
                >
                  <rect
                    x="2"
                    y="3"
                    width="12"
                    height="11"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M2 6H14"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M5 2V4M11 2V4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                {formatDate(article.date)}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tags */}
      <div className="article-tags-bar">
        <div className="article-tags-bar__inner">
          {article.tags.map((tag) => (
            <span key={tag} className="article-tag">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="article-layout">
        {/* Sidebar - Table of Contents (Desktop) */}
        <aside className="article-sidebar">
          <div className="article-sidebar__sticky">
            <TableOfContents
              items={article.tableOfContents}
              activeId={activeSection}
            />

            {/* CTA Card */}
            <div className="article-sidebar-cta">
              <h4 className="article-sidebar-cta__heading">
                Have Questions?
              </h4>
              <p className="article-sidebar-cta__text">
                Our specialists are here to help you understand your options.
              </p>
              <Link href="/contact" className="article-sidebar-cta__btn">
                Book a Consultation
              </Link>
            </div>
          </div>
        </aside>

        {/* Article Body */}
        <article className="article-body">
          {article.sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="article-section"
            >
              <h2 className="article-section__heading">{section.heading}</h2>

              {section.content.split("\n\n").map((paragraph, pIdx) => (
                <p key={pIdx} className="article-section__paragraph">
                  {paragraph}
                </p>
              ))}

              {section.highlight && <HighlightBox text={section.highlight} />}

              {section.keyPoints && (
                <KeyPointsList points={section.keyPoints} />
              )}

              {section.comparison && (
                <ComparisonTable data={section.comparison} />
              )}

              {section.chooseRootCanal && (
                <div className="article-choose-grid">
                  <div className="article-choose-card article-choose-card--positive">
                    <h4 className="article-choose-card__heading">
                      <span className="text-primary">✦</span> Choose Root Canal
                      When…
                    </h4>
                    <KeyPointsList points={section.chooseRootCanal} />
                  </div>
                  <div className="article-choose-card article-choose-card--negative">
                    <h4 className="article-choose-card__heading">
                      <span className="text-red-500">✦</span> Choose Extraction
                      When…
                    </h4>
                    <KeyPointsList
                      points={section.chooseExtraction}
                      variant="negative"
                    />
                  </div>
                </div>
              )}

              {index < article.sections.length - 1 && (
                <div className="article-section__divider" />
              )}
            </section>
          ))}

          {/* Author Card */}
          <div className="article-author-card">
            <div className="article-author-card__avatar">
              {article.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="article-author-card__info">
              <p className="article-author-card__label">Written by</p>
              <p className="article-author-card__name">{article.author}</p>
              <p className="article-author-card__role">{article.authorRole} at Dental Wellness</p>
            </div>
          </div>
        </article>
      </div>

      {/* Related Articles */}
      {relatedArticleData && relatedArticleData.length > 0 && (
        <section className="article-related">
          <div className="article-related__inner">
            <div className="article-related__header">
              <h2 className="article-related__heading">
                Continue <span className="text-primary">Learning</span>
              </h2>
              <p className="article-related__subtitle">
                Explore more articles on dental health and treatments
              </p>
            </div>
            <div className="article-related__grid">
              {relatedArticleData.map((related) => (
                <RelatedArticleCard key={related.id} article={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="article-final-cta">
        <div className="article-final-cta__inner">
          <h2 className="article-final-cta__heading">
            <span className="article-final-cta__heading-dark">Ready to Take the</span>
            <span className="article-final-cta__heading-gold">Next Step?</span>
          </h2>
          <p className="article-final-cta__sub">
            Schedule a consultation with our expert team to discuss your dental health
            and explore personalized treatment options.
          </p>
          <div className="article-final-cta__actions">
            <Link href="/contact" className="article-final-cta__btn article-final-cta__btn--gold">
              Book Appointment
            </Link>
            <Link href="tel:+919980567389" className="article-final-cta__btn article-final-cta__btn--dark">
              Call +91 99805 67389
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
