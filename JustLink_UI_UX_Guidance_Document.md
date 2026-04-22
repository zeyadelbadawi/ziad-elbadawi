# JustLink — Complete UI/UX Guidance Document
## Construction Project Management & Marketplace Platform — Saudi Arabia

**Document Version:** 1.0
**Date:** April 2026
**Purpose:** Full UI/UX specification of every page, section, component, and element required for the JustLink platform
**Note:** This document is a design blueprint only — no code, no implementation. It serves as a comprehensive reference for designers and developers.

---

## Table of Contents

1. Design Foundation & Principles
2. Global UI Elements & Navigation
3. Public Pages (Unauthenticated)
4. Authentication & Onboarding Pages
5. Property Owner Pages
6. Contractor Pages
7. Engineering Consultant Pages
8. Material Vendor Pages
9. Freelancer / Specialist Pages
10. Project Manager Pages
11. Cost Accountant Pages
12. Shared Project Pages (All Roles)
13. Marketplace Pages
14. RFQ & Quotation Pages
15. Contract Management Pages
16. Payment & Invoice Pages
17. Issue & Dispute Pages
18. Reviews & Ratings Pages
19. AI System Pages
20. Admin Panel Pages
21. Settings & Account Pages
22. Notification System
23. Mobile-Specific Considerations
24. Accessibility & RTL Requirements
25. Page-by-Page Summary Checklist

---

## 1. Design Foundation & Principles

### 1.1 Language & Direction
- **Primary language:** Arabic (RTL — Right-to-Left)
- **Secondary language:** English (LTR)
- All layouts must be natively RTL; not a mirrored LTR layout
- Seamless language toggle (Arabic / English) accessible from every page
- Bidirectional text support for mixed Arabic/English content (e.g., brand names, technical terms)
- User language preference saved and persisted

### 1.2 Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Primary | #2563EB | Trust, stability — buttons, links, active states |
| Secondary | #F97316 | Energy, action — CTAs, highlights, badges |
| Success | #10B981 | Completion, approval — status, confirmations |
| Warning | #F59E0B | Caution, attention — alerts, pending states |
| Error | #EF4444 | Problems, rejection — errors, critical alerts |
| Neutral-50 | #F9FAFB | Page backgrounds |
| Neutral-100 | #F3F4F6 | Card backgrounds, dividers |
| Neutral-300 | #D1D5DB | Borders, disabled states |
| Neutral-500 | #6B7280 | Secondary text |
| Neutral-700 | #374151 | Primary text (English) |
| Neutral-900 | #111827 | Headings, primary text (Arabic) |

### 1.3 Typography
| Element | Arabic Font | English Font | Size | Weight |
|---------|------------|--------------|------|--------|
| H1 | Tajawal / Cairo | Inter | 32px | Bold (700) |
| H2 | Tajawal / Cairo | Inter | 24px | Bold (700) |
| H3 | Tajawal / Cairo | Inter | 20px | Semi-bold (600) |
| H4 | Tajawal / Cairo | Inter | 18px | Semi-bold (600) |
| Body | Tajawal / Cairo | Inter | 16px mobile / 18px desktop | Regular (400) |
| Caption | Tajawal / Cairo | Inter | 14px | Regular (400) |
| Small | Tajawal / Cairo | Inter | 12px | Regular (400) |

Line height: 1.5-1.6 for all body text

### 1.4 Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64px
- Consistent spacing used across all pages

### 1.5 Iconography
- Icon set: Lucide Icons or Heroicons (RTL-aware)
- Sizes: 16px (inline), 20px (buttons), 24px (navigation), 32px (feature icons)
- All directional icons must flip for RTL (arrows, chevrons, progress indicators)

### 1.6 Component Library

| Component | Variants |
|-----------|----------|
| Button | Primary, Secondary, Outline, Text, Icon, Destructive, Loading |
| Input Field | Text, Number, Date, Select/Dropdown, Textarea, Search, Phone (with country code), File Upload |
| Card | Content card, Stat card, Profile card, Project card, Vendor card, Quotation card |
| Badge | Status badge, Verification badge, Rating badge, Count badge |
| Tag | Category tag, Skill tag, Removable tag |
| Avatar | User avatar (with initials fallback), Company logo |
| Modal / Dialog | Confirmation, Form, Information, Full-screen (mobile) |
| Toast / Snackbar | Success, Error, Warning, Info |
| Alert Banner | Inline alert, Page-level alert |
| Tabs | Horizontal tabs, Vertical tabs (desktop sidebar) |
| Breadcrumb | Hierarchical navigation trail |
| Pagination | Numbered, Load more, Infinite scroll |
| Table | Sortable, Filterable, Selectable rows, Responsive (card view on mobile) |
| Stepper / Wizard | Horizontal step indicator, Vertical step indicator |
| Progress Bar | Linear, Circular, Milestone-based |
| Tooltip | Hover/tap tooltip for additional info |
| Skeleton Loader | Content placeholder during loading |
| Empty State | Illustration + message + CTA for empty lists |
| Dropdown Menu | Action menu, Filter menu, User menu |
| Accordion / Collapsible | FAQ, Section expand/collapse |
| Timeline | Activity timeline, Project timeline |
| Chart | Bar, Line, Pie/Donut, Gantt |
| Star Rating | 1-5 stars, half-star support |
| File Uploader | Drag-and-drop, Camera capture (mobile), Multi-file |
| Date Picker | Single date, Date range, Hijri/Gregorian toggle |
| Map | Location picker, Project location display |

### 1.7 Core UX Principles
1. **Simplicity:** One primary action per screen; progressive disclosure of complexity
2. **Step-by-Step Guidance:** Wizard-style flows for complex processes with clear progress indicators
3. **Visual Communication:** Icons, color coding, charts, and photos to support text
4. **Immediate Feedback:** Success/error messages, loading states, confirmation dialogs
5. **Mobile-First:** Designed for mobile screens first, enhanced for desktop
6. **Contextual Help:** AI assistant and tooltips available on every page
7. **Trust Signals:** Verification badges, ratings, reviews visible throughout

---

## 2. Global UI Elements & Navigation

### 2.1 Top Navigation Bar (All Pages)

**Desktop:**
- **Left side (RTL: right side):** JustLink logo (clickable to home)
- **Center:** Global search bar (placeholder: "Search contractors, materials, projects...")
- **Right side (RTL: left side):**
  - Language toggle
  - Notification bell icon with unread count badge
  - AI Assistant icon (chat bubble)
  - User avatar dropdown menu:
    - Profile name and role
    - My Profile
    - My Projects
    - Settings
    - Help & Support
    - Logout

**Mobile:**
- **Top bar:** Logo | Search icon | Notification bell | User avatar
- **Bottom navigation bar (5 tabs):**
  - Home / Dashboard
  - Projects
  - Marketplace
  - Messages
  - More (Profile, Settings, Help, Logout)

### 2.2 Sidebar Navigation (Desktop — Authenticated Users)
Collapsible sidebar with role-specific menu items:

**Common items (all roles):**
- Dashboard (home icon)
- My Projects (folder icon)
- Messages (chat icon)
- Notifications (bell icon)
- Settings (gear icon)
- Help & Support (question mark icon)

Role-specific items added below common items (detailed per role in sections 5-11)

### 2.3 Footer (Public Pages)
- **Column 1:** JustLink logo + tagline + brief description
- **Column 2:** Quick Links — Home, About, How It Works, Pricing, Blog, Contact
- **Column 3:** For Users — Property Owners, Contractors, Engineers, Vendors, Freelancers
- **Column 4:** Legal — Terms of Service, Privacy Policy, Cookie Policy, Disclaimer
- **Column 5:** Social Media Icons — Twitter/X, Instagram, LinkedIn, TikTok, Snapchat, YouTube
- **Bottom bar:** Copyright 2026 JustLink | Language toggle | Saudi Arabia flag

### 2.4 AI Assistant Widget (Global — All Pages)
- **Floating chat bubble** in bottom-left corner (RTL: bottom-right)
- **Collapsed state:** Chat icon with pulsing dot for proactive tips
- **Expanded state:**
  - Chat header: "JustLink Smart Assistant"
  - Conversation area with message bubbles
  - Quick action suggestion chips (contextual to current page)
  - Text input field with send button
  - Voice input button (microphone icon)
  - Minimize / Close buttons
  - "Was this helpful?" feedback (thumbs up/down) after each response
- **Behavior:** Context-aware — knows user role, current page, project stage
- **Proactive triggers:** Offers help when user appears stuck (e.g., idle on a form for 30+ seconds)

### 2.5 Global Search
- **Search bar** with autocomplete suggestions
- **Categories in results:** Projects, Contractors, Vendors, Materials, Services, Help Articles
- **Filters:** Category, Location, Rating, Price Range, Verification Status
- **Recent searches** shown on focus
- **Trending searches** shown when empty

---

## 3. Public Pages (Unauthenticated)

### 3.1 Landing Page / Home Page

**Hero Section:**
- Full-width hero image/illustration (construction site or happy property owner)
- Main headline (Arabic): Your trusted partner for successful construction projects
- Sub-headline: Brief value proposition (2 lines max)
- Two CTAs: "Start Your Project" — Primary | "I'm a Contractor/Vendor" — Secondary
- Trust indicators below hero: "5,000+ Property Owners" | "1,000+ Contractors" | "300+ Vendors" (with animated counters)

**How It Works Section:**
- 4-step visual process (icons + short descriptions):
  1. Create your project
  2. Compare offers
  3. Monitor execution
  4. Receive your project
- Each step has an icon, title, and 1-line description

**Key Features Section:**
- 6 feature cards in a 3x2 grid (2x3 on mobile):
  1. Project Management — icon + description
  2. Materials & Services Marketplace — icon + description
  3. AI Smart Assistant — icon + description
  4. Transparent Pricing — icon + description
  5. Digital Contracts — icon + description
  6. Verified Reviews — icon + description

**For Different Users Section:**
- Tab-based or card-based layout:
  - For Property Owners — benefits list
  - For Contractors — benefits list
  - For Vendors — benefits list
  - For Engineers — benefits list
- Each tab shows relevant illustration + 4-5 bullet benefits + CTA

**Testimonials / Success Stories Section:**
- Carousel of testimonial cards:
  - User photo/avatar
  - Name and role
  - Star rating
  - Quote text
  - Project type and location

**Statistics Section:**
- Key platform statistics in large numbers:
  - Total projects completed
  - Total transaction volume (SAR)
  - Average user satisfaction
  - Cities covered

**Partners / Trust Section:**
- Logos of partners, associations, or media mentions
- "Trusted by" heading

**CTA Section:**
- Full-width banner: "Start your project today for free"
- Registration CTA button

**Footer** (as described in 2.3)

### 3.2 About Us Page
- Hero with company mission statement
- Our Story — brief company history and founding motivation
- Our Vision — transforming Saudi construction industry
- Our Values — 4-6 value cards (Transparency, Trust, Innovation, Simplicity, Quality, Community)
- The Team — team member cards (photo, name, title, brief bio)
- Vision 2030 Alignment — how JustLink supports Saudi Vision 2030
- Contact Information — office address, email, phone
- CTA: Join JustLink

### 3.3 How It Works Page
- Hero: "How does JustLink work?"
- Separate detailed flows for each user type:

**For Property Owners (detailed 6-phase visual flow):**
- Phase 1: Discovery & Onboarding (Steps 1-5)
- Phase 2: Project Definition (Steps 6-13)
- Phase 3: Matching & Selection (Steps 14-22)
- Phase 4: Planning & Contracting (Steps 23-28)
- Phase 5: Execution & Monitoring (Steps 29-35)
- Phase 6: Completion & Handover (Steps 36-41)
- Each phase shown as an expandable accordion with step details, illustrations, and what to expect

**For Contractors:**
- Sign up > Get verified > Receive leads > Submit proposals > Win projects > Manage & deliver > Get paid > Build reputation

**For Vendors:**
- Sign up > List products > Receive RFQs > Submit quotes > Win orders > Deliver > Get paid > Build reputation

**For Engineers:**
- Sign up > Get verified > Get assigned to projects > Conduct inspections > Approve milestones > Build reputation

- Interactive timeline or scroll-based animation showing the journey
- FAQ section at the bottom

### 3.4 Pricing Page
- Hero: "Clear and transparent pricing"
- Pricing toggle: Monthly / Annual (with annual discount highlight)

**For Property Owners:**
- Two plan cards side by side:
  - **Free:** Features list with checkmarks/crosses
  - **Premium — SAR 99/month or SAR 999/year:** Features list with all checkmarks + "Most Popular" badge

**For Contractors:**
- Three plan cards:
  - **Starter — SAR 299/month**
  - **Professional — SAR 699/month** — "Most Popular" badge
  - **Business — SAR 1,499/month**

**For Vendors:**
- Three plan cards:
  - **Basic — SAR 199/month**
  - **Premium — SAR 499/month** — "Most Popular" badge
  - **Enterprise — Custom pricing**

- Feature comparison table below cards (expandable)
- Commission rates explanation section
- FAQ about pricing
- CTA: "Start for free"

### 3.5 Blog / Resources Page
- Hero: "JustLink Blog"
- Category filter tabs: All, Construction Tips, Market Insights, Platform Updates, Guides, Success Stories
- Blog post grid (cards):
  - Featured image
  - Category tag
  - Title
  - Excerpt (2 lines)
  - Author name and avatar
  - Date
  - Read time
- Pagination or "Load more" button
- Sidebar (desktop): Popular posts, Categories, Newsletter signup

### 3.6 Blog Post Detail Page
- Hero image (full-width)
- Title (H1)
- Author info (avatar, name, date, read time)
- Share buttons (Twitter, LinkedIn, WhatsApp, Copy link)
- Article body (rich text with headings, images, lists, quotes)
- Related posts section at bottom
- CTA banner: "Do you have a construction project?"

### 3.7 Contact Us Page
- Hero: "Contact Us"
- Contact form:
  - Name (text input)
  - Email (email input)
  - Phone (phone input with country code)
  - Subject (dropdown: General, Support, Partnership, Media, Other)
  - Message (textarea)
  - Submit button
- Contact information cards:
  - Email address
  - Phone number
  - Office address
  - Working hours
- Embedded map showing office location
- Social media links

### 3.8 FAQ Page
- Hero: "Frequently Asked Questions"
- Category tabs: General, Property Owners, Contractors, Vendors, Payments, Technical
- Accordion-style Q&A items per category
- Search bar for FAQs
- "Didn't find your answer?" > Contact support CTA

### 3.9 Terms of Service Page
- Full legal text with table of contents sidebar
- Sections: Introduction, Definitions, Account Terms, Platform Usage, Payments, Intellectual Property, Liability, Dispute Resolution, Governing Law, Changes, Contact

### 3.10 Privacy Policy Page
- Full legal text with table of contents sidebar
- Sections: Data Collection, Data Usage, Data Sharing, Data Security, User Rights, Cookies, Third Parties, Children's Privacy, Changes, Contact
- SDAIA compliance notice

### 3.11 Vendor/Contractor Public Profile Page (Viewable Without Login)
- Company/individual name and logo
- Verification badges
- Overall rating (stars + number of reviews)
- Brief description / bio
- Specializations / categories
- Service areas (map)
- Portfolio gallery (project photos)
- Reviews summary (latest 3 reviews)
- CTA: "Register to contact" — prompts login/signup

---

## 4. Authentication & Onboarding Pages

### 4.1 Registration Page
**Layout:** Centered card on branded background

**Step 1 — User Type Selection:**
- "I am a..."
- Visual cards (icon + label) for each user type:
  - Property Owner
  - Contractor
  - Engineer / Consultant
  - Material Vendor
  - Freelancer / Specialist
  - Project Manager
  - Cost Accountant
- "Next" button

**Step 2 — Account Details:**
- Full name (text input)
- Mobile number (phone input with +966 prefix)
- Email (optional, email input)
- Password (password input with strength indicator)
- Confirm password
- Checkbox: "I agree to Terms and Privacy Policy" — with links
- "Create Account" button
- Divider: "Or"
- Social login buttons: Google, Apple
- Link: "Already have an account? Log in"

**Step 3 — OTP Verification:**
- "Enter verification code"
- 4-6 digit OTP input fields
- Timer: "Resend code in 00:30"
- "Verify" button
- "Change mobile number" link

### 4.2 Login Page
**Layout:** Centered card on branded background
- JustLink logo
- "Log In" heading
- Mobile number or email input
- Password input (with show/hide toggle)
- "Forgot password?" link
- "Log In" button
- Divider: "Or"
- Social login buttons: Google, Apple
- Link: "Don't have an account? Register now"

### 4.3 Forgot Password Page
- "Reset Password" heading
- Mobile number or email input
- "Send verification code" button
- OTP verification step
- New password + confirm password step
- Success message with "Log In" link

### 4.4 Onboarding / Guided Tour (Post-Registration)
**Shown once after first login — role-specific:**

**Property Owner Onboarding (4 screens):**
1. Welcome screen: "Welcome [Name]!" — brief intro to JustLink + AI assistant introduction
2. "How we help you" — 3 key benefits with illustrations
3. "Complete your profile" — prompt to add location, photo
4. "Start your first project" — CTA to create project

**Contractor Onboarding (4 screens):**
1. Welcome + intro
2. Key benefits (leads, tools, reputation)
3. Complete profile + verification prompt
4. Browse available projects CTA

**Vendor Onboarding (4 screens):**
1. Welcome + intro
2. Key benefits (reach buyers, manage orders)
3. Complete profile + add products prompt
4. Start receiving RFQs CTA

**Engineer Onboarding (4 screens):**
1. Welcome + intro
2. Key benefits (manage inspections, build reputation)
3. Complete profile + credentials verification prompt
4. Browse projects CTA

- Each screen: illustration + heading + description + "Next" / "Skip" buttons
- Progress dots at bottom
- Can be dismissed and accessed later from Help

---

## 5. Property Owner Pages

### 5.1 Owner Dashboard
**Layout:** Full-width with sidebar (desktop) / bottom nav (mobile)

**Top Section:**
- Greeting: "Welcome [Name]" with time-of-day greeting
- Quick stats row (4 stat cards):
  - Active projects count
  - Pending approvals count
  - Total spent (SAR)
  - Upcoming milestones count

**Active Projects Section:**
- Project cards (if projects exist):
  - Project name
  - Project type tag
  - Status badge (color-coded)
  - Progress bar (% complete)
  - Next milestone name and date
  - Budget: spent / total
  - Last update timestamp
  - Quick actions: View, Message contractor
- Empty state (if no projects): Illustration + "Start your first project" CTA

**Pending Actions Section:**
- List of items requiring owner action:
  - Approve milestone payment
  - Review proposal
  - Approve change order
  - Approve material purchase
  - Sign contract
- Each item: icon, description, project name, urgency indicator, action button

**Recent Activity Feed:**
- Timeline of recent events across all projects:
  - Progress updates
  - Messages received
  - Documents uploaded
  - Payments processed
  - Issues raised
- Each item: timestamp, icon, description, project link

**AI Assistant Suggestions:**
- Contextual tips card: "Smart Assistant Tip"
- Proactive suggestions based on project state

**Quick Actions Bar:**
- "Create New Project" button
- "Find a Contractor" button
- "Browse Materials" button

### 5.2 Owner — My Projects List
**Layout:** List/Grid toggle view

**Filters:**
- Status filter (All, Active, Completed, Draft, Cancelled)
- Sort by (Date created, Last updated, Budget, Progress)

**Project Cards (list or grid):**
- Project thumbnail (main photo or placeholder)
- Project name
- Type tag
- Status badge
- Progress percentage
- Location
- Budget summary
- Contractor name (if assigned)
- Last update date
- Quick actions: View, Edit (if draft), Archive

**Empty state:** Illustration + "No projects yet" + Create project CTA

### 5.3 Owner — Create Project Wizard
**Multi-step wizard with horizontal stepper showing progress:**

**Step 1: Project Type**
- "What type is your project?"
- Visual cards for project types:
  - Apartment Finishing
  - Villa Construction
  - Renovation / Remodeling
  - Commercial Fit-out
  - Other (with text input)
- Each card: icon, title, brief description
- "Next" button

**Step 2: Property Details**
- Location: Map picker + address input (Google Maps integration)
- City dropdown
- District / neighborhood
- Property size (sqm) — number input
- Number of rooms (if applicable)
- Current state dropdown: Shell, Semi-finished, Renovation
- Property type: Apartment, Villa, Floor, Commercial, Other
- "Next" / "Previous" buttons

**Step 3: Photos & Documents**
- "Add property photos"
- Drag-and-drop upload area / camera button (mobile)
- Photo thumbnails with delete option
- "Add floor plans" — optional
- File upload for plans (PDF, images)
- Tips: "Clear photos help contractors submit accurate proposals"
- "Next" / "Previous" buttons

**Step 4: Management Model**
- "How do you want to manage your project?"
- Three option cards with detailed comparison:
  - **Self-Managed:**
    - Icon, description
    - Pros: Full control, lower cost
    - Cons: Requires experience, more responsibility
    - Warning badge: "Requires experience"
  - **Engineer/Company Managed:**
    - Icon, description
    - Pros: Professional oversight, quality assurance
    - Cons: Additional cost
    - Recommended badge: "Most common"
  - **Platform-Managed:**
    - Icon, description
    - Pros: Full service, peace of mind
    - Cons: Premium pricing
    - Premium badge: "Full service"
- AI recommendation callout based on project complexity
- "Next" / "Previous" buttons

**Step 5: Budget**
- "What is your expected budget?"
- Options:
  - Specific amount input (SAR)
  - Budget range slider (SAR 50,000 — SAR 2,000,000+)
  - "I don't know, I want an expert estimate"
- AI pricing insight: "Similar projects range between SAR X — SAR Y"
- Contingency recommendation: "We recommend adding 10-15% contingency"
- "Next" / "Previous" buttons

**Step 6: Scope & Requirements**
- "What are your requirements?"
- Structured checklist by category:
  - **Electrical:** checkboxes for common items
  - **Plumbing:** checkboxes
  - **Painting:** checkboxes
  - **Flooring:** checkboxes with material type selection
  - **Kitchen:** checkboxes
  - **Bathrooms:** checkboxes
  - **HVAC:** checkboxes
  - **Other:** free text
- Quality level selection: Standard, Mid-range, Premium
- Timeline preference: Flexible, Within 3 months, Within 6 months, Urgent
- Special requirements textarea
- "Next" / "Previous" buttons

**Step 7: Review & Submit**
- Complete project summary showing all entered data:
  - Project type
  - Property details
  - Photos (thumbnail gallery)
  - Management model
  - Budget
  - Requirements summary
  - Timeline
- Edit links next to each section (jump back to that step)
- Terms agreement checkbox
- "Submit Project Request" — Primary CTA
- "Save as Draft" — Secondary action
- Confirmation dialog: "Are you sure you want to submit?"

**Post-Submission Confirmation Page:**
- Success illustration
- "Your request was submitted successfully!"
- "What happens next?" — 3-step explanation:
  1. Request review — 24-48 hours
  2. Matching with contractors
  3. Receiving proposals
- "Back to Dashboard" button
- "Create Another Project" link

### 5.4 Owner — Project Detail Page
**Layout:** Tabbed interface within project context

**Project Header (persistent across all tabs):**
- Project name (editable if draft)
- Status badge (color-coded)
- Project type tag
- Location
- Progress bar with percentage
- Key dates: Start date, Expected completion
- Budget summary: Spent / Total (with visual bar)
- Quick actions: Message, Report Issue, AI Assistant

**Tabs:**

**Tab 1: Overview**
- Project summary card (type, size, location, management model)
- Stakeholders section:
  - Owner (you) — avatar, name
  - Contractor — avatar, name, rating, contact button
  - Engineer — avatar, name, rating, contact button
  - Other stakeholders
- Timeline visualization (horizontal milestone timeline)
- Current phase highlight
- Next milestone card (name, date, description, countdown)
- Recent activity feed (last 10 items)
- AI insights card: risk alerts, recommendations

**Tab 2: Progress**
- Milestone list with status indicators:
  - Not started
  - In progress
  - Completed
  - Failed inspection
- Each milestone expandable:
  - Description
  - Planned vs. actual dates
  - Payment amount
  - Inspection status
  - Photos
  - Sub-tasks
- Daily progress log:
  - Date
  - Description
  - Photos (gallery)
  - Workers on site count
  - Weather conditions
  - Contractor notes
- Progress photos gallery (filterable by date, milestone)
- Before/after comparison viewer (slider)

**Tab 3: Budget & Payments**
- Budget overview:
  - Total budget
  - Spent to date
  - Remaining
  - Contingency used
  - Visual donut chart
- Budget breakdown by category (bar chart):
  - Labor, Materials, Equipment, Permits, Contingency, Other
- Payment milestones table:
  - Milestone name, Amount, Status (Pending, Approved, Paid), Date, Action (Approve / View receipt)
- Transaction history (all payments made)
- Invoices list
- Change orders and their financial impact

**Tab 4: Documents**
- Document categories (folder structure):
  - Contracts
  - Drawings & Plans
  - Permits & Approvals
  - Inspection Reports
  - Invoices & Receipts
  - Photos & Videos
  - Correspondence
  - Other
- Each document: name, type icon, date, uploaded by, size
- Actions: View, Download, Share
- Upload button for owner documents
- Search within documents

**Tab 5: Communication**
- Project chat room (all stakeholders)
- Direct message threads (1-on-1 with contractor, engineer, etc.)
- Message types: Text, Photo, File, Voice note
- @mention support
- Message search
- Pin important messages

**Tab 6: Issues**
- Issue list with filters (status, priority, type)
- Each issue card:
  - Title, Type tag, Priority badge, Status, Assigned to, Date raised
- Create new issue button
- Issue detail view (see Section 17)

**Tab 7: RFQs & Orders**
- Active RFQs list
- Quotations received
- Purchase orders
- Delivery tracking
- (Detailed in Section 14)

**Tab 8: Contracts**
- Active contracts list
- Contract status
- Key dates
- (Detailed in Section 15)

### 5.5 Owner — Provider Review Page (During Matching Phase)
**Layout:** Card-based comparison view

**Interested Providers List:**
- Provider cards:
  - Company/individual name
  - Avatar/logo
  - Verification badge level
  - Overall rating (stars + count)
  - Specializations tags
  - Years of experience
  - Projects completed count
  - Location / service area
  - Brief description
  - "View Profile" button
  - "Schedule Visit" button
  - "Decline" button

**Comparison Mode:**
- Select 2-3 providers to compare
- Side-by-side comparison table:
  - Rating, Experience, Projects completed, Price range, Specializations, Verification level, Response time, Reviews summary

**AI Recommendation Card:**
- "AI Recommendation"
- Top recommended provider with reasoning
- Risk flags if any

### 5.6 Owner — Proposal Comparison Page
**Layout:** Side-by-side comparison

**Proposals Received:**
- Proposal cards (expandable):
  - Contractor name and rating
  - Total price (SAR)
  - Timeline (days/months)
  - Payment schedule summary
  - Scope coverage (% of requirements met)
  - "View Details" button

**Comparison Table:**
- Columns: one per proposal
- Rows: Total price, Price per sqm, Timeline, Payment terms, Scope items (checklist), Warranty period, Team size, Contractor rating, Past similar projects

**AI Analysis Section:**
- Price fairness indicator per proposal (below/at/above market)
- Risk flags
- Best value recommendation with reasoning
- "Ask AI Assistant" for more analysis

**Actions:**
- "Select this contractor" button per proposal
- "Request proposal revision" button
- "Decline proposal" button

### 5.7 Owner Sidebar Navigation (Desktop)
- Dashboard
- My Projects
- Pending Approvals — with count badge
- Payments
- Messages — with unread count
- Marketplace
- AI Assistant
- Notifications
- Settings
- Help & Support

---

## 6. Contractor Pages

### 6.1 Contractor Dashboard
**Top Section:**
- Greeting + quick stats row:
  - Active projects count
  - New leads / opportunities count
  - Pending payments (SAR)
  - Average rating

**Opportunities Section:**
- "New Opportunities" — list of matched project leads:
  - Project type tag, Location, Budget range, Size (sqm), Management model, Posted date
  - "View Details" button
  - "Express Interest" button

**Active Projects Section:**
- Project cards (contractor perspective):
  - Project name, Owner name, Status, Progress %, Next task/milestone, Pending items
  - Quick actions: Update progress, View

**Financial Summary:**
- This month's earnings, Pending payments, Overdue payments
- Mini chart: monthly earnings trend

**Tasks Due Today:**
- List of tasks across all projects due today
- Priority indicators, Quick complete action

**Recent Activity Feed**

### 6.2 Contractor — Opportunities / Leads Page
**Layout:** Filterable list

**Filters:**
- Project type, Location / city, Budget range, Size range, Management model, Posted date

**Opportunity Cards:**
- Project type and title, Location, Property size, Budget range, Management model
- Number of interested contractors, Posted date
- Match score (AI-calculated fit percentage)
- "View Details" > Opportunity detail page
- "Express Interest" button

**Opportunity Detail Page:**
- Full project description, Property photos, Requirements checklist, Budget range, Timeline expectations
- Owner profile (basic — name, verification level)
- "Express Interest" CTA
- "Submit Proposal" CTA (if already expressed interest and approved)

### 6.3 Contractor — Create Proposal Page
**Multi-section form:**

**Section 1: Scope of Work**
- Structured scope items matching project requirements
- Each item: description, included (yes/no), notes
- Additional scope items (free text)
- Exclusions list

**Section 2: Budget Breakdown**
- Line items by category: Category name, Description, Quantity, Unit, Unit price, Total
- Categories: Labor, Materials, Equipment, Permits, Overhead, Profit
- Subtotal, Tax (VAT), Grand total
- Add line item button

**Section 3: Timeline**
- Project duration (days/months)
- Milestone definitions: Milestone name, Description, Duration, Dependencies, Payment percentage
- Gantt-style visual preview

**Section 4: Payment Schedule**
- Payment milestones linked to project milestones
- Amount per milestone
- Payment terms (net 7, net 14, net 30)

**Section 5: Terms & Conditions**
- Warranty period, Defect liability period, Insurance details, Special terms, Proposal validity period

**Section 6: Attachments**
- Upload supporting documents, Past project photos, Certifications, References

**Section 7: Review & Submit**
- Full proposal summary, Edit links per section
- "Submit Proposal" button
- "Save as Draft" button

### 6.4 Contractor — Project Management Page
**Same tabbed structure as Owner Project Detail (Section 5.4) but with contractor-specific actions:**

**Progress Tab (Contractor View):**
- "Update Progress" button > Daily log form:
  - Date, Work description, Photos (upload), Workers on site (number), Weather conditions, Issues encountered, Notes
- Milestone completion request button
- Sub-task management (create, assign, complete)

**Team Tab:**
- Subcontractor list: Name, specialization, contact, Assigned tasks, Performance rating, Status
- Add subcontractor button
- Worker attendance tracking

**Materials Tab:**
- Material requirements list, Create RFQ button, Active RFQs and quotations, Purchase orders, Delivery tracking, Inventory notes

**Financial Tab:**
- Payment requests submitted, Payment status tracking, Invoice management, Expense tracking, Profitability analysis

### 6.5 Contractor — My Proposals Page
- List of all submitted proposals
- Status: Draft, Submitted, Under Review, Accepted, Rejected, Withdrawn
- Filter by status
- Each proposal: project name, amount, date submitted, status
- Quick actions: View, Edit (if draft), Withdraw

### 6.6 Contractor Sidebar Navigation
- Dashboard
- Opportunities — with count badge
- My Projects
- My Proposals
- My Team
- Financials
- Messages
- Reviews
- My Profile
- Settings

---

## 7. Engineering Consultant Pages

### 7.1 Engineer Dashboard
**Quick Stats:**
- Projects under supervision, Upcoming inspections (this week), Pending approvals, Average rating

**Upcoming Inspections:**
- Calendar view (weekly) showing scheduled inspections
- Each inspection: project name, type, date/time, location
- Quick actions: View details, Reschedule

**Pending Approvals:**
- List of items awaiting engineer review:
  - Design approvals, Material approvals, Change order reviews, Milestone inspections
- Each item: project, type, submitted by, date, urgency

**Active Projects List** and **Recent Activity Feed**

### 7.2 Engineer — Inspection Management Page
**Layout:** Calendar + List view toggle

**Calendar View:**
- Monthly/weekly/daily calendar
- Inspection events color-coded by project

**List View:**
- Filterable list of all inspections
- Filters: Status (Scheduled, Completed, Cancelled), Project, Date range

**Schedule New Inspection:**
- Select project, Inspection type (milestone, routine, special), Date and time picker, Location, Checklist template selection, Notify parties toggle, Notes

### 7.3 Engineer — Inspection Execution Page
**Used on-site during inspection (mobile-optimized):**
- Inspection header: project name, type, date
- Checklist items:
  - Item description, Pass / Fail / N/A toggle, Notes field, Photo capture button, Severity if failed
- Overall result: Pass / Conditional Pass / Fail
- General notes textarea
- Deficiency list (auto-generated from failed items)
- Corrective actions required
- Digital signature (inspector)
- "Submit Report" button

### 7.4 Engineer — Approval Workflow Page
- Queue of items pending engineer approval
- Each item expandable: Type, Submitted by, Details and attachments, AI analysis
- Actions: Approve, Reject (with reason), Request revision
- Approval history log

### 7.5 Engineer Sidebar Navigation
- Dashboard, My Projects, Inspections, Approvals (with count badge), Reports, Messages, Reviews, My Profile, Settings

---

## 8. Material Vendor Pages

### 8.1 Vendor Dashboard
**Quick Stats:**
- Active RFQs received, Quotations submitted, Orders in progress, This month's revenue (SAR)

**New RFQs Section:**
- List of RFQs matching vendor's products/services
- Each RFQ: project info, items requested, deadline, location
- Quick actions: View, Submit quote

**Active Orders Section:**
- Order cards: order number, items, delivery date, status, amount

**Financial Summary:** Revenue this month, Pending payments, Mini chart

**Performance Metrics:** Response rate, Win rate, Average rating, On-time delivery rate

### 8.2 Vendor — Product Catalog Management Page
**Layout:** Grid/List view of products

**Product Card:**
- Product image, Name, Category, Price (or price range), Stock status, Rating
- Actions: Edit, Deactivate, Delete

**Add/Edit Product Form:**
- Product name (Arabic + English), Category (multi-level dropdown), Description (rich text)
- Specifications (key-value pairs), Images (multiple, drag to reorder)
- Pricing: Fixed price / Price range / "Contact for price"
- Unit of measurement, Minimum order quantity, Delivery time
- SASO certification upload, Tags/keywords, Status: Active / Inactive

**Bulk Operations:**
- Import products from CSV/Excel, Bulk edit prices, Bulk activate/deactivate

### 8.3 Vendor — RFQ Response Page
**RFQ Detail View:**
- RFQ information: project, requester, items, specs, deadline
- Attached documents

**Quotation Form:**
- Line items matching RFQ: Item name, Specification match, Quantity, Unit price, Total, Delivery time, Notes
- Subtotal, Tax, Grand total, Payment terms, Delivery terms, Validity period, Attachments
- "Submit Quotation" button

### 8.4 Vendor — Order Management Page
- Order list with filters (status, date, amount)
- Order statuses: New, Confirmed, Processing, Shipped, Delivered, Completed
- Each order expandable: Order details, Buyer info, Delivery address, Status update buttons, Delivery tracking, Invoice, Communication thread

### 8.5 Vendor Sidebar Navigation
- Dashboard, Product Catalog, RFQs (with count badge), My Quotations, Orders, Financials, Reviews, Messages, My Profile, Settings

---

## 9. Freelancer / Specialist Pages

### 9.1 Freelancer Dashboard
**Quick Stats:** Active jobs, New opportunities, This month's earnings, Average rating

**Available Jobs Section:**
- Job cards matching freelancer's skills: Job title, Project name, Location, Duration, Budget/rate, Required skills, Posted date, "Apply" button

**Active Jobs Section:** Current job cards with progress and next tasks

**Earnings Summary:** This month / last month comparison, Pending payments

### 9.2 Freelancer — Profile & Portfolio Page
- Personal info (name, photo, bio), Skills and specializations (tags)
- Certifications (uploaded documents with verification status)
- Portfolio gallery: Project photos, Before/after comparisons, Project descriptions, Client testimonials
- Service areas (map), Availability calendar, Hourly/daily rate, Reviews and ratings

### 9.3 Freelancer — Job Detail & Application Page
- Full job description, Requirements, Duration and timeline, Budget/rate, Location
- Application form: Cover message, Proposed rate, Availability dates, Relevant portfolio items
- "Submit Application" button

### 9.4 Freelancer Sidebar Navigation
- Dashboard, Opportunities, My Jobs, My Portfolio, Earnings, Reviews, Messages, Settings

---

## 10. Project Manager Pages

### 10.1 PM Dashboard
**Quick Stats:** Total projects managed, On-track / At-risk / Delayed counts, Pending decisions, Open issues count

**Portfolio Overview:**
- All projects at a glance (card grid or table):
  - Project name, status, progress %, health indicator (green/yellow/red)
  - Budget health, Schedule health, Open issues count, Next milestone

**Risk Alerts:**
- Projects with risk indicators: Risk type, severity, description, Recommended action

**Calendar:** Upcoming milestones, inspections, meetings across all projects

**Resource Allocation:** Team members and their project assignments, Workload indicators

### 10.2 PM — Multi-Project View
- Table view of all projects with sortable columns: Name, Status, Progress, Budget %, Schedule %, Issues, Risk level
- Filters: Status, Risk level, Date range
- Export to PDF/Excel

### 10.3 PM — Reporting Page
- Report templates: Weekly progress, Monthly summary, Budget variance, Risk assessment, Custom report builder
- Report generation: Select project(s), date range, sections to include
- Preview and download (PDF)
- Schedule automated reports

### 10.4 PM Sidebar Navigation
- Dashboard, Projects, Calendar, Risks, Issues, Reports, Resources, Messages, Settings

---

## 11. Cost Accountant Pages

### 11.1 Cost Accountant Dashboard
**Quick Stats:** Projects monitored, Total budget under management (SAR), Budget variance, Pending approvals count

**Budget Health Overview:**
- Projects with budget status: On budget (green), Warning (yellow), Over budget (red)
- Each: project name, budget, spent, remaining, variance %

**Pending Approvals:** Purchase orders, Invoices, Change orders

**Cost Alerts:** Items exceeding budget thresholds, Unusual spending patterns, AI-detected anomalies

### 11.2 Cost Accountant — Budget Tracking Page
- Select project
- Budget breakdown table: Category, Budgeted, Committed (POs), Spent (invoiced), Remaining, Variance, Variance %
- Visual charts: Budget vs. Actual (bar), Spending trend (line), Category distribution (pie)
- Forecast: Predicted final cost
- Export to Excel

### 11.3 Cost Accountant — Approval Queue Page
- List of items pending financial approval: Type, Project, Amount, Submitted by, Date, Budget impact analysis
- Actions: Approve, Reject (with reason), Request revision
- Batch approval

### 11.4 Cost Accountant — Cost Benchmarking Page
- Historical cost data by category, Price comparison across projects
- Market price references (from AI pricing engine)
- Cost per sqm analysis, Material price trends
- Filter by: Category, Location, Time period, Quality level

### 11.5 Cost Accountant Sidebar Navigation
- Dashboard, Projects, Budgets, Approvals (with count badge), Invoices, Purchase Orders, Benchmarking, Reports, Settings

---

## 12. Shared Project Pages (All Roles)

### 12.1 Project Activity Feed
- Chronological timeline of all project events
- Filter by: Activity type, User, Date range
- Each activity: timestamp, user avatar, description, attachments, project link

### 12.2 Project Timeline / Gantt Chart
- Interactive Gantt chart: Milestones, Tasks and sub-tasks, Dependencies (arrows), Critical path highlight, Baseline vs. actual, Today marker
- Zoom levels: Day, Week, Month
- Drag to adjust (for authorized roles)
- Export to PDF

### 12.3 Project Photo Gallery
- Grid view of all project photos
- Filter by: Date, Milestone, Uploader, Category
- Photo detail view: Full-size image, metadata, comments
- Before/after comparison slider
- Download individual or bulk

### 12.4 Project Calendar
- Calendar view: Milestones, Inspections, Meetings, Deadlines, Deliveries
- Month/week/day views
- Add event (for authorized roles)
- Sync with external calendar (Google, Apple)

### 12.5 Project Reports
- Auto-generated reports: Weekly progress, Monthly status, Budget report, Inspection summary
- Custom report builder
- Export: PDF, Excel
- Share via email or link

---

## 13. Marketplace Pages

### 13.1 Marketplace Home
**Hero Section:**
- Search bar (prominent): "Search for construction materials and services"

**Category Grid:**
- Visual category cards:
  - Building Materials, Electrical, Plumbing, Paint & Finishing, Flooring & Ceramics, Kitchens, HVAC, Doors & Windows, Equipment & Tools, Specialized Services
- Each card: icon/image, category name, item count

**Featured Vendors Section:** Carousel of featured vendor cards
**Popular Products Section:** Product cards: image, name, price, vendor, rating
**Recently Added:** Latest products/services

### 13.2 Category Listing Page
- Category name and description, Subcategory filter tabs
- Filters sidebar (desktop) / filter button (mobile):
  - Price range, Location, Vendor rating, Verification level, Delivery available, Brand
  - Sort by: Price, Rating, Newest, Most popular
- Product/Service grid: Image, Name, Price, Vendor name, Rating, Verified badge
- "View Details" and "Add to Compare" buttons
- Pagination

### 13.3 Product/Service Detail Page
- Image gallery (multiple images, zoom, fullscreen)
- Product name, Vendor name and logo (linked), Verification badge, Rating, Price
- Description (rich text), Specifications table, Certifications (SASO badges)
- Delivery information, Minimum order quantity, Available variants
- Actions: "Request Quote", "Contact Vendor", "Add to Favorites", "Add to Compare"
- Related products section, Vendor's other products section
- Reviews section: Average rating breakdown, Individual reviews, "Write Review" button

### 13.4 Vendor Profile Page (Full — Authenticated)
- Company header: Logo, Name, Verification badges, Rating, Member since, Response rate
- About section, Specializations (tags), Service areas (map)
- Certifications and licenses, Product catalog (grid), Portfolio (photo gallery)
- Reviews tab: Rating breakdown, Individual reviews
- Actions: "Contact", "Request Quote", "Follow"

### 13.5 Comparison Page
- Side-by-side comparison of 2-4 products/vendors
- Comparison criteria rows: Price, Rating, Specifications, Delivery time, Vendor rating, Certifications
- Highlight differences
- "Remove" and "Request Quote" per item

### 13.6 Favorites / Saved Items Page
- Grid of saved products, vendors, and services
- Filter by: Products, Vendors, Services
- Remove from favorites, Quick actions: View, Request quote

### 13.7 Contractor / Service Provider Search Page
- Search and filter: Specialization, Location, Rating, Verification level, Experience, Project size capability, Availability
- Contractor cards: Name, logo, rating, specializations, location, projects completed
- "View Profile" button

---

## 14. RFQ & Quotation Pages

### 14.1 Create RFQ Page
- RFQ title, Project selection, RFQ type: Material, Service, Equipment, Package
- Items table: Item name, Description/specs, Quantity, Unit, Quality standard, Notes, Add row
- Delivery location, Required delivery date, Payment terms preference, Attachments
- Vendor selection: "Send to all matching vendors" or "Select specific vendors"
- Submission deadline
- "Send RFQ" and "Save as Draft" buttons

### 14.2 RFQ Detail Page (Requester View)
- RFQ summary, Status, Vendors invited with response status
- Quotations received: Vendor name, total price, delivery time, status
- "Compare Quotations" button
- Timeline: RFQ created > Vendors notified > Deadline > Evaluation > Award

### 14.3 Quotation Comparison Page
- Side-by-side comparison table
- AI price fairness indicators
- Best value highlight
- Award button per quotation

### 14.4 RFQ List Page
- All RFQs with filters: Status, Project, Date, Type
- Each RFQ: title, project, items count, quotations received, deadline, status

---

## 15. Contract Management Pages

### 15.1 Contract List Page
- All contracts with filters: Status, Project, Type, Date
- Status badges: Draft, Under Review, Signed, Active, Completed, Terminated

### 15.2 Contract Creation Page (Wizard)
- Step 1: Select template
- Step 2: Auto-populate from project data
- Step 3: Customize terms and conditions
- Step 4: Add attachments
- Step 5: Review complete contract
- Step 6: Send for review

### 15.3 Contract Review Page
- Full contract document view (formatted, printable)
- Inline commenting (highlight text > add comment)
- Revision history (tracked changes)
- Approval/rejection actions per party
- Negotiation thread

### 15.4 Contract Signing Page
- Contract document (final version, read-only)
- Signing status per party
- Digital signature area: Draw, Type name, Upload image
- "Sign Contract" button
- Post-signing: Download signed copy, notification to all parties

### 15.5 Contract Detail Page
- Signed contract document (PDF viewer)
- Key information: Parties, Dates, Value, Payment schedule, Milestones
- Amendments list, Related documents
- Actions: Download, Share, Request amendment

---

## 16. Payment & Invoice Pages

### 16.1 Payments Overview Page
- Payment summary: Total paid, Pending, Upcoming, Overdue
- Payment schedule timeline (visual)
- Recent transactions list

### 16.2 Payment Milestone Page
- Milestone list with: Name, Amount, Due date, Inspection status, Approval status, Payment status
- Actions: View, Approve, Pay

### 16.3 Invoice List Page
- All invoices with filters: Status, Project, Date, Amount
- Status: Draft, Submitted, Under Review, Approved, Paid, Overdue, Disputed

### 16.4 Invoice Detail Page
- Invoice header: number, date, due date, status
- From/To information, Line items table, Subtotal, VAT, Grand total
- Payment terms, Attachments, Approval workflow status
- Actions: Approve, Reject, Pay, Download PDF, Print

### 16.5 Make Payment Page
- Invoice/milestone summary, Payment amount
- Payment method selection: Bank transfer, Credit/debit card, Digital wallet (Apple Pay, STC Pay), Mada card
- Payment confirmation dialog
- Receipt generation after payment

### 16.6 Transaction History Page
- Chronological list of all transactions
- Filters: Type, Date range, Project, Status
- Export to Excel/PDF

---

## 17. Issue & Dispute Pages

### 17.1 Issue List Page
- All issues with filters: Status, Priority, Type, Project, Assigned to
- Each issue card: title, type tag, priority badge, status, project, assigned to, date
- "Create New Issue" button

### 17.2 Create Issue Page
- Project selection, Issue title, Type (dropdown), Priority (dropdown)
- Description (rich text), Affected milestone/task, Photo/video evidence (upload)
- Assign to, Expected resolution date
- "Submit" button

### 17.3 Issue Detail Page
- Issue header: title, type, priority, status, dates
- Description and evidence
- Assigned to (with reassign option)
- Resolution timeline: Reported > Acknowledged > Root cause > Action plan > Implementation > Verification > Closed
- Discussion thread
- Escalation option

### 17.4 Dispute Filing Page
- Dispute type, Related project and contract, Description, Evidence upload, Requested resolution
- "File Dispute" button

### 17.5 Dispute Detail Page
- Dispute summary, Parties involved, Evidence from all parties
- Communication log, Mediation notes, Resolution status and outcome, Timeline

---

## 18. Reviews & Ratings Pages

### 18.1 Write Review Page (Post-Project)
- Reviewed party info
- Overall rating (1-5 stars)
- Category ratings: Quality of Work, Communication & Responsiveness, Timeliness, Pricing Fairness, Professionalism
- Would you recommend? (Yes/No)
- Written review (textarea, min 50 characters)
- Upload photos
- Pros and Cons (text inputs)
- "Publish Review" button

### 18.2 My Reviews Page
- Reviews I've written (with edit option within 24 hours)
- Reviews about me: Rating summary, Individual reviews with response option

### 18.3 Reviews Display (On Profiles)
- Average rating (large stars + number)
- Rating distribution (5-star bar chart)
- Total reviews count
- Filter by: Rating, Date, Category
- Sort by: Most recent, Highest, Lowest, Most helpful
- Individual review cards: Reviewer name/avatar, Date, Rating, Category ratings, Text, Photos, Helpful votes, Response

---

## 19. AI System Pages

### 19.1 AI Assistant Full Page (Expanded Chat)
- Full-screen chat interface
- Conversation history (scrollable)
- Message types: Text, Quick action cards, Information cards, Step-by-step guides, Comparison tables, Links
- Input area: text field + send + voice + attachment
- Conversation topics sidebar (desktop): Recent conversations, New conversation, Suggested topics

### 19.2 AI Pricing Intelligence Page
- "Pricing Intelligence" heading
- Search: Enter material/service name
- Price range display: Minimum, Average, Maximum, Per unit, Location-based
- Price trend chart (line chart over time)
- Price breakdown: Materials, Labor, Overhead
- Comparison with user's project pricing
- "Fair price" indicator
- Data source and confidence level
- Tips for cost savings

### 19.3 AI Risk Dashboard (Within Project)
- Overall project risk score (Low / Medium / High / Critical)
- Risk categories: Budget, Timeline, Quality, Vendor, Compliance
- Each risk expandable: Description, Evidence, Recommended actions, Trend
- Risk history chart
- "Take Action" buttons

### 19.4 AI Recommendations Page (Within Project)
- Vendor recommendations: Top 3 with reasoning, Match score, Strengths
- Material recommendations: Suggested materials, Price/quality trade-offs, Alternatives
- Budget recommendations: Suggested allocation, Cost-saving opportunities, Risk areas
- Timeline recommendations: Realistic estimate, Milestone suggestions, Potential bottlenecks

---

## 20. Admin Panel Pages

### 20.1 Admin Dashboard
**Key Metrics:** Total users (by type), Active projects, Transaction volume (SAR), Revenue (SAR), Pending verifications, Open disputes, Support tickets

**Charts:** User growth (line), Project volume (bar), Revenue trend (line), User distribution (pie)

**Alerts:** Critical issues, Fraud alerts, System health warnings

### 20.2 Admin — User Management Page
- User table: Name, Type, Email, Phone, Status, Verification Level, Joined Date, Last Active
- Filters: User type, Status, Verification level, Date range
- Search by name, email, phone
- Actions: View, Edit, Verify, Suspend, Ban, Delete
- Bulk actions

### 20.3 Admin — User Detail Page
- Full profile, Verification documents (view and approve/reject)
- Activity log, Projects, Transactions, Reviews, Support tickets, Admin notes
- Actions: Edit, Verify, Suspend, Ban, Reset password, Impersonate

### 20.4 Admin — Verification Queue Page
- Pending verification requests list
- Document viewer (inline)
- Actions: Approve, Reject (with reason), Request additional documents
- Batch approval

### 20.5 Admin — Project Management Page
- All projects table with admin controls
- Admin actions: Intervene, Assign PM, Flag, Close, Archive

### 20.6 Admin — Marketplace Management Page
- Vendor management, Product management, Category management
- Featured vendor management, Pricing monitoring

### 20.7 Admin — Financial Management Page
- Transaction overview, Commission tracking, Payout management
- Refund processing queue, Financial reports, Export to accounting systems

### 20.8 Admin — Dispute Management Page
- Active disputes list, Dispute detail view with admin tools
- Mediation tools, Resolution recording, Dispute analytics

### 20.9 Admin — Content Management Page
- Platform pages editor, Contract template management
- Email/SMS/Notification template management
- Announcement creation and scheduling
- Help article management (knowledge base)

### 20.10 Admin — Analytics & Reports Page
- Dashboard with customizable widgets
- Pre-built reports: User acquisition, Project funnel, Marketplace activity, Revenue, Feature usage, Geographic distribution
- Custom report builder
- Export: PDF, Excel, CSV
- Scheduled reports

### 20.11 Admin — Support Management Page
- Support ticket queue, Ticket detail view
- Canned responses library, Ticket assignment and escalation
- SLA tracking, Support analytics

### 20.12 Admin — System Settings Page
- Platform configuration: Commission rates, Subscription pricing, Feature flags, Notification settings, Payment gateway, SMS provider, Email, AI model configuration
- System health monitoring, Backup management, Audit logs

### 20.13 Admin Sidebar Navigation
- Dashboard
- Users (All Users, Verification Queue)
- Projects
- Marketplace (Vendors, Products, Categories)
- Financials (Transactions, Commissions, Payouts, Refunds)
- Disputes
- Content (Pages, Templates, Announcements, Knowledge Base)
- Analytics
- Support
- System Settings
- Audit Log

---

## 21. Settings & Account Pages

### 21.1 Profile Settings Page

**Personal Information:**
- Profile photo, Full name, Email, Mobile number, Location, Bio

**Business Information (Contractors, Vendors, Engineers):**
- Company name, Commercial registration number, Company logo, Business address, Website, Social media links

**Professional Information (Engineers, Freelancers):**
- Specializations, Certifications, Licenses, Years of experience, Education

**Portfolio (Contractors, Engineers, Freelancers):**
- Add/edit/remove portfolio items: title, description, photos, project type, year

### 21.2 Account Settings Page

**Security:**
- Change password, Two-factor authentication, Active sessions, Login history

**Notifications:**
- Notification preferences matrix: Event types x Channels (Push, Email, SMS)
- Digest preferences: Real-time, Daily, Weekly
- Do not disturb schedule

**Language & Region:**
- Language (Arabic / English), Date format (Hijri / Gregorian / Both), Time zone, Currency display

**Privacy:**
- Profile visibility, Contact info visibility, Activity visibility
- Data export request, Account deletion request

**Payment Methods:**
- Saved methods list, Add new, Set default, Remove

**Subscription & Plan:**
- Current plan, Usage statistics, Upgrade/downgrade, Billing history, Cancel

### 21.3 Verification Center Page
- Current verification level with badge
- Steps to next level
- Document upload per requirement: ID, Commercial registration, Professional license, Insurance, Other
- Verification status per document
- Re-submit option for rejected documents

### 21.4 Help & Support Page
- Search help articles
- Category browsing: Getting Started, Projects, Marketplace, Payments, Account, Technical Issues
- Contact support: Live chat, Support ticket form, Email, Phone
- Video tutorials, FAQ section

---

## 22. Notification System

### 22.1 Notification Center Page
- Accessed via bell icon
- Tabs: All, Unread, Projects, Payments, Messages, System
- Each notification: Icon, Title, Description, Timestamp, Read/unread indicator
- Click to navigate to relevant page
- "Mark all as read" button

### 22.2 Notification Types & Triggers

| Category | Trigger | Channel |
|----------|---------|---------|
| Project | Project approved | Push, Email |
| | New provider interest | Push, Email |
| | Proposal received | Push, Email, SMS |
| | Contract ready for signing | Push, Email, SMS |
| | Progress update | Push |
| | Milestone approaching | Push, Email |
| | Milestone completed | Push, Email |
| Payments | Payment request received | Push, Email, SMS |
| | Payment approved | Push, Email |
| | Payment received | Push, Email, SMS |
| | Payment overdue | Push, Email, SMS |
| Approvals | Approval requested | Push, Email |
| | Approval granted/rejected | Push, Email |
| Issues | New issue raised | Push, Email |
| | Issue assigned to you | Push, Email |
| | Issue resolved | Push |
| Messages | New message | Push |
| | @mention | Push, Email |
| RFQ | New RFQ received (vendor) | Push, Email |
| | Quotation received | Push, Email |
| | RFQ deadline approaching | Push |
| Reviews | New review received | Push, Email |
| System | Account verified | Push, Email |
| | Subscription expiring | Push, Email |
| | Platform announcements | Push, Email |
| AI | Risk alert | Push, Email |
| | Price alert | Push |
| | Recommendation | Push |

---

## 23. Mobile-Specific Considerations

### 23.1 Bottom Navigation Bar (5 tabs)

**Property Owner:**
1. Home/Dashboard
2. My Projects
3. + (Create Project — center, prominent)
4. Messages
5. More

**Contractor:**
1. Home/Dashboard
2. Opportunities
3. My Projects
4. Messages
5. More

**Vendor:**
1. Home/Dashboard
2. RFQs
3. Orders
4. Messages
5. More

### 23.2 Mobile-Specific UI Patterns
- **Pull-to-refresh** on all list pages
- **Swipe actions** on list items (e.g., swipe to approve, swipe to archive)
- **Bottom sheets** instead of modals for actions and filters
- **Floating action button (FAB)** for primary actions
- **Camera integration** for photo capture
- **GPS/location** for site check-in and location tagging
- **Offline mode:** Cache critical data, Queue actions for sync, Offline indicator, Auto-sync
- **Touch targets:** Minimum 44x44px
- **Thumb-zone optimization:** Primary actions in bottom half
- **Collapsible headers:** Header shrinks on scroll

### 23.3 Mobile Gestures
- Swipe left/right: Navigate between tabs or cards
- Long press: Context menu
- Pinch to zoom: Photos, maps, documents
- Double tap: Like/favorite

---

## 24. Accessibility & RTL Requirements

### 24.1 RTL Layout Rules
- All layouts mirror for RTL
- Text alignment: Right-aligned for Arabic, Left-aligned for English
- Directional icons flip
- Bidirectional text handling
- Number display: Arabic-Indic numerals option or Western numerals — user preference
- Calendar: Hijri calendar option alongside Gregorian

### 24.2 WCAG 2.1 Level AA Compliance
- **Color contrast:** Minimum 4.5:1 for normal text, 3:1 for large text
- **Keyboard navigation:** All interactive elements accessible
- **Screen reader support:** Proper ARIA labels, roles, landmarks
- **Focus indicators:** Visible focus rings
- **Alt text:** All images have descriptive alt text
- **Semantic HTML:** Proper heading hierarchy
- **Error identification:** Errors identified with text (not just color)
- **Resizable text:** Content readable at 200% zoom
- **Motion:** Respect prefers-reduced-motion
- **Touch targets:** Minimum 44x44px

### 24.3 Inclusive Design
- Support for different literacy levels (visual cues alongside text)
- Multiple ways to complete tasks
- Error prevention (confirmation dialogs, undo options)
- Flexible font sizes
- High contrast mode option

---

## 25. Page-by-Page Summary Checklist

### Public Pages (Unauthenticated)
| # | Page | Section |
|---|------|---------|
| 1 | Landing Page / Home | 3.1 |
| 2 | About Us | 3.2 |
| 3 | How It Works | 3.3 |
| 4 | Pricing | 3.4 |
| 5 | Blog / Resources | 3.5 |
| 6 | Blog Post Detail | 3.6 |
| 7 | Contact Us | 3.7 |
| 8 | FAQ | 3.8 |
| 9 | Terms of Service | 3.9 |
| 10 | Privacy Policy | 3.10 |
| 11 | Public Vendor/Contractor Profile | 3.11 |

### Authentication & Onboarding
| # | Page | Section |
|---|------|---------|
| 12 | Registration (3 steps) | 4.1 |
| 13 | Login | 4.2 |
| 14 | Forgot Password | 4.3 |
| 15 | Onboarding Tour (role-specific) | 4.4 |

### Property Owner Pages
| # | Page | Section |
|---|------|---------|
| 16 | Owner Dashboard | 5.1 |
| 17 | My Projects List | 5.2 |
| 18 | Create Project Wizard (7 steps) | 5.3 |
| 19 | Post-Submission Confirmation | 5.3 |
| 20 | Project Detail (8 tabs) | 5.4 |
| 21 | Provider Review / Comparison | 5.5 |
| 22 | Proposal Comparison | 5.6 |

### Contractor Pages
| # | Page | Section |
|---|------|---------|
| 23 | Contractor Dashboard | 6.1 |
| 24 | Opportunities / Leads List | 6.2 |
| 25 | Opportunity Detail | 6.2 |
| 26 | Create Proposal (7 sections) | 6.3 |
| 27 | Project Management (contractor view) | 6.4 |
| 28 | My Proposals List | 6.5 |

### Engineer Pages
| # | Page | Section |
|---|------|---------|
| 29 | Engineer Dashboard | 7.1 |
| 30 | Inspection Management | 7.2 |
| 31 | Inspection Execution (mobile) | 7.3 |
| 32 | Approval Workflow Queue | 7.4 |

### Vendor Pages
| # | Page | Section |
|---|------|---------|
| 33 | Vendor Dashboard | 8.1 |
| 34 | Product Catalog Management | 8.2 |
| 35 | Add/Edit Product | 8.2 |
| 36 | RFQ Response / Quotation Form | 8.3 |
| 37 | Order Management | 8.4 |

### Freelancer Pages
| # | Page | Section |
|---|------|---------|
| 38 | Freelancer Dashboard | 9.1 |
| 39 | Profile & Portfolio | 9.2 |
| 40 | Job Detail & Application | 9.3 |

### Project Manager Pages
| # | Page | Section |
|---|------|---------|
| 41 | PM Dashboard | 10.1 |
| 42 | Multi-Project View | 10.2 |
| 43 | Reporting Page | 10.3 |

### Cost Accountant Pages
| # | Page | Section |
|---|------|---------|
| 44 | Cost Accountant Dashboard | 11.1 |
| 45 | Budget Tracking | 11.2 |
| 46 | Approval Queue | 11.3 |
| 47 | Cost Benchmarking | 11.4 |

### Shared Project Pages
| # | Page | Section |
|---|------|---------|
| 48 | Project Activity Feed | 12.1 |
| 49 | Project Timeline / Gantt Chart | 12.2 |
| 50 | Project Photo Gallery | 12.3 |
| 51 | Project Calendar | 12.4 |
| 52 | Project Reports | 12.5 |

### Marketplace Pages
| # | Page | Section |
|---|------|---------|
| 53 | Marketplace Home | 13.1 |
| 54 | Category Listing | 13.2 |
| 55 | Product/Service Detail | 13.3 |
| 56 | Vendor Profile (Full) | 13.4 |
| 57 | Comparison Page | 13.5 |
| 58 | Favorites / Saved Items | 13.6 |
| 59 | Contractor / Service Provider Search | 13.7 |

### RFQ & Quotation Pages
| # | Page | Section |
|---|------|---------|
| 60 | Create RFQ | 14.1 |
| 61 | RFQ Detail (Requester View) | 14.2 |
| 62 | Quotation Comparison | 14.3 |
| 63 | RFQ List | 14.4 |

### Contract Pages
| # | Page | Section |
|---|------|---------|
| 64 | Contract List | 15.1 |
| 65 | Contract Creation Wizard | 15.2 |
| 66 | Contract Review | 15.3 |
| 67 | Contract Signing | 15.4 |
| 68 | Contract Detail | 15.5 |

### Payment & Invoice Pages
| # | Page | Section |
|---|------|---------|
| 69 | Payments Overview | 16.1 |
| 70 | Payment Milestones | 16.2 |
| 71 | Invoice List | 16.3 |
| 72 | Invoice Detail | 16.4 |
| 73 | Make Payment | 16.5 |
| 74 | Transaction History | 16.6 |

### Issue & Dispute Pages
| # | Page | Section |
|---|------|---------|
| 75 | Issue List | 17.1 |
| 76 | Create Issue | 17.2 |
| 77 | Issue Detail | 17.3 |
| 78 | Dispute Filing | 17.4 |
| 79 | Dispute Detail | 17.5 |

### Reviews & Ratings Pages
| # | Page | Section |
|---|------|---------|
| 80 | Write Review | 18.1 |
| 81 | My Reviews | 18.2 |
| 82 | Reviews Display (on profiles) | 18.3 |

### AI System Pages
| # | Page | Section |
|---|------|---------|
| 83 | AI Assistant Full Page | 19.1 |
| 84 | AI Pricing Intelligence | 19.2 |
| 85 | AI Risk Dashboard | 19.3 |
| 86 | AI Recommendations | 19.4 |

### Admin Panel Pages
| # | Page | Section |
|---|------|---------|
| 87 | Admin Dashboard | 20.1 |
| 88 | User Management | 20.2 |
| 89 | User Detail | 20.3 |
| 90 | Verification Queue | 20.4 |
| 91 | Project Management (Admin) | 20.5 |
| 92 | Marketplace Management | 20.6 |
| 93 | Financial Management | 20.7 |
| 94 | Dispute Management | 20.8 |
| 95 | Content Management | 20.9 |
| 96 | Analytics & Reports | 20.10 |
| 97 | Support Management | 20.11 |
| 98 | System Settings | 20.12 |

### Settings & Account Pages
| # | Page | Section |
|---|------|---------|
| 99 | Profile Settings | 21.1 |
| 100 | Account Settings | 21.2 |
| 101 | Verification Center | 21.3 |
| 102 | Help & Support | 21.4 |

### Notification & Communication
| # | Page | Section |
|---|------|---------|
| 103 | Notification Center | 22.1 |
| 104 | Messages / Chat (project-level) | 5.4 Tab 5 |
| 105 | Direct Messages | 5.4 Tab 5 |

---

## Total: 105 Unique Pages/Views

This document covers every page, section, component, navigation element, form field, and interaction required to build the complete JustLink platform. It should be used as the definitive UI/UX reference for design and development teams.

---

**End of UI/UX Guidance Document**
