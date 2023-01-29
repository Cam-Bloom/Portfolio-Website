import PortfolioCard from "./PortfolioCard"

const portfolioItems = [
    {title: "Project 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum quos, aliquam nisi quis eius voluptatibus similique? Tempor,",
    technoUsed: ["node", "express"]},
    {title: "Project 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum quos, aliquam nisi quis eius voluptatibus similique? Tempor,",
    technoUsed: ["node", "express"]},
    {title: "Project 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum quos, aliquam nisi quis eius voluptatibus similique? Tempor,",
    technoUsed: ["node", "express"]},
    {title: "Project 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum quos, aliquam nisi quis eius voluptatibus similique? Tempor,",
    technoUsed: ["node", "express"]},
    {title: "Project 5",
    desc: "Loreonsectetur voluptatum quos, aliquam nisi quis eius voluptatibus similique? Tempor,",
    technoUsed: ["node", "express"]},
    {title: "Project 6",
    desc: "Loreicing elit. Temporibus voluptatum quos, aliquam nisi quis eius voluptatibus similique? Tempor,",
    technoUsed: ["node", "express"]},
]

const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            {portfolioItems.map((item) => <PortfolioCard key= {item.title} item = {item}/>)}
        </div>

    </section>
  )
}

export default Portfolio