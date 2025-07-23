import { Github, LinkedinIcon, Twitter } from "lucide-react"
export const Footer=()=>{
    return <footer className="py-12 px-4 relative flex items-center justify-between  bg-card border-t mt-12 pt-8  ">
       
               
                <div className="flex space-x-6 justify-center ">
                    <a href="https://x.com/KumarMa65429226?t=QbNm-g6RyIHBSFX5YpAhJA&s=09" target="_blank" className="hover:text-primary"> 
                    <Twitter />
                    </a>
                    <a href="https://github.com/KumarMangalamSingh"
                    target="_blank" className="hover:text-primary"> 
                    <Github />
                    </a>
                    <a href="https://www.linkedin.com/in/kumarmangalam-" target="_blank" className="hover:text-primary">
                        <LinkedinIcon />
                    </a>
                </div>
                <p className="text-sm text-muted-foreground"> &copy; Kumar Mangalam. All rights reserved</p>
            
          
    </footer>

}