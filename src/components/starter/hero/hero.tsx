import type {QwikIntrinsicElements} from "@builder.io/qwik";
import {component$} from "@builder.io/qwik";
import {useNavigate} from "@builder.io/qwik-city";


export function Check() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="text-primary" data-lov-id="src/components/Hero.tsx:40:16"
             data-lov-name="Check" data-component-path="src/components/Hero.tsx" data-component-line="40"
             data-component-file="Hero.tsx" data-component-name="Check"
             data-component-content="%7B%22className%22%3A%22text-primary%22%7D">
            <path d="M20 6 9 17l-5-5"></path>
        </svg>
    )
}


export function ArrowRight(props: QwikIntrinsicElements['svg'], key: string) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}
             key={key}>
            <path fill="currentColor"
                  d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"></path>
        </svg>
    )
}

export default component$(() => {
    const navigate = useNavigate();

    return (
        <section class="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto text-center">

                    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in opacity-0"
                         style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                        <button
                            class="button-primary"
                            onClick$={() => navigate('/#create')}
                        >
                            Create Session
                            <ArrowRight class="ml-2 inline"/>
                        </button>

                        <button
                            class="button-outline"
                            onClick$={() => navigate('/#join')}
                        >
                            Join Existing Session
                        </button>
                    </div>


                </div>
            </div>

            {/* Background decorative elements */}
            <div class="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"/>
            <div class="absolute top-1/3 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"/>
        </section>
    );
});
