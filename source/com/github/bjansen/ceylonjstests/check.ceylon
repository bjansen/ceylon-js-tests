
void check(String description, "Returning false means an assertion failed" Anything() test) {
    variable String result = "✔ OK";
    variable String cls = "success";

    try {
        switch (res = test())
        case (is Boolean) {
            if (!res) {
                result = "✘ KO: expected assertion to return true";
                cls = "error";
            }
        }
        else {
        }
    } catch (Throwable e) {
        result = "✘ KO: ``e.message``";
        cls = "error";
    }

    dynamic {
        document.getElementById("results").innerHTML +=
            "<tr><td>``description``</td><td class=\"``cls``\">``result``</td>\n";
    }
}