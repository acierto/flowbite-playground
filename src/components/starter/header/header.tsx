import {component$, useSignal, useVisibleTask$} from "@builder.io/qwik";
import {useNavigate} from '@builder.io/qwik-city';

export default component$(() => {
    const navigate = useNavigate();
    const isScrolled = useSignal(false);

    const navLinks = [
        {title: 'Home', href: '/'},
    ];

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({cleanup}) => {
        const handleScroll = () => {
            isScrolled.value = window.scrollY > 10;
        };

        window.addEventListener('scroll', handleScroll);
        cleanup(() => window.removeEventListener('scroll', handleScroll));
    });

    return (
        <header
            class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple ${
                isScrolled.value ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5 bg-transparent'
            }`}
        >
            <div class="container mx-auto px-4 flex justify-between items-center">
                <div
                    class="flex items-center gap-2 cursor-pointer"
                    onClick$={() => navigate('/')}
                >
                    <div class="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
                        <span class="text-primary-foreground font-bold text-lg">P</span>
                    </div>
                    <span class="font-semibold text-xl">PointingPoker</span>
                </div>

                {/* Desktop Navigation */}
                <nav class="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            class="text-foreground/80 hover:text-foreground transition-colors duration-200"
                        >
                            {link.title}
                        </a>
                    ))}
                    <button
                        onClick$={() => navigate('/#create')}
                        class="button-primary text-sm"
                    >
                        Start Session
                    </button>
                </nav>

            </div>

        </header>
    );
});


