# Feminine Queens Awakening — Project File Structure

```
feminine_queens_platform/
│
├── README.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── .env.local                          # Environment variables
├── .env.example                        # Template for env vars
├── .gitignore
├── playwright.config.ts                # E2E test configuration
│
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   ├── logo-white.svg
│   ├── og-image.jpg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── fonts/
│   │   ├── Cairo-Bold.woff2
│   │   ├── Cairo-SemiBold.woff2
│   │   ├── Tajawal-Regular.woff2
│   │   ├── Tajawal-Medium.woff2
│   │   └── Tajawal-Bold.woff2
│   └── images/
│       ├── hero/
│       ├── coach/
│       ├── programs/
│       ├── book/
│       ├── testimonials/
│       └── icons/
│
├── src/
│   │
│   ├── app/                            # Next.js App Router
│   │   ├── layout.tsx                  # Root layout (RTL shell, fonts, nav)
│   │   ├── page.tsx                    # Homepage
│   │   ├── globals.css                 # Global styles + Tailwind
│   │   ├── not-found.tsx               # 404 page
│   │   ├── error.tsx                   # Error boundary
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   ├── programs/
│   │   │   ├── page.tsx                # Programs overview
│   │   │   ├── relationships/
│   │   │   │   └── page.tsx            # $555 course
│   │   │   ├── royal-feminine-love/
│   │   │   │   └── page.tsx            # $1,111 course
│   │   │   ├── mother-wound/
│   │   │   │   └── page.tsx            # $777 program
│   │   │   ├── community/
│   │   │   │   └── page.tsx            # $6,800 community
│   │   │   └── royal-journey/
│   │   │       └── page.tsx            # $15,000 coaching
│   │   │
│   │   ├── book/
│   │   │   └── page.tsx
│   │   │
│   │   ├── blog/
│   │   │   ├── page.tsx                # Blog index
│   │   │   └── [slug]/
│   │   │       └── page.tsx            # Blog post
│   │   │
│   │   ├── free/
│   │   │   └── page.tsx                # Free resources
│   │   │
│   │   ├── quiz/
│   │   │   └── page.tsx                # Quiz funnel
│   │   │
│   │   ├── testimonials/
│   │   │   └── page.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   ├── checkout/
│   │   │   ├── page.tsx                # Checkout
│   │   │   ├── confirmation/
│   │   │   │   └── page.tsx            # Order confirmation + upsell
│   │   │   └── upsell/
│   │   │       └── page.tsx            # One-time upsell offer
│   │   │
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   └── reset-password/
│   │   │       └── page.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── layout.tsx              # Dashboard layout (sidebar + header)
│   │   │   ├── page.tsx                # Dashboard home
│   │   │   ├── courses/
│   │   │   │   ├── page.tsx            # My courses list
│   │   │   │   └── [courseSlug]/
│   │   │   │       ├── page.tsx        # Course overview
│   │   │   │       └── lessons/
│   │   │   │           └── [lessonId]/
│   │   │   │               └── page.tsx # Course viewer
│   │   │   ├── progress/
│   │   │   │   └── page.tsx
│   │   │   ├── saved/
│   │   │   │   └── page.tsx
│   │   │   ├── purchases/
│   │   │   │   └── page.tsx
│   │   │   ├── community/
│   │   │   │   ├── page.tsx            # Forum
│   │   │   │   └── [postId]/
│   │   │   │       └── page.tsx        # Post detail
│   │   │   ├── profile/
│   │   │   │   └── page.tsx
│   │   │   ├── notifications/
│   │   │   │   └── page.tsx
│   │   │   └── support/
│   │   │       └── page.tsx
│   │   │
│   │   ├── legal/
│   │   │   ├── terms/
│   │   │   │   └── page.tsx
│   │   │   ├── privacy/
│   │   │   │   └── page.tsx
│   │   │   └── refund/
│   │   │       └── page.tsx
│   │   │
│   │   └── api/                        # Next.js API routes (proxy to backend)
│   │       ├── auth/
│   │       │   ├── register/route.ts
│   │       │   ├── login/route.ts
│   │       │   ├── logout/route.ts
│   │       │   ├── reset-password/route.ts
│   │       │   └── refresh/route.ts
│   │       ├── users/
│   │       │   └── me/route.ts
│   │       ├── courses/
│   │       │   ├── route.ts
│   │       │   └── [slug]/
│   │       │       ├── route.ts
│   │       │       ├── modules/route.ts
│   │       │       └── lessons/
│   │       │           └── [id]/route.ts
│   │       ├── enrollments/
│   │       │   ├── route.ts
│   │       │   └── [id]/
│   │       │       ├── route.ts
│   │       │       ├── progress/route.ts
│   │       │       ├── complete/route.ts
│   │       │       └── certificate/route.ts
│   │       ├── payments/
│   │       │   ├── checkout/route.ts
│   │       │   └── orders/
│   │       │       ├── route.ts
│   │       │       └── [id]/
│   │       │           ├── route.ts
│   │       │           └── installments/route.ts
│   │       ├── quiz/
│   │       │   ├── start/route.ts
│   │       │   ├── submit/route.ts
│   │       │   └── save-lead/route.ts
│   │       ├── blog/
│   │       │   ├── posts/route.ts
│   │       │   ├── posts/[slug]/route.ts
│   │       │   ├── categories/route.ts
│   │       │   └── search/route.ts
│   │       ├── leads/
│   │       │   ├── capture/route.ts
│   │       │   └── magnets/
│   │       │       └── [slug]/
│   │       │           ├── route.ts
│   │       │           └── download/route.ts
│   │       ├── community/
│   │       │   ├── posts/route.ts
│   │       │   ├── posts/[id]/
│   │       │   │   ├── reply/route.ts
│   │       │   │   └── like/route.ts
│   │       │   └── members/route.ts
│   │       ├── applications/
│   │       │   ├── submit/route.ts
│   │       │   └── [id]/route.ts
│   │       ├── testimonials/
│   │       │   └── route.ts
│   │       ├── notifications/
│   │       │   ├── route.ts
│   │       │   ├── [id]/read/route.ts
│   │       │   └── read-all/route.ts
│   │       ├── bundles/
│   │       │   ├── route.ts
│   │       │   └── [slug]/route.ts
│   │       └── webhooks/
│   │           ├── stripe/route.ts
│   │           ├── paypal/route.ts
│   │           └── calendly/route.ts
│   │
│   ├── components/                     # Shared UI Components
│   │   ├── ui/                         # Shadcn/ui base components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── progress.tsx
│   │   │   └── scroll-area.tsx
│   │   │
│   │   ├── layout/                     # Layout components
│   │   │   ├── rtl-provider.tsx        # RTL context provider
│   │   │   ├── navbar.tsx              # Global navigation bar
│   │   │   ├── navbar-mobile.tsx       # Mobile hamburger menu
│   │   │   ├── footer.tsx              # Global footer
│   │   │   ├── dashboard-sidebar.tsx   # Dashboard sidebar nav
│   │   │   ├── dashboard-header.tsx    # Dashboard top header
│   │   │   ├── dashboard-mobile-nav.tsx # Dashboard bottom tab bar
│   │   │   └── breadcrumbs.tsx         # Breadcrumb navigation
│   │   │
│   │   ├── marketing/                  # Public page components
│   │   │   ├── hero-section.tsx        # Homepage hero with VSL
│   │   │   ├── trust-bar.tsx           # Trust signals bar
│   │   │   ├── programs-grid.tsx       # Programs card grid
│   │   │   ├── program-card.tsx        # Individual program card
│   │   │   ├── testimonial-carousel.tsx # Testimonials slider
│   │   │   ├── testimonial-card.tsx    # Single testimonial
│   │   │   ├── coach-bio-brief.tsx     # Brief coach section
│   │   │   ├── blog-preview.tsx        # Latest blog posts
│   │   │   ├── blog-card.tsx           # Blog post card
│   │   │   ├── cta-banner.tsx          # Call-to-action banner
│   │   │   ├── comparison-table.tsx    # Programs comparison
│   │   │   ├── pricing-card.tsx        # Pricing display
│   │   │   ├── pricing-toggle.tsx      # Full price / payment plan toggle
│   │   │   ├── faq-section.tsx         # FAQ accordion section
│   │   │   ├── curriculum-section.tsx  # Course module breakdown
│   │   │   ├── module-accordion.tsx    # Expandable module
│   │   │   └── bundle-card.tsx         # Bundle offer card
│   │   │
│   │   ├── lead-capture/               # Lead generation components
│   │   │   ├── email-capture-modal.tsx # Popup email capture
│   │   │   ├── email-capture-inline.tsx # Inline email form
│   │   │   ├── exit-intent-popup.tsx   # Exit-intent trigger
│   │   │   ├── newsletter-signup.tsx   # Footer newsletter form
│   │   │   ├── content-upgrade.tsx     # In-article gated content
│   │   │   └── free-resource-card.tsx  # Free resource with gate
│   │   │
│   │   ├── quiz/                       # Quiz funnel components
│   │   │   ├── quiz-container.tsx      # Quiz state machine
│   │   │   ├── quiz-question.tsx       # Single question display
│   │   │   ├── quiz-progress-bar.tsx   # Progress indicator
│   │   │   ├── quiz-email-capture.tsx  # Email before results
│   │   │   └── quiz-results.tsx        # Personalized results
│   │   │
│   │   ├── checkout/                   # Checkout components
│   │   │   ├── cart-summary.tsx        # Order summary
│   │   │   ├── payment-plan-selector.tsx # Full / installment toggle
│   │   │   ├── stripe-checkout.tsx     # Stripe Elements wrapper
│   │   │   ├── paypal-button.tsx       # PayPal button
│   │   │   ├── order-confirmation.tsx  # Success screen
│   │   │   └── upsell-offer.tsx        # Post-purchase upsell
│   │   │
│   │   ├── dashboard/                  # Dashboard components
│   │   │   ├── welcome-card.tsx        # Welcome + resume learning
│   │   │   ├── course-card.tsx         # Enrolled course card
│   │   │   ├── progress-chart.tsx      # Progress visualization
│   │   │   ├── streak-counter.tsx      # Days active streak
│   │   │   ├── milestone-badge.tsx     # Achievement badge
│   │   │   ├── recommendation-card.tsx # Upsell recommendation
│   │   │   ├── notification-item.tsx   # Single notification
│   │   │   ├── order-row.tsx           # Order history row
│   │   │   ├── installment-tracker.tsx # Payment plan progress
│   │   │   └── saved-item-card.tsx     # Saved content card
│   │   │
│   │   ├── course-viewer/              # LMS course viewer
│   │   │   ├── video-player.tsx        # Vimeo video player wrapper
│   │   │   ├── lesson-sidebar.tsx      # Module/lesson navigation
│   │   │   ├── lesson-content.tsx      # Lesson text content
│   │   │   ├── lesson-resources.tsx    # Downloadable resources
│   │   │   ├── lesson-notes.tsx        # Student notes editor
│   │   │   ├── mark-complete-button.tsx # Complete lesson CTA
│   │   │   ├── lesson-navigation.tsx   # Prev/next lesson
│   │   │   └── completion-screen.tsx   # Course complete + cert
│   │   │
│   │   ├── community/                  # Community components
│   │   │   ├── post-card.tsx           # Discussion post
│   │   │   ├── post-form.tsx           # Create post form
│   │   │   ├── reply-form.tsx          # Reply form
│   │   │   ├── member-card.tsx         # Member directory card
│   │   │   └── like-button.tsx         # Like interaction
│   │   │
│   │   ├── application/                # High-ticket application
│   │   │   ├── application-form.tsx    # Multi-field form
│   │   │   ├── calendly-embed.tsx      # Calendly booking widget
│   │   │   └── application-status.tsx  # Status tracker
│   │   │
│   │   └── shared/                     # Shared utility components
│   │       ├── video-embed.tsx         # Generic video embed
│   │       ├── whatsapp-button.tsx     # Floating WhatsApp
│   │       ├── social-share.tsx        # Social sharing buttons
│   │       ├── loading-spinner.tsx     # Loading state
│   │       ├── empty-state.tsx         # Empty state display
│   │       ├── error-display.tsx       # Error state display
│   │       ├── seo-head.tsx            # SEO meta tags
│   │       ├── analytics-tracker.tsx   # GA4 event tracker
│   │       └── rtl-icon.tsx            # RTL-aware icon wrapper
│   │
│   ├── lib/                            # Utility libraries
│   │   ├── atoms-cloud.ts             # Atoms Cloud client init
│   │   ├── stripe.ts                  # Stripe client init
│   │   ├── activecampaign.ts          # ActiveCampaign API client
│   │   ├── vimeo.ts                   # Vimeo API client
│   │   ├── calendly.ts               # Calendly API client
│   │   ├── analytics.ts              # GA4 + Hotjar helpers
│   │   ├── auth.ts                    # Auth helpers (JWT decode, etc.)
│   │   ├── utils.ts                   # General utilities
│   │   ├── cn.ts                      # Tailwind class merge utility
│   │   ├── constants.ts              # App-wide constants
│   │   ├── quiz-scoring.ts           # Quiz persona scoring algorithm
│   │   └── certificate-generator.ts  # PDF certificate generation
│   │
│   ├── hooks/                          # Custom React hooks
│   │   ├── use-auth.ts               # Authentication state
│   │   ├── use-user.ts               # Current user data
│   │   ├── use-courses.ts            # Course listing
│   │   ├── use-enrollment.ts         # Enrollment + progress
│   │   ├── use-notifications.ts      # Notifications
│   │   ├── use-quiz.ts               # Quiz state machine
│   │   ├── use-cart.ts               # Shopping cart state
│   │   ├── use-rtl.ts                # RTL direction context
│   │   ├── use-media-query.ts        # Responsive breakpoints
│   │   └── use-exit-intent.ts        # Exit-intent detection
│   │
│   ├── types/                          # TypeScript type definitions
│   │   ├── user.ts                    # User, UserProfile
│   │   ├── course.ts                  # Course, Module, Lesson, Resource
│   │   ├── enrollment.ts             # Enrollment, LessonProgress
│   │   ├── order.ts                   # Order, OrderItem, Installment
│   │   ├── lead.ts                    # Lead, QuizResult, LeadMagnet
│   │   ├── blog.ts                    # BlogPost
│   │   ├── testimonial.ts            # Testimonial
│   │   ├── application.ts            # Application
│   │   ├── community.ts              # CommunityPost
│   │   ├── notification.ts           # Notification
│   │   ├── bundle.ts                 # Bundle, BundleCourse
│   │   ├── quiz.ts                    # QuizQuestion, QuizAnswer, Persona
│   │   └── api.ts                     # API response types, pagination
│   │
│   ├── services/                       # API service layer
│   │   ├── auth-service.ts           # Auth API calls
│   │   ├── user-service.ts           # User API calls
│   │   ├── course-service.ts         # Course API calls
│   │   ├── enrollment-service.ts     # Enrollment API calls
│   │   ├── payment-service.ts        # Payment API calls
│   │   ├── quiz-service.ts           # Quiz API calls
│   │   ├── blog-service.ts           # Blog API calls
│   │   ├── lead-service.ts           # Lead capture API calls
│   │   ├── community-service.ts      # Community API calls
│   │   ├── application-service.ts    # Application API calls
│   │   ├── testimonial-service.ts    # Testimonial API calls
│   │   ├── notification-service.ts   # Notification API calls
│   │   └── bundle-service.ts         # Bundle API calls
│   │
│   ├── store/                          # Client-side state management
│   │   ├── auth-store.ts             # Auth state (Zustand)
│   │   ├── cart-store.ts             # Cart state
│   │   ├── quiz-store.ts             # Quiz progress state
│   │   └── notification-store.ts     # Notification count
│   │
│   └── middleware.ts                   # Next.js middleware (auth guards)
│
├── backend/                            # Atoms Cloud Backend
│   ├── functions/                      # Edge Functions
│   │   ├── auth/
│   │   │   ├── register.ts
│   │   │   ├── login.ts
│   │   │   ├── logout.ts
│   │   │   ├── reset-password.ts
│   │   │   └── refresh.ts
│   │   ├── users/
│   │   │   ├── get-user.ts
│   │   │   ├── update-user.ts
│   │   │   ├── get-profile.ts
│   │   │   ├── update-profile.ts
│   │   │   └── upload-avatar.ts
│   │   ├── courses/
│   │   │   ├── list-courses.ts
│   │   │   ├── get-course.ts
│   │   │   ├── get-course-modules.ts
│   │   │   ├── get-lesson.ts
│   │   │   └── get-lesson-resources.ts
│   │   ├── enrollments/
│   │   │   ├── enroll.ts
│   │   │   ├── get-enrollments.ts
│   │   │   ├── get-enrollment.ts
│   │   │   ├── update-progress.ts
│   │   │   ├── get-progress.ts
│   │   │   ├── complete-course.ts
│   │   │   └── generate-certificate.ts
│   │   ├── payments/
│   │   │   ├── create-checkout.ts
│   │   │   ├── create-payment-plan.ts
│   │   │   ├── get-order.ts
│   │   │   ├── get-orders.ts
│   │   │   ├── get-installments.ts
│   │   │   └── process-refund.ts
│   │   ├── quiz/
│   │   │   ├── start-quiz.ts
│   │   │   ├── submit-answers.ts
│   │   │   └── save-lead.ts
│   │   ├── blog/
│   │   │   ├── list-posts.ts
│   │   │   ├── get-post.ts
│   │   │   ├── get-categories.ts
│   │   │   └── search-posts.ts
│   │   ├── leads/
│   │   │   ├── capture-lead.ts
│   │   │   ├── get-lead-magnet.ts
│   │   │   ├── record-download.ts
│   │   │   └── sync-activecampaign.ts
│   │   ├── community/
│   │   │   ├── list-posts.ts
│   │   │   ├── create-post.ts
│   │   │   ├── reply-to-post.ts
│   │   │   ├── like-post.ts
│   │   │   └── get-members.ts
│   │   ├── applications/
│   │   │   ├── submit-application.ts
│   │   │   ├── get-application.ts
│   │   │   ├── update-status.ts
│   │   │   └── list-applications.ts
│   │   ├── testimonials/
│   │   │   ├── list-testimonials.ts
│   │   │   └── create-testimonial.ts
│   │   ├── notifications/
│   │   │   ├── send-notification.ts
│   │   │   ├── get-notifications.ts
│   │   │   ├── mark-read.ts
│   │   │   └── send-email.ts
│   │   └── webhooks/
│   │       ├── stripe-handler.ts
│   │       ├── paypal-handler.ts
│   │       └── calendly-handler.ts
│   │
│   ├── migrations/                     # Database migrations
│   │   ├── 001_create_users.sql
│   │   ├── 002_create_courses.sql
│   │   ├── 003_create_modules_lessons.sql
│   │   ├── 004_create_enrollments.sql
│   │   ├── 005_create_orders.sql
│   │   ├── 006_create_leads_quiz.sql
│   │   ├── 007_create_blog.sql
│   │   ├── 008_create_testimonials.sql
│   │   ├── 009_create_applications.sql
│   │   ├── 010_create_community.sql
│   │   ├── 011_create_notifications.sql
│   │   ├── 012_create_bundles.sql
│   │   ├── 013_create_lead_magnets.sql
│   │   └── 014_create_saved_content.sql
│   │
│   └── seed/                           # Seed data
│       ├── courses.ts                 # Initial 6 courses
│       ├── modules-lessons.ts         # Course curriculum
│       ├── lead-magnets.ts            # 8 lead magnets
│       ├── bundles.ts                 # 4 bundles
│       ├── quiz-questions.ts          # 7 quiz questions
│       └── blog-posts.ts             # Initial 10 blog posts
│
├── tests/                              # Test files
│   ├── e2e/                           # Playwright E2E tests
│   │   ├── homepage.spec.ts
│   │   ├── quiz-funnel.spec.ts
│   │   ├── checkout-flow.spec.ts
│   │   ├── auth-flow.spec.ts
│   │   ├── dashboard.spec.ts
│   │   ├── course-viewer.spec.ts
│   │   ├── blog.spec.ts
│   │   └── mobile-responsive.spec.ts
│   └── unit/                          # Unit tests
│       ├── quiz-scoring.test.ts
│       ├── cart-store.test.ts
│       └── utils.test.ts
│
└── docs/                               # Documentation
    ├── system_design.md               # This document
    ├── architect.plantuml             # Architecture diagram
    ├── class_diagram.plantuml         # Class diagram
    ├── sequence_diagram.plantuml      # Sequence diagrams
    ├── er_diagram.plantuml            # ER diagram
    ├── ui_navigation.plantuml         # UI navigation state machine
    └── file_tree.md                   # This file
```

## File Count Summary

| Directory | Files | Purpose |
|-----------|-------|---------|
| `src/app/` (pages) | ~45 | Next.js page routes |
| `src/app/api/` (API routes) | ~35 | API proxy routes |
| `src/components/` | ~70 | React UI components |
| `src/lib/` | ~12 | Utility libraries |
| `src/hooks/` | ~10 | Custom React hooks |
| `src/types/` | ~13 | TypeScript types |
| `src/services/` | ~13 | API service layer |
| `src/store/` | ~4 | Client state stores |
| `backend/functions/` | ~45 | Edge Functions |
| `backend/migrations/` | ~14 | SQL migrations |
| `backend/seed/` | ~6 | Seed data |
| `tests/` | ~10 | Test files |
| **Total** | **~280** | |

## Key Architectural Notes

1. **Frontend-Backend Separation**: `src/` contains the Next.js frontend; `backend/` contains Atoms Cloud Edge Functions and database migrations. They communicate via REST API.

2. **Component Organization**: Components are grouped by domain (marketing, dashboard, checkout, quiz, etc.) rather than by type, making it easy to find related components.

3. **API Route Pattern**: Next.js API routes in `src/app/api/` act as a thin proxy layer to Atoms Cloud Edge Functions, handling auth token forwarding and response formatting.

4. **Type Safety**: All data models are defined in `src/types/` and shared between components, services, and API routes.

5. **Service Layer**: `src/services/` provides a clean abstraction over API calls, used by hooks and components. Each service maps to one backend domain.

6. **State Management**: Zustand for lightweight client state (auth, cart, quiz progress). Server state managed by React Query / SWR through hooks.