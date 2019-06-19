function Model() {
this.stringStep1 = "<div class=\"InDev__body\">\n" +
    "<div class=\"body__steps\">Step 1 of 3</div>\n" +
    "<div class=\"body__title\">Create an Account</div>\n" +
    "<div class=\"body__step1\">\n" +
    "<span  class=\"step1 span\">Username*</span>\n" +
    "<input class=\"step1 input\" type=\"text\">\n" +
    "<span  class=\"step1 span\">Password*</span>\n" +
    "<input class=\"step1 input\" type=\"text\">\n" +
    "<span  class=\"step1 span\">Confirm*</span>\n" +
    "<input class=\"step1 input\" type=\"text\">\n" +
    "<span  class=\"step1 span\">E-mail*</span>\n" +
    "<input class=\"step1 input\" type=\"text\">\n" +
    "<span  class=\"step1 span\">Phone*</span>\n" +
    "<input class=\"step1 input\" type=\"tel\">\n" +
    "</div>\n" +
    "<div class=\"body__next\">\n" +
    "<button class=\"next\" id=\"nextButton\">Next</button>\n" +
    "</div>\n" +
    "</div> ";

    this.stringStep3 = "<div class=\"body__steps\">Step 3 of 3</div>\n" +
        "\n" +
        "    <div class=\"body__step1\">\n" +
        "        <span  class=\"step1 span\">Programming languages</span>\n" +
        "        <input class=\"step1 input\" type=\"text\" id=\"prLang\" list=\"l1\">\n" +
        "        <datalist id=\"l1\">\n" +
        "\n" +
        "            <option>Java</option>\n" +
        "            <option>C</option>\n" +
        "            <option>C++</option>\n" +
        "            <option>C#</option>\n" +
        "            <option>JavaScript</option>\n" +
        "            <option>PHP</option>\n" +
        "            <option>Ruby</option>\n" +
        "            <option>Matlab</option>\n" +
        "            <option>Python</option>\n" +
        "            <option>R</option>\n" +
        "            <option>Swift</option>\n" +
        "        </datalist>\n" +
        "        <span  class=\"step1 span\">Work experience</span>\n" +
        "        <input class=\"step1 input\" type=\"text\" id=\"prLang\" list=\"l2\">\n" +
        "        <datalist id=\"l2\">\n" +
        "            <option>0 - 1 years</option>\n" +
        "            <option>1 - 2 years</option>\n" +
        "            <option>2 - 3 years#</option>\n" +
        "            <option>3 - 4 years</option>\n" +
        "            <option>4 and more years</option>\n" +
        "        </datalist>\n" +
        "        <div class=\"step1 checkbox\">\n" +
        "            <input type=\"checkbox\">\n" +
        "            <label for=\"checkbox\">Accept the <a href=\"http://www.yandex.ru\">registration</a> rules</label>\n" +
        "        </div>\n" +
        "\n" +
        "\n" +
        "\n" +
        "    <div class=\"body__back\">\n" +
        "        <button class=\"back\" id=\"backButton\">Back</button>\n" +
        "    </div>\n" +
        "        <div class=\"body__register\">\n" +
        "            <button class=\"register\" id=\"registerButton\">Register</button>\n" +
        "        </div>\n" +
        "    </div>";
};
Model.prototype.getStep1 = function(){
    return this.stringStep1;
};
Model.prototype.getStep3 = function(){
    return this.stringStep3;
};