import {component$, useSignal} from "@builder.io/qwik";
import {Input, Modal} from "flowbite-qwik";
import {buttonVariants} from "~/components/ui/button";
import {cn} from "~/lib/utils";


export function Heart() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             data-lov-name="Heart"
             data-component-path="src/components/Donate.tsx" data-component-line="62" data-component-file="Donate.tsx"
             data-component-name="Heart" data-component-content="%7B%7D">
            <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
    )
}

export function Coffee() {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-coffee text-foreground/70" data-lov-id="src/components/Donate.tsx:87:18"
                 data-lov-name="option.icon" data-component-path="src/components/Donate.tsx" data-component-line="87"
                 data-component-file="Donate.tsx" data-component-name="option.icon" data-component-content="%7B%7D">
        <path d="M10 2v2"></path>
        <path d="M14 2v2"></path>
        <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path>
        <path d="M6 2v2"></path>
    </svg>)
}

export function DollarSign() {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-dollar-sign text-foreground/70" data-lov-id="src/components/Donate.tsx:87:18"
                 data-lov-name="option.icon" data-component-path="src/components/Donate.tsx" data-component-line="87"
                 data-component-file="Donate.tsx" data-component-name="option.icon" data-component-content="%7B%7D">
        <line x1="12" x2="12" y1="2" y2="22"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>);
}

export function CreditCard() {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="lucide lucide-credit-card text-foreground/70" data-lov-id="src/components/Donate.tsx:87:18"
                 data-lov-name="option.icon" data-component-path="src/components/Donate.tsx" data-component-line="87"
                 data-component-file="Donate.tsx" data-component-name="option.icon" data-component-content="%7B%7D">
        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
        <line x1="2" x2="22" y1="10" y2="10"></line>
    </svg>);
}


const donationOptions = [
    {amount: 5, label: 'Coffee', icon: Coffee},
    {amount: 10, label: 'Basic', icon: Heart},
    {amount: 25, label: 'Supporter', icon: DollarSign},
    {amount: 50, label: 'Premium', icon: CreditCard},
];

export default component$(() => {
    const isOpen = useSignal(false);
    const amount = useSignal(0);
    const email = useSignal('');
    const name = useSignal('');
    const customAmount = useSignal('');

    const cls = cn(buttonVariants({class: 'button-donation'}));

    return (
        <>
            <button
                onClick$={() => isOpen.value = true}
                class={cls}
            >
                <Heart/> Support Us
            </button>
            <Modal
                header={<div class="flex items-center text-lg">Terms of Service</div>}
                footer={
                    <div class="flex justify-between">

                    </div>
                }
                bind:show={isOpen}
                onClickOutside$={() => {
                    console.log('click outside !')
                }}
            >
                <div class="grid gap-6 py-4">
                    <div class="grid grid-cols-2 gap-4">
                        {donationOptions.map((option) => {
                            const optionAmount = option.amount;
                            return <button
                                key={option.amount}
                                type="button"
                                onClick$={() => {
                                    amount.value = optionAmount;
                                    customAmount.value = '';
                                }}
                                class={`p-4 rounded-xl border ${
                                    amount.value === optionAmount
                                        ? 'border-primary bg-primary/10'
                                        : 'border-border hover:border-primary/50'
                                } flex flex-col items-center gap-2 transition-all`}
                            >
                                {/*<option.icon*/}
                                {/*    class={amount.value === optionAmount ? 'text-primary' : 'text-foreground/70'}/>*/}
                                <span class="font-medium">${option.amount}</span>
                                <span class="text-xs text-foreground/70">{option.label}</span>
                            </button>
                        })}
                    </div>

                    <div class="relative">
                        <DollarSign/>
                        <Input
                            placeholder="Custom amount"
                            bind:value={customAmount}
                            class="pl-9"
                            type="number"
                            min="1"
                        />
                    </div>

                    {/*<div class="space-y-3">*/}
                    {/*    <Input*/}
                    {/*        placeholder="Your name (optional)"*/}
                    {/*        bind:value={name}*/}
                    {/*    />*/}
                    {/*    <Input*/}
                    {/*        placeholder="Your email (optional)"*/}
                    {/*        type="email"*/}
                    {/*        bind:value={email}*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </Modal>
        </>
    );
});