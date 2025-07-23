import { Github, LinkedinIcon, Mail, MapIcon, MapPin, Phone, Send, Twitter } from "lucide-react"
import { useState } from "react";

export const Contact=()=>{
    const [result,setResult]=useState("");
    const formsubmit= async(event)=>{
        event.preventDefault();
        setResult("Sending...");
        const formdata=new FormData(event.target);
        formdata.append("access_key", "92786123-f172-4560-aa28-42bd6573ad44");

        const response=await fetch("https://api.web3forms.com/submit",{
            method:"Post",
            body:formdata
        });
        const data=await response.json(response);

        if(data.success){
            setResult("Form submitted successfully");
            event.target.reset();
        }
        else{
            console.log("Error",data);
            setResult(data.message);
        }

    }
    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
     <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Get In <span className="text-primary text-semibol">Touch</span></h2>
     <p className="text-center text-muted-foreground">
    Let’s turn your vision into reality with clean and efficient code. <br />
Available for freelance, remote, or full-time opportunities. <br />
Say hello—I’d love to hear from you!
     </p>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 mt-10"> Contact Information</h3>

            <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="h-6 w-6 text-primary"/>
                    </div>
                    <div>
                <a href="mailto:kumarmangalam30072003@gmail.com"
                target="_blank" className="text-muted-foreground hover:text-primary transition-color">kumarmangalam30072003@gmail.com</a>
                </div>
                </div>
                
            </div>

            <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-2">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary"/>  
                    </div>
                    <div>
                <a 
                target="_blank" className="text-muted-foreground hover:text-primary transition-color">7903509112</a>
                </div>
                </div>
                
                
            </div>
           
           
        </div>
        <div className="bg-card p-8 rounded-lg shadow-xs mt-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message </h3>
                <form className="space-y-6">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" required
                    placeholder="Kumar Mangalam..." 
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focud:ring-primary"/>
                </form>
                <form className="space-y-6">
                    <label htmlFor="name">Your Email</label>
                    <input type="text" id="name" name="name" required
                    placeholder="abc@gmail.com..." 
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focud:ring-primary"/>
                </form>

                <form className="space-y-6">
                    <label htmlFor="name">Your Message</label>
                    <textarea type="text" id="name" name="name" required
                    placeholder="write the message here..." 
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focud:ring-primary"/>
                </form>
                <button onClick={formsubmit} className="cosmic-button w-full flex items-center justify-center gap-2" typeof="submit">
                   Send <Send size={16} className="items-center"/>
                </button>
                <span>{result}</span>
            </div>
     </div>
     </div>
    </section>

}