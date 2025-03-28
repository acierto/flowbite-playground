import {component$} from "@builder.io/qwik";

export default component$(() => {

    return (
        <section id="about" class="py-20 scroll-mt-20">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl mx-auto">
                    <div class="text-center mb-10">
                        <h2 class="mb-4">About Planning Poker</h2>
                        <p class="text-foreground/70">A collaborative estimation technique for agile teams.</p>
                    </div>

                    <div class="glass rounded-xl p-8 shadow-glass">
                        <p class="mb-4">
                            Planning Poker, also called Scrum Poker, is a consensus-based estimation technique used by
                            agile teams to estimate the effort or relative size of development goals.
                        </p>

                        <h3 class="text-xl font-medium mt-8 mb-3">How it works</h3>
                        <ol class="list-decimal ml-5 space-y-2">
                            <li>A moderator presents a story to be estimated</li>
                            <li>Each team member privately selects a card representing their estimate</li>
                            <li>All estimates are revealed simultaneously</li>
                            <li>The team discusses variations in estimates</li>
                            <li>The team reaches a consensus or revotes until consensus is reached</li>
                        </ol>

                        <h3 class="text-xl font-medium mt-8 mb-3">Why use Planning Poker?</h3>
                        <ul class="list-disc ml-5 space-y-2">
                            <li>Prevents anchoring bias by revealing all estimates at once</li>
                            <li>Encourages participation from all team members</li>
                            <li>Leverages collective wisdom and different perspectives</li>
                            <li>Makes estimation more engaging and fun</li>
                            <li>Helps teams build shared understanding of stories</li>
                        </ul>

                        <div class="mt-8 p-4 bg-secondary/50 rounded-lg border border-border">
                            <h4 class="font-medium mb-2">The Fibonacci Sequence</h4>
                            <p class="text-sm text-foreground/80">
                                Planning Poker commonly uses a modified Fibonacci sequence (0, 1, 2, 3, 5, 8, 13, 21,
                                ...) because it reflects the inherent uncertainty in estimating larger items. The
                                increasing gaps between values help teams avoid false precision for complex items.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});