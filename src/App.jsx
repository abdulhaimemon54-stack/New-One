import React from 'react'
import Card from "./components/card"


const App = () => {
    const jobs = [
        {
            id: 1,
            brandLogo: "https://cdn.simpleicons.org/google",
            company: "Google",
            datePosted: "5 days ago",
            post: "Front-End Developer",
            tag1: "Full Time",
            tag2: "Senior Level",
            pay: "$65/hr",
            location: "Mountain View, USA",
        },
        {
            id: 2,
            brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-zbPS5MtftI9dmPU2eF521kF7sMUdAJW8WgkyeUcjw&s",
            company: "Amazon",
            datePosted: "2 days ago",
            post: "UI Engineer",
            tag1: "Full Time",
            tag2: "Junior Level",
            pay: "$38/hr",
            location: "Karachi, Pakistan",
        },
        {
            id: 3,
            brandLogo: "https://cdn.simpleicons.org/meta",
            company: "Meta",
            datePosted: "1 week ago",
            post: "React Developer",
            tag1: "Part Time",
            tag2: "Junior Level",
            pay: "$35/hr",
            location: "London, UK",
        },
        {
            id: 4,
            brandLogo: "https://cdn.simpleicons.org/apple",
            company: "Apple",
            datePosted: "3 weeks ago",
            post: "Web Interface Developer",
            tag1: "Full Time",
            tag2: "Senior Level",
            pay: "$70/hr",
            location: "Cupertino, USA",
        },
        {
            id: 5,
            brandLogo: "https://cdn.simpleicons.org/netflix",
            company: "Netflix",
            datePosted: "10 weeks ago",
            post: "Front-End Engineer",
            tag1: "Full Time",
            tag2: "Senior Level",
            pay: "$75/hr",
            location: "Los Gatos, USA",
        },
        {
            id: 6,
            brandLogo: "https://cdn.simpleicons.org/nvidia",
            company: "Nvidia",
            datePosted: "4 days ago",
            post: "Web Developer Intern",
            tag1: "Part Time",
            tag2: "Junior Level",
            pay: "$30/hr",
            location: "Lahore, Pakistan",
        },
        {
            id: 7,
            brandLogo: "https://cdn.simpleicons.org/intel",
            company: "Intel",
            datePosted: "6 days ago",
            post: "JavaScript Developer",
            tag1: "Full Time",
            tag2: "Junior Level",
            pay: "$40/hr",
            location: "Dubai, UAE",
        },
        {
            id: 8,
            brandLogo: "https://cdn.simpleicons.org/tesla",
            company: "Tesla",
            datePosted: "2 weeks ago",
            post: "Dashboard UI Developer",
            tag1: "Part Time",
            tag2: "Senior Level",
            pay: "$55/hr",
            location: "Austin, USA",
        },
        {
            id: 9,
            brandLogo: "https://cdn.simpleicons.org/spotify",
            company: "Spotify",
            datePosted: "8 weeks ago",
            post: "Front-End Developer",
            tag1: "Full Time",
            tag2: "Junior Level",
            pay: "$42/hr",
            location: "Karachi, Pakistan",
        },
    ];

    return (

        <div className="parent">
            {jobs.map(function (elem,idx) {
                return <div key={idx}><Card companyName={elem.company} brandLogo={elem.brandLogo} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/></div>
            })}
        </div>

    )
}





export default App