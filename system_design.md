# Feminine Queens Awakening — System Design Document

**Prepared by:** Bob (System Architect)  
**Date:** April 2026  
**Version:** 1.0  
**References:**  
- Research Analysis Report (`/workspace/docs/research_analysis_report.md`)  
- Platform Strategy PRD (`/workspace/docs/platform_strategy_prd.md`)  

---

## Table of Contents

1. [Implementation Approach](#1-implementation-approach)
2. [User & UI Interaction Behaviors](#2-user--ui-interaction-behaviors)
3. [System Architecture](#3-system-architecture)
4. [UI Navigation Flow](#4-ui-navigation-flow)
5. [Data Structures & Interfaces](#5-data-structures--interfaces)
6. [Program Call Flow](#6-program-call-flow)
7. [Database ER Diagram](#7-database-er-diagram)
8. [Integration Points](#8-integration-points)
9. [Scalability Considerations](#9-scalability-considerations)
10. [Unclear Aspects & Assumptions](#10-unclear-aspects--assumptions)

---

## 1. Implementation Approach

### 1.1 Critical Requirements & Challenges

The platform redesign addresses several critical challenges identified in the research phase:

| # | Challenge | Difficulty | Solution Approach |
|---|-----------|-----------|-------------------|
| 1 | **7 fragmented subdomains → 1 unified platform** | High | Single Next.js application with clean URL routing; all pages under one domain |
| 2 | **WhatsApp-dependent checkout (4/6 products)** | Medium | Unified Stripe + PayPal checkout with payment plan support on all products |
| 3 | **Zero email capture infrastructure** | Medium | 10+ lead capture points with ActiveCampaign integration for automated nurture sequences |
| 4 | **No user accounts or course delivery** | High | Atoms Cloud auth + custom LMS dashboard with progress tracking |
| 5 | **RTL Arabic-first design** | Medium | Tailwind CSS RTL plugin + Cairo/Tajawal fonts + RTL-first component library |
| 6 | **SEO for Arabic content** | Medium | Next.js SSR for public pages; structured data; Arabic meta tags; sitemap |
| 7 | **High-ticket application funnel ($6,800–$15,000)** | Medium | Embedded application form → Calendly integration → status tracking |
| 8 | **Quiz-based lead segmentation** | Medium | Custom quiz engine with persona scoring algorithm → ActiveCampaign tagging |
| 9 | **Course video delivery (secure)** | Medium | Vimeo Pro with signed URLs; no direct download capability |
| 10 | **Payment plans / installments** | Medium | Stripe Subscriptions for installment plans; webhook-driven status updates |

### 1.2 Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Frontend Framework** | Next.js 14+ (App Router) + TypeScript | SSR for SEO on public pages; CSR for dashboard interactivity; App Router for layouts |
| **UI Library** | Shadcn/ui + Tailwind CSS | Rapid development; accessible components; easy RTL customization; consistent design system |
| **Backend** | Atoms Cloud (Edge Functions) | Auth, database, file storage, serverless API — all-in-one; zero DevOps overhead |
| **Database** | Atoms Cloud DB (PostgreSQL) | Relational data model fits course/enrollment/order relationships; JSONB for flexible fields |
| **File Storage** | Atoms Cloud Storage | Course PDFs, lead magnets, user avatars, certificates |
| **Authentication** | Atoms Cloud Auth (JWT) | Email/password auth; session management; role-based access |
| **Payment Processing** | Stripe (primary) + PayPal (secondary) | Global coverage; subscription/installment support; webhook-driven |
| **Email Marketing** | ActiveCampaign | Advanced automation; segmentation; tagging; Arabic email support |
| **Video Hosting** | Vimeo Pro | Secure video delivery; no download; adaptive streaming; API access |
| **Booking** | Calendly Pro | Clarity call scheduling for high-ticket programs; webhook integration |
| **Analytics** | Google Analytics 4 + Hotjar | Traffic analytics + behavior heatmaps + conversion tracking |
| **CDN** | CloudFlare | Global edge caching; DDoS protection; performance optimization for MENA region |
| **Testing** | Playwright MCP | End-to-end UI testing; cross-browser; mobile responsive testing |

### 1.3 Architecture Principles

1. **Frontend-Backend Separation**: Next.js frontend communicates with Atoms Cloud backend via REST API (Edge Functions). Clean separation enables independent scaling and deployment.

2. **SSR for SEO, CSR for Interactivity**: Public marketing pages (Homepage, About, Programs, Blog) use Server-Side Rendering for SEO. Dashboard, Checkout, and Quiz use Client-Side Rendering for interactivity.

3. **RTL-First Design**: All components built RTL-first with `dir="rtl"` as default. Tailwind's RTL plugin ensures layout mirroring. Arabic typography with proper line-height (1.8x).

4. **Webhook-Driven Architecture**: Payment status updates, email automation triggers, and calendar events all flow through webhooks — no polling, no manual intervention.

5. **MVP-First, Iterate**: Phase 1 delivers core value (unified site + checkout + basic dashboard). Advanced features (community, membership, A/B testing) come in later phases.

### 1.4 Implementation Phases

| Phase | Weeks | Deliverables | Priority |
|-------|-------|-------------|----------|
| **Phase 1: Foundation** | 1–4 | Design system, Homepage, About, Contact, Programs overview, Global nav/footer, Auth, Legal pages | P0 |
| **Phase 2: Products & Sales** | 5–8 | 5 program sales pages, Book page, Unified checkout (Stripe+PayPal), Payment plans, Testimonials page | P0 |
| **Phase 3: Lead Generation** | 9–12 | Quiz funnel, Free resources page, Lead magnets, ActiveCampaign integration, Blog with 10 articles, Email capture points | P1 |
| **Phase 4: Course Delivery** | 13–16 | User dashboard, Course viewer, Progress tracking, Certificate generation, Post-purchase upsell flows | P0 |
| **Phase 5: Community & Scale** | 17–20 | Community forum, Membership tier, Webinar funnel, Advanced automation, Referral program, A/B testing, Performance optimization | P2 |

---

## 2. User & UI Interaction Behaviors

### 2.1 Primary User Interactions

| # | Interaction | User Action | System Response | Emotional Goal |
|---|------------|-------------|-----------------|----------------|
| 1 | **First Visit** | Lands on homepage from Instagram/SEO | Shows VSL hero, trust bar, programs overview, testimonials, free resource CTA | "I've found the right place" |
| 2 | **Take Quiz** | Clicks "Take the Quiz" CTA | Presents 7 questions → captures email → shows personalized recommendation | "She understands my situation" |
| 3 | **Browse Programs** | Navigates to Programs page | Shows all 5 programs as cards with comparison table and recommended path | "There's a perfect path for me" |
| 4 | **View Program Details** | Clicks into specific program | Shows sales page with VSL, curriculum, testimonials, pricing, FAQ | "This is exactly what I need" |
| 5 | **Download Free Resource** | Clicks lead magnet CTA | Shows email capture modal → delivers resource → triggers nurture sequence | "She's giving me value for free" |
| 6 | **Purchase Course** | Clicks "Enroll Now" | Redirects to checkout → payment plan selection → Stripe/PayPal → confirmation + upsell | "I'm investing in myself" |
| 7 | **Apply for High-Ticket** | Fills application form | Submits form → shows Calendly booking → confirmation email | "I'm being personally considered" |
| 8 | **Access Dashboard** | Logs in → Dashboard | Shows enrolled courses, progress, resume button, recommendations | "My transformation journey hub" |
| 9 | **Watch Course Lesson** | Clicks into course viewer | Plays video, shows resources, exercises, mark complete button | "I'm learning and growing" |
| 10 | **Track Progress** | Views progress page | Shows completion %, streak counter, milestones, badges | "I'm making real progress" |
| 11 | **Read Blog** | Visits blog from SEO/nav | Shows articles with sidebar CTAs, content upgrades, related programs | "She's a true expert" |
| 12 | **Engage Community** | Posts in community forum | Creates discussion, replies, likes, views member directory | "I belong to a sisterhood" |
| 13 | **Complete Course** | Finishes final lesson | Shows certificate, testimonial request, upsell to next tier | "I've transformed, what's next?" |
| 14 | **Return Visit** | Returns to site (logged in) | Dashboard shows "Continue where you left off" with last lesson | "Seamless continuation" |

### 2.2 RTL-Specific Interactions

| Element | RTL Behavior |
|---------|-------------|
| **Navigation** | Logo on right, menu items flow right-to-left, login/search on left |
| **Text Input** | Right-aligned, cursor starts from right |
| **Carousels** | Swipe right-to-left to advance; arrows mirrored |
| **Progress Bars** | Fill from right to left |
| **Sidebar** | Dashboard sidebar on right side |
| **Breadcrumbs** | Right-to-left: الرئيسية > البرامج > دورة الأنوثة |
| **Forms** | Labels right-aligned, inputs right-aligned |
| **Modals** | Close button on left (mirrored) |

### 2.3 Mobile-Specific Interactions

| Element | Mobile Behavior |
|---------|----------------|
| **Navigation** | Hamburger menu (top-left for RTL); full-screen overlay |
| **Dashboard** | Bottom tab bar: [الرئيسية] [دوراتي] [المجتمع] [حسابي] |
| **Course Viewer** | Full-width video; collapsible module sidebar |
| **Checkout** | Single-column; sticky "Pay Now" button at bottom |
| **Quiz** | Full-screen questions; swipe between questions |
| **Blog** | Single-column; floating share button |
| **WhatsApp** | Floating button (bottom-left for RTL) on all pages |

---

## 3. System Architecture

### 3.1 Architecture Diagram

See `architect.plantuml` for the full PlantUML diagram.

### 3.2 Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                        CloudFlare CDN                                │
│                   (Global Edge Caching + DDoS)                       │
└──────────────────────────────┬──────────────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────────────┐
│                    Next.js Application (Vercel)                       │
│                                                                       │
│  ┌─────────────────────┐  ┌────────────────┐  ┌──────────────────┐  │
│  │  PUBLIC WEBSITE      │  │  SALES LAYER   │  │  DASHBOARD       │  │
│  │  (SSR - SEO)         │  │  (CSR)         │  │  (CSR - Auth)    │  │
│  │                      │  │                │  │                  │  │
│  │  • Homepage          │  │  • Checkout    │  │  • Dashboard Home│  │
│  │  • About             │  │  • Upsell      │  │  • My Courses    │  │
│  │  • Programs (×6)     │  │  • Application │  │  • Course Viewer │  │
│  │  • Book              │  │  • Webinar Reg │  │  • Progress      │  │
│  │  • Blog              │  │                │  │  • Community     │  │
│  │  • Free Resources    │  │                │  │  • Purchases     │  │
│  │  • Quiz              │  │                │  │  • Profile       │  │
│  │  • Testimonials      │  │                │  │  • Notifications │  │
│  │  • Contact           │  │                │  │  • Support       │  │
│  │  • Legal             │  │                │  │                  │  │
│  └─────────────────────┘  └────────────────┘  └──────────────────┘  │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │              Shared UI Layer (Shadcn/ui + Tailwind RTL)          │ │
│  │  RTL Shell · Nav · Footer · Email Modal · Video Player ·        │ │
│  │  Pricing Card · FAQ · Testimonial · Progress Bar · Toast        │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────┬──────────────────────────────────────┘
                               │ REST API calls
┌──────────────────────────────▼──────────────────────────────────────┐
│                      Atoms Cloud Backend                              │
│                                                                       │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                    Edge Functions (API)                        │   │
│  │                                                                │   │
│  │  Auth · User · Course · Enrollment · Payment · Quiz ·         │   │
│  │  Blog · Lead · Community · Notification · Application ·       │   │
│  │  Testimonial · Analytics · Webhook Handlers                    │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                       │
│  ┌─────────────────────┐  ┌────────────────────────────────────┐   │
│  │  PostgreSQL Database │  │  File Storage (S3-compatible)      │   │
│  │                      │  │                                    │   │
│  │  17 tables           │  │  • Course PDFs & worksheets        │   │
│  │  (see ER diagram)    │  │  • Lead magnet files               │   │
│  │                      │  │  • Blog images                     │   │
│  │                      │  │  • User avatars                    │   │
│  │                      │  │  • Generated certificates          │   │
│  └─────────────────────┘  └────────────────────────────────────┘   │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────────┐ │
│  │                    Authentication (JWT)                           │ │
│  │  Email/Password · Session Management · Role-Based Access         │ │
│  └─────────────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────┘
                               │
                    External Service Integrations
                               │
         ┌─────────┬───────────┼───────────┬──────────┐
         │         │           │           │          │
    ┌────▼───┐ ┌───▼────┐ ┌───▼────┐ ┌───▼────┐ ┌───▼────┐
    │ Stripe │ │PayPal  │ │Active  │ │ Vimeo  │ │Calendly│
    │        │ │        │ │Campaign│ │ Pro    │ │        │
    │Payment │ │Payment │ │Email   │ │Video   │ │Booking │
    │Plans   │ │        │ │Automat.│ │Hosting │ │Calls   │
    │Webhooks│ │        │ │Tagging │ │Signed  │ │Webhooks│
    └────────┘ └────────┘ └────────┘ │URLs    │ └────────┘
                                      └────────┘
```

### 3.3 Component Responsibilities

#### 3.3.1 Public Website (Marketing)

| Component | Rendering | Purpose | Key Features |
|-----------|-----------|---------|-------------|
| Homepage | SSR | Primary landing, brand establishment | VSL video, trust bar, programs overview, testimonials carousel, lead magnet CTA |
| About | SSR | Coach trust building | Personal story, credentials, video intro |
| Programs Overview | SSR | Program comparison & discovery | Cards grid, comparison table, quiz CTA, bundle offers |
| Program Detail (×5) | SSR | Individual program sales | VSL, curriculum, testimonials, pricing, FAQ, checkout/application CTA |
| Book | SSR | Book sales + lead capture | Book description, free chapter download, purchase options, course upsell |
| Testimonials | SSR | Social proof hub | Video + written testimonials, filterable by program |
| Contact | SSR | Support & inquiries | Contact form, WhatsApp link, FAQ |
| Legal (×3) | SSR | Compliance | Terms, privacy, refund policy |

#### 3.3.2 Content Hub (Blog)

| Component | Rendering | Purpose | Key Features |
|-----------|-----------|---------|-------------|
| Blog Index | SSR | SEO traffic, authority | Article grid, category filter, search, sidebar with lead magnets |
| Blog Post | SSR | Individual article | Content, author bio, content upgrade CTA, related posts, share buttons |
| Video Library | SSR | YouTube content hub | Embedded videos, category filter |

#### 3.3.3 Sales Funnels

| Component | Rendering | Purpose | Key Features |
|-----------|-----------|---------|-------------|
| Quiz | CSR | Lead segmentation + capture | 7 questions, persona scoring, email capture, personalized recommendation |
| Free Resources | SSR/CSR | Lead capture hub | Gated resources (mini-course, PDFs, meditations), email forms |
| Checkout | CSR | Unified payment | Cart, payment plan selection, Stripe/PayPal, order confirmation, upsell |
| Application Form | CSR | High-ticket qualification | Embedded form, Calendly booking, status tracking |
| Webinar Registration | CSR | High-ticket funnel | Registration form, email capture, reminder sequence |

#### 3.3.4 User Dashboard (LMS)

| Component | Rendering | Purpose | Key Features |
|-----------|-----------|---------|-------------|
| Dashboard Home | CSR | Overview + resume | Welcome, continue learning, stats, recommendations, activity |
| My Courses | CSR | Course management | Active/completed/available courses, enrollment cards |
| Course Viewer | CSR | Lesson consumption | Video player, resources, exercises, mark complete, navigation |
| Progress | CSR | Motivation + tracking | Progress charts, streak counter, milestones, badges |
| Saved Content | CSR | Bookmarks | Saved lessons, articles, resources, notes |
| Purchases | CSR | Order management | Order history, invoices, payment plan status |
| Community | CSR | Engagement | Discussion forum, live sessions, member directory |
| Profile | CSR | Account settings | Personal info, password, notifications, language |
| Notifications | CSR | Updates | New content, community activity, offers, reminders |
| Support | CSR | Help | FAQ, support tickets, WhatsApp link |

### 3.4 Data Flow

```
┌──────────────────────────────────────────────────────────────────┐
│                         DATA FLOW MAP                             │
│                                                                    │
│  VISITOR                                                           │
│    │                                                               │
│    ├── Views public pages ──→ SSR from Next.js (cached by CDN)    │
│    │                                                               │
│    ├── Takes quiz ──→ Quiz Service ──→ Quiz Results DB             │
│    │                   │                                           │
│    │                   └──→ Lead Service ──→ Leads DB              │
│    │                                    └──→ ActiveCampaign (tag)  │
│    │                                                               │
│    ├── Downloads resource ──→ Lead Service ──→ Leads DB            │
│    │                                      └──→ ActiveCampaign     │
│    │                                                               │
│    ├── Registers ──→ Auth Service ──→ Users DB                    │
│    │                                                               │
│    ├── Purchases ──→ Payment Service ──→ Orders DB                │
│    │                  │                  └──→ Stripe/PayPal       │
│    │                  │                                            │
│    │                  └──→ Enrollment Service ──→ Enrollments DB   │
│    │                       │                                       │
│    │                       └──→ Notification Service               │
│    │                            ├──→ Notifications DB              │
│    │                            └──→ ActiveCampaign (tag+automate)│
│    │                                                               │
│    ├── Watches lesson ──→ Course Service ──→ Vimeo (signed URL)   │
│    │                       │                                       │
│    │                       └──→ Enrollment Service                 │
│    │                            └──→ Lesson Progress DB            │
│    │                                                               │
│    ├── Applies (high-ticket) ──→ Application Service               │
│    │                              ├──→ Applications DB             │
│    │                              ├──→ Calendly (booking)          │
│    │                              └──→ ActiveCampaign (tag)        │
│    │                                                               │
│    └── Posts in community ──→ Community Service ──→ Community DB   │
│                                                                    │
│  WEBHOOKS (Inbound)                                                │
│    │                                                               │
│    ├── Stripe webhook ──→ Payment Service ──→ Update order status  │
│    │                       └──→ Enrollment Service (activate)      │
│    │                                                               │
│    ├── PayPal webhook ──→ Payment Service ──→ Update order status  │
│    │                                                               │
│    └── Calendly webhook ──→ Application Service                    │
│                              └──→ Update application status        │
│                                                                    │
│  ADMIN                                                             │
│    │                                                               │
│    ├── Manages courses ──→ Course Service ──→ Courses DB          │
│    ├── Publishes blog ──→ Blog Service ──→ Blog Posts DB          │
│    ├── Reviews applications ──→ Application Service               │
│    └── Views analytics ──→ Analytics Service ──→ GA4/Hotjar       │
└──────────────────────────────────────────────────────────────────┘
```

---

## 4. UI Navigation Flow

See `ui_navigation.plantuml` for the full PlantUML state machine diagram.

### 4.1 Navigation Depth Analysis

The navigation is designed to keep depth at **3 levels maximum** with clear back paths:

| Level 0 | Level 1 | Level 2 | Level 3 |
|---------|---------|---------|---------|
| Home | Programs | Program Detail | Checkout |
| Home | Programs | Program Detail | Application → Calendly |
| Home | Blog | Blog Post | — |
| Home | Quiz | Quiz Flow | Results → Program |
| Home | Book | — | Checkout |
| Home | Free Resources | — | — |
| Home | Dashboard | My Courses | Course Viewer |
| Home | Dashboard | Community | Post Detail |
| Home | Dashboard | Purchases | Order Detail |

### 4.2 High-Frequency Functions Surfaced

| Function | Access Method | Clicks from Home |
|----------|-------------|-----------------|
| Take Quiz | Homepage hero CTA (primary) | 1 |
| Browse Programs | Global nav + Homepage cards | 1 |
| View Specific Program | Programs page card | 2 |
| Enroll / Purchase | Program page CTA | 3 |
| Resume Course | Dashboard "Continue" button | 2 (login + click) |
| Download Free Resource | Homepage CTA / Free page | 1–2 |
| Read Blog | Global nav | 1 |
| Contact Support | Global nav / Dashboard | 1–2 |

### 4.3 Back Navigation

Every page provides clear back navigation:

- **Global nav** persists on all pages (logo → Home)
- **Breadcrumbs** on Level 2+ pages (e.g., Home > Programs > Mother Wound)
- **"Back to..."** links on detail pages
- **Dashboard sidebar** always visible for authenticated navigation
- **Browser back** works correctly (no broken history states)

---

## 5. Data Structures & Interfaces

See `class_diagram.plantuml` for the full PlantUML class diagram.

### 5.1 Core Models Summary

| Model | Purpose | Key Relationships |
|-------|---------|-------------------|
| **User** | Registered user (student or admin) | Has Profile, Enrollments, Orders, Community Posts, Notifications, Saved Content |
| **UserProfile** | Extended user info + preferences | Belongs to User |
| **Course** | A purchasable course/program | Has Modules, Enrollments, Testimonials, Applications |
| **Module** | A section within a course | Belongs to Course, has Lessons |
| **Lesson** | Individual lesson content | Belongs to Module, has Resources, Progress records |
| **LessonResource** | Downloadable file attached to lesson | Belongs to Lesson |
| **Enrollment** | User's enrollment in a course | Belongs to User + Course + Order, has Lesson Progress |
| **LessonProgress** | Per-lesson completion tracking | Belongs to Enrollment + Lesson |
| **Order** | A purchase transaction | Belongs to User, has Items + Installments, creates Enrollments |
| **OrderItem** | Line item in an order | Belongs to Order, references Course |
| **PaymentInstallment** | Installment in a payment plan | Belongs to Order |
| **Lead** | Email subscriber (pre-registration) | May have Quiz Result, may convert to User |
| **QuizResult** | Quiz answers + persona scoring | Belongs to Lead, references recommended Course |
| **BlogPost** | Blog article | Standalone with category/tags |
| **Testimonial** | Student testimonial | References Course |
| **Application** | High-ticket program application | References Course |
| **CommunityPost** | Forum discussion/reply | Belongs to User, references Course, self-referential for replies |
| **Notification** | In-app notification | Belongs to User |
| **SavedContent** | Bookmarked content | Belongs to User, polymorphic reference |
| **Bundle** | Course bundle with discount | Has BundleCourses |
| **BundleCourse** | Junction table for bundles | References Bundle + Course |
| **LeadMagnet** | Free downloadable resource | Standalone with persona targeting |

### 5.2 Service Interfaces Summary

| Service | Key Operations | External Dependencies |
|---------|---------------|----------------------|
| **IAuthService** | register, login, logout, reset_password, verify_token, refresh_token | Atoms Cloud Auth |
| **IUserService** | get_user, update_user, get_profile, update_profile, upload_avatar | Atoms Cloud Storage |
| **ICourseService** | list_courses, get_course, get_course_with_modules, get_lesson, get_lesson_resources | Vimeo (video URLs) |
| **IEnrollmentService** | enroll, get_enrollments, update_lesson_progress, get_course_progress, complete_course, generate_certificate | — |
| **IPaymentService** | create_checkout_session, create_payment_plan, handle_webhook, get_order, process_refund | Stripe, PayPal |
| **IQuizService** | start_quiz, submit_answers, get_recommendation, save_lead | — |
| **IBlogService** | list_posts, get_post, get_categories, search_posts | — |
| **ILeadService** | capture_lead, get_lead_magnet, record_download, sync_to_activecampaign, tag_lead | ActiveCampaign |
| **ICommunityService** | list_posts, create_post, reply_to_post, like_post, get_members | — |
| **IApplicationService** | submit_application, update_status, schedule_call, list_applications | Calendly |
| **INotificationService** | send_notification, get_notifications, mark_as_read, send_email | ActiveCampaign |
| **ITestimonialService** | list_testimonials, get_testimonial, create_testimonial | — |
| **IAnalyticsService** | track_event, track_page_view, get_dashboard_stats, get_revenue_stats | GA4, Hotjar |

---

## 6. Program Call Flow

See `sequence_diagram.plantuml` for the full PlantUML sequence diagrams.

### 6.1 Critical Flows Documented

| # | Flow | Actors | Key Steps |
|---|------|--------|-----------|
| 1 | **Quiz Funnel → Lead Capture** | Visitor, Quiz Service, Lead Service, ActiveCampaign | Visit → 7 questions → persona scoring → email capture → AC tag → personalized recommendation |
| 2 | **Registration → Purchase → Enrollment** | Visitor, Auth, Payment, Enrollment, Stripe, AC | Register → checkout → Stripe session → webhook → order complete → enrollment active → notifications |
| 3 | **Course Learning → Progress → Completion** | Student, Dashboard, Course Service, Enrollment, Vimeo | Login → resume lesson → Vimeo video → mark complete → progress update → milestones → certificate → upsell |
| 4 | **High-Ticket Application → Clarity Call** | Prospect, Application Service, Calendly, AC | View sales page → fill application → Calendly booking → pre-call emails → call → enrollment decision |
| 5 | **Blog → Lead Magnet → Email Nurture** | Reader, Blog Service, Lead Service, AC | SEO visit → read article → click lead magnet → email capture → AC automation → 5-email nurture sequence |

### 6.2 Webhook Flow Summary

| Source | Event | Handler | Actions |
|--------|-------|---------|---------|
| **Stripe** | `checkout.session.completed` | Payment Service | Update order → create enrollment → send confirmation → tag in AC |
| **Stripe** | `invoice.paid` | Payment Service | Update installment status → send receipt |
| **Stripe** | `invoice.payment_failed` | Payment Service | Update installment → send retry notification → alert admin |
| **Stripe** | `customer.subscription.deleted` | Payment Service | Handle cancellation → update enrollment if needed |
| **PayPal** | `CHECKOUT.ORDER.APPROVED` | Payment Service | Update order → create enrollment → send confirmation |
| **Calendly** | `invitee.created` | Application Service | Update application status → trigger pre-call emails |
| **Calendly** | `invitee.canceled` | Application Service | Update application status → trigger re-engagement |

---

## 7. Database ER Diagram

See `er_diagram.plantuml` for the full PlantUML ER diagram.

### 7.1 Database Summary

| Entity | Records (Est. Year 1) | Key Indexes |
|--------|----------------------|-------------|
| users | 5,000 | email (unique), role |
| user_profiles | 5,000 | user_id (unique) |
| courses | 6 | slug (unique), is_published |
| modules | 50 | course_id, sort_order |
| lessons | 200 | module_id, sort_order |
| lesson_resources | 400 | lesson_id |
| enrollments | 3,000 | user_id + course_id (unique), status |
| lesson_progress | 50,000 | enrollment_id + lesson_id (unique) |
| orders | 3,000 | user_id, order_number (unique), payment_status |
| order_items | 4,000 | order_id |
| payment_installments | 5,000 | order_id, due_date, payment_status |
| leads | 15,000 | email, source, quiz_persona |
| quiz_results | 8,000 | session_id, persona |
| blog_posts | 100 | slug (unique), category, status, published_at |
| testimonials | 150 | course_id, is_featured, is_published |
| applications | 500 | course_id, email, status |
| community_posts | 5,000 | author_id, course_id, parent_post_id |
| notifications | 50,000 | user_id, is_read, created_at |
| saved_content | 10,000 | user_id, content_type |
| bundles | 5 | slug (unique), is_active |
| bundle_courses | 15 | bundle_id, course_id |
| lead_magnets | 10 | slug (unique), is_active |

### 7.2 Key Database Constraints

1. **Unique enrollment**: A user can only be enrolled once per course (`UNIQUE(user_id, course_id)` on enrollments)
2. **Unique progress**: One progress record per lesson per enrollment (`UNIQUE(enrollment_id, lesson_id)`)
3. **Cascading deletes**: Deleting a course cascades to modules → lessons → resources
4. **Soft deletes**: Users and courses use `is_active`/`is_published` flags rather than hard deletes
5. **JSONB fields**: `quiz_results.answers` and `blog_posts.tags` use JSONB for flexibility

---

## 8. Integration Points

### 8.1 Stripe Integration

| Integration Point | Direction | Purpose | Implementation |
|-------------------|-----------|---------|----------------|
| Create Checkout Session | Outbound | Initiate payment | `POST /v1/checkout/sessions` with line items, metadata |
| Create Subscription | Outbound | Payment plans | `POST /v1/subscriptions` with recurring price |
| Webhook: checkout.session.completed | Inbound | Payment confirmation | Edge Function handler → update order → create enrollment |
| Webhook: invoice.paid | Inbound | Installment confirmation | Edge Function handler → update installment status |
| Webhook: invoice.payment_failed | Inbound | Failed payment | Edge Function handler → notify user → retry logic |
| Retrieve Customer | Outbound | Customer management | `GET /v1/customers/{id}` for order history |
| Create Refund | Outbound | Process refunds | `POST /v1/refunds` with payment intent ID |

**Stripe Configuration:**
- Products created for each course/bundle
- Prices created for one-time and recurring (installment) options
- Webhook endpoint: `POST /api/webhooks/stripe`
- Webhook secret stored as environment variable
- Metadata includes `order_id` and `user_id` for reconciliation

### 8.2 ActiveCampaign Integration

| Integration Point | Direction | Purpose | Implementation |
|-------------------|-----------|---------|----------------|
| Create/Update Contact | Outbound | Lead capture | `POST /api/3/contacts` with email, name, custom fields |
| Add Tags | Outbound | Segmentation | `POST /api/3/contactTags` with tag IDs |
| Add to Automation | Outbound | Trigger sequences | `POST /api/3/contactAutomations` |
| Create Custom Field | Outbound | Store persona/quiz data | `POST /api/3/fields` |
| Webhook: Contact Updated | Inbound | Sync status changes | Edge Function handler |

**ActiveCampaign Tags Structure:**
```
Lead Source Tags:
  quiz_lead, blog_lead, book_lead, free_resource_lead, webinar_lead, newsletter_lead

Persona Tags:
  persona_sara, persona_hana, persona_tala, persona_reem

Interest Tags:
  interest_femininity, interest_healing, interest_relationships, interest_community

Customer Tags:
  customer, course_relationships, course_royal_feminine, course_mother_wound,
  course_community, course_royal_journey

Behavior Tags:
  course_50_percent, course_completed, testimonial_submitted, referred_friend
```

**Automation Sequences:**
```
1. quiz_sara_nurture (5 emails → pitch $555)
2. quiz_hana_nurture (5 emails → pitch Mother Wound / $1,111)
3. quiz_tala_nurture (5 emails → pitch $6,800 community)
4. quiz_reem_nurture (3 emails → pitch $15,000 application)
5. mini_course_delivery (3 lessons + 2 pitch emails)
6. book_chapter_nurture (5 emails → pitch book → pitch course)
7. welcome_sequence (5 emails for all new subscribers)
8. cart_abandonment (3 emails: 1hr, 24hr, 48hr)
9. post_purchase_onboarding (5 emails over 7 days)
10. course_completion_upsell (3 emails → pitch next tier)
```

### 8.3 Vimeo Pro Integration

| Integration Point | Direction | Purpose | Implementation |
|-------------------|-----------|---------|----------------|
| Get Video | Outbound | Fetch video metadata | `GET /videos/{id}` |
| Generate Signed URL | Outbound | Secure video access | Vimeo privacy settings + domain restriction |
| Get Thumbnails | Outbound | Course thumbnails | `GET /videos/{id}/pictures` |

**Security Model:**
- Videos set to "Hide from Vimeo" (unlisted)
- Domain restriction: only `femininequeensawakening.com`
- No download button enabled
- Signed embed URLs with expiration

### 8.4 Calendly Integration

| Integration Point | Direction | Purpose | Implementation |
|-------------------|-----------|---------|----------------|
| Get Scheduling Link | Outbound | Embed booking | `GET /scheduling_links` for clarity call type |
| Webhook: invitee.created | Inbound | Call booked | Edge Function → update application status |
| Webhook: invitee.canceled | Inbound | Call cancelled | Edge Function → update status → re-engagement |

### 8.5 Google Analytics 4 Integration

| Event | Trigger | Parameters |
|-------|---------|-----------|
| `page_view` | Every page load | page_path, page_title, user_id (if logged in) |
| `quiz_start` | Quiz started | — |
| `quiz_complete` | Quiz completed | persona, recommended_program |
| `email_capture` | Email submitted | source, lead_magnet |
| `view_program` | Program page viewed | program_slug, program_price |
| `begin_checkout` | Checkout initiated | items, value, currency |
| `purchase` | Payment completed | transaction_id, value, items |
| `application_submit` | Application submitted | program_slug |
| `lesson_view` | Lesson opened | course_slug, lesson_id |
| `course_complete` | Course finished | course_slug |

---

## 9. Scalability Considerations

### 9.1 Current Scale Estimates (Year 1)

| Metric | Estimate |
|--------|---------|
| Monthly visitors | 10,000–25,000 |
| Registered users | 5,000 |
| Active students | 500–1,000 |
| Concurrent users (peak) | 200–500 |
| Monthly API requests | 500,000–1,000,000 |
| Database size | < 5 GB |
| File storage | < 50 GB |
| Video content | Hosted on Vimeo (no storage cost) |

### 9.2 Scalability Architecture Decisions

| Decision | Rationale | Scale Limit |
|----------|-----------|-------------|
| **Atoms Cloud Edge Functions** | Serverless = auto-scaling; no server management; pay-per-use | 100,000+ concurrent requests |
| **Next.js on Vercel** | Edge rendering; automatic scaling; global CDN | Millions of page views |
| **CloudFlare CDN** | Static asset caching; reduces origin load by 80%+ | Unlimited |
| **PostgreSQL (Atoms Cloud)** | Handles relational queries efficiently at this scale | 100,000+ rows per table easily |
| **Vimeo Pro** | Video streaming offloaded entirely; no bandwidth cost | Unlimited viewers |
| **ActiveCampaign** | Email delivery at scale; handles 100K+ contacts | 500K contacts on enterprise plan |

### 9.3 Performance Optimization Strategy

| Optimization | Implementation | Impact |
|-------------|---------------|--------|
| **SSR + ISR** | Static pages regenerated every 60s; dynamic pages SSR | Fast TTFB for public pages |
| **Image Optimization** | Next.js Image component; WebP format; lazy loading | 50%+ image size reduction |
| **Code Splitting** | Next.js automatic; dashboard loaded only when needed | Faster initial page load |
| **API Response Caching** | Cache course listings, blog posts, testimonials (60s TTL) | 80% fewer DB queries |
| **Database Indexing** | Indexes on all FK columns, slug fields, status fields | Sub-10ms query times |
| **CDN Caching** | Static assets cached at edge; 1-year cache headers | Near-zero latency for returning visitors |
| **Video Preloading** | Vimeo adaptive streaming; preload next lesson | Smooth video playback |
| **Bundle Size** | Tree-shaking; dynamic imports for heavy components | < 200KB initial JS bundle |

### 9.4 Future Scale Considerations

| Scenario | Trigger | Solution |
|----------|---------|---------|
| **10x traffic spike** (viral content) | Social media viral moment | CDN absorbs; Edge Functions auto-scale; Vercel auto-scales |
| **50,000+ email list** | Growth over 2 years | ActiveCampaign handles natively; may need plan upgrade |
| **1,000+ concurrent students** | Community program growth | Database connection pooling; read replicas if needed |
| **Multi-language** | English + French expansion | i18n framework already in Next.js; content model supports `_en` fields |
| **Mobile app** | User demand | API-first architecture means mobile app can consume same API |
| **Real-time community** | Live chat/discussions | Add WebSocket layer (Atoms Cloud real-time subscriptions) |

---

## 10. Unclear Aspects & Assumptions

### 10.1 Assumptions Made

| # | Assumption | Impact if Wrong | Mitigation |
|---|-----------|----------------|------------|
| 1 | **Mother Wound course price is ~$777** (not visible on current site) | Pricing page and payment plan calculations would be wrong | Confirm with Coach Randa before Phase 2 |
| 2 | **Course content (videos, PDFs) exists and is ready for migration** | Phase 4 timeline would extend significantly if content needs creation | Audit existing content in Phase 1 |
| 3 | **Arabic is the only language at launch** | If bilingual needed, doubles content creation effort | Design system supports RTL/LTR toggle; content model has `_en` fields |
| 4 | **Stripe is available in Coach Randa's country** | Would need alternative payment processor (Tap, HyperPay for MENA) | Verify Stripe availability; have Tap as backup |
| 5 | **Coach Randa handles clarity calls personally** | If delegated, need enrollment specialist training + script | Application form collects enough info for either scenario |
| 6 | **No existing email list or CRM data** | If WhatsApp contacts exist, need migration strategy | Build import tool in Phase 3 |
| 7 | **Video content is hosted on Vimeo or can be migrated** | If on other platforms, migration effort needed | Verify current video hosting in Phase 1 |
| 8 | **Target audience is primarily mobile (70%+)** | If desktop-heavy, some mobile-first decisions may be suboptimal | Analytics will confirm; responsive design covers both |

### 10.2 Open Questions Requiring Stakeholder Input

| # | Question | Required For | Blocking Phase |
|---|---------|-------------|---------------|
| 1 | What is the exact price of the Mother Wound Healing Course? | Pricing pages, payment plan setup | Phase 2 |
| 2 | Are there existing video recordings for all course modules? | LMS content migration planning | Phase 4 |
| 3 | What payment methods do Gulf-region customers prefer beyond Stripe? | Checkout implementation | Phase 2 |
| 4 | Is the Mother Wound course delivered as live cohorts or self-paced? | Enrollment flow and scheduling | Phase 2 |
| 5 | Does Coach Randa want to handle clarity calls or delegate? | Application funnel design | Phase 2 |
| 6 | Are there existing customer contacts (WhatsApp/email) to migrate? | Email list seeding | Phase 3 |
| 7 | What is the desired launch timeline — phased or all-at-once? | Implementation planning | Phase 1 |
| 8 | Should the platform support English at launch or Arabic only? | i18n implementation scope | Phase 1 |
| 9 | Are there legal/regulatory requirements for selling coaching in specific MENA countries? | Terms of service, checkout flow | Phase 1 |
| 10 | What analytics/tracking exists on current subdomains? | Baseline metrics for ROI measurement | Phase 1 |

### 10.3 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| **Stripe not available in coach's country** | Medium | High — blocks all payments | Research Tap/HyperPay as alternatives; design payment service as adapter pattern |
| **Vimeo video security bypassed** | Low | Medium — content piracy | Domain restriction + signed URLs + no download; accept some risk as industry standard |
| **ActiveCampaign Arabic email rendering** | Low | Medium — broken emails | Test Arabic templates thoroughly; use inline CSS; test across email clients |
| **RTL layout bugs in Shadcn/ui** | Medium | Medium — visual issues | Build RTL test suite; test every component in RTL mode; allocate 20% extra time for RTL fixes |
| **Course content not ready for migration** | Medium | High — delays Phase 4 | Audit content availability in Phase 1; create content creation plan if needed |
| **High-ticket conversion lower than projected** | Medium | Medium — revenue impact | A/B test application funnel; optimize clarity call script; add webinar funnel as alternative |

---

## Appendix A: API Endpoint Reference

### Authentication

| Method | Endpoint | Auth | Description |
|--------|---------|------|-------------|
| POST | `/api/auth/register` | Public | Register new user |
| POST | `/api/auth/login` | Public | Login and get JWT |
| POST | `/api/auth/logout` | Auth | Invalidate session |
| POST | `/api/auth/reset-password` | Public | Request password reset |
| POST | `/api/auth/refresh` | Auth | Refresh access token |

### Users

| Method | Endpoint | Auth | Description |
|--------|---------|------|-------------|
| GET | `/api/users/me` | Auth | Get current user |
| PUT | `/api/users/me` | Auth | Update current user |
| GET | `/api/users/me/profile` | Auth | Get user profile |
| PUT | `/api/users/me/profile` | Auth | Update user profile |
| POST | `/api/users/me/avatar` | Auth | Upload avatar |

### Courses

| Method | Endpoint | Auth | Description |
|--------|---------|------|-------------|
| GET | `/api/courses` | Public | List published courses |
| GET | `/api/courses/{slug}` | Public | Get course details |
| GET | `/api/courses/{slug}/modules` | Public | Get course with modules (curriculum) |
| GET | `/api/courses/{slug}/lessons/{id}` | Auth | Get lesson content (enrolled only) |
| GET | `/api/courses/{slug}/lessons/{id}/resources` | Auth | Get lesson resources |

### Enrollments

| Method | Endpoint | Auth | Description |
|--------|---------|------|-------------|
| GET | `/api/enrollments` | Auth | List user's enrollments |
| GET | `/api/enrollments/{id}` | Auth | Get enrollment details |
| GET | `/api/enrollments/{id}/progress` | Auth | Get course progress |
| PUT | `/api/enrollments/{id}/progress` | Auth | Update lesson progress |
| POST | `/api/enrollments/{id}/complete` | Auth | Mark course complete |
| GET | `/api/enrollments/{id}/certificate` | Auth | Get/generate certificate |

### Payments

| Method | Endpoint | Auth | Description |
|--------|---------|------|-------------|
| POST | `/api/payments/checkout` | Auth | Create checkout session |
| GET | `/api/payments/orders` | Auth | List user's orders |
| GET | `/api/payments/orders/{id}` | Auth | Get order details |
| GET | `/api/payments/orders/{id}/installments` | Auth | Get payment plan installments |
| POST | `/api/webhooks/stripe` | Webhook | Handle Stripe webhooks |
| POST | `/api/webhooks/paypal` | Webhook | Handle PayPal webhooks |

### Quiz

| Method | Endpoint | Auth | Description |
|--------|---------|------|-------------|
| POST | `/api/quiz/start` | Public | Start quiz session |
| POST | `/api/quiz/submit` | Public | Submit quiz answers |
| POST | `/api/quiz/save-lead` | Public | Save lead from quiz |

### Blog

| Method | Endpoint | Auth | Description |
|--------|---------|------|-------------|
| GET | `/api/blog/posts` | Public | List blog posts (paginated) |
| GET | `/api/blog/posts/{slug}` | Public | Get blog post |
| GET | `/api/blog/categories` | Public | List categories |
| GET | `/api/blog/search?q=` | Public | Search posts |

### Leads

| Method | Endpoint | Auth | Description |
|--------|---------|------|-------------|
| POST | `/api/leads/capture` | Public | Capture email lead |
| GET | `/api/leads/magnets/{slug}` | Public | Get lead magnet info |
| POST | `/api/leads/magnets/{slug}/download` | Public | Record download + get URL |

### Community

| Method | Endpoint | Auth | Description |
|--------|---------|------|-------------|
| GET | `/api/community/posts` | Auth | List community posts |
| POST | `/api/community/posts` | Auth | Create post |
| POST | `/api/community/posts/{id}/reply` | Auth | Reply to post |
| POST | `/api/community/posts/{id}/like` | Auth | Like/unlike post |
| GET | `/api/community/members` | Auth | List members |

### Applications

| Method | Endpoint | Auth | Description |
|--------|---------|------|-------------|
| POST | `/api/applications/submit` | Public | Submit application |
| GET | `/api/applications/{id}` | Auth | Get application status |
| POST | `/api/webhooks/calendly` | Webhook | Handle Calendly webhooks |

### Testimonials

| Method | Endpoint | Auth | Description |
|--------|---------|------|-------------|
| GET | `/api/testimonials` | Public | List testimonials |
| GET | `/api/testimonials/{id}` | Public | Get testimonial |

### Notifications

| Method | Endpoint | Auth | Description |
|--------|---------|------|-------------|
| GET | `/api/notifications` | Auth | List user notifications |
| PUT | `/api/notifications/{id}/read` | Auth | Mark as read |
| PUT | `/api/notifications/read-all` | Auth | Mark all as read |

### Bundles

| Method | Endpoint | Auth | Description |
|--------|---------|------|-------------|
| GET | `/api/bundles` | Public | List active bundles |
| GET | `/api/bundles/{slug}` | Public | Get bundle details |

---

## Appendix B: Design System Tokens

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#4A1A6B` | Royal Purple — headers, CTAs, brand |
| `--color-primary-light` | `#6B3FA0` | Hover states, secondary elements |
| `--color-accent` | `#D4AF37` | Gold — highlights, premium elements, icons |
| `--color-accent-light` | `#E8D48B` | Gold hover, subtle accents |
| `--color-secondary` | `#F5C6D0` | Soft Pink — backgrounds, cards, feminine elements |
| `--color-secondary-light` | `#FDE8ED` | Light pink backgrounds |
| `--color-bg` | `#FFF8F0` | Cream White — page backgrounds |
| `--color-bg-card` | `#FFFFFF` | White — card backgrounds |
| `--color-text` | `#2D2D2D` | Dark Charcoal — body text |
| `--color-text-secondary` | `#6B6B6B` | Gray — secondary text |
| `--color-text-muted` | `#9B9B9B` | Light gray — muted text |
| `--color-success` | `#4CAF50` | Green — progress, checkmarks |
| `--color-warning` | `#FF9800` | Orange — warnings, attention |
| `--color-error` | `#E53935` | Red — errors, urgency |
| `--color-border` | `#E8E0D8` | Warm gray — borders |

### Typography

| Token | Font | Size | Weight | Line Height | Usage |
|-------|------|------|--------|-------------|-------|
| `--font-heading-ar` | Cairo | — | 700 | 1.4 | Arabic headings |
| `--font-body-ar` | Tajawal | — | 400 | 1.8 | Arabic body text |
| `--font-heading-en` | Playfair Display | — | 700 | 1.3 | English headings |
| `--font-body-en` | Inter | — | 400 | 1.6 | English body text |
| `--text-h1` | — | 48px (3rem) | 700 | 1.2 | Page titles |
| `--text-h2` | — | 36px (2.25rem) | 700 | 1.3 | Section headings |
| `--text-h3` | — | 24px (1.5rem) | 600 | 1.4 | Sub-section headings |
| `--text-h4` | — | 20px (1.25rem) | 600 | 1.4 | Card titles |
| `--text-body` | — | 16px (1rem) | 400 | 1.8 | Body text |
| `--text-body-lg` | — | 18px (1.125rem) | 400 | 1.8 | Lead text |
| `--text-small` | — | 14px (0.875rem) | 400 | 1.6 | Captions, labels |
| `--text-button` | — | 16px (1rem) | 600 | 1 | Button text |

### Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Tight spacing |
| `--space-sm` | 8px | Small gaps |
| `--space-md` | 16px | Standard spacing |
| `--space-lg` | 24px | Section internal spacing |
| `--space-xl` | 32px | Between components |
| `--space-2xl` | 48px | Between sections |
| `--space-3xl` | 64px | Major section gaps |
| `--space-4xl` | 80px | Page section padding |

### Breakpoints

| Token | Value | Usage |
|-------|-------|-------|
| `--bp-mobile` | 320px | Small mobile |
| `--bp-tablet` | 768px | Tablet |
| `--bp-desktop` | 1024px | Small desktop |
| `--bp-wide` | 1280px | Standard desktop |
| `--bp-ultra` | 1440px | Wide desktop |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Small elements |
| `--radius-md` | 8px | Buttons, inputs |
| `--radius-lg` | 12px | Cards |
| `--radius-xl` | 16px | Large cards, modals |
| `--radius-full` | 9999px | Pills, avatars |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle elevation |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | Cards |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.1)` | Floating elements |

---

*This system design document provides the complete technical blueprint for the Feminine Queens Awakening platform. It should be used alongside the PlantUML diagrams (`architect.plantuml`, `class_diagram.plantuml`, `sequence_diagram.plantuml`, `er_diagram.plantuml`, `ui_navigation.plantuml`) and the file tree (`file_tree.md`) for implementation.*

**— Bob, System Architect**