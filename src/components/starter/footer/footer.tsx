import {component$} from "@builder.io/qwik";
import Donate from "./donate";


export function Heart() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-heart text-accent" data-lov-id="src/components/Footer.tsx:12:14"
             data-lov-name="Heart" data-component-path="src/components/Footer.tsx" data-component-line="12"
             data-component-file="Footer.tsx" data-component-name="Heart"
             data-component-content="%7B%22className%22%3A%22text-accent%22%7D">
            <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
    )
}

export default component$(() => {

    return (
        <footer class="py-8 border-t mt-12">
            <div class="container mx-auto">
                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div class="space-y-2">
                        <div class="flex items-center gap-2">
                            <Heart/>
                            <span class="font-medium">Planning Poker</span>
                        </div>
                        <p class="text-sm text-foreground/70">
                            A simple and effective tool for agile estimation.
                        </p>
                    </div>

                    <div class="flex items-center gap-6">
                        <div class="text-sm text-foreground/70">
                            © {new Date().getFullYear()} Planning Poker
                        </div>
                        <Donate />
                    </div>
                </div>
            </div>
        </footer>
    );
});
