#  Meme Template Viewer

> **Ek simple aur mazedaar React application jisse tum trending meme templates dekh aur search kar sakte ho!**

Ye project ek interactive meme template viewer hai jo Imgflip API se live meme templates fetch karta hai. Tum easily kisi bhi meme ko naam se search kar sakte ho aur uska preview dekh sakte ho. Perfect hai meme creators aur meme lovers ke liye!

---

## Features

-   **Live Meme Templates** - Imgflip API se real-time meme templates fetch hote hain
-   **Smart Search** - Meme templates ko naam se instantly search karo
-   **Responsive Design** - Mobile se lekar desktop tak, har screen pe perfectly chalta hai
-   **Fast Performance** - Vite ke saath lightning-fast loading aur hot module replacement
-   **Modern UI** - TailwindCSS se banaya gaya clean aur attractive interface
-   **Real-time Filtering** - Type karte hi results update ho jaate hain

---

## Tech Stack

### **Frontend**

-   **React 19.2.0** - UI building ke liye modern JavaScript library
-   **Vite 7.2.2** - Super fast build tool aur dev server
-   **TailwindCSS 4.1.17** - Utility-first CSS framework for styling

### **Backend**

-   **Koi dedicated backend nahi hai** - Directly external API se data fetch hota hai

### **Database**

-   **No Database** - Sab data Imgflip API se dynamically aata hai

### **APIs Used**

-   **Imgflip API** - `https://api.imgflip.com/get_memes`
    -   Free public API jo popular meme templates provide karta hai
    -   No authentication required

### **Tools / Libraries**

-   **Axios 1.13.2** - HTTP requests ke liye
-   **ESLint 9.39.1** - Code quality maintain karne ke liye
-   **React Hooks** - useState, useEffect for state management

---

## Project Architecture

### **Simple Architecture Flow:**

```
User Browser
     ↓
  React App (Frontend)
     ↓
  Axios HTTP Client
     ↓
  Imgflip API (https://api.imgflip.com/get_memes)
     ↓
  JSON Response (Meme Templates Data)
     ↓
  React Components (Display & Filter)
     ↓
  User Interface (Cards with Images)
```

### **Component Structure:**

```
App.jsx (Root Component)
    ↓
Body.jsx (Main Container)
    ├── Apicalling.jsx (API Logic - Data Fetching)
    ├── Search.jsx (Search Input & Filtering)
    └── Card.jsx (Individual Meme Display)
```

---

## Kaise Kaam Karta Hai Project?

### **Step-by-Step Flow (Hinglish mein):**

#### **1. User Flow:**

1. **User website kholta hai** → React app load hota hai
2. **App.jsx render hota hai** → Body component call hota hai
3. **Body component mount hota hai** → Apicalling hook trigger hota hai
4. **Memes screen pe display hote hain** → Grid layout mein cards show hote hain
5. **User search bar mein type karta hai** → Real-time filtering start hoti hai
6. **Filtered results instantly update hote hain** → Matching memes hi dikhte hain

#### **2. API Flow (Data Kaise Aata Hai):**

```javascript
Step 1: Component Mount
   ↓
Step 2: useEffect Hook Trigger (Apicalling.jsx)
   ↓
Step 3: Axios GET Request → https://api.imgflip.com/get_memes
   ↓
Step 4: API Response Milta Hai (JSON Format)
   {
     "success": true,
     "data": {
       "memes": [
         {
           "id": "181913649",
           "name": "Drake Hotline Bling",
           "url": "https://i.imgflip.com/30b1gx.jpg",
           "width": 1200,
           "height": 1200,
           "box_count": 2
         },
         // ... more memes
       ]
     }
   }
   ↓
Step 5: setAllMemes() Se State Update Hota Hai
   ↓
Step 6: Body Component Re-render Hota Hai
   ↓
Step 7: Map Function Se Har Meme Ke Liye Card Component Render Hota Hai
```

#### **3. Search Flow (Filter Kaise Hota Hai):**

```javascript
User types in search box
   ↓
onChange event trigger (Search.jsx)
   ↓
handleSearch function run hota hai
   ↓
Array.filter() se memes filter hote hain
   ↓
item.name.toLowerCase().includes(searchText.toLowerCase())
   ↓
setAllMemes() se filtered data set hota hai
   ↓
Body component mein Card components update hote hain
   ↓
Only matching memes display hote hain
```

#### **4. Data Flow (Frontend → Display):**

```
Imgflip API
    ↓ (Axios GET Request)
Apicalling Component (Custom Hook)
    ↓ (Returns Array)
Body Component (useState)
    ↓ (Props Pass)
Search Component (Filtering Logic)
    ↓ (setState)
Body Component (Re-render with Filtered Data)
    ↓ (Map Function)
Card Components (Individual Meme Display)
    ↓ (Props: memes.url, memes.name)
Browser (Final UI)
```

#### **5. Component-wise Responsibility:**

| Component          | Kya Karta Hai                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| **App.jsx**        | Root component, title display aur Body component render karta hai                               |
| **Body.jsx**       | Main container, API data manage karta hai aur Search + Card components ko orchestrate karta hai |
| **Apicalling.jsx** | Custom hook jo API call karta hai aur memes data return karta hai                               |
| **Search.jsx**     | Search functionality, input handle karta hai aur filtering logic execute karta hai              |
| **Card.jsx**       | Individual meme card display karta hai (image + name)                                           |

---

## Folder Structure

```
MemeTemplateViewer/
│
├── public/                      # Static assets (favicon, etc.)
│
├── src/                         # Main source code folder
│   ├── assets/                  # Images, icons, static files
│   │
│   ├── components/              # React components
│   │   ├── Apicalling.jsx       # API calling logic (custom hook)
│   │   ├── Body.jsx             # Main body container
│   │   ├── Card.jsx             # Individual meme card component
│   │   └── Search.jsx           # Search input & filter logic
│   │
│   ├── App.css                  # App-level styles
│   ├── App.jsx                  # Root component
│   ├── index.css                # Global styles + Tailwind imports
│   └── main.jsx                 # React app entry point
│
├── .gitignore                   # Git ignore file
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML template
├── package.json                 # Dependencies aur scripts
├── README.md                    # Project documentation (ye file!)
└── vite.config.js               # Vite configuration
```

---

## API Documentation

### **Base URL:**

```
https://api.imgflip.com
```

### **Endpoint: Get All Memes**

#### **Route:**

```
GET /get_memes
```

#### **Method:**

`GET`

#### **Authentication:**

**Not Required** - Public API hai, koi token ya key nahi chahiye

#### **Request Example:**

```javascript
// Using Axios (as used in project)
const response = await axios.get("https://api.imgflip.com/get_memes");

// Using Fetch API
const response = await fetch("https://api.imgflip.com/get_memes");
const data = await response.json();
```

#### **Response Example (Success):**

```json
{
    "success": true,
    "data": {
        "memes": [
            {
                "id": "181913649",
                "name": "Drake Hotline Bling",
                "url": "https://i.imgflip.com/30b1gx.jpg",
                "width": 1200,
                "height": 1200,
                "box_count": 2
            },
            {
                "id": "87743020",
                "name": "Two Buttons",
                "url": "https://i.imgflip.com/1g8my4.jpg",
                "width": 600,
                "height": 908,
                "box_count": 3
            },
            {
                "id": "112126428",
                "name": "Distracted Boyfriend",
                "url": "https://i.imgflip.com/1ur9b0.jpg",
                "width": 1200,
                "height": 800,
                "box_count": 3
            }
            // ... total 100 memes
        ]
    }
}
```

#### **Response Fields:**

| Field               | Type    | Description                                 |
| ------------------- | ------- | ------------------------------------------- |
| `success`           | Boolean | API call successful hui ya nahi             |
| `data.memes`        | Array   | Sab meme templates ka array                 |
| `memes[].id`        | String  | Unique meme ID                              |
| `memes[].name`      | String  | Meme ka naam                                |
| `memes[].url`       | String  | Meme image ka URL                           |
| `memes[].width`     | Number  | Image width (pixels mein)                   |
| `memes[].height`    | Number  | Image height (pixels mein)                  |
| `memes[].box_count` | Number  | Text boxes ki count (meme creation ke liye) |

#### **Error Response:**

```json
{
    "success": false,
    "error_message": "Some error occurred"
}
```

#### **Rate Limiting:**

-   **No strict rate limit** hai, but abuse mat karo
-   Reasonable use karo (ek request page load pe)

---

## Setup Instructions

### **Prerequisites (Pehle Ye Hona Chahiye):**

-   **Node.js** (v16 ya usse latest) installed hona chahiye
-   **npm** ya **yarn** package manager
-   **Git** (agar clone karna hai)

### **Step 1: Clone the Repository**

```bash
git clone https://github.com/akshatkumar2006/MemesViewer.git
cd MemesViewer
```

### **Step 2: Install Dependencies**

```bash
# npm use kar rahe ho to:
npm install

# ya phir yarn use kar rahe ho to:
yarn install
```

**Ye packages install honge:**

-   React 19.2.0
-   Vite 7.2.2
-   TailwindCSS 4.1.17
-   Axios 1.13.2
-   ESLint aur related plugins

````

### **Step 4: Run Frontend (Development Mode)**
```bash
# Development server start karo
npm run dev

# Ya yarn se:
yarn dev
---

## 👥 Contributors

### **Main Developer:**
- **Akshat Kumar** ([@akshatkumar2006](https://github.com/akshatkumar2006))
  - Project architecture aur implementation
  - React components development
  - API integration
  - UI/UX design
````
