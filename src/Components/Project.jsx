import { ArrowBigRight, Github } from "lucide-react"

const projects=[
    {
        id:1,
        title:"College demo website",
        description:"A smooth and user friendly website with web3 form included in it. ",
        image:"/Assets/pg01 (1).png",
        tags:["ReactJS","TailwindCSS","React-Router-Dom"],
        githubUrl: "https://github.com/KumarMangalamSingh/Educity.git",

    },
    {
        id:2,
        title:"Food Delivery Website",
        description:"A simple but seamless food ordering website with filtering and add to cart along with add to card and order confirmed pop-ups. ",
        image:"/Assets/pg02.png",
        tags:["ReactJS","TailwindCSS","React-Router-Dom","RTK"],
        githubUrl: "https://mangalam-food-delivery.netlify.app/",
    },
   
    {
        id:3,
        title:"News Aggregator",
        description:"Website focusing on gathering of all the latest news on a same website including having filter and having the complete description of the news.",
        image:"/Assets/pg04.png",
        tags:["HTML","CSS","JS","NEWS-API"],
        githubUrl: "https://github.com/KumarMangalamSingh/News-Website.git",
    }
]
export const Project=()=>{
return <section id="projects" className="py-24 px-4 relative">
<div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold text-center"> My <span className="text-primary">Projects</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {projects.map((project,key)=>(
            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                <div className="h-48 overflow-hidden">
                    <img src={project.image} alt={project.title}  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                </div>
                <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag)=>(
 <span className="px-2 py-1 font-medium border rounded-full bg-secondary text-secondary">
    {tag}
 </span>
                        ))}
                       
                    </div>
                </div>
                <h3 className="text-xl mb-1 text-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-1">{project.description}</p>

                <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                        <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300 ml-3 pb-3" target="_blank">
                            <Github size={20}/>
                        </a>
                    </div>
                </div>
            </div>
            
        ))}
    </div>
    <div className="text-center mt-12">
        <a href="https://github.com/KumarMangalamSingh" className="cosmic-button flex items-center mx-auto gap-2 w-fit" target="_blank">
            My GitHub Profile <ArrowBigRight size={16}/>
        </a>
    </div>
</div>
</section>
}



