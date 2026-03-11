import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [result, setResult] = useState("");

  const formsubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formdata = new FormData(event.target);
    formdata.append(
      "access_key",
      "92786123-f172-4560-aa28-42bd6573ad44"
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formdata,
    });

    const data = await response.json();
    console.log("data from form", data);

    if (data.success) {
      setResult("Form submitted successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary font-semibold">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground">
          Let’s turn your vision into reality with clean and efficient code.
          <br />
          Available for freelance, remote, or full-time opportunities.
          <br />
          Say hello—I’d love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 mt-10">
              Contact Information
            </h3>

            {/* EMAIL */}
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>

              <a
                href="mailto:kumarmangalam30072003@gmail.com"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                kumarmangalam30072003@gmail.com
              </a>
            </div>

            {/* PHONE */}
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>

              <span className="text-muted-foreground">
                7903509112
              </span>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs mt-8">

            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={formsubmit}>

              {/* NAME */}
              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Kumar Mangalam..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="abc@gmail.com..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Write the message here..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                Send <Send size={16} />
              </button>

              <span className="text-sm text-muted-foreground">
                {result}
              </span>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};