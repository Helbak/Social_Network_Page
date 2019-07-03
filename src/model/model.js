function Model() {
    this.username = "";
    this.password = "";
    this.confirm = "";
    this.phone = "";
    this.email = "";
    this.name = "";
    this.surname = "";
    this.gender = "";
    this.relation = "";
    this.experience = "";
    this.progrLang = "";
    this.rules;
    this.countStep2=1;
    this.countStep3=1;
    this.rulesBox=false;
    this.languages = ['Java', 'C', 'C++', 'C#', 'JavaScript', 'PHP', 'Ruby', 'Matlab', 'Python', 'R', 'Swift'];
    this.experiences = ['0 - 1 years', '1 - 2 years', '2 - 3 years', '3 - 4 years', '4 and more years'];
    this.area = ['usernameArea', 'passwordArea', 'confirmArea', 'phoneArea', 'emailArea', 'nameArea', 'surnameArea', 'genderArea', 'relationArea', 'progrLangArea', 'experienceArea'];
    this.usernameTipString = 'Enter a name of at least 1 and no more than 40 characters, in Latin letters';
    this.passwordTipString = 'Password must have from 6 to 30 characters, including one digit, one letter of the upper register, one letter of the lower register';
    this.confirmTipString = 'Passwords do not match';
    this.emailTipString = 'You entered an invalid email';
    this.phoneTipString1 = 'Enter the first sign "+"';
    this.phoneTipString2 = 'Enter the code of Ukraine or Israel or the United States';
    this.phoneTipString3 = 'The number of digits should be 12';
    this.phoneTipString4 = 'Enter only numbers';
    this.nameTipString = 'Enter a name of at least 2 and no more than 40 characters, in Latin letters, first spell is capital ';
    this.surnameTipString = 'Enter a name of at least 2 and no more than 40 characters, in Latin letters, first spell is capital';
    this.genderTipString = '';
    this.relationTipString = '';
    this.progrLangTipString = '';
    this.experienceTipString = '';
    this.checkBoxTipString = 'Do you agree?';


    this.stringStep1 = "<div class=\"body__steps\">Step 1 of 3</div>\n" +
        "        <div class=\"body__title\">Create an Account</div>\n" +
        "        <div class=\"body__step1\">\n" +
        "            <span  class=\"step1 span\" id = \"usernameArea\">Username*</span>\n" +
        "            <input class=\"step1 input\" type=\"text\" id = \"username\">\n" +
        "            <span  class=\"step1 span\" id = \"passwordArea\">Password*</span>\n" +
        "            <input class=\"step1 input\" type=\"password\" id = \"password\">\n" +
        "            <span  class=\"step1 span\" id = \"confirmArea\">Confirm*</span>\n" +
        "            <input class=\"step1 input\" type=\"password\" id = \"confirm\">\n" +
        "            <span  class=\"step1 span\" id = \"emailArea\">E-mail*</span>\n" +
        "            <input class=\"step1 input\" type=\"text\" id = \"email\">\n" +
        "            <span  class=\"step1 span\" id = \"phoneArea\">Phone number*</span>\n" +
        "            <input class=\"step1 input\" type=\"tel\" id = \"phone\">\n" +
        "        </div>\n" +
        "        <div class=\"body__next\">\n" +
        "            <button class=\"next\" id=\"nextButton\">Next</button>\n" +
        "        </div>";

    this.stringStep2 = "<div class=\"body__steps\">Step 2 of 3</div>\n" +
        "<div class=\"body__title\">Create an Account</div>\n" +
        "<div class=\"body__step1\">\n" +
        "    <span class=\"step1 span\" id='nameArea'>Name*</span>\n" +
        "    <input class=\"step1 input\" type=\"text\" id=\"name\">\n" +
        "    <span class=\"step1 span\" id='surnameArea'>Surname</span>\n" +
        "    <input class=\"step1 input\" type=\"text\" id=\"surname\">\n" +
        "    <span class=\"step1 span\" id='genderArea' >Gender</span>\n" +
        "    <input class=\"step1 input\" type=\"text\" id=\"gender\" style=\"font-family: 'Times New Roman'\" list=\"l3\">\n" +
        "    <datalist id=\"l3\">\n" +
        "        \n" +
        "        <option>female</option>\n" +
        "        <option>male</option>\n" +
        "    </datalist>\n" +
        "\n" +
        "\n" +
        "    <span class=\"step1 span\" id='relationArea' >Relationship status</span>\n" +
        "     <input class=\"step1 input\" type=\"text\" id=\"relation\" style=\"font-family: 'Times New Roman'\" list=\"l4\">\n" +
        "    <datalist id=\"l4\">\n" +
        "        <option>divorced</option>\n" +
        "        \n" +
        "        <option>married</option>\n" +
        "        <option>single</option>\n" +
        "    </datalist>\n" +
        "\n" +
        "\n" +
        "\n" +
        "</div>\n" +
        "<div class=\"body__back\">\n" +
        "    <button class=\"back\" id=\"backButtonFrom2\">Back</button>\n" +
        "</div>\n" +
        "<div class=\"body__next\">\n" +
        "    <button class=\"next\" id=\"nextButtonFrom2\">Next</button>\n" +
        "</div>\n";

    this.stringStep3 = "<div class=\"body__steps\">Step 3 of 3</div>\n" +
        "    <div class=\"body__title\">Create an Account</div>\n" +
        "    <div class=\"body__step1\">\n" +
        "        <span  class=\"step1 span\" id='progrLangArea'>Programming languages*</span>\n" +
        "        <input class=\"step1 input\" type=\"text\" id=\"progrLang\" style=\"font-family: 'Times New Roman'\" list=\"l1\">\n" +
        "        <datalist id=\"l1\">\n" +
        "            <option>C</option>\n" +
        "            <option >C++</option>\n" +
        "            <option>C#</option>\n" +
        "            <option>Java</option>\n" +
        "            <option>JavaScript</option>\n" +
        "            <option>Matlab</option>\n" +
        "            <option>PHP</option>\n" +
        "            <option>Ruby</option>\n" +
        "            <option>Python</option>\n" +
        "            <option>R</option>\n" +
        "            <option>Swift</option>\n" +
        "        </datalist>\n" +
        "        <span  class=\"step1 span\" id='experienceArea'>Work experience*</span>\n" +
        "        <input class=\"step1 input\" type=\"text\" id=\"experience\" style=\"font-family: 'Times New Roman'\" list=\"l2\">\n" +
        "        <datalist id=\"l2\">\n" +
        "           <option>0 - 1 years</option>\n" +
        "            <option>1 - 2 years</option>\n" +
        "            <option>2 - 3 years</option>\n" +
        "            <option>3 - 4 years</option>\n" +
        "            <option>4 and more years</option>\n" +
        "        </datalist>\n" +
        "        <div class=\"step1 checkbox\">\n" +
        "            <input type=\"checkbox\" id = \"checkboxRules\" value=\"true\">\n" +
        "            <label for=\"checkbox\">Accept the <a href=\"#\" id=\"btnRules\">registration</a> rules</label>\n" +
        "\n" +
        "        </div>\n" +
        "\n" +
        "\n" +
        "\n" +
        "    <div class=\"body__back\">\n" +
        "        <button class=\"back\" id=\"backButtonFromStep3\">Back</button>\n" +
        "    </div>\n" +
        "\n" +
        "        <div class=\"body__register\">\n" +
        "            <form action=\"successedRegistr.html\">\n" +
        "                       <button class=\"register\" id=\"registerButton\">Register</button>\n" +
        "            </form>\n" +
        "        </div>\n" +
        "        </div>\n" +
        "    </div>";

    this.stringResult = "<div class=\"body__title\">Successful registration!</div>\n";
    this.rules = "<div class=\"body__title\">Rules</div>\n" +
        "<div class=\"body__step1\">\n" +
        "\n" +
        "</div>\n" +
        "<div class=\"body__back\">\n" +
        "    <button class=\"back\" id=\"backButtonFromRules\">Back</button>\n" +
        "</div>";


};

Model.prototype.getResult = function () {
    return this.stringResult;
};
Model.prototype.getStep1 = function () {
    return this.stringStep1;
};
Model.prototype.getStep2 = function () {
    return this.stringStep2;
};
Model.prototype.getStep3 = function () {
    return this.stringStep3;
};
Model.prototype.getRules = function () {
    return this.rules;
};
Model.prototype.getUsername = function () {
    return this.username;
};
Model.prototype.setUsername = function (username) {
    return this.username = username;
};

Model.prototype.getPassword = function () {
    return this.password;
};
Model.prototype.setPassword = function (password) {
    return this.password = password;
};

Model.prototype.getConfirm = function () {
    return this.confirm;
};
Model.prototype.setConfirm = function (confirm) {
    return this.confirm = confirm;
};

Model.prototype.getPhone = function () {
    return this.phone;
};
Model.prototype.setPhone = function (phone) {
    return this.phone = phone;
};

Model.prototype.getEmail = function () {
    return this.email;
};
Model.prototype.setEmail = function (email) {
    return this.email = email;
};

Model.prototype.getName = function () {
    return this.name;
};
Model.prototype.setName = function (name) {
    return this.name = name;
};

Model.prototype.getSurname = function () {
    return this.surname;
};
Model.prototype.setSurname = function (surname) {
    return this.surname = surname;
};

Model.prototype.getGender = function () {
    return this.gender;
};
Model.prototype.setGender = function (gender) {
    return this.gender = gender;
};

Model.prototype.getRelation = function () {
    return this.relation;
};
Model.prototype.setRelation = function (relation) {
    return this.relation = relation;
};
Model.prototype.getProgrLang = function () {
    return this.progrLang;
};
Model.prototype.setProgrLang = function (progrLang) {
    return this.progrLang = progrLang;
};
Model.prototype.getExperience = function () {
    return this.experience;
};
Model.prototype.setExperience = function (experience) {
    return this.experience = experience;
};
Model.prototype.getArea = function () {
    return this.area;
};
Model.prototype.setRulesBox = function (rulesBox) {
    return this.rulesBox = rulesBox;
};
Model.prototype.getArea = function () {
    return this.rules;
};
Model.prototype.setCountStep2 = function (countStep2) {
    return this.countStep2 = countStep2;
};
Model.prototype.setCountStep3 = function (countStep3) {
    return this.countStep3 = countStep3;
};



