import ceylon.interop.browser {
    window
}
import ceylon.interop.browser.dom {
    document
}

"Run the module `com.github.bjansen.ceylonjstests`."
shared void run() {
    print("Starting interop checks...");
    value before = system.milliseconds;

    runInteropChecks();

    print("Done in ``system.milliseconds - before``ms!");
}

void runInteropChecks() {
    check("window can be accessed", () => window);
    check("document can be accessed", () => document);
    check("querySelectorAll returns one div", () => document.querySelectorAll("div").length == 1);
}
