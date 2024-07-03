# GreenIndia 🍀

An application to discover and learn about green energy produced across India. Support sustainable energy and make responsible decisions to fight climate change.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Pages](#pages)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview
GreenIndia is a web application dedicated to promoting sustainable goals and green energy initiatives in India. Our platform serves as a hub for information, infographics, and actionable insights into the impact of climate change and the efforts being made to combat it across the country.

## Features
- **Comprehensive Information:** Stay informed with the latest data and research on green energy and climate change affecting India. Our articles, reports, and updates provide a deep dive into the current state and future projections.
- **AI-Powered Insights:**  Utilize the power of AI to analyze and interpret green energy data. GreenIndia helps business leaders and individuals make well-informed decisions by providing predictive analytics and actionable insights tailored to your sustainability goals.
- **Interactive Infographics:**  Visualize complex data through our interactive infographics. Understand trends, impacts, and progress in a clear and engaging way.
- **Contribute and Collaborate**: Share your own data, insights, and stories.
- **Real-Time Data**: Access real-time data on green energy production and consumption.
- **Educational Resources**: Learn more about green energy and climate action through our educational materials.

## Pages

### Home Page
The landing section provides an overview of the app, its mission, and features. It ends with a call-to-action button that directs users to the Dashboard page.

### Dashboard Page
Shows a real-time map of India using the Google Maps API, marking green energy locations and providing more information upon clicking them. Followed by a line graph and pie chart giving information about green energy trends.

### Blogs Page
Displays blogs about green energy and sustainability, pulled via NewsAPI and then filtered on the topic, shown in a modern card format. Users can click on the articles and it will redirects users to the full article.

### Chat Page _[!!UNDER PROGRESS!!]_
Contains a chat box with an AI agent to chat about climate change and green energy-related topics.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/vedantabanerjee/greenindia_app
    cd greenindia_app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env.local` file and add your environment variables:
    ```
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
    NEXT_PUBLIC_NEWS_API_KEY=your-news-api-key
    ```

## Usage

1. Run the development server:
    ```bash
    npm run dev
    ```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies
- **Next.js**: React framework for server-side rendering and static site generation.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Shadcn**: For readmade nextjs components.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **Chart.js**: Flexible JavaScript charting for designers and developers.
- **React CountUp**: React component wrapper around CountUp.js for creating animations.
- **Lucide Icons**: A set of simple, consistent open-source icons for React.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **React Icons**: Include popular icons in your React projects easily.


## APIs:
- **Google Maps API**: For displaying real-time maps.
- **NewsAPI**: For fetching the latest blogs on green energy and sustainability.
- **OpenAI API**: For the AI chat agent.

## Contributing

The fight against climate change is a combined effort, I welcome contributions to this code for features and updates/fixes! Fork this repo and do your magic and issue a pull request with description. I would love to merge it!

## Images

Landing Page               |  Landing Page
:-------------------------:|:-------------------------:
![](/img/hero1.png)        |  ![](/img/hero2.png)

Dasboard Page              |  Dashboard Page
:-------------------------:|:-------------------------:
![](/img/dash1.png)        |  ![](/img/dash2.png)

Blogs Page                 |  Chat Page
:-------------------------:|:-------------------------:
![](/img/blog.png )        |  ![](/img/chat.png)

Blogs Page                 
:-------------------------:
![](/img/blog2.png )        

## Contact

For any questions or suggestions, please contact me on my LinkedIn/Twitter/Email
**Gmail:** vedantabanerjee01@gmail.com

*Thank you, Vedanta Banerjee, 2024*

