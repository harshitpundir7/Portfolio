"use client";

export default function Footer() {
    return (
        <footer id="contact" className="py-12 border-t border-border/50 bg-background/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <span className="font-semibold text-foreground">Harshit Pundir</span>
                    <p className="text-sm text-muted-foreground">
                        Building with Next.js, React & Tailwind CSS.
                    </p>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <a href="https://github.com/harshitpundir7" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
                    <a href="https://linkedin.com/in/harshit-pundir" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Twitter</a>
                    <a href="mailto:neerajpundir2005@gmail.com" className="hover:text-foreground transition-colors">Email</a>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 text-center text-xs text-muted-foreground/50">
                © {new Date().getFullYear()} Harshit Pundir. All rights reserved.
            </div>
        </footer>
    );
}
