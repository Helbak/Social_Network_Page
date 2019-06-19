function Model() {
    this.username = "";
    this.password = "";
    this.confirm = "";
    this.phone = "";
    this.email = "";
this.stringStep1 = "<div class=\"body__steps\">Step 1 of 3</div>\n" +
    "        <div class=\"body__title\">Create an Account</div>\n" +
    "        <div class=\"body__step1\">\n" +
    "            <span  class=\"step1 span\">Username*</span>\n" +
    "            <input class=\"step1 input\" type=\"text\" id = \"username\">\n" +
    "            <span  class=\"step1 span\">Password*</span>\n" +
    "            <input class=\"step1 input\" type=\"text\" id = \"password\">\n" +
    "            <span  class=\"step1 span\">Confirm*</span>\n" +
    "            <input class=\"step1 input\" type=\"text\" id = \"confirm\">\n" +
    "            <span  class=\"step1 span\">E-mail*</span>\n" +
    "            <input class=\"step1 input\" type=\"text\" id = \"email\">\n" +
    "            <span  class=\"step1 span\">Phone*</span>\n" +
    "            <input class=\"step1 input\" type=\"tel\" id = \"phone\">\n" +
    "        </div>\n" +
    "        <div class=\"body__next\">\n" +
    "            <button class=\"next\" id=\"nextButton\">Next</button>\n" +
    "        </div>";

    this.stringStep2 = "<div class=\"body__steps\">Step 2 of 3</div>\n" +
        "<div class=\"body__title\">Create an Account</div>\n" +
        "<div class=\"body__step1\">\n" +
        "    <span class=\"step1 span\">Name*</span>\n" +
        "    <input class=\"step1 input\" type=\"text\" id=\"name\">\n" +
        "    <span class=\"step1 span\">Surname</span>\n" +
        "    <input class=\"step1 input\" type=\"text\" id=\"surname\">\n" +
        "    <span class=\"step1 span\">Gender</span>\n" +
        "    <input class=\"step1 input\" type=\"text\" id=\"gender\" list=\"l3\">\n" +
        "    <datalist id=\"l3\">\n" +
        "        <option>0 - male</option>\n" +
        "        <option>1 - female</option>\n" +
        "    </datalist>\n" +
        "    <span class=\"step1 span\">Relationship status</span>\n" +
        "     <input class=\"step1 input\" type=\"text\" id=\"relation\" list=\"l4\">\n" +
        "    <datalist id=\"l4\">\n" +
        "        <option>0 - single</option>\n" +
        "        <option>1 - married</option>\n" +
        "        <option>2 - divorced</option>\n" +
        "    </datalist>\n" +
        "</div>\n" +
        "<div class=\"body__back\">\n" +
        "    <button class=\"back\" id=\"backButtonFrom2\">Back</button>\n" +
        "</div>\n" +
        "<div class=\"body__next\">\n" +
        "    <button class=\"next\" id=\"nextButtonFrom2\">Next</button>\n" +
        "</div>";

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
        "            <label for=\"checkbox\">Accept the <a href=\"http://mock.html\">registration</a> rules</label>\n" +
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
Model.prototype.getStep2 = function(){
    return this.stringStep2;
};
Model.prototype.getStep3 = function(){
    return this.stringStep3;
};
Model.prototype.getUsername = function(){
    return this.username;
};
Model.prototype.setUsername = function(username){
    return this.username = username;
};

Model.prototype.getPassword = function(){
    return this.password;
};
Model.prototype.setPassword = function(password){
    return this.password = password;
};

Model.prototype.getConfirm = function(){
    return this.confirm;
};
Model.prototype.setConfirm = function(confirm){
    return this.confirm = confirm;
};

Model.prototype.getPhone = function(){
    return this.phone;
};
Model.prototype.setPhone = function(phone){
    return this.phone = phone;
};

Model.prototype.getEmail = function(){
    return this.email;
};
Model.prototype.setEmail = function(email){
    return this.email = email;
};




