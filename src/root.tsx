import {component$, isDev} from "@builder.io/qwik";
import {QwikCityProvider, RouterOutlet, ServiceWorkerRegister,} from "@builder.io/qwik-city";

import "./global.css";
import {FlowbiteProvider, FlowbiteProviderHeader} from "flowbite-qwik";

export default component$(() => {
    /**
     * The root of a QwikCity site always start with the <QwikCityProvider> component,
     * immediately followed by the document's <head> and <body>.
     *
     * Don't remove the `<head>` and `<body>` elements.
     */

    return (
        <QwikCityProvider>
            <head>
                <meta charset="utf-8"/>
                {!isDev && (
                    <link
                        rel="manifest"
                        href={`${import.meta.env.BASE_URL}manifest.json`}
                    />
                )}
                {!isDev && <ServiceWorkerRegister/>}
                <FlowbiteProviderHeader/>
            </head>
            <body lang="en">
            <FlowbiteProvider toastPosition={'top-right'} theme="blue">
                <RouterOutlet />
            </FlowbiteProvider>
            </body>
        </QwikCityProvider>
    );
});
